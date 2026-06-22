import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSettingsData } from '../../actions/SettingsActions';
import RoleScreenTemplate from '../../components/RoleScreenTemplate';

const SecurityScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { isLoading, securityData } = useSelector((state) => state.settings);

  useEffect(() => {
    dispatch(fetchSettingsData('security'));
  }, [dispatch]);

  if (isLoading || !securityData) {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator size="large" color="#ff7a00" /></View>;
  }

  return (
    <RoleScreenTemplate 
      navigation={navigation} 
      dashboardTitle="Security"
      heroData={securityData.heroData}
      quickActions={securityData.quickActions}
      upcomingList={securityData.upcomingList}
      notifications={securityData.notifications}
      activeTab="Profile"
    />
  );
};

export default SecurityScreen;
