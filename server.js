require('dotenv').config();
const createApp = require('./src/app');
const Database = require('./src/config/database');

/**
 * Server Entry Point
 * Handles server startup and database connection
 */
const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        // Connect to database
        await Database.connect();

        // Create Express app
        const app = createApp();

        // Start server
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

// Handle graceful shutdown
process.on('SIGINT', async () => {
    console.log('\nShutting down gracefully...');
    await Database.disconnect();
    process.exit(0);
});

process.on('SIGTERM', async () => {
    console.log('\nShutting down gracefully...');
    await Database.disconnect();
    process.exit(0);
});

startServer();