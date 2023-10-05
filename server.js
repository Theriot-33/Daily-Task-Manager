// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

//API Routes
const taskRoutes = require('./route/taskRoutes');
app.use('/api', taskRoutes);

// MongoDB Connection
const MONGODB_URI = 'YOUR_MONGODB_CONNECTION_STRING';
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Authentication Middleware
const authMiddleware = require('./auth');

// Sample login route to create and return JWT tokens
app.post('/api/login', (req, res) => {
  // ... Implement your login logic here

  // After successful login, create a JWT token
  const user = { id: '12345', username: 'user123' };
  const token = jwt.sign({ user }, 'YOUR_SECRET_KEY', { expiresIn: '1h' });

  res.json({ token });
});

// Protected route example using the authMiddleware
app.get('/api/protected', authMiddleware, (req, res) => {
  // The user object is attached to the request by the authMiddleware
  // You can access the user's information here
  const user = req.user;
  res.json({ message: 'This is a protected route.', user });
});
  
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
