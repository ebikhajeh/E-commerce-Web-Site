// src/services/shippingDetailsService.js

import api from './api';

const shippingDetailsService = {
    getAllShippingDetails: async () => {
        try {
            const response = await api.get('/api/shipping');
            return response.data;
        } catch (error) {
            console.error("Error fetching shipping details", error);
        }
    },

    getShippingDetailById: async (id) => {
        try {
            const response = await api.get(`/api/shipping/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching shipping detail by ID", error);
        }
    },

    createShippingDetail: async (shippingData) => {
        try {
            const response = await api.post('/api/shipping', shippingData);
            return response.data;
        } catch (error) {
            console.error("Error creating shipping detail", error);
        }
    },

    updateShippingDetail: async (id, shippingData) => {
        try {
            const response = await api.put(`/api/shipping/${id}`, shippingData);
            return response.data;
        } catch (error) {
            console.error("Error updating shipping detail", error);
        }
    },

    deleteShippingDetail: async (id) => {
        try {
            const response = await api.delete(`/api/shipping/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error deleting shipping detail", error);
        }
    }
};

export default shippingDetailsService;
