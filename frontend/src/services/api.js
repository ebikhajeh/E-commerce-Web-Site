import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

const api = axios.create({
    baseURL: baseURL
});

// Add a request interceptor
api.interceptors.request.use((config) => {
    // Get the JWT token from local storage
    const token = localStorage.getItem('token');
    if (token) {
        // If token is found, add it to the request's Authorization header
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    // Do something with request error
    return Promise.reject(error);
});

export default api;
