const express = require('express');
const router = express.Router();
const { getAllUsers, createUser, updateUser, deleteUser } = require('../controllers/userController');

// GET /users - Fetch all users
router.get('/users', getAllUsers);

// POST /users - Add a new user
router.post('/users', createUser);

// PUT /users/:id - Edit a user by ID
router.put('/users/:id', updateUser);

// DELETE /users/:id - Remove a user by ID
router.delete('/users/:id', deleteUser);

module.exports = router;