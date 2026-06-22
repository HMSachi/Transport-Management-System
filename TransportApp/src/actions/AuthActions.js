export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const LOGOUT = 'LOGOUT';
import AuthService from '../services/AuthService';

// Login Action
export const LoginAction = (email, password) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const response = await AuthService.Login(email, password);
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
      return response.data; // Return data to allow navigation in component
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE, payload: error.message });
      throw error;
    }
  };
};

// Register Action
export const RegisterAction = (name, email, password, role) => {
  return async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
      const response = await AuthService.Register(name, email, password, role);
      dispatch({ type: REGISTER_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: REGISTER_FAILURE, payload: error.message });
    }
  };
};

// Logout Action
export const LogoutAction = () => {
  return async (dispatch) => {
    dispatch({ type: LOGOUT });
  };
};
