const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  db.getUser(userId, (err, user) => {
    if (err) {
      console.error(err); // Log the error for debugging
      res.status(500).json({ error: 'Failed to fetch user' }); // Send an error response
    } else if (!user) {
      res.status(404).json({ error: 'User not found' }); // Handle user not found
    } else {
      res.json(user);
    }
  });
});