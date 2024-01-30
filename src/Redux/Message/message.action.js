// actions.js
import { API_BASE_URL, api } from '../../config/api';
import * as actionTypes from './message.actionType.js';



export const createMessage = (data) => {
    
  return async (dispatch) => {
    console.log("body ",data)
    dispatch({type:actionTypes.CREATE_MESSAGE_REQUST})
    try {
      const response = await api.post(`/api/messages`, data.message);

      console.log("created message ---- ",response.data)

      data.sendToServer(response.data)
      
      dispatch({
        type: actionTypes.CREATE_MESSAGE_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
        console.log("catch error ",error)
      dispatch({type:actionTypes.CREATE_MESSAGE_FAILURE,error:error})
    }
  };
};

export const deleteMessage = (chatId, messageId) => {
  return async (dispatch) => {
    dispatch(actionTypes.DELETE_MESSAGE_REQUEST)
    try {
      await api.delete(`/api/messages/${messageId}`);
      dispatch({
        type: actionTypes.DELETE_MESSAGE_SUCCESS,
        payload: { chatId, messageId },
      });
    } catch (error) {
      dispatch({type:actionTypes.DELETE_MESSAGE_FAILURE,error:error})
    }
  };
};

export const createChat = (chat) => {

  return async (dispatch) => {
    dispatch({type:actionTypes.CREATE_CHAT_REQUEST})
    console.log("bodya ",chat)
    try {
      const response = await api.post(`/api/chats/single`, chat);
      dispatch({
        type: actionTypes.CREATE_CHAT_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.log("error ",error)
      dispatch({type:actionTypes.CREATE_CHAT_FAILURE,error})
    }
  };
};

export const getAllChats = () => {
  return async (dispatch) => {
    dispatch({type:actionTypes.GET_ALL_CHATS_REQUEST})
    try {
      const response = await api.get(`/api/chats/user`);

      console.log("get all chats ",response.data)
      dispatch({
        type: actionTypes.GET_ALL_CHATS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({type:actionTypes.GET_ALL_CHATS_FAILURE,error})
    }
  };
};


