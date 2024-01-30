import { CREATE_REELS_FAILUER, CREATE_REELS_REQUEST, CREATE_REELS_SUCCESS, GET_ALL_REELS_FAILUER, GET_ALL_REELS_REQUEST, GET_ALL_REELS_SUCCESS, GET_USERS_REEL_SUCCESS, LIKE_REELS_FAILUER, LIKE_REELS_REQUEST, LIKE_REELS_SUCCESS, SAVE_REELS_SUCCESS } from "./reels.actionType";
import { getUsersReels } from "./reels.acton";

  
  const initialState = {
    reel: null,
    loading: false,
    error: null,
    reels: [],
    like: null,
  };
  
  export const reelsReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_REELS_REQUEST:
      case GET_ALL_REELS_REQUEST:
      case LIKE_REELS_REQUEST:
        return { ...state, error: null, loading: true };
  
      case CREATE_REELS_SUCCESS:
        return {
          ...state,
          reel: action.payload,
          reels: [action.payload, ...state.reels],
          loading: true,
          error: null,
        };
      case GET_ALL_REELS_SUCCESS:
      case GET_USERS_REEL_SUCCESS:
        return { ...state, reels: action.payload, loading: true, error: null };
      case LIKE_REELS_SUCCESS:
      case SAVE_REELS_SUCCESS:
        return {
          ...state,
          like: action.payload,
          reels: state.reels.map((item) =>
            item.id === action.payload.id ? action.payload : item
          ),
          loading: true,
          error: null,
        };
  
      case CREATE_REELS_FAILUER:
      case GET_ALL_REELS_FAILUER:
      case LIKE_REELS_FAILUER:
        return { ...state, error: action.payload, loading: false };
  
      default:
        return state;
    }
  };
  