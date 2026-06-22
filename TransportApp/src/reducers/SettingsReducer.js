import {
  FETCH_SETTINGS_REQUEST,
  FETCH_SETTINGS_SUCCESS,
  FETCH_SETTINGS_FAILURE,
} from '../constants/SettingsConstants';


const initialState = {
  isLoading: false,
  settingsData: null,
  securityData: null,
  paymentData: null,
  error: null,
};

const SettingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SETTINGS_REQUEST:
      return { ...state, isLoading: true, error: null };
    case FETCH_SETTINGS_SUCCESS:
      const { type, data } = action.payload;
      return { 
        ...state, 
        isLoading: false, 
        settingsData: type === 'settings' ? data : state.settingsData,
        securityData: type === 'security' ? data : state.securityData,
        paymentData: type === 'payment' ? data : state.paymentData,
        error: null 
      };
    case FETCH_SETTINGS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default SettingsReducer;
