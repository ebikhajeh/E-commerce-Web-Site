// services/shippingDetailsService.js

const dbConnection = require('../db/dbConnection'); // Import your database connection setup

const shippingDetailsService = {
    getAllShippingDetails: async () => {
        try {
            const pool = await dbConnection;
            const result = await pool.request().query('SELECT * FROM ShippingDetails');
            return result.recordset;
        } catch (error) {
            throw error;
        }
    },

    getShippingDetailById: async (shippingId) => {
        try {
            const pool = await dbConnection;
            const result = await pool.request().query('SELECT * FROM ShippingDetails WHERE ShippingID = $1', [shippingId]);
            return result.recordset[0];
        } catch (error) {
            throw error;
        }
    },

    createShippingDetail: async (shippingData) => {
        const { orderId, addressId, shippingDate, estimatedArrivalDate, shippingCost } = shippingData;
        try {
            const pool = await dbConnection;
            const result = await pool.request().query(
                'INSERT INTO ShippingDetails (OrderID, AddressID, ShippingDate, EstimatedArrivalDate, ShippingCost) VALUES ($1, $2, $3, $4, $5) RETURNING *',
                [orderId, addressId, shippingDate, estimatedArrivalDate, shippingCost]
            );
            return result.recordset[0];
        } catch (error) {
            throw error;
        }
    },

    updateShippingDetail: async (shippingId, shippingData) => {
        const { orderId, addressId, shippingDate, estimatedArrivalDate, shippingCost } = shippingData;
        try {
            const pool = await dbConnection;
            const result = await pool.request().query(
                'UPDATE ShippingDetails SET OrderID = $1, AddressID = $2, ShippingDate = $3, EstimatedArrivalDate = $4, ShippingCost = $5 WHERE ShippingID = $6 RETURNING *',
                [orderId, addressId, shippingDate, estimatedArrivalDate, shippingCost, shippingId]
            );
            return result.recordset[0];
        } catch (error) {
            throw error;
        }
    },

    deleteShippingDetail: async (shippingId) => {
        try {
            const pool = await dbConnection;
            await pool.request().query('DELETE FROM ShippingDetails WHERE ShippingID = $1', [shippingId]);
            return { message: 'Shipping detail deleted successfully' };
        } catch (error) {
            throw error;
        }
    }
};

module.exports = shippingDetailsService;
