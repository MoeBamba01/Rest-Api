const mongoose = require('mongoose');

/**
 * Connect to MongoDB database
 * @returns {Promise} Database connection promise
 */
const connectDatabase = async () => {
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
};

module.exports = connectDatabase;