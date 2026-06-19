import React from 'react';
import RoleScreenTemplate from '../../components/RoleScreenTemplate';

const DriverManagementScreen = () => (
  <RoleScreenTemplate
    title="Driver Management"
    subtitle="Review and manage drivers."
    cards={[
      { icon: 'A', label: 'Approved', value: '12' },
      { icon: 'P', label: 'Pending', value: '02' },
    ]}
    listTitle="Drivers"
    listItems={[
      { icon: 'D', title: 'Alex Perera', subtitle: 'Morning shift' },
      { icon: 'D', title: 'Nimal Silva', subtitle: 'Evening shift' },
    ]}
  />
);

export default DriverManagementScreen;
