import React from 'react';
import RoleScreenTemplate from '../../components/RoleScreenTemplate';

const PassengerLocationsScreen = () => (
  <RoleScreenTemplate
    title="Passenger Locations"
    subtitle="View passenger pickup points."
    cards={[
      { icon: 'P', label: 'Stops', value: '12' },
      { icon: 'L', label: 'Live', value: '09' },
    ]}
    listTitle="Pickup Points"
    listItems={[
      { icon: 'X', title: 'City Center', subtitle: '4 passengers waiting' },
      { icon: 'X', title: 'Airport Gate 3', subtitle: '2 passengers waiting' },
    ]}
  />
);

export default PassengerLocationsScreen;
