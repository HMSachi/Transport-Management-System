import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import CustomerTabNavigator from './CustomerTabNavigator';
import DriverTabNavigator from './DriverTabNavigator';
import AdminTabNavigator from './AdminTabNavigator';

const AppNavigator = () => {
  const { isLoggedIn, role } = useSelector((s) => s.auth);
  const renderNavigator = () => {
    if (!isLoggedIn || !role) return <AuthStack />;
    if (role === 'customer') return <CustomerTabNavigator />;
    if (role === 'driver') return <DriverTabNavigator />;
    if (role === 'admin') return <AdminTabNavigator />;
    return <AuthStack />;
  };
  return <NavigationContainer>{renderNavigator()}</NavigationContainer>;
};

export default AppNavigator;
