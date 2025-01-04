const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUser(userId, (err, user) => {
    if (err) {
      // The error is not handled here, it should send an error response
      console.error(err);
    } else {
      res.json(user);
    }
  });
});