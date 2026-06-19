import React from 'react';
import RoleScreenTemplate from '../../components/RoleScreenTemplate';

const AdminDashboardScreen = () => (
  <RoleScreenTemplate
    title="Admin Dashboard"
    subtitle="Monitor buses, drivers, passengers, and system activity."
    cards={[
      { icon: 'B', label: 'Buses', value: '24' },
      { icon: 'D', label: 'Drivers', value: '14' },
      { icon: 'P', label: 'Passengers', value: '186' },
      { icon: 'L', label: 'Logs', value: '48' },
    ]}
    listTitle="Administration"
    listItems={[
      { icon: '>', title: 'Bus Management', subtitle: 'Manage fleet records' },
      { icon: '>', title: 'Driver Management', subtitle: 'Update driver details' },
      { icon: '>', title: 'Live Monitoring', subtitle: 'Track operations live' },
    ]}
  />
);

export default AdminDashboardScreen;
