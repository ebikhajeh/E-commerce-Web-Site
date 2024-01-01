// src/services/wishListService.js

import api from './api';

const wishListService = {
    getAllWishItems: async () => {
        try {
            const response = await api.get('/api/wishlist');
            return response.data;
        } catch (error) {
            console.error("Error fetching wishlist items", error);
        }
    },
    getUserWishListItems: async () => {
        try {
            const response = await api.get('/api/wishlist');
            return response.data;
        } catch (error) {
            console.error("Error fetching user's cart items", error);
        }
    },

    getWishItemById: async (id) => {
        try {
            const response = await api.get(`/api/wishlist/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching wishlist item by ID", error);
        }
    },

    addWishItem: async (wishItemData) => {
        try {
            const response = await api.post('/api/wishlist', wishItemData);
            return response.data;
        } catch (error) {
            console.error("Error adding wishlist item", error);
        }
    },

    updateWishItem: async (id, wishItemData) => {
        try {
            const response = await api.put(`/api/wishlist/${id}`, wishItemData);
            return response.data;
        } catch (error) {
            console.error("Error updating wishlist item", error);
        }
    },

    removeWishItem: async (id) => {
        try {
            const response = await api.delete(`/api/wishlist/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error removing wishlist item", error);
        }
    }
};

export default wishListService;
