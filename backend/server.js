require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const passport = require('passport');

// Import routes
const apiRoutes = require('./routes/apiRoutes');

// Create an instance of express
const app = express();

// Middleware
app.use(morgan('dev')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

// API routes
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Add this in your routes file or server.js
app.get('/api/test', (req, res) => {
  res.send({ message: 'Backend connected successfully!' });
});

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

































// const express = require('express');
// const session = require('express-session');
// const SQLiteStore = require('connect-sqlite3')(session);
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');

// const sequelize = require('./config/database');
// const apiRoutes = require('./routes/apiRoutes');
// const index = require('./models/index');

// const app = express();

// app.use(express.static('public'));
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());

// // Create an SQLiteStore instance
// const store = new SQLiteStore({
//   db: 'sessions.db', // Provide the SQLite database file name
// });

// // Handle store errors, if any
// store.on('error', (error) => {
//   console.error('Session store error:', error);
// });

// app.use(session({
//   secret: 'yP#9!Ym2^W8@LsEzQ',
//   resave: false,
//   saveUninitialized: true,
//   store: store, // Use the SQLiteStore for session storage
//   cookie: { 
//     secure: false, 
//     maxAge: 1000 * 60 * 60,
//   },
// }));

// const corsOptions = {
//   origin: 'http://localhost:3000',
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
//   optionsSuccessStatus: 204,
// };
// app.use(cors(corsOptions));

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// app.use('/api', apiRoutes);

// sequelize.sync()
//   .then(() => {
//     console.log('Database is connected.');
//     console.log('***************************');
//   })
//   .catch((error) => {
//     console.error('Database sync error:', error);
//   });

// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
