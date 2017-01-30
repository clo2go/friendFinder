// Dependencies
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// Set up Express App
var app = express();
var PORT = 3000;
// app.listen(process.env.PORT || 3000);


// LISTENER
app.listen(process.env.PORT || 3000, function() {
    console.log("App is hualing A on PORT: " + PORT);
});