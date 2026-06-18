import {
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  PROFILE_FAILURE,
} from '../constants/ProfileConstants';

const initialState = {
  isLoading: false,
  profile: null,
  error: null,
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {

    case PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        profile: action.payload,
        error: null,
      };
    case PROFILE_FAILURE:
      return {
        ...state,
        isLoading: false,
        profile: null,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default ProfileReducer;
