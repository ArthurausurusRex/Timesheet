var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.login = function(req, res) {

 passport.authenticate('local', function(err, user, info){
    var token;

    if (err) {
      res.status(404).json({message : "Mauvais email ou Mot de passe"});
      return;
    }

    if(user){
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      })
      
    } else {
      res.status(401)
      res.json({message : "Mauvais email ou Mot de passe"});

      
    }
  } ) (req, res);

};