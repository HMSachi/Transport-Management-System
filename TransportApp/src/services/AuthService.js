// Auth Service — static/mock only (no real API calls)
const AuthService = {

  // Mock Login
  Login: async (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            user: { id: 1, name: 'John Doe', email },
            token: 'mock-jwt-token-12345',
          },
        });
      }, 500);
    });
  },

  // Mock Register
  Register: async (name, email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            user: { id: 2, name, email },
            token: 'mock-jwt-token-67890',
          },
        });
      }, 500);
    });
  },

  // Mock Logout
  Logout: async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ data: { success: true } }), 200);
    });
  },
};

export default AuthService;
