import React from 'react';
import RoleScreenTemplate from '../../components/RoleScreenTemplate';

const EmergencyBroadcastScreen = () => (
  <RoleScreenTemplate
    title="Emergency Broadcast"
    subtitle="Send urgent alerts to passengers."
    cards={[
      { icon: 'S', label: 'Sent', value: '12' },
      { icon: 'R', label: 'Read', value: '98%' },
    ]}
    listTitle="Broadcast Templates"
    listItems={[
      { icon: '!', title: 'Delay alert', subtitle: 'Notify passengers about delays' },
      { icon: '!', title: 'Route change', subtitle: 'Announce new route info' },
    ]}
    actionLabel="Send Broadcast"
  />
);

export default EmergencyBroadcastScreen;
