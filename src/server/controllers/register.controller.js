var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};


module.exports.create = function(req, res) {


  var newUSer = new USer();

  newUSer.email = req.body.email;
  newUSer.role = req.body.role;
  newUSer.setPassword(req.body.password);


  newUSer.save(function(err) {
    var token;
    if (err) {
      return res.json({success: false, message: 'Utilisateur deja existant' })
    } 
    token = newUSer.generateJwt();
    res.status(200);
    res.json({
      "message" : "Utilisateur créé avec succès",
      "token" : token
    });
  });

};