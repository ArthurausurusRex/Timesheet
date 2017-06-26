var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken'); 




var userSchema   = new mongoose.Schema({
  email : {
    type: String,
    unique: true,
    required: true
  },

  role: String,
  manager: String,
  hash: String,
  salt: String,

});

//Créer hash et salt en fonction du mdp
userSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

//Verifier le mdp entré 
userSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
  return this.hash === hash;
};

userSchema.methods.generateJwt = function() { //permet de créer un toekn pour l'expiration
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    role: this.role,
    exp: parseInt(expiry.getTime() / 1000),
  }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

mongoose.model('User', userSchema); 
