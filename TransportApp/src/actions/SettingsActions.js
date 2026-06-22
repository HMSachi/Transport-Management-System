import SettingsService from '../services/SettingsService';
import {
  FETCH_SETTINGS_REQUEST,
  FETCH_SETTINGS_SUCCESS,
  FETCH_SETTINGS_FAILURE,
} from '../constants/SettingsConstants';


export const fetchSettingsData = (type) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_SETTINGS_REQUEST });
    try {
      let data;
      if (type === 'security') {
        data = await SettingsService.fetchSecurityData();
      } else if (type === 'payment') {
        data = await SettingsService.fetchPaymentData();
      } else {
        data = await SettingsService.fetchSettingsData();
      }
      dispatch({ type: FETCH_SETTINGS_SUCCESS, payload: { type, data } });
    } catch (error) {
      dispatch({ type: FETCH_SETTINGS_FAILURE, payload: error.message });
    }
  };
};
