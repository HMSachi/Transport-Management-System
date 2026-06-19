import React from 'react';
import RoleScreenTemplate from '../../components/RoleScreenTemplate';

const MyTripsScreen = () => (
  <RoleScreenTemplate
    title="My Trips"
    subtitle="Track your booked trips."
    cards={[
      { icon: 'U', label: 'Upcoming', value: '04' },
      { icon: 'C', label: 'Completed', value: '27' },
      { icon: 'M', label: 'Missed', value: '01' },
      { icon: 'D', label: 'Delayed', value: '02' },
    ]}
    listTitle="Trips"
    listItems={[
      { icon: 'T', title: 'Airport to Corporate Park', subtitle: 'Today - 08:30 AM' },
      { icon: 'T', title: 'Evening Return', subtitle: 'Today - 06:15 PM' },
    ]}
  />
);

export default MyTripsScreen;
