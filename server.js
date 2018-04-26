var express = require('express'); // grants access to the entire express API

// create a new express app
var app = express();

// Tell express which folder you want to serve
app.use(express.static('public'));

// start the server
app.listen(3000, function(){
  console.log('Express server is running on port 3000');
})
