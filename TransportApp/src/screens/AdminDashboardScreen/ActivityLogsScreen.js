import React from 'react';
import RoleScreenTemplate from '../../components/RoleScreenTemplate';

const ActivityLogsScreen = () => (
  <RoleScreenTemplate
    title="Activity Logs"
    subtitle="Audit recent actions in the system."
    cards={[
      { icon: 'L', label: 'Today', value: '28' },
      { icon: 'W', label: 'Week', value: '132' },
    ]}
    listTitle="Logs"
    listItems={[
      { icon: '>', title: 'Driver updated', subtitle: '2 minutes ago' },
      { icon: '>', title: 'Bus status changed', subtitle: '10 minutes ago' },
    ]}
  />
);

export default ActivityLogsScreen;