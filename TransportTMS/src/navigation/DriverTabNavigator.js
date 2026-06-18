import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';

import DriverDashboard          from '../screens/driver/DriverDashboard';
import PassengerRequestsScreen  from '../screens/driver/PassengerRequestsScreen';
import TripManagementScreen     from '../screens/driver/TripManagementScreen';
import PassengerLocationScreen  from '../screens/driver/PassengerLocationScreen';
import BusAvailabilityScreen    from '../screens/driver/BusAvailabilityScreen';
import EmergencyBroadcastScreen from '../screens/driver/EmergencyBroadcastScreen';

const Tab   = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Home stack — Driver Dashboard + nested screens
const DriverHomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="DriverDashboard"       component={DriverDashboard}          />
    <Stack.Screen name="PassengerLocation"     component={PassengerLocationScreen}  />
    <Stack.Screen name="EmergencyBroadcast"    component={EmergencyBroadcastScreen} />
  </Stack.Navigator>
);

const DriverTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: '#059669',
      tabBarInactiveTintColor: '#9CA3AF',
      tabBarStyle: { paddingBottom: 6, height: 60 },
      tabBarIcon: ({ focused, color }) => {
        const icons = { Home: '🏠', Requests: '📋', Trip: '🚌', Bus: '🔧' };
        return <Text style={{ fontSize: focused ? 22 : 18 }}>{icons[route.name]}</Text>;
      },
    })}
  >
    <Tab.Screen name="Home"     component={DriverHomeStack}          />
    <Tab.Screen name="Requests" component={PassengerRequestsScreen}  />
    <Tab.Screen name="Trip"     component={TripManagementScreen}     />
    <Tab.Screen name="Bus"      component={BusAvailabilityScreen}    />
  </Tab.Navigator>
);

export default DriverTabNavigator;
