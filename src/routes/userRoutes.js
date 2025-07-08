const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();

/**
 * User Routes
 * Defines all endpoints for user operations
 */

// GET /users - Fetch all users
router.get('/', UserController.getAllUsers);

// POST /users - Add a new user
router.post('/', UserController.createUser);

// PUT /users/:id - Edit a user by ID
router.put('/:id', UserController.updateUser);

// DELETE /users/:id - Remove a user by ID
router.delete('/:id', UserController.deleteUser);

module.exports = router;