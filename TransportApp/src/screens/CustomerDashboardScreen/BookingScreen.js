import React from 'react';
import RoleScreenTemplate from '../../components/RoleScreenTemplate';

const BookingScreen = () => (
  <RoleScreenTemplate
    title="Booking"
    subtitle="Create and review bookings."
    cards={[
      { icon: 'N', label: 'New', value: '02' },
      { icon: 'C', label: 'Confirmed', value: '09' },
      { icon: 'P', label: 'Pending', value: '03' },
      { icon: 'C', label: 'Cancelled', value: '01' },
    ]}
    listTitle="Recent Bookings"
    listItems={[
      { icon: 'B', title: 'Airport Morning Ride', subtitle: 'Confirmed - Oct 25' },
      { icon: 'B', title: 'Corporate Shuttle', subtitle: 'Pending - Oct 26' },
    ]}
    actionLabel="Book Now"
  />
);

export default BookingScreen;
