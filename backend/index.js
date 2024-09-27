const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const dbConnection = require('./database/dbConnection.js');
const loginRouter = require('./routes/login.js');
const signupRouter = require('./routes/signup.js');

dotenv.config({ path: './config.env' });

const app = express();

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
dbConnection();

// Routes
app.use('/login', loginRouter);
app.use('/signup', signupRouter);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
