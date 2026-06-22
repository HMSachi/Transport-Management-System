import {
  FETCH_DASHBOARD_REQUEST,
  FETCH_DASHBOARD_SUCCESS,
  FETCH_DASHBOARD_FAILURE,
} from '../constants/DashboardConstants';

const initialState = {
  isLoading: false,
  data: null,
  title: '',
  error: null,
};

const DashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DASHBOARD_REQUEST:
      return { ...state, isLoading: true, error: null };
    case FETCH_DASHBOARD_SUCCESS:
      return { 
        ...state, 
        isLoading: false, 
        data: action.payload.data, 
        title: action.payload.title, 
        error: null 
      };
    case FETCH_DASHBOARD_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};


export default DashboardReducer;
