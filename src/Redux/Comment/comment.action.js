// actions.js
import axios from 'axios';
import {
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE,
  LIKE_COMMENT_REQUEST,
  LIKE_COMMENT_SUCCESS,
  LIKE_COMMENT_FAILURE,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
} from './comment.actionType';
import { api } from '../../config/api';

const createCommentRequest = () => ({
  type: CREATE_COMMENT_REQUEST,
});

const createCommentSuccess = (comment) => ({
  type: CREATE_COMMENT_SUCCESS,
  payload: comment,
});

const createCommentFailure = (error) => ({
  type: CREATE_COMMENT_FAILURE,
  payload: error,
});

export const createComment = (reqData) => async (dispatch) => {
  dispatch(createCommentRequest());

  try {
    const response = await api.post(`/api/comments/${reqData.postId}`, reqData.data);
    console.log("created comment ---- ",response.data)
    dispatch(createCommentSuccess(response.data));
  } catch (error) {
    dispatch(createCommentFailure(error));
  }
};

export const likeComment = (commentId) => async (dispatch) => {
    dispatch({type:CREATE_COMMENT_REQUEST});
  
    try {
      const {data} = await api.post(`/api/comments/${commentId}`);
      dispatch({type:CREATE_COMMENT_SUCCESS, payload:data});
    } catch (error) {
      dispatch({type:CREATE_COMMENT_FAILURE,payload:error});
    }
  };

// Similarly, create action creators for LIKE_COMMENT and DELETE_COMMENT
