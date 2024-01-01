// services/paymentService.js

const dbConnection = require('../db/dbConnection'); // Import your database connection setup

const paymentService = {
    getAllPayments: async () => {
        try {
            const pool = await dbConnection;
            const result = await pool.request().query('SELECT * FROM Payments');
            return result.recordset;
        } catch (error) {
            throw error;
        }
    },

    getPaymentById: async (paymentId) => {
        try {
            const pool = await dbConnection;
            const result = await pool.request().query('SELECT * FROM Payments WHERE PaymentID = $1', [paymentId]);
            return result.recordset[0];
        } catch (error) {
            throw error;
        }
    },

    createPayment: async (paymentData) => {
        const { orderId, amountPaid, paymentDate, paymentMethod } = paymentData;
        try {
            const pool = await dbConnection;
            const result = await pool.request().query(
                'INSERT INTO Payments (OrderID, AmountPaid, PaymentDate, PaymentMethod) VALUES ($1, $2, $3, $4) RETURNING *',
                [orderId, amountPaid, paymentDate, paymentMethod]
            );
            return result.recordset[0];
        } catch (error) {
            throw error;
        }
    },

    updatePayment: async (paymentId, paymentData) => {
        const { orderId, amountPaid, paymentDate, paymentMethod } = paymentData;
        try {
            const pool = await dbConnection;
            const result = await pool.request().query(
                'UPDATE Payments SET OrderID = $1, AmountPaid = $2, PaymentDate = $3, PaymentMethod = $4 WHERE PaymentID = $5 RETURNING *',
                [orderId, amountPaid, paymentDate, paymentMethod, paymentId]
            );
            return result.recordset[0];
        } catch (error) {
            throw error;
        }
    },

    deletePayment: async (paymentId) => {
        try {
            const pool = await dbConnection;
            await pool.request().query('DELETE FROM Payments WHERE PaymentID = $1', [paymentId]);
            return { message: 'Payment deleted successfully' };
        } catch (error) {
            throw error;
        }
    }
};

module.exports = paymentService;
