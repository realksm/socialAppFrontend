import * as actionTypes from "./message.actionType.js";

const initialState = {
  messages: [],
  chats: [],
  loading: false,
  error: null,
  message:null
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_MESSAGE_SUCCESS:
      return { ...state, message: action.payload,messages:[...state.messages,action.payload] };

    case actionTypes.CREATE_CHAT_SUCCESS:
      return { ...state, chats: [action.payload, ...state.chats] };

    case actionTypes.GET_ALL_CHATS_SUCCESS:
      return { ...state, chats: action.payload };

    default:
      return state;
  }
};
