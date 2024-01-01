// src/services/categoryService.js

import api from './api';

const categoryService = {
    getAllCategories: async () => {
        try {
            const response = await api.get('/api/categories');
            return response.data;
        } catch (error) {
            console.error("Error fetching categories", error);
        }
    },

    getCategoryById: async (id) => {
        try {
            const response = await api.get(`/api/categories/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching category by ID", error);
        }
    },

    createCategory: async (categoryData) => {
        try {
            const response = await api.post('/api/categories', categoryData);
            return response.data;
        } catch (error) {
            console.error("Error creating category", error);
        }
    },

    updateCategory: async (id, categoryData) => {
        try {
            const response = await api.put(`/api/categories/${id}`, categoryData);
            return response.data;
        } catch (error) {
            console.error("Error updating category", error);
        }
    },

    deleteCategory: async (id) => {
        try {
            const response = await api.delete(`/api/categories/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error deleting category", error);
        }
    }
};

export default categoryService;
