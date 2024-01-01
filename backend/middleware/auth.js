// middleware/auth.js
require('dotenv').config();
const jwt = require('jsonwebtoken');    

const verifyToken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]; // Get the token from the Authorization header
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
        req.user = decoded; // Attach the user details to the request object
        next();
    } catch (error) {
        res.status(401).json({ message: "Authentication failed" });
    }
};
module.exports = verifyToken;
