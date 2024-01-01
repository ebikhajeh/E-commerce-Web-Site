// src/services/userService.js

import api from './api';

const userService = {
    loginUser: async (credentials) => {
        try {
            const response = await api.post('/api/login', credentials);

            console.log('========== : ', response.data);
            
            if (response.data && response.data.token) {
                // Store the token in the local storage
                localStorage.setItem('token', response.data.token);

                // Assuming the response also contains some user details
                const userData = {
                    userId: response.data.user.userId,
                    username: response.data.user.username,
                    // other safe-to-store details
                };
              
                localStorage.setItem('userData', JSON.stringify(userData));
                return response.data;
            } else {
                // Handle login failure
                return { error: true, message: 'Invalid login credentials' };
            }

        } catch (error) {
            console.error('Error logging in user', error);
        }
    },
    getAllUsers: async () => {
        try {
            const response = await api.get('/api/users');
            return response.data;
        } catch (error) {
            // Handle error (you can also throw the error to be handled by the calling component)
            console.error("Error fetching users", error);
        }
    },

    getUserById: async (id) => {
        try {
            const response = await api.get(`/api/users/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching user by ID", error);
        }
    },

    createUser: async (userData) => {
        try {
            const response = await api.post('/api/users', userData);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error("Error creating user", error);
        }
    },

    updateUser: async (id, userData) => {
        try {
            const response = await api.put(`/api/users/${id}`, userData);
            return response.data;
        } catch (error) {
            console.error("Error updating user", error);
        }
    },

    deleteUser: async (id) => {
        try {
            const response = await api.delete(`/api/users/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error deleting user", error);
        }
    }
};

export default userService;
