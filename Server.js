require('dotenv').config(); //Loading Environnement Server
const express = require('express');
const mongoose = require('mongoose');
const User = require('./Models/User');
const app = express();
const port = 3000;

// Connect to the database
mongoose
    .connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    console.log('Connected to the database');
    })
    .catch((error) => {
    console.error('Error connecting to the database:', error);
    });
// Middleware
    app.use(express.json());

// GET route: Return all users
app.get('/users', async (req, res) => {
    try {
    const users = await User.find();
    res.json(users);
    } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    }
});

  // POST route: Add a new user to the database
app.post('/users', async (req, res) => {
    try {
    const { name, age } = req.body;
    const user = new User({ name, age });
    const savedUser = await user.save();
    res.json(savedUser);
    } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    }
});

  // PUT route: Edit a user by ID
app.put('/users/:id', async (req, res) => {
    try {
    const { id } = req.params;
    const { name, age } = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, { name, age }, { new: true });
    res.json(updatedUser);
    } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    }
});

  // DELETE route: Remove a user by ID
app.delete('/users/:id', async (req, res) => {
    try {
    const { id } = req.params;
    await User.findByIdAndRemove(id);
    res.json({ message: 'User deleted successfully' });
    } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Starting Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });