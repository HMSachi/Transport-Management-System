import { createSlice } from '@reduxjs/toolkit';

const staticTrips = [
  { id: 'T001', route: 'City A → City B', driver: 'Ravi Kumar',  bus: 'KA-01-1234', departure: '08:00 AM', status: 'Ongoing',   passengers: 24 },
  { id: 'T002', route: 'City B → City C', driver: 'Suresh Babu', bus: 'KA-02-5678', departure: '10:00 AM', status: 'Scheduled', passengers: 18 },
  { id: 'T003', route: 'City C → City A', driver: 'Mahesh R',    bus: 'KA-03-9012', departure: '02:00 PM', status: 'Completed', passengers: 30 },
];

const initialState = {
  trips: staticTrips,
  activeTrip: staticTrips[0],
  tripStatus: 'Ongoing',   // 'Idle' | 'Ongoing' | 'Completed' | 'Scheduled'
  isLoading: false,
};

const tripSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    setActiveTrip: (state, action) => {
      state.activeTrip = action.payload;
      state.tripStatus = action.payload.status;
    },
    updateTripStatus: (state, action) => {
      state.tripStatus = action.payload;
      if (state.activeTrip) state.activeTrip.status = action.payload;
    },
    startTrip: (state) => {
      state.tripStatus = 'Ongoing';
      if (state.activeTrip) state.activeTrip.status = 'Ongoing';
    },
    endTrip: (state) => {
      state.tripStatus = 'Completed';
      if (state.activeTrip) state.activeTrip.status = 'Completed';
    },
    addTrip: (state, action) => {
      state.trips.unshift(action.payload);
    },
  },
});

export const {
  setActiveTrip,
  updateTripStatus,
  startTrip,
  endTrip,
  addTrip,
} = tripSlice.actions;

export default tripSlice.reducer;
