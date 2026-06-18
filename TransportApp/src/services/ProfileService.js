// Profile Service — static/mock only (no real API calls)
const ProfileService = {

  // Mock Get Profile
  GetProfile: async (userId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            id: userId || 1,
            name: 'John Doe',
            email: 'johndoe@example.com',
            phone: '+91 9876543210',
            role: 'Transport Manager',
            joined: 'January 2024',
          },
        });
      }, 400);
    });
  },
};

export default ProfileService;
