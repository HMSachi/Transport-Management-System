import { FETCH_DASHBOARD_REQUEST, FETCH_DASHBOARD_SUCCESS, FETCH_DASHBOARD_FAILURE } from '../actions/DashboardActions';

const initialState = {
  isLoading: false,
  data: null,
  error: null,
};

const DashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DASHBOARD_REQUEST:
      return { ...state, isLoading: true, error: null };
    case FETCH_DASHBOARD_SUCCESS:
      return { ...state, isLoading: false, data: action.payload, error: null };
    case FETCH_DASHBOARD_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default DashboardReducer;
