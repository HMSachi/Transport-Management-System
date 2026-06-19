import React from 'react';
import RoleScreenTemplate from '../../components/RoleScreenTemplate';

const PaymentsScreen = () => (
  <RoleScreenTemplate
    title="Payments"
    subtitle="Payment history and billing overview."
    cards={[
      { icon: 'T', label: 'Total Paid', value: '$1.2K' },
      { icon: 'D', label: 'Due', value: '$120' },
      { icon: 'R', label: 'Refunds', value: '$30' },
    ]}
    listTitle="Recent Payments"
    listItems={[
      { icon: '$', title: 'Booking #402', subtitle: 'Paid on Oct 24' },
      { icon: '$', title: 'Booking #389', subtitle: 'Paid on Oct 21' },
    ]}
  />
);

export default PaymentsScreen;
