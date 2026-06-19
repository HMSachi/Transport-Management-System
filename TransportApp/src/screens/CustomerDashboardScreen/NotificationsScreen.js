import React from 'react';
import RoleScreenTemplate from '../../components/RoleScreenTemplate';

const NotificationsScreen = () => (
  <RoleScreenTemplate
    title="Notifications"
    subtitle="System alerts and reminders."
    cards={[
      { icon: 'N', label: 'Unread', value: '07' },
      { icon: 'A', label: 'Announcements', value: '02' },
    ]}
    listTitle="Recent Alerts"
    listItems={[
      { icon: '!', title: 'Trip confirmed', subtitle: 'Your 08:30 AM ride is confirmed.' },
      { icon: '!', title: 'Route update', subtitle: 'Schedule changed for tomorrow.' },
    ]}
  />
);

export default NotificationsScreen;
