var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};


module.exports.create = function(req, res) {


  var newUser = new User();

  newUser.email = req.body.email;
  newUser.role = req.body.role;
  newUser.setPassword(req.body.password);

  newUser.save(function(err) {
    var token;
    if (err) {
      return res.json({success: false, message: 'Utilisateur deja existant' })
    } 
    token = newUser.generateJwt();
    res.status(200);
    res.json({
      "message" : "Utilisateur créé avec succès",
      "token" : token
    });
  });

};