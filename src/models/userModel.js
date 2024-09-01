const mongoose = require('mongoose');

// Define the schema for user data
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Create a Mongoose model based on the userSchema
const User = mongoose.model('User', userSchema);

// Export the User model for use in other parts of the application
module.exports = User;