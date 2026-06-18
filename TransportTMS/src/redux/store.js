import { configureStore } from '@reduxjs/toolkit';
import authReducer         from './slices/authSlice';
import bookingReducer      from './slices/bookingSlice';
import tripReducer         from './slices/tripSlice';
import notificationReducer from './slices/notificationSlice';

const store = configureStore({
  reducer: {
    auth:         authReducer,
    booking:      bookingReducer,
    trip:         tripReducer,
    notification: notificationReducer,
  },
});

export default store;
