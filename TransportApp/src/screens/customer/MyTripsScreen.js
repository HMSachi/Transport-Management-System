import React from 'react';
import RoleScreenTemplate from '../../components/RoleScreenTemplate';

const MyTripsScreen = ({ navigation }) => {
  return (
    <RoleScreenTemplate 
      navigation={navigation} 
      upcomingList={[
        { dateMonth: 'NOV', dateDay: '01', title: 'Airport Shuttle', subtitle: '09:00 AM • Pending' },
        { dateMonth: 'NOV', dateDay: '15', title: 'City Tour', subtitle: '11:00 AM • Confirmed' },
        { dateMonth: 'DEC', dateDay: '05', title: 'Corporate Event', subtitle: '08:00 AM • Pending' },
      ]}
      activeTab="Trips"
    />
  );
};

export default MyTripsScreen;
