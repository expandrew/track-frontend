// Set up
var express = require('express');
var app = express();
var morgan = require('morgan');                                 // logs requests to the console

// Configuration
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/angular/dist'));           // set the static files location
app.use(morgan('dev'));                                         // set up logging to console

// Listen
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
