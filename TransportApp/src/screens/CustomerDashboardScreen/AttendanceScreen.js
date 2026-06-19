import React from 'react';
import RoleScreenTemplate from '../../components/RoleScreenTemplate';

const AttendanceScreen = () => (
  <RoleScreenTemplate
    title="Attendance"
    subtitle="Passenger attendance and check-in."
    cards={[
      { icon: 'P', label: 'Present', value: '48' },
      { icon: 'A', label: 'Absent', value: '03' },
      { icon: 'L', label: 'Late', value: '05' },
    ]}
    listTitle="Status"
    listItems={[
      { icon: 'C', title: 'Morning trip', subtitle: '42 checked in' },
      { icon: 'C', title: 'Afternoon trip', subtitle: '38 checked in' },
    ]}
  />
);

export default AttendanceScreen;
