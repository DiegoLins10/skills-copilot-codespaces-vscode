// Create a web server
const express = require('express');
const app = express();

// Define a route for comments
app.get('/comments', (req, res) => {
  res.send('This is the comments route!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
