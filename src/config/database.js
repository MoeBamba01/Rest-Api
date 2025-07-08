const mongoose = require('mongoose');

/**
 * Database Configuration
 * Handles MongoDB connection setup and error handling
 */
class Database {
    static async connect() {
        try {
            await mongoose.connect(process.env.DB_CONNECTION, { 
                useNewUrlParser: true, 
                useUnifiedTopology: true 
            });
            console.log('Connected to the database');
        } catch (error) {
            console.error('Error connecting to the database:', error);
            process.exit(1);
        }
    }

    static async disconnect() {
        try {
            await mongoose.disconnect();
            console.log('Disconnected from the database');
        } catch (error) {
            console.error('Error disconnecting from the database:', error);
        }
    }
}

module.exports = Database;