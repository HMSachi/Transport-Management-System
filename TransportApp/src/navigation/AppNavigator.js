// Stack Navigator — defines all screen routes
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen   from '../screens/SplashScreen/SplashScreen';
import LoginScreen    from '../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import HomeScreen     from '../screens/HomeScreen/HomeScreen';
import ProfileScreen  from '../screens/ProfileScreen/ProfileScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash"    component={SplashScreen}   />
        <Stack.Screen name="Login"     component={LoginScreen}    />
        <Stack.Screen name="Register"  component={RegisterScreen} />
        <Stack.Screen name="Home"      component={HomeScreen}     />
        <Stack.Screen name="Profile"   component={ProfileScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
