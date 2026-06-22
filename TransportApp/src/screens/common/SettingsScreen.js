import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSettingsData } from '../../actions/SettingsActions';
import RoleScreenTemplate from '../../components/RoleScreenTemplate';

const SettingsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { isLoading, settingsData } = useSelector((state) => state.settings);

  useEffect(() => {
    dispatch(fetchSettingsData('settings'));
  }, [dispatch]);

  if (isLoading || !settingsData) {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator size="large" color="#ff7a00" /></View>;
  }

  return (
    <RoleScreenTemplate 
      navigation={navigation} 
      dashboardTitle="Settings"
      heroData={settingsData.heroData}
      quickActions={settingsData.quickActions}
      upcomingList={settingsData.upcomingList}
      notifications={settingsData.notifications}
      activeTab="Profile"
    />
  );
};

export default SettingsScreen;
