import DashboardService from '../services/DashboardService';
import {
  FETCH_DASHBOARD_REQUEST,
  FETCH_DASHBOARD_SUCCESS,
  FETCH_DASHBOARD_FAILURE,
} from '../constants/DashboardConstants';

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
      dispatch({ 
        type: FETCH_DASHBOARD_SUCCESS, 
        payload: { 
          data, 
          title: role === 'admin' ? 'Admin Dashboard' : role === 'driver' ? 'Driver Dashboard' : 'Customer Dashboard' 
        } 
      });
    } catch (error) {
      dispatch({ type: FETCH_DASHBOARD_FAILURE, payload: error.message });
    }
  };
};

