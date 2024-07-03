// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Serve static files (CSS, JS)
app.use(express.static('public'));

// Route to display the form and transformed data
app.get('/', (req, res) => {
  res.render('index', { transformedData: null });
});

// Route to handle transformed data (Placeholder for now)
app.post('/submit', (req, res) => {
  const transformedData = "This will be the transformed data placeholder.";
  res.render('index', { transformedData });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
