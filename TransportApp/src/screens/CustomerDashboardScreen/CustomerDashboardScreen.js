import React from 'react';
import RoleScreenTemplate from '../../components/RoleScreenTemplate';

const CustomerDashboardScreen = ({ navigation }) => (
  <RoleScreenTemplate
    title="Customer Dashboard"
    subtitle="Manage bookings, trips, payments, and support from one place."
    cards={[
      { icon: 'B', label: 'Bookings', value: '14' },
      { icon: 'T', label: 'Trips', value: '6' },
      { icon: '$', label: 'Payments', value: '3' },
      { icon: 'N', label: 'Alerts', value: '8' },
    ]}
    listTitle="Quick Links"
    listItems={[
      { icon: 'R', title: 'Routes', subtitle: 'Browse available routes' },
      { icon: 'B', title: 'Booking', subtitle: 'Create a new booking' },
      { icon: 'L', title: 'Live Tracking', subtitle: 'Check trip location' },
    ]}
    actionLabel="View Profile"
    onAction={() => navigation.navigate('Profile')}
  />
);

export default CustomerDashboardScreen;
