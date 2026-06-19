import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT,
} from '../constants/AuthConstants';

const initialState = {
  isLoading: false,
  user: null,
  token: null,
  error: null,
  isRegistered: false,
  role: 'customer',
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {

    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
        role: action.payload.user?.role || 'customer',
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        user: null,
        error: action.payload,
      };

    case REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
        isRegistered: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isRegistered: true,
        user: action.payload.user,
        token: action.payload.token,
        role: action.payload.user?.role || 'customer',
        error: null,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isRegistered: false,
        error: action.payload,
      };

    case LOGOUT:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default AuthReducer;
