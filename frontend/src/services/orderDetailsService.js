// src/services/orderDetailsService.js

import api from './api';

const orderDetailsService = {
    getAllOrderDetails: async () => {
        try {
            const response = await api.get('/api/orderdetails');
            return response.data;
        } catch (error) {
            console.error("Error fetching order details", error);
        }
    },

    getOrderDetailById: async (id) => {
        try {
            const response = await api.get(`/api/orderdetails/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching order detail by ID", error);
        }
    },

    createOrderDetail: async (orderDetailData) => {
        try {
            const response = await api.post('/api/orderdetails', orderDetailData);
            return response.data;
        } catch (error) {
            console.error("Error creating order detail", error);
        }
    },

    updateOrderDetail: async (id, orderDetailData) => {
        try {
            const response = await api.put(`/api/orderdetails/${id}`, orderDetailData);
            return response.data;
        } catch (error) {
            console.error("Error updating order detail", error);
        }
    },

    deleteOrderDetail: async (id) => {
        try {
            const response = await api.delete(`/api/orderdetails/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error deleting order detail", error);
        }
    }
};

export default orderDetailsService;
