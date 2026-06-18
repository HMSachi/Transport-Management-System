import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';

import CustomerDashboard    from '../screens/customer/CustomerDashboard';
import ProfileScreen        from '../screens/customer/ProfileScreen';
import RoutesScreen         from '../screens/customer/RoutesScreen';
import BookingScreen        from '../screens/customer/BookingScreen';
import MyTripsScreen        from '../screens/customer/MyTripsScreen';
import LiveTrackingScreen   from '../screens/customer/LiveTrackingScreen';
import AttendanceScreen     from '../screens/customer/AttendanceScreen';
import PaymentScreen        from '../screens/customer/PaymentScreen';
import PaymentHistoryScreen from '../screens/customer/PaymentHistoryScreen';
import NotificationsScreen  from '../screens/customer/NotificationsScreen';
import FeedbackScreen       from '../screens/customer/FeedbackScreen';
import SOSScreen            from '../screens/customer/SOSScreen';

const Tab   = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Home stack — Dashboard + all nested customer screens
const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="CustomerDashboard"    component={CustomerDashboard}    />
    <Stack.Screen name="LiveTracking"         component={LiveTrackingScreen}   />
    <Stack.Screen name="Attendance"           component={AttendanceScreen}     />
    <Stack.Screen name="Notifications"        component={NotificationsScreen}  />
    <Stack.Screen name="Feedback"             component={FeedbackScreen}       />
    <Stack.Screen name="SOS"                  component={SOSScreen}            />
    <Stack.Screen name="Payment"              component={PaymentScreen}        />
    <Stack.Screen name="PaymentHistory"       component={PaymentHistoryScreen} />
    <Stack.Screen name="Routes"               component={RoutesScreen}         />
  </Stack.Navigator>
);

const CustomerTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: '#2563EB',
      tabBarInactiveTintColor: '#9CA3AF',
      tabBarStyle: { paddingBottom: 6, height: 60 },
      tabBarIcon: ({ focused, color }) => {
        const icons = { Home: '🏠', Booking: '🎫', Trips: '🗺️', Profile: '👤' };
        return <Text style={{ fontSize: focused ? 22 : 18 }}>{icons[route.name]}</Text>;
      },
    })}
  >
    <Tab.Screen name="Home"    component={HomeStack}    />
    <Tab.Screen name="Booking" component={BookingScreen} />
    <Tab.Screen name="Trips"   component={MyTripsScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default CustomerTabNavigator;
