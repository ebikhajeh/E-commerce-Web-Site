const dbConfig = {
    user: 'sa',
    password: '12345678',
    server: 'localhost',  // e.g., localhost or database server URL
    database: 'ecommerceDB',
    options: {
        encrypt: false, // If you're on Azure, else set to false
        trustServerCertificate: false // True for local development, false for production
    }
    // Additional options can be added here
};

module.exports = dbConfig;
