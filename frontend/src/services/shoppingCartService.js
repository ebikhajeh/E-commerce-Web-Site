// src/services/shoppingCartService.js
import api from './api';

const shoppingCartService = {
    getUserCartItems: async () => {
        try {
            const response = await api.get('/api/shoppingcartt/user');
            return response.data;
        } catch (error) {
            console.error("Error fetching user's cart items", error);
        }
    },
    getAllCartItems: async () => {
        try {
            const response = await api.get('/api/shoppingcart');
            return response.data;
        } catch (error) {
            console.error("Error fetching cart items", error);
        }
    },

    getCartItemById: async (id) => {
        try {
            const response = await api.get(`/api/shoppingcart/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching cart item by ID", error);
        }
    },

    addCartItem: async (cartItemData) => {
        try {
            const response = await api.post('/api/shoppingcart', cartItemData);
            return response.data;
        } catch (error) {
            console.error("Error adding cart item", error);
        }
    },

    updateCartItem: async (id, cartItemData) => {
        try {
            const response = await api.put(`/api/shoppingcart/${id}`, cartItemData);
            return response.data;
        } catch (error) {
            console.error("Error updating cart item", error);
        }
    },

    removeCartItem: async (id) => {
        try {
            const response = await api.delete(`/api/shoppingcart/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error removing cart item", error);
        }
    }
};

export default shoppingCartService;
