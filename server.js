var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var passport = require('passport');
var cors = require('cors');

var Utilisateur = require('./src/server/models/utilisateur');

mongoose.connect('mongodb://localhost:27017/timesheet'); // connect to our database

require('./src/server/config/passport')
var routesApi = require('./src/server/routes/index');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));






var port = process.env.PORT || 8080;        // set our port


app.use(passport.initialize());


// use it before all route definitions
app.use(cors({origin: 'http://localhost:4200'}));
app.use('/api', routesApi);


app.listen(port);
console.log('Magic happens on port ' + port);