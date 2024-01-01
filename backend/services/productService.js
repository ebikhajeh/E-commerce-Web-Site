// services/productService.js

const dbConnection = require('../db/dbConnection'); // Import your database connection setup
const sql = require('mssql');

const productService = {
    getAllProducts: async () => {
        try {
            const pool = await dbConnection;
            const result = await pool.request().query(`
            SELECT p.*, pi.ImageURL
            FROM Products p
            LEFT JOIN ProductImages pi ON p.ProductID = pi.ProductID
        `);

         // Process the results to group by product
         const productsMap = new Map();
         result.recordset.forEach(row => {
             // If the product isn't in the map, add it with an empty array for images
             if (!productsMap.has(row.ProductID)) {
                 productsMap.set(row.ProductID, { ...row, ImageURLs: [] });
             }
             // Add the image URL to the product's images array
             if (row.ImageURL) {
                 productsMap.get(row.ProductID).ImageURLs.push(row.ImageURL);
             }
         });
 
         // Convert the map to an array of products
         const products = Array.from(productsMap.values());
         return products;
           
        } catch (error) {
            throw error;
        }
    },

    getProductById: async (productId) => {
        try {
            const pool = await dbConnection;
            const result = await pool.request()
                .input('productId', sql.Int, productId)
                .query(`
                    SELECT p.*, pi.ImageURL
                    FROM Products p
                    LEFT JOIN ProductImages pi ON p.ProductID = pi.ProductID
                    WHERE p.ProductID = @productId
                `);
    
            // Process the results to group images for the product
            const product = result.recordset.reduce((acc, row) => {
                if (!acc) {
                    acc = { ...row, ImageURLs: [] };
                }
                if (row.ImageURL) {
                    acc.ImageURLs.push(row.ImageURL);
                }
                return acc;
            }, null);
            return product;
        } catch (error) {
            throw error;
        }
    },

    createProduct: async (productData) => {
        const { name, description, price, categoryID, stockQuantity } = productData;
        try {
            const pool = await dbConnection;
            const result = await pool.request().query(
                'INSERT INTO Products (Name, Description, Price, CategoryID, StockQuantity) VALUES ($1, $2, $3, $4, $5) RETURNING *', 
                [name, description, price, categoryID, stockQuantity]
            );
            return result.recordset[0];
        } catch (error) {
            throw error;
        }
    },

    updateProduct: async (productId, productData) => {
        const { name, description, price, categoryID, stockQuantity } = productData;
        try {
            const pool = await dbConnection;
            const result = await pool.request().query(
                'UPDATE Products SET Name = $1, Description = $2, Price = $3, CategoryID = $4, StockQuantity = $5 WHERE ProductID = $6 RETURNING *',
                [name, description, price, categoryID, stockQuantity, productId]
            );
            return result.recordset[0];
        } catch (error) {
            throw error;
        }
    },

    deleteProduct: async (productId) => {
        try {
            const pool = await dbConnection;
            await pool.request().query('DELETE FROM Products WHERE ProductID = $1', [productId]);
            return { message: 'Product deleted successfully' };
        } catch (error) {
            throw error;
        }
    }
};

module.exports = productService;
