// src/services/addressService.js

import api from './api';

const addressService = {
    getAllAddresses: async () => {
        try {
            const response = await api.get('/api/addresses');
            return response.data;
        } catch (error) {
            console.error("Error fetching addresses", error);
        }
    },

    getAddressById: async (id) => {
        try {
            const response = await api.get(`/api/addresses/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching address by ID", error);
        }
    },

    createAddress: async (addressData) => {
        try {
            const response = await api.post('/api/addresses', addressData);
            return response.data;
        } catch (error) {
            console.error("Error creating address", error);
        }
    },

    updateAddress: async (id, addressData) => {
        try {
            const response = await api.put(`/api/addresses/${id}`, addressData);
            return response.data;
        } catch (error) {
            console.error("Error updating address", error);
        }
    },

    deleteAddress: async (id) => {
        try {
            const response = await api.delete(`/api/addresses/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error deleting address", error);
        }
    }
};

export default addressService;
