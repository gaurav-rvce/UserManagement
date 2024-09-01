// Import required modules
const express = require('express');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');

// Create an instance of Express
const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse incoming JSON data
app.use(express.json());

// Define routes for user-related operations
app.use('/users', userRoutes);

// Start the server and listen on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});