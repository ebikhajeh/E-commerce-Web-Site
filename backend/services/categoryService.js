// services/categoryService.js

const dbConnection = require('../db/dbConnection'); // Import your database connection setup

const categoryService = {
    getAllCategories: async () => {
        try {
            const pool = await dbConnection;
            const result = await pool.request().query('SELECT * FROM Categories');
            return result.recordset;
        } catch (error) {
            throw error;
        }
    },

    getCategoryById: async (categoryId) => {
        try {
            const pool = await dbConnection;
            const result = await pool.request().query('SELECT * FROM Categories WHERE CategoryID = $1', [categoryId]);
            return result.recordset[0];
        } catch (error) {
            throw error;
        }
    },

    createCategory: async (categoryData) => {
        const { name, description, parentCategoryID } = categoryData;
        try {
            const pool = await dbConnection;
            const result = await pool.request().query(
                'INSERT INTO Categories (Name, Description, ParentCategoryID) VALUES ($1, $2, $3) RETURNING *',
                [name, description, parentCategoryID]
            );
            return result.recordset[0];
        } catch (error) {
            throw error;
        }
    },

    updateCategory: async (categoryId, categoryData) => {
        const { name, description, parentCategoryID } = categoryData;
        try {
            const pool = await dbConnection;
            const result = await pool.request().query(
                'UPDATE Categories SET Name = $1, Description = $2, ParentCategoryID = $3 WHERE CategoryID = $4 RETURNING *',
                [name, description, parentCategoryID, categoryId]
            );
            return result.recordset[0];
        } catch (error) {
            throw error;
        }
    },

    deleteCategory: async (categoryId) => {
        try {
            const pool = await dbConnection;
            await pool.request().query('DELETE FROM Categories WHERE CategoryID = $1', [categoryId]);
            return { message: 'Category deleted successfully' };
        } catch (error) {
            throw error;
        }
    }
};

module.exports = categoryService;
