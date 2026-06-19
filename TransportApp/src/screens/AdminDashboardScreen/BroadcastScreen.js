import React from 'react';
import RoleScreenTemplate from '../../components/RoleScreenTemplate';

const BroadcastScreen = () => (
  <RoleScreenTemplate
    title="Broadcast"
    subtitle="Send announcements to riders and staff."
    cards={[
      { icon: 'S', label: 'Sent', value: '19' },
      { icon: 'R', label: 'Reach', value: '94%' },
    ]}
    listTitle="Message Types"
    listItems={[
      { icon: '!', title: 'Service update', subtitle: 'Notify all commuters' },
      { icon: '!', title: 'Emergency alert', subtitle: 'Urgent system broadcast' },
    ]}
    actionLabel="Create Broadcast"
  />
);

export default BroadcastScreen;
