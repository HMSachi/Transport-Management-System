import { createSlice } from '@reduxjs/toolkit';

const staticBookings = [
  { id: 'B001', route: 'City A → City B', date: '2024-06-20', seat: '12A', status: 'Confirmed', amount: 250 },
  { id: 'B002', route: 'City B → City C', date: '2024-06-22', seat: '5B',  status: 'Pending',   amount: 180 },
  { id: 'B003', route: 'City C → City A', date: '2024-06-25', seat: '8C',  status: 'Completed', amount: 310 },
];

const initialState = {
  bookings: staticBookings,
  selectedRoute: null,
  selectedSeat: null,
  bookingStatus: null,
  isLoading: false,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    selectRoute: (state, action) => { state.selectedRoute = action.payload; },
    selectSeat: (state, action) => { state.selectedSeat = action.payload; },
    confirmBooking: (state, action) => {
      const newBooking = { id: `B00${state.bookings.length + 1}`, route: state.selectedRoute, date: action.payload.date, seat: state.selectedSeat, status: 'Confirmed', amount: action.payload.amount };
      state.bookings.unshift(newBooking);
      state.bookingStatus = 'booked';
      state.selectedRoute = null;
      state.selectedSeat = null;
    },
    cancelBooking: (state, action) => {
      const booking = state.bookings.find((b) => b.id === action.payload);
      if (booking) booking.status = 'Cancelled';
      state.bookingStatus = 'cancelled';
    },
    resetBookingStatus: (state) => { state.bookingStatus = null; },
  },
});

export const { selectRoute, selectSeat, confirmBooking, cancelBooking, resetBookingStatus } = bookingSlice.actions;
export default bookingSlice.reducer;
