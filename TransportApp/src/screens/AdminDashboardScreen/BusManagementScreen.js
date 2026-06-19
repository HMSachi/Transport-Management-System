import React from 'react';
import RoleScreenTemplate from '../../components/RoleScreenTemplate';

const BusManagementScreen = () => (
  <RoleScreenTemplate
    title="Bus Management"
    subtitle="Manage bus list and assignment."
    cards={[
      { icon: 'A', label: 'Active', value: '20' },
      { icon: 'M', label: 'Maintenance', value: '04' },
    ]}
    listTitle="Fleet"
    listItems={[
      { icon: 'B', title: 'ABC-123 Toyota Coaster', subtitle: 'Active' },
      { icon: 'B', title: 'XYZ-678 Mini Bus', subtitle: 'Maintenance' },
    ]}
  />
);

export default BusManagementScreen;
