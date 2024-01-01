// src/services/paymentService.js

import api from './api';

const paymentService = {
    getAllPayments: async () => {
        try {
            const response = await api.get('/api/payments');
            return response.data;
        } catch (error) {
            console.error("Error fetching payments", error);
        }
    },

    getPaymentById: async (id) => {
        try {
            const response = await api.get(`/api/payments/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching payment by ID", error);
        }
    },

    createPayment: async (paymentData) => {
        try {
            const response = await api.post('/api/payments', paymentData);
            return response.data;
        } catch (error) {
            console.error("Error creating payment", error);
        }
    },

    updatePayment: async (id, paymentData) => {
        try {
            const response = await api.put(`/api/payments/${id}`, paymentData);
            return response.data;
        } catch (error) {
            console.error("Error updating payment", error);
        }
    },

    deletePayment: async (id) => {
        try {
            const response = await api.delete(`/api/payments/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error deleting payment", error);
        }
    }
};

export default paymentService;
