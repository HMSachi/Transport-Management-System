import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  role: null,           // 'customer' | 'driver' | 'admin'
  user: null,           // { id, name, email, phone }
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.role = action.payload.role;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    registerSuccess: (state, action) => {
      state.user = action.payload;
    },
    selectRole: (state, action) => {
      state.role = action.payload;   // 'customer' | 'driver' | 'admin'
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.role = null;
      state.error = null;
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  registerSuccess,
  selectRole,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
