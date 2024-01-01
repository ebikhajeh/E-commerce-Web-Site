// controllers/categoriesController.js

const categoryService = require('../services/categoryService');

const categoriesController = {
    getAllCategories: async (req, res) => {
        try {
            const categories = await categoryService.getAllCategories();
            res.status(200).json(categories);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getCategoryById: async (req, res) => {
        try {
            const categoryId = req.params.id;
            const category = await categoryService.getCategoryById(categoryId);
            if (category) {
                res.status(200).json(category);
            } else {
                res.status(404).json({ message: 'Category not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    createCategory: async (req, res) => {
        try {
            const newCategory = await categoryService.createCategory(req.body);
            res.status(201).json(newCategory);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    updateCategory: async (req, res) => {
        try {
            const categoryId = req.params.id;
            const updatedCategory = await categoryService.updateCategory(categoryId, req.body);
            if (updatedCategory) {
                res.status(200).json(updatedCategory);
            } else {
                res.status(404).json({ message: 'Category not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    deleteCategory: async (req, res) => {
        try {
            const categoryId = req.params.id;
            await categoryService.deleteCategory(categoryId);
            res.status(200).json({ message: 'Category deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = categoriesController;
