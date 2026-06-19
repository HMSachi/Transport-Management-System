import React from 'react';
import RoleScreenTemplate from '../../components/RoleScreenTemplate';

const LiveTrackingScreen = () => (
  <RoleScreenTemplate
    title="Live Tracking"
    subtitle="Monitor vehicle movement and ETA."
    cards={[
      { icon: 'V', label: 'Active Vehicles', value: '18' },
      { icon: 'E', label: 'Avg ETA', value: '12m' },
    ]}
    listTitle="Current Trips"
    listItems={[
      { icon: 'L', title: 'Trip #402', subtitle: 'Downtown to Airport - 65% complete' },
      { icon: 'L', title: 'Trip #405', subtitle: 'City loop - 32% complete' },
    ]}
  />
);

export default LiveTrackingScreen;
