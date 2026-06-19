import React from 'react';
import RoleScreenTemplate from '../../components/RoleScreenTemplate';

const TripManagementScreen = () => (
  <RoleScreenTemplate
    title="Trip Management"
    subtitle="Control active trips and schedules."
    cards={[
      { icon: 'A', label: 'Active', value: '02' },
      { icon: 'U', label: 'Upcoming', value: '04' },
      { icon: 'C', label: 'Completed', value: '18' },
    ]}
    listTitle="Trip List"
    listItems={[
      { icon: 'T', title: 'Trip #402', subtitle: '08:30 AM - Running' },
      { icon: 'T', title: 'Trip #405', subtitle: '10:00 AM - Upcoming' },
    ]}
  />
);

export default TripManagementScreen;
