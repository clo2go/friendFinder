// Dependencies
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express(); 
var PORT = process.env.PORT || 8080; 

 htmlRoutes = require('./app/routing/html-routes.js'),
 apiRoutes  = require('./app/routing/api-routes.js'),

// BodyParser standard code
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
// ROUTES
// Static routes
app.use(express.static('app/public'));

// HTML routes
app.get('/', htmlRoutes.home);
app.get('/survey', htmlRoutes.survey);

// API routes
app.get('/api/friends', apiRoutes.get);
app.post('/api/friends', apiRoutes.post);
// LISTENER
app.listen(process.env.PORT || 8080, function() {
    console.log("App is hualing A on PORT: " + PORT);
});