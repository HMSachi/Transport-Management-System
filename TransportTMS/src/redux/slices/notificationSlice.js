import { createSlice } from '@reduxjs/toolkit';

const staticNotifications = [
  { id: 'N001', title: 'Booking Confirmed',  message: 'Your booking B001 is confirmed.',         time: '10 min ago', read: false, type: 'booking' },
  { id: 'N002', title: 'Trip Starting Soon', message: 'Your trip from City A starts at 8:00 AM.', time: '1 hr ago',  read: false, type: 'trip'    },
  { id: 'N003', title: 'Payment Received',   message: 'Payment of ₹250 received for B001.',       time: '2 hrs ago', read: true,  type: 'payment' },
  { id: 'N004', title: 'Route Update',       message: 'Route City B→C has a 15 min delay.',       time: '3 hrs ago', read: true,  type: 'alert'   },
  { id: 'N005', title: 'Driver Assigned',    message: 'Ravi Kumar assigned to your trip.',        time: '5 hrs ago', read: true,  type: 'trip'    },
];

const initialState = {
  notifications: staticNotifications,
  unreadCount: staticNotifications.filter((n) => !n.read).length,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    markAsRead: (state, action) => { const n = state.notifications.find((n) => n.id === action.payload); if (n && !n.read) { n.read = true; state.unreadCount = Math.max(0, state.unreadCount - 1); } },
    markAllAsRead: (state) => { state.notifications.forEach((n) => (n.read = true)); state.unreadCount = 0; },
    addNotification: (state, action) => { state.notifications.unshift(action.payload); state.unreadCount += 1; },
    clearAllNotifications: (state) => { state.notifications = []; state.unreadCount = 0; },
  },
});

export const { markAsRead, markAllAsRead, addNotification, clearAllNotifications } = notificationSlice.actions;
export default notificationSlice.reducer;
