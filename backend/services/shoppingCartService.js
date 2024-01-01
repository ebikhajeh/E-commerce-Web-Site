// services/shoppingCartService.js

const dbConnection = require('../db/dbConnection'); // Import your database connection setup
const sql = require('mssql');

const shoppingCartService = {
    getUserCartItems: async (userId) => {
        try {
            const pool = await dbConnection;
            const result = await pool.request()
                .input('userId', sql.Int, userId)
                .query(`
                    SELECT sc.CartID, sc.UserID, sc.ProductID, sc.Quantity, p.Price
                    FROM ShoppingCart sc
                    INNER JOIN Products p ON sc.ProductID = p.ProductID
                    WHERE sc.UserID = @userId
                `);
            return result.recordset;
        } catch (error) {
            throw error;
        }
    },
    getAllCartItems: async () => {
        try {
            const pool = await dbConnection;
            const result = await pool.request().query('SELECT * FROM ShoppingCart');
            return result.recordset;
        } catch (error) {
            throw error;
        }
    },

    getCartItemById: async (cartItemId) => {
        try {
            const pool = await dbConnection;
            const result = await pool.request().query('SELECT * FROM ShoppingCart WHERE CartID = $1', [cartItemId]);
            return result.recordset[0];
        } catch (error) {
            throw error;
        }
    },

    addCartItem: async (cartItemData) => {
       const { userId, productId, quantity } = cartItemData;
    try {
        const pool = await dbConnection;
        const result = await pool.request()
            .input('userId', sql.Int, userId)
            .input('productId', sql.Int, productId)
            .input('quantity', sql.Int, quantity)
            .query('INSERT INTO ShoppingCart (UserID, ProductID, Quantity) VALUES (@userId, @productId, @quantity)');
            return { success: true, rowsAffected: result.rowsAffected[0] };
    } catch (error) {
        throw error;
    }
    },

    updateCartItem: async (cartItemId, cartItemData) => {
        const { userId, productId, quantity } = cartItemData;
        try {
            const pool = await dbConnection;
            const result = await pool.request().query(
                'UPDATE ShoppingCart SET UserID = $1, ProductID = $2, Quantity = $3 WHERE CartID = $4 RETURNING *',
                [userId, productId, quantity, cartItemId]
            );
            return result.recordset[0];
        } catch (error) {
            throw error;
        }
    },

    removeCartItem: async (cartItemId) => {
        try {
            const pool = await dbConnection;
            await pool.request().query('DELETE FROM ShoppingCart WHERE CartID = $1', [cartItemId]);
            return { message: 'Cart item removed successfully' };
        } catch (error) {
            throw error;
        }
    }
};

module.exports = shoppingCartService;
