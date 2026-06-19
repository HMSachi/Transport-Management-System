import React from 'react';
import RoleScreenTemplate from '../../components/RoleScreenTemplate';

const RoutesScreen = () => (
  <RoleScreenTemplate
    title="Routes"
    subtitle="Available routes and schedules."
    cards={[
      { icon: 'A', label: 'Routes', value: '12' },
      { icon: 'S', label: 'Schedules', value: '34' },
    ]}
    listTitle="Popular Routes"
    listItems={[
      { icon: '>', title: 'Downtown to Airport', subtitle: '08:30 AM, 12 seats left' },
      { icon: '>', title: 'City Center Shuttle', subtitle: '10:00 AM, 8 seats left' },
      { icon: '>', title: 'Suburb Express', subtitle: '02:00 PM, 16 seats left' },
    ]}
  />
);

export default RoutesScreen;
