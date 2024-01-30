import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  GET_PROFILE_REUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  LOGOUT,
  UPDATE_USER_REQUEST,
  UPDATE_USER_FAILURE,
  UPDATE_USER_SUCCESS,
  FIND_USER_BY_ID_FILURE,
  FIND_USER_BY_ID_REQUEST,
  FIND_USER_BY_ID_SUCCESS,
  FOLLOW_USER_FAILURE,
  FOLLOW_USER_SUCCESS,
  FOLLOW_USER_REQUEST,
  SEARCH_USER_SUCCESS,
  SEARCH_USER_FAILURE,
  SEARCH_USER_REQUEST,
  REQUEST_RESET_PASSWORD_REQUEST,
  REQUEST_RESET_PASSWORD_SUCCESS,
  REQUEST_RESET_PASSWORD_FAILURE,
} from "./auth.actionType";

const initialState = {
  user: null,
  loading: false,
  error: null,
  jwt: null,
  updateUser: false,
  searchResult: [],
  findUser: null,
  resetPasswordLink: null,
  reqUser: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
    case GET_PROFILE_REUEST:
    case FIND_USER_BY_ID_REQUEST:
    case FOLLOW_USER_REQUEST:
    case REQUEST_RESET_PASSWORD_REQUEST:
      return { ...state, loading: true, error: null };

    case SEARCH_USER_REQUEST:
      return { ...state, searchResult: [], loading: true, error: null };

    case UPDATE_USER_REQUEST:
      return { ...state, loading: true, error: null, updateUser: false };

    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        reqUser: action.payload,
        user: action.payload,
      };

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        findUser: action.payload,
        updateUser: true,
      };

    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return { ...state, loading: false, jwt: action.payload, error: null };

    case FIND_USER_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        findUser: action.payload,
        error: null,
      };

    case SEARCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        searchResult: action.payload,
        error: null,
      };

    case FOLLOW_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        findUser: action.payload,
        error: null,
      };

    case REQUEST_RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        resetPasswordLink: action.payload.message,
        error: null,
      };

    case LOGIN_FAILURE:
    case REQUEST_RESET_PASSWORD_FAILURE:
    case REGISTER_FAILURE:
    case GET_PROFILE_FAILURE:
    case UPDATE_USER_FAILURE:
    case FIND_USER_BY_ID_FILURE:
    case FOLLOW_USER_FAILURE:
    case SEARCH_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
};

export default authReducer;
