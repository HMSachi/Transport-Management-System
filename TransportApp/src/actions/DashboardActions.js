import DashboardService from '../services/DashboardService';

export const FETCH_DASHBOARD_REQUEST = 'FETCH_DASHBOARD_REQUEST';
export const FETCH_DASHBOARD_SUCCESS = 'FETCH_DASHBOARD_SUCCESS';
export const FETCH_DASHBOARD_FAILURE = 'FETCH_DASHBOARD_FAILURE';

export const fetchDashboardData = (role) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_DASHBOARD_REQUEST });
    try {
      let data;
      if (role === 'admin') {
        data = await DashboardService.fetchAdminData();
      } else if (role === 'driver') {
        data = await DashboardService.fetchDriverData();
      } else {
        data = await DashboardService.fetchCustomerData();
      }
      dispatch({ type: FETCH_DASHBOARD_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_DASHBOARD_FAILURE, payload: error.message });
    }
  };
};
