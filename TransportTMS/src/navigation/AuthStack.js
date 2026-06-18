import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen        from '../screens/common/SplashScreen';
import LoginScreen         from '../screens/common/LoginScreen';
import RegisterScreen      from '../screens/common/RegisterScreen';
import RoleSelectionScreen from '../screens/common/RoleSelectionScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Splash"         component={SplashScreen}        />
    <Stack.Screen name="Login"          component={LoginScreen}         />
    <Stack.Screen name="Register"       component={RegisterScreen}      />
    <Stack.Screen name="RoleSelection"  component={RoleSelectionScreen} />
  </Stack.Navigator>
);

export default AuthStack;
