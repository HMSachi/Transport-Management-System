const DashboardService = {
  fetchCustomerData: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          heroData: {
            badge: 'ACTIVE TRIP', icon: 'truck-fast', label1: 'ROUTE', title: 'Downtown to Airport',
            label2: 'TIME', value1Icon: 'clock', value1: '09:00 AM',
            label3: 'VEHICLE', value2: 'Toyota Coaster', subValue2: 'ABC-123', btnText: 'View Manifest'
          },
          quickActions: [
            { icon: 'map-marker-outline', label: 'Track' },
            { icon: 'seat-passenger', label: 'Book' },
            { icon: 'history', label: 'Trips' },
            { icon: 'bell-outline', label: 'Alerts' },
          ],
          upcomingList: [
            { dateMonth: 'OCT', dateDay: '25', title: 'Airport to Corporate Park', subtitle: '08:30 AM • 12 Pass.' },
            { dateMonth: 'OCT', dateDay: '26', title: 'City Center Shuttle', subtitle: '10:00 AM • 8 Pass.' },
          ],
          notifications: [
            { type: 'success', icon: 'check-circle', title: 'Trip #402 confirmed', subtitle: 'Vehicle assignment was approved.' },
            { type: 'danger', icon: 'alert-triangle', title: 'Maintenance alert', subtitle: 'Toyota Coaster (ABC-123) oil change due.' },
          ]
        });
      }, 500);
    });
  },

  fetchDriverData: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          heroData: {
            badge: 'CURRENT SHIFT', icon: 'steering', label1: 'ASSIGNED ROUTE', title: 'North City Loop',
            label2: 'START TIME', value1Icon: 'clock', value1: '06:00 AM',
            label3: 'BUS', value2: 'Volvo B11R', subValue2: 'XYZ-789', btnText: 'Start Route'
          },
          quickActions: [
            { icon: 'steering', label: 'Drive' },
            { icon: 'account-group', label: 'Passengers' },
            { icon: 'gas-station', label: 'Fuel' },
            { icon: 'alert-circle-outline', label: 'Report' },
          ],
          upcomingList: [
            { dateMonth: 'OCT', dateDay: '25', title: 'South Side Evening', subtitle: '04:00 PM • 30 Pass.' },
          ],
          notifications: [
            { type: 'danger', icon: 'alert-triangle', title: 'Traffic Update', subtitle: 'Heavy traffic on Route 42.' }
          ]
        });
      }, 500);
    });
  },

  fetchAdminData: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          heroData: {
            badge: 'SYSTEM OVERVIEW', icon: 'chart-bar', label1: 'TOTAL REVENUE', title: '$14,500.00',
            label2: 'ACTIVE BUSES', value1Icon: 'bus', value1: '24 / 30',
            label3: 'PASSENGERS', value2: '1,240', subValue2: 'Today', btnText: 'Generate Report'
          },
          quickActions: [
            { icon: 'account-cog', label: 'Users' },
            { icon: 'bus-multiple', label: 'Fleet' },
            { icon: 'map', label: 'Routes' },
            { icon: 'cog-outline', label: 'Settings' },
          ],
          upcomingList: [
            { dateMonth: 'OCT', dateDay: '25', title: 'Fleet Inspection', subtitle: '09:00 AM • 5 Buses' },
          ],
          notifications: [
            { type: 'danger', icon: 'alert-triangle', title: 'System Alert', subtitle: 'Server maintenance scheduled for 2 AM.' }
          ]
        });
      }, 500);
    });
  }
};

export default DashboardService;
