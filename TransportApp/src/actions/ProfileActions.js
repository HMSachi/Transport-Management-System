export const GET_PROFILE_REQUEST = 'GET_PROFILE_REQUEST';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAILURE = 'GET_PROFILE_FAILURE';

export const GetProfileAction = (userId) => {
  return async (dispatch) => {
    dispatch({ type: GET_PROFILE_REQUEST });
    try {
      // Mock fetching profile data
      setTimeout(() => {
        dispatch({ 
          type: GET_PROFILE_SUCCESS, 
          payload: { 
            name: 'John Doe', 
            email: 'johndoe@example.com', 
            phone: '+91 9876543210', 
            role: 'Transport Manager', 
            joined: 'January 2024' 
          } 
        });
      }, 500);
    } catch (error) {
      dispatch({ type: GET_PROFILE_FAILURE, payload: error.message });
    }
  };
};
