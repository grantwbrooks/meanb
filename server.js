// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();

// //Morgan console logging
// let morgan = require("morgan");
// app.use(morgan('dev'));

// //sessions
// var session = require('express-session');
// app.use(session({secret: 'codingdojorocks'}));  // string for encryption
// // this is how you use sessions in a function: req.session.name = req.body.name;


// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Because we are not rendering and are sending json instead
app.use(bodyParser.json());

// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './angularBelt/dist')));

// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');

//Routes Here:
// store the function in a variable
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);


// Setting our Server to Listen on Port: 1337
app.listen(1337, function() {
    console.log("listening on port 1337 for Belt");
})