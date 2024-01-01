// services/orderDetailsService.js

const dbConnection = require('../db/dbConnection'); // Import your database connection setup

const orderDetailsService = {
    getAllOrderDetails: async () => {
        try {
            const pool = await dbConnection;
            const result = await pool.request().query('SELECT * FROM OrderDetails');
            return result.recordset;
        } catch (error) {
            throw error;
        }
    },

    getOrderDetailById: async (orderDetailId) => {
        try {
            const pool = await dbConnection;
            const result = await pool.request().query('SELECT * FROM OrderDetails WHERE OrderDetailID = $1', [orderDetailId]);
            return result.recordset[0];
        } catch (error) {
            throw error;
        }
    },

    createOrderDetail: async (orderDetailData) => {
        const { orderId, productId, quantity, price } = orderDetailData;
        try {
            const pool = await dbConnection;
            const result = await pool.request().query(
                'INSERT INTO OrderDetails (OrderID, ProductID, Quantity, Price) VALUES ($1, $2, $3, $4) RETURNING *',
                [orderId, productId, quantity, price]
            );
            return result.recordset[0];
        } catch (error) {
            throw error;
        }
    },

    updateOrderDetail: async (orderDetailId, orderDetailData) => {
        const { orderId, productId, quantity, price } = orderDetailData;
        try {
            const pool = await dbConnection;
            const result = await pool.request().query(
                'UPDATE OrderDetails SET OrderID = $1, ProductID = $2, Quantity = $3, Price = $4 WHERE OrderDetailID = $5 RETURNING *',
                [orderId, productId, quantity, price, orderDetailId]
            );
            return result.recordset[0];
        } catch (error) {
            throw error;
        }
    },

    deleteOrderDetail: async (orderDetailId) => {
        try {
            const pool = await dbConnection;
            await pool.request().query('DELETE FROM OrderDetails WHERE OrderDetailID = $1', [orderDetailId]);
            return { message: 'Order detail deleted successfully' };
        } catch (error) {
            throw error;
        }
    }
};

module.exports = orderDetailsService;
