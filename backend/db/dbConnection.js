const sql = require('mssql');
const dbConfig = require('../config/dbConfig');

const dbConnection = new sql.ConnectionPool(dbConfig)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL');
    return pool;
  })
  .catch(err => console.error('Database Connection Failed! ', err));

module.exports = dbConnection;
