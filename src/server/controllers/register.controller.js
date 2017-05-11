var passport = require('passport');
var mongoose = require('mongoose');
var Utilisateur = mongoose.model('Utilisateur');
var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};


module.exports.create = function(req, res) {


  var nvlUtilisateur = new Utilisateur();

  nvlUtilisateur.email = req.body.email;
  nvlUtilisateur.role = req.body.role;
  nvlUtilisateur.setPassword(req.body.password);


  nvlUtilisateur.save(function(err) {
    var token;
    if (err) {
      return res.json({success: false, message: 'Utilisateur deja existant' })
    } 
    token = nvlUtilisateur.generateJwt();
    res.status(200);
    res.json({
      "message" : "Utilisateur créé avec succès",
      "token" : token
    });
  });

};