const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

// In-memory storage for ratings and comments
let ratings = [];

// Endpoint to handle POST requests for ratings and comments
app.post('/submit', (req, res) => {
  const { rating, comment } = req.body;

  if (rating !== undefined && comment !== undefined) {
    // Store the rating and comment in the array (in-memory)
    ratings.push({ rating, comment });
    res.status(200).json({ success: true, message: 'Rating submitted successfully.' });
  } else {
    res.status(400).json({ success: false, message: 'Invalid request. Rating and comment are required.' });
  }
});

// Endpoint to retrieve all ratings and comments
app.get('/ratings', (req, res) => {
  res.status(200).json(ratings);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
