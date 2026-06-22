import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
} from '../constants/ProfileConstants';


const initialState = {
  isLoading: false,
  profile: null,
  error: null,
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_REQUEST:
      return { ...state, isLoading: true, error: null };
    case GET_PROFILE_SUCCESS:
      return { ...state, isLoading: false, profile: action.payload, error: null };
    case GET_PROFILE_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default ProfileReducer;
