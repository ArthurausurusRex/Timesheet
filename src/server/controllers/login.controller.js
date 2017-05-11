var passport = require('passport');
var mongoose = require('mongoose');
var Utilisateur = mongoose.model('Utilisateur');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.login = function(req, res) {

 passport.authenticate('local', function(err, utilisateur, info){
    var token;

    if (err) {
      res.status(404).json({message : "Mauvais email ou Mot de passe"});
      return;
    }

    if(utilisateur){
      token = utilisateur.generateJwt();
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