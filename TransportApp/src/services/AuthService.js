// Auth Service — static/mock only (no real API calls)
const AuthService = {

  // Mock Login
  Login: async (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let role = null;
        let name = '';
        if (email === 'admin' && password === '123') {
          role = 'admin';
          name = 'Admin User';
        } else if (email === 'c' && password === '123') {
          role = 'customer';
          name = 'Customer User';
        } else if (email === 'd' && password === '123') {
          role = 'driver';
          name = 'Driver User';
        }

        if (role) {
          resolve({
            data: {
              user: { id: 1, name, email, role },
              token: 'mock-jwt-token-12345',
            },
          });
        } else {
          reject(new Error('Invalid username or password'));
        }
      }, 500);
    });
  },

  // Mock Register
  Register: async (name, email, password, role = 'customer') => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            user: { id: 2, name, email, role },
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
