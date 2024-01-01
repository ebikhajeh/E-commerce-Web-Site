// services/addressService.js

const dbConnection = require('../db/dbConnection'); // Import your database connection setup

const addressService = {
    getAllAddresses: async () => {
        try {
            const pool = await dbConnection;
            const result = await pool.request().query('SELECT * FROM Addresses');
            return result.recordset;
        } catch (error) {
            throw error;
        }
    },

    getAddressById: async (addressId) => {
        try {
            const pool = await dbConnection;
            const result = await pool.request().query('SELECT * FROM Addresses WHERE AddressID = $1', [addressId]);
            return result.recordset[0];
        } catch (error) {
            throw error;
        }
    },

    createAddress: async (addressData) => {
        const { userId, addressLine1, addressLine2, city, state, country, postalCode } = addressData;
        try {
            const pool = await dbConnection;
            const result = await pool.request().query(
                'INSERT INTO Addresses (UserID, AddressLine1, AddressLine2, City, State, Country, PostalCode) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
                [userId, addressLine1, addressLine2, city, state, country, postalCode]
            );
            return result.recordset[0];
        } catch (error) {
            throw error;
        }
    },

    updateAddress: async (addressId, addressData) => {
        const { userId, addressLine1, addressLine2, city, state, country, postalCode } = addressData;
        try {
            const pool = await dbConnection;
            const result = await pool.request().query(
                'UPDATE Addresses SET UserID = $1, AddressLine1 = $2, AddressLine2 = $3, City = $4, State = $5, Country = $6, PostalCode = $7 WHERE AddressID = $8 RETURNING *',
                [userId, addressLine1, addressLine2, city, state, country, postalCode, addressId]
            );
            return result.recordset[0];
        } catch (error) {
            throw error;
        }
    },

    deleteAddress: async (addressId) => {
        try {
            const pool = await dbConnection;
            await pool.request().query('DELETE FROM Addresses WHERE AddressID = $1', [addressId]);
            return { message: 'Address deleted successfully' };
        } catch (error) {
            throw error;
        }
    }
};

module.exports = addressService;
