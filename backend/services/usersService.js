// services/usersService.js
require('dotenv').config();
const dbConnection = require('../db/dbConnection'); // Import your database connection setup
const sql = require('mssql');
const jwt = require('jsonwebtoken');


const usersService = {
    loginUser: async (credentials) => {
        const { username, password } = credentials;
        try {
            const pool = await dbConnection;
            const result = await pool.request()
            .input('username', sql.NVarChar(50), username)
            .input('password', sql.NVarChar(255), password) // You might want to handle password hashing
            .query('SELECT * FROM Users WHERE Username = @username AND PasswordHash = @password');
          
            if (result.recordset.length > 0) {
                
                // User found and password matches
                const user = result.recordset[0];
                   
                // Generate a token
                const token = jwt.sign(
                    { userId: user.UserID, username: user.Username },
                    process.env.JWT_SECRET, // Replace with a secret key from your environment variables
                    { expiresIn: '1h' } // Token expiration time
                );

                // Return the token and user data
            return {
                token,
                user: {
                    userId: user.UserID,
                    username: user.Username,
                    // other non-sensitive data you wish to include
                }
            };  

            } else {
                // User not found or password does not match
                return null;
            }
        } catch (error) {
            console.error("Error in loginUser: ", error);
            throw error;
        }
    },
    getAllUsers: async () => {
        try {
            const pool = await dbConnection;
            const result = await pool.request().query('SELECT * FROM Users');
            return result.recordset;
        } catch (error) {
            throw error;
        }
    },

    getUserById: async (userId) => {
        try {
            const pool = await dbConnection;
            const result = await pool.request().query('SELECT * FROM Users WHERE UserID = $1', [userId]);
            return result.recordset[0];
        } catch (error) {
            throw error;
        }
    },

    createUser: async (userData) => {
        const { username, email, password } = userData;
        try {
            const pool = await dbConnection;
            const result = await pool.request()
            .input('username', sql.NVarChar(50), username)
            .input('email', sql.NVarChar(100), email)
            .input('password', sql.NVarChar(255), password)
            .query('INSERT INTO Users (Username, Email, PasswordHash) VALUES (@username, @email, @password)');
            return { success: true, rowsAffected: result.rowsAffected[0] };
        } catch (error) {
            console.error("Error in createUser: ", error);
            throw error;
        }
    },

    updateUser: async (userId, userData) => {
        const { username, email, /* other fields */ } = userData;
        try {
            const pool = await dbConnection;
            const result = await pool.request().query('UPDATE Users SET Username = $1, Email = $2 /* other fields */ WHERE UserID = $3 RETURNING *', [username, email, /* other values */, userId]);
            return result.recordset[0];
        } catch (error) {
            throw error;
        }
    },

    deleteUser: async (userId) => {
        try {
            const pool = await dbConnection;
            await pool.request().query('DELETE FROM Users WHERE UserID = $1', [userId]);
            return { message: 'User deleted successfully' };
        } catch (error) {
            throw error;
        }
    }
};

module.exports = usersService;
