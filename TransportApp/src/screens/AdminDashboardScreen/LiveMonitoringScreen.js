import React from 'react';
import RoleScreenTemplate from '../../components/RoleScreenTemplate';

const LiveMonitoringScreen = () => (
  <RoleScreenTemplate
    title="Live Monitoring"
    subtitle="System-wide live movement overview."
    cards={[
      { icon: 'O', label: 'On Route', value: '11' },
      { icon: 'D', label: 'Delayed', value: '02' },
      { icon: 'O', label: 'Offline', value: '01' },
    ]}
    listTitle="Live Feed"
    listItems={[
      { icon: 'L', title: 'Bus ABC-123', subtitle: 'Downtown to Airport' },
      { icon: 'L', title: 'Bus XYZ-678', subtitle: 'City loop active' },
    ]}
  />
);

export default LiveMonitoringScreen;
