// services/wishListService.js

const dbConnection = require('../db/dbConnection'); // Import your database connection setup
const sql = require('mssql');


const wishListService = {
    getAllWishItems: async () => {
        try {
            const pool = await dbConnection;
            const result = await pool.request().query('SELECT * FROM WishList');
            return result.recordset;
        } catch (error) {
            throw error;
        }
    },
    getUserWishList: async (userId) => {
        try {
            const pool = await dbConnection;
            const result = await pool.request()
            .input('userId', sql.Int, userId) // Bind the userId parameter
            .query(`select WishList.WishID, Products.*,(SELECT TOP 1 ImageURL FROM ProductImages WHERE ProductID = Products.ProductID) AS ImageURL
            from WishList
            join Products on Products.ProductID = WishList.ProductID
            where WishList.UserID=@userId`); 
        return result.recordset;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    getWishItemById: async (wishItemId) => {
        try {
            const pool = await dbConnection;
            const result = await pool.request().query('SELECT * FROM WishList WHERE WishID = $1', [wishItemId]);
            return result.recordset[0];
        } catch (error) {
            throw error;
        }
    },

    addWishItem: async (wishItemData) => {
        const { userId, productId, addedDate } = wishItemData;
        try {
            const pool = await dbConnection;
            const result = await pool.request().query(
                'INSERT INTO WishList (UserID, ProductID, AddedDate) VALUES ($1, $2, $3) RETURNING *',
                [userId, productId, addedDate]
            );
            return result.recordset[0];
        } catch (error) {
            throw error;
        }
    },

    updateWishItem: async (wishItemId, wishItemData) => {
        const { userId, productId, addedDate } = wishItemData;
        try {
            const pool = await dbConnection;
            const result = await pool.request().query(
                'UPDATE WishList SET UserID = $1, ProductID = $2, AddedDate = $3 WHERE WishID = $4 RETURNING *',
                [userId, productId, addedDate, wishItemId]
            );
            return result.recordset[0];
        } catch (error) {
            throw error;
        }
    },

    removeWishItem: async (wishItemId) => {
        try {
            const pool = await dbConnection;
            await pool.request()
            .input('wishItemId', sql.Int, wishItemId)
            .query('DELETE FROM WishList WHERE WishID = @wishItemId');
            return { message: 'Wish item removed successfully' };
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
};

module.exports = wishListService;
