// src/services/productService.js

import api from './api';

const productService = {
    getAllProducts: async () => {
        try {
            const response = await api.get('/api/products');
            return response.data;
        } catch (error) {
            console.error("Error fetching products", error);
            // Optionally, you can re-throw the error to handle it in the component
        }
    },

    getProductById: async (id) => {
        try {
            const response = await api.get(`/api/products/${id}`);
           return response.data;
        } catch (error) {
            console.error("Error fetching product by ID", error);
        }
    },

    createProduct: async (productData) => {
        try {
            const response = await api.post('/api/products', productData);
            return response.data;
        } catch (error) {
            console.error("Error creating product", error);
        }
    },

    updateProduct: async (id, productData) => {
        try {
            const response = await api.put(`/api/products/${id}`, productData);
            return response.data;
        } catch (error) {
            console.error("Error updating product", error);
        }
    },

    deleteProduct: async (id) => {
        try {
            const response = await api.delete(`/api/products/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error deleting product", error);
        }
    }
};

export default productService;
