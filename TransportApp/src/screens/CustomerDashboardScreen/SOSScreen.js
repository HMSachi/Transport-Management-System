import React from 'react';
import RoleScreenTemplate from '../../components/RoleScreenTemplate';

const SOSScreen = () => (
  <RoleScreenTemplate
    title="SOS"
    subtitle="Emergency assistance and support."
    cards={[
      { icon: 'C', label: 'Calls', value: '24/7' },
      { icon: 'R', label: 'Response', value: '2m' },
    ]}
    listTitle="Emergency Options"
    listItems={[
      { icon: '!', title: 'Contact Support', subtitle: 'Speak to dispatch team' },
      { icon: '!', title: 'Share Live Location', subtitle: 'Send current trip position' },
    ]}
    actionLabel="Send SOS"
  />
);

export default SOSScreen;
