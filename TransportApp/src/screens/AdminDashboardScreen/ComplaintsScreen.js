import React from 'react';
import RoleScreenTemplate from '../../components/RoleScreenTemplate';

const ComplaintsScreen = () => (
  <RoleScreenTemplate
    title="Complaints"
    subtitle="Review and handle passenger complaints."
    cards={[
      { icon: 'O', label: 'Open', value: '07' },
      { icon: 'C', label: 'Closed', value: '22' },
    ]}
    listTitle="Open Complaints"
    listItems={[
      { icon: '!', title: 'Late arrival complaint', subtitle: 'Trip #402' },
      { icon: '!', title: 'Seat issue report', subtitle: 'Trip #405' },
    ]}
  />
);

export default ComplaintsScreen;
