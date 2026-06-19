import React from 'react';
import RoleScreenTemplate from '../../components/RoleScreenTemplate';

const PassengerRequestsScreen = () => (
  <RoleScreenTemplate
    title="Passenger Requests"
    subtitle="Approve or reject passenger ride requests."
    cards={[
      { icon: 'P', label: 'Pending', value: '05' },
      { icon: 'A', label: 'Accepted', value: '11' },
      { icon: 'R', label: 'Rejected', value: '02' },
    ]}
    listTitle="Requests"
    listItems={[
      { icon: '?', title: 'Alex - Downtown to Airport', subtitle: 'Seat requested' },
      { icon: '?', title: 'Mia - City Center', subtitle: 'Pickup change requested' },
    ]}
  />
);

export default PassengerRequestsScreen;
