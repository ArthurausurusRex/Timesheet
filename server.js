var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var User = require('./src/server/models/user');
var TimeLine = require ('./src/server/models/timeline');
var passport = require('passport');
var cors = require('cors');



var serverConfig  = require('./src/server/config/config.server')


mongoose.connect(serverConfig.db.uri); // connect to our database

require('./src/server/config/passport')
var routesApi = require('./src/server/routes/index');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


var port = serverConfig.portApi;        // set our port


app.use(passport.initialize());


// use it before all route definitions
app.use(cors({origin: serverConfig.adrFront}));
app.use('/api', routesApi); 


app.listen(port);
console.log('Magic happens on port ' + port);