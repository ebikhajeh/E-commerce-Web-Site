// services/orderService.js

const dbConnection = require('../db/dbConnection'); // Import your database connection setup

const orderService = {
    getAllOrders: async () => {
        try {
            const pool = await dbConnection;
            const result = await pool.request().query('SELECT * FROM Orders');
            return result.recordset;
        } catch (error) {
            throw error;
        }
    },

    getOrderById: async (orderId) => {
        try {
            const pool = await dbConnection;
            const result = await pool.request().query('SELECT * FROM Orders WHERE OrderID = $1', [orderId]);
            return result.recordset[0];
        } catch (error) {
            throw error;
        }
    },

    createOrder: async (orderData) => {
        const { userID, orderDate, status, totalAmount } = orderData;
        try {
            const pool = await dbConnection;
            const result = await pool.request().query(
                'INSERT INTO Orders (UserID, OrderDate, Status, TotalAmount) VALUES ($1, $2, $3, $4) RETURNING *',
                [userID, orderDate, status, totalAmount]
            );
            return result.recordset[0];
        } catch (error) {
            throw error;
        }
    },

    updateOrder: async (orderId, orderData) => {
        const { userID, orderDate, status, totalAmount } = orderData;
        try {
            const pool = await dbConnection;
            const result = await pool.request().query(
                'UPDATE Orders SET UserID = $1, OrderDate = $2, Status = $3, TotalAmount = $4 WHERE OrderID = $5 RETURNING *',
                [userID, orderDate, status, totalAmount, orderId]
            );
            return result.recordset[0];
        } catch (error) {
            throw error;
        }
    },

    deleteOrder: async (orderId) => {
        try {
            const pool = await dbConnection;
            await pool.request().query('DELETE FROM Orders WHERE OrderID = $1', [orderId]);
            return { message: 'Order deleted successfully' };
        } catch (error) {
            throw error;
        }
    }
};

module.exports = orderService;
