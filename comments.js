// Create a web server
// Create a route for the comments page
// Create a route for the comments API
// Create a route for the comments API with a specific ID
// Create a route for the comments API with a specific ID and a specific comment ID

// Import the Express module
const express = require('express');

// Create an instance of the Express module
const app = express();

// Define the port number
const port = 3000;

// Define the comments array
const comments = [
  {
    id: 1,
    name: 'Alice',
    comment: 'I love your website!'
  },
  {
    id: 2,
    name: 'Bob',
    comment: 'Great job!'
  },
  {
    id: 3,
    name: 'Charlie',
    comment: 'Nice work!'
  }
];

// Create a route for the comments page
app.get('/comments', (req, res) => {
  res.send(comments);
});

// Create a route for the comments API
app.get('/api/comments', (req, res) => {
  res.send(comments);
});

// Create a route for the comments API with a specific ID
app.get('/api/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const comment = comments.find(c => c.id === id);

  if (!comment) {
    res.status(404).send('Comment not found');
  } else {
    res.send(comment);
  }
});

// Create a route for the comments API with a specific ID and a specific comment ID
app.get('/api/comments/:id/:commentId', (req, res) => {
  const id = parseInt(req.params.id);
  const commentId = parseInt(req.params.commentId);
  const comment = comments.find(c => c.id === id);

  if (!comment) {
    res.status(404).send('Comment not found');
  } else {
    const comment = comment.comments.find(c => c.id === commentId);

    if (!comment) {
      res.status(404).send('Comment not found');
    } else {
      res.send(comment);
    }
  }
});

// Start the web server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});