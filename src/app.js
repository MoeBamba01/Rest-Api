const express = require('express');
const userRoutes = require('./routes/userRoutes');
const { errorHandler } = require('./middleware/errorHandler');

/**
 * Express Application Configuration
 * Sets up middleware, routes, and error handling
 */
const createApp = () => {
    const app = express();

    // Middleware
    app.use(express.json());

    // Routes
    app.use('/users', userRoutes);

    // Error handling middleware (must be last)
    app.use(errorHandler);

    return app;
};

module.exports = createApp;