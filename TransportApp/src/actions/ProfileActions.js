import {
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  PROFILE_FAILURE,
} from '../constants/ProfileConstants';
import ProfileService from '../services/ProfileService';

// Get Profile Action
export const GetProfileAction = (userId) => {
  return async (dispatch) => {
    dispatch({ type: PROFILE_REQUEST });
    try {
      const response = await ProfileService.GetProfile(userId);
      dispatch({ type: PROFILE_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: PROFILE_FAILURE, payload: error.message });
    }
  };
};
