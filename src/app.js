const express = require('express');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');

// Create Express application
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/', userRoutes);

// Error handling middleware (must be last)
app.use(errorHandler);

module.exports = app;