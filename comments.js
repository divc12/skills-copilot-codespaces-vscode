// Create web server
// Use express framework
// Create a router
// Create a route for /comments
// Send back a response with a JSON object containing the comments
// Listen on port 3000
// Start the server
// Save the file
// Open the terminal
// Run the server
// Open a browser
// Go to http://localhost:3000/comments

var express = require('express');
var app = express();
var router = express.Router();

router.get('/comments', function(req, res) {
  res.json({ comments: [{ author: 'John', body: 'This is a comment' }] });
});

app.use(router);

app.listen(3000, function() {
  console.log('Listening on port 3000');
});