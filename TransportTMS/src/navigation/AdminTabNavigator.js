import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import AdminDashboard from '../screens/admin/AdminDashboard';
import BusRegistrationScreen from '../screens/admin/BusRegistrationScreen';
import DriverRegistrationScreen from '../screens/admin/DriverRegistrationScreen';
import PassengerManagementScreen from '../screens/admin/PassengerManagementScreen';
import LiveMonitoringScreen from '../screens/admin/LiveMonitoringScreen';
import BroadcastScreen from '../screens/admin/BroadcastScreen';
import ActivityLogScreen from '../screens/admin/ActivityLogScreen';
import ComplaintsScreen from '../screens/admin/ComplaintsScreen';
import DriverModeScreen from '../screens/admin/DriverModeScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AdminHomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
    <Stack.Screen name="PassengerManagement" component={PassengerManagementScreen} />
    <Stack.Screen name="Broadcast" component={BroadcastScreen} />
    <Stack.Screen name="ActivityLog" component={ActivityLogScreen} />
    <Stack.Screen name="Complaints" component={ComplaintsScreen} />
    <Stack.Screen name="DriverMode" component={DriverModeScreen} />
  </Stack.Navigator>
);

const AdminTabNavigator = () => (
  <Tab.Navigator screenOptions={({ route }) => ({ headerShown: false, tabBarActiveTintColor: '#7C3AED', tabBarInactiveTintColor: '#9CA3AF', tabBarStyle: { paddingBottom: 6, height: 60 }, tabBarIcon: ({ focused }) => { const icons = { Home: '🏠', Buses: '🚌', Drivers: '🧑✈️', Monitor: '📡' }; return <Text style={{ fontSize: focused ? 22 : 18 }}>{icons[route.name]}</Text>; } })}>
    <Tab.Screen name="Home" component={AdminHomeStack} />
    <Tab.Screen name="Buses" component={BusRegistrationScreen} />
    <Tab.Screen name="Drivers" component={DriverRegistrationScreen} />
    <Tab.Screen name="Monitor" component={LiveMonitoringScreen} />
  </Tab.Navigator>
);

export default AdminTabNavigator;
