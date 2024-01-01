// src/services/orderService.js

import api from './api';

const orderService = {
    getAllOrders: async () => {
        try {
            const response = await api.get('/api/orders');
            return response.data;
        } catch (error) {
            console.error("Error fetching orders", error);
        }
    },

    getOrderById: async (id) => {
        try {
            const response = await api.get(`/api/orders/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching order by ID", error);
        }
    },

    createOrder: async (orderData) => {
        try {
            const response = await api.post('/api/orders', orderData);
            return response.data;
        } catch (error) {
            console.error("Error creating order", error);
        }
    },

    updateOrder: async (id, orderData) => {
        try {
            const response = await api.put(`/api/orders/${id}`, orderData);
            return response.data;
        } catch (error) {
            console.error("Error updating order", error);
        }
    },

    deleteOrder: async (id) => {
        try {
            const response = await api.delete(`/api/orders/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error deleting order", error);
        }
    }
};

export default orderService;
