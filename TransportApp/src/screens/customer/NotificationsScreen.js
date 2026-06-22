import React from 'react';
import RoleScreenTemplate from '../../components/RoleScreenTemplate';

const NotificationsScreen = ({ navigation }) => {
  return (
    <RoleScreenTemplate 
      navigation={navigation} 
      notifications={[
        { type: 'success', icon: 'check-circle', title: 'Payment Successful', subtitle: 'Your payment of $120 was received.' },
        { type: 'danger', icon: 'alert-triangle', title: 'Schedule Change', subtitle: 'Trip to Downtown delayed by 15 mins.' },
        { type: 'success', icon: 'info', title: 'New Route Added', subtitle: 'Check out the new City Center Express.' },
      ]}
      activeTab="Alerts"
    />
  );
};

export default NotificationsScreen;
