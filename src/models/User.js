const mongoose = require('mongoose');

/**
 * User Schema
 * Defines the structure for user documents in MongoDB
 */
const userSchema = mongoose.Schema({
    name: { 
        type: String, 
        required: true,
        trim: true
    },
    email: { 
        type: String, 
        required: true,
        trim: true
    },
    password: { 
        type: String, 
        required: true 
    },
}, {
    timestamps: true // Adds createdAt and updatedAt fields
});

/**
 * User Model
 * Mongoose model for users collection
 */
const User = mongoose.model('User', userSchema);

module.exports = User;