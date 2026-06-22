import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT,
} from '../constants/AuthConstants';
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
