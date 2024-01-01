// src/services/reviewService.js

import api from './api';

const reviewService = {
    getAllReviews: async () => {
        try {
            const response = await api.get('/api/reviews');
            return response.data;
        } catch (error) {
            console.error("Error fetching reviews", error);
        }
    },

    getReviewById: async (id) => {
        try {
            const response = await api.get(`/api/reviews/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching review by ID", error);
        }
    },

    createReview: async (reviewData) => {
        try {
            const response = await api.post('/api/reviews', reviewData);
            return response.data;
        } catch (error) {
            console.error("Error creating review", error);
        }
    },

    updateReview: async (id, reviewData) => {
        try {
            const response = await api.put(`/api/reviews/${id}`, reviewData);
            return response.data;
        } catch (error) {
            console.error("Error updating review", error);
        }
    },

    deleteReview: async (id) => {
        try {
            const response = await api.delete(`/api/reviews/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error deleting review", error);
        }
    }
};

export default reviewService;
