const SettingsService = {
  fetchSettingsData: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          heroData: {
            badge: 'PREFERENCES', icon: 'cog-outline', label1: 'THEME', title: 'Light Mode',
            label2: 'LANGUAGE', value1Icon: 'earth', value1: 'English',
            label3: 'NOTIFICATIONS', value2: 'Enabled', subValue2: 'Push & Email'
          },
          quickActions: [],
          upcomingList: [
            { dateMonth: 'SET', dateDay: '01', title: 'Push Notifications', subtitle: 'Receive alerts for trips' },
            { dateMonth: 'SET', dateDay: '02', title: 'Email Updates', subtitle: 'Weekly summaries' },
          ],
          notifications: []
        });
      }, 500);
    });
  },

  fetchSecurityData: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          heroData: {
            badge: 'SECURITY', icon: 'shield-account', label1: 'STATUS', title: 'Protected',
            label2: 'LAST LOGIN', value1Icon: 'clock', value1: 'Today 08:00 AM',
            label3: '2FA', value2: 'Disabled', subValue2: 'Enable now', btnText: 'Change Password'
          },
          quickActions: [],
          upcomingList: [],
          notifications: [
            { type: 'success', icon: 'check-circle', title: 'Login from Windows PC', subtitle: 'Oct 24, 2023 - 08:00 AM' },
            { type: 'danger', icon: 'alert-triangle', title: 'Failed login attempt', subtitle: 'Oct 20, 2023 - Unrecognized IP' },
          ]
        });
      }, 500);
    });
  },

  fetchPaymentData: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          heroData: {
            badge: 'WALLET', icon: 'credit-card', label1: 'DEFAULT', title: 'Visa ending in 4242',
            label2: 'EXPIRES', value1Icon: 'calendar', value1: '12/25',
            label3: 'STATUS', value2: 'Active', subValue2: 'Verified', btnText: 'Add Card'
          },
          quickActions: [],
          upcomingList: [
            { dateMonth: 'OCT', dateDay: '20', title: 'Trip to Airport', subtitle: '-$45.00' },
            { dateMonth: 'OCT', dateDay: '15', title: 'City Center Shuttle', subtitle: '-$12.50' },
          ],
          notifications: [
            { type: 'success', icon: 'check-circle', title: 'Payment Successful', subtitle: 'Your payment of $45.00 was received.' },
          ]
        });
      }, 500);
    });
  }
};

export default SettingsService;
