import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboardData } from '../../actions/DashboardActions';
import RoleScreenTemplate from '../../components/RoleScreenTemplate';

const AdminDashboardScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { isLoading, data, title } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(fetchDashboardData('admin'));
  }, [dispatch]);

  if (isLoading || !data) {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator size="large" color="#ff7a00" /></View>;
  }

  return (
    <RoleScreenTemplate 
      navigation={navigation} 
      dashboardTitle={title || "Admin Dashboard"}
      heroData={data.heroData}
      quickActions={data.quickActions}
      upcomingList={data.upcomingList}
      notifications={data.notifications}
      activeTab="Home"
    />
  );
};

export default AdminDashboardScreen;
