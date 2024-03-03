const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./MVC/Route/Route');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3030;

// Enable CORS for all routes
app.use(cors());

// Parse JSON bodies
app.use(bodyParser.json());

// Route for handling user-related endpoints
app.use('/api', userRoutes);

// Welcome message for the root endpoint
app.get('/', (req, res) => {
  res.send("Welcome to WhatsApp");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
