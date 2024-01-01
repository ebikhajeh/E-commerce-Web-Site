// services/reviewService.js

const dbConnection = require('../db/dbConnection'); // Import your database connection setup

const reviewService = {
    getAllReviews: async () => {
        try {
            const pool = await dbConnection;
            const result = await pool.request().query('SELECT * FROM Reviews');
            return result.recordset;
        } catch (error) {
            throw error;
        }
    },

    getReviewById: async (reviewId) => {
        try {
            const pool = await dbConnection;
            const result = await pool.request().query('SELECT * FROM Reviews WHERE ReviewID = $1', [reviewId]);
            return result.recordset[0];
        } catch (error) {
            throw error;
        }
    },

    createReview: async (reviewData) => {
        const { productId, userId, rating, comment, reviewDate } = reviewData;
        try {
            const pool = await dbConnection;
            const result = await pool.request().query(
                'INSERT INTO Reviews (ProductID, UserID, Rating, Comment, ReviewDate) VALUES ($1, $2, $3, $4, $5) RETURNING *',
                [productId, userId, rating, comment, reviewDate]
            );
            return result.recordset[0];
        } catch (error) {
            throw error;
        }
    },

    updateReview: async (reviewId, reviewData) => {
        const { productId, userId, rating, comment, reviewDate } = reviewData;
        try {
            const pool = await dbConnection;
            const result = await pool.request().query(
                'UPDATE Reviews SET ProductID = $1, UserID = $2, Rating = $3, Comment = $4, ReviewDate = $5 WHERE ReviewID = $6 RETURNING *',
                [productId, userId, rating, comment, reviewDate, reviewId]
            );
            return result.recordset[0];
        } catch (error) {
            throw error;
        }
    },

    deleteReview: async (reviewId) => {
        try {
            const pool = await dbConnection;
            await pool.request().query('DELETE FROM Reviews WHERE ReviewID = $1', [reviewId]);
            return { message: 'Review deleted successfully' };
        } catch (error) {
            throw error;
        }
    }
};

module.exports = reviewService;
