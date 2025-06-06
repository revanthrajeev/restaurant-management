require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const connectDB = require('./db');  // your MongoDB connection module
const restaurantRoutes = require('./routes/restaurantRoutes');

const app = express();

// Use PORT from .env or default to 5001
const port = process.env.PORT || 5001;

// Connect to MongoDB
connectDB();

// Middlewares
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from /public folder
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Session setup
app.use(session({
  secret: '123',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 24 * 60 * 60 * 1000 }, // 1 day
}));

// Disable caching on all responses
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.setHeader('Expires', '-1');
  res.setHeader('Pragma', 'no-cache');
  next();
});

// Your routes
app.use(restaurantRoutes);

// Start server
app.listen(port, () => {
  console.log(`RMS app listening on port ${port}!`);
});
