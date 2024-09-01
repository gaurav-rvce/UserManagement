const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define routes for user operations

// Route to register a new user
router.post('/register', userController.registerUser);

// Route to log in an existing user
router.post('/login', userController.loginUser);

// Route to update user profile by username
router.put('/:username', userController.updateUserProfile);

module.exports = router;