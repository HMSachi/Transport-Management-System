import React from 'react';
import RoleScreenTemplate from '../../components/RoleScreenTemplate';

const FeedbackScreen = () => (
  <RoleScreenTemplate
    title="Feedback"
    subtitle="Rate trips and share your experience."
    cards={[
      { icon: 'R', label: 'Ratings', value: '4.8' },
      { icon: 'S', label: 'Submissions', value: '21' },
    ]}
    listTitle="Feedback Topics"
    listItems={[
      { icon: '*', title: 'Driver behavior', subtitle: '8 responses' },
      { icon: '*', title: 'Vehicle comfort', subtitle: '6 responses' },
    ]}
    actionLabel="Submit Feedback"
  />
);

export default FeedbackScreen;
