import React from 'react';
import RoleScreenTemplate from '../../components/RoleScreenTemplate';

const DriverDashboardScreen = () => (
  <RoleScreenTemplate
    title="Driver Dashboard"
    subtitle="Manage trips, passengers, and bus status."
    cards={[
      { icon: 'T', label: 'Trips', value: '08' },
      { icon: 'R', label: 'Requests', value: '05' },
      { icon: 'A', label: 'Available', value: '01' },
      { icon: 'E', label: 'Alerts', value: '02' },
    ]}
    listTitle="Driver Tasks"
    listItems={[
      { icon: '>', title: 'Passenger Requests', subtitle: '5 pending requests' },
      { icon: '>', title: 'Trip Management', subtitle: 'Active trip running' },
      { icon: '>', title: 'Bus Availability', subtitle: 'Current bus status' },
    ]}
  />
);

export default DriverDashboardScreen;
