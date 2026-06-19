import React from 'react';
import RoleScreenTemplate from '../../components/RoleScreenTemplate';

const PassengerManagementScreen = () => (
  <RoleScreenTemplate
    title="Passenger Management"
    subtitle="Manage passenger accounts and records."
    cards={[
      { icon: 'A', label: 'Active', value: '180' },
      { icon: 'S', label: 'Suspended', value: '06' },
    ]}
    listTitle="Passengers"
    listItems={[
      { icon: 'P', title: 'Kamal Fernando', subtitle: 'Regular commuter' },
      { icon: 'P', title: 'Sana Ali', subtitle: 'Corporate booking' },
    ]}
  />
);

export default PassengerManagementScreen;
