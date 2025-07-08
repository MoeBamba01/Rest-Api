const User = require('../models/User');

/**
 * Get all users
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

/**
 * Create a new user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
const createUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

/**
 * Update a user by ID
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;
        const updatedUser = await User.findByIdAndUpdate(
            id, 
            { name, email, password }, 
            { new: true }
        );
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

/**
 * Delete a user by ID
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        await User.findByIdAndRemove(id);
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
};