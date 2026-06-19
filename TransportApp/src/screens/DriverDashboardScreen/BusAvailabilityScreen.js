import React from 'react';
import RoleScreenTemplate from '../../components/RoleScreenTemplate';

const BusAvailabilityScreen = () => (
  <RoleScreenTemplate
    title="Bus Availability"
    subtitle="Check bus status and availability."
    cards={[
      { icon: 'A', label: 'Available', value: '03' },
      { icon: 'S', label: 'Servicing', value: '01' },
      { icon: 'O', label: 'Occupied', value: '06' },
    ]}
    listTitle="Fleet Status"
    listItems={[
      { icon: 'B', title: 'Toyota Coaster ABC-123', subtitle: 'Available' },
      { icon: 'B', title: 'Mini Bus XYZ-451', subtitle: 'On trip' },
    ]}
  />
);

export default BusAvailabilityScreen;
