import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../screens/common/SplashScreen';
import LoginScreen from '../screens/common/LoginScreen';
import RegisterScreen from '../screens/common/RegisterScreen';
import ProfileScreen from '../screens/common/ProfileScreen';
import CustomerDashboardScreen from '../screens/customer/CustomerDashboardScreen';
import RoutesScreen from '../screens/customer/RoutesScreen';
import BookingScreen from '../screens/customer/BookingScreen';
import MyTripsScreen from '../screens/customer/MyTripsScreen';
import LiveTrackingScreen from '../screens/customer/LiveTrackingScreen';
import AttendanceScreen from '../screens/customer/AttendanceScreen';
import PaymentsScreen from '../screens/customer/PaymentsScreen';
import NotificationsScreen from '../screens/customer/NotificationsScreen';
import FeedbackScreen from '../screens/customer/FeedbackScreen';
import SOSScreen from '../screens/customer/SOSScreen';
import DriverDashboardScreen from '../screens/driver/DriverDashboardScreen';
import PassengerRequestsScreen from '../screens/driver/PassengerRequestsScreen';
import TripManagementScreen from '../screens/driver/TripManagementScreen';
import PassengerLocationsScreen from '../screens/driver/PassengerLocationsScreen';
import BusAvailabilityScreen from '../screens/driver/BusAvailabilityScreen';
import EmergencyBroadcastScreen from '../screens/driver/EmergencyBroadcastScreen';
import AdminDashboardScreen from '../screens/admin/AdminDashboardScreen';
import BusManagementScreen from '../screens/admin/BusManagementScreen';
import DriverManagementScreen from '../screens/admin/DriverManagementScreen';
import PassengerManagementScreen from '../screens/admin/PassengerManagementScreen';
import LiveMonitoringScreen from '../screens/admin/LiveMonitoringScreen';
import BroadcastScreen from '../screens/admin/BroadcastScreen';
import ActivityLogsScreen from '../screens/admin/ActivityLogsScreen';
import ComplaintsScreen from '../screens/admin/ComplaintsScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="CustomerDashboard" component={CustomerDashboardScreen} />
      <Stack.Screen name="Routes" component={RoutesScreen} />
      <Stack.Screen name="Booking" component={BookingScreen} />
      <Stack.Screen name="MyTrips" component={MyTripsScreen} />
      <Stack.Screen name="LiveTracking" component={LiveTrackingScreen} />
      <Stack.Screen name="Attendance" component={AttendanceScreen} />
      <Stack.Screen name="Payments" component={PaymentsScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Feedback" component={FeedbackScreen} />
      <Stack.Screen name="SOS" component={SOSScreen} />
      <Stack.Screen name="DriverDashboard" component={DriverDashboardScreen} />
      <Stack.Screen name="PassengerRequests" component={PassengerRequestsScreen} />
      <Stack.Screen name="TripManagement" component={TripManagementScreen} />
      <Stack.Screen name="PassengerLocations" component={PassengerLocationsScreen} />
      <Stack.Screen name="BusAvailability" component={BusAvailabilityScreen} />
      <Stack.Screen name="EmergencyBroadcast" component={EmergencyBroadcastScreen} />
      <Stack.Screen name="AdminDashboard" component={AdminDashboardScreen} />
      <Stack.Screen name="BusManagement" component={BusManagementScreen} />
      <Stack.Screen name="DriverManagement" component={DriverManagementScreen} />
      <Stack.Screen name="PassengerManagement" component={PassengerManagementScreen} />
      <Stack.Screen name="LiveMonitoring" component={LiveMonitoringScreen} />
      <Stack.Screen name="Broadcast" component={BroadcastScreen} />
      <Stack.Screen name="ActivityLogs" component={ActivityLogsScreen} />
      <Stack.Screen name="Complaints" component={ComplaintsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
