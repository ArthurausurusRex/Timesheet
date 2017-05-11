var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var Utilisateur = mongoose.model('Utilisateur');


passport.use(new LocalStrategy({
    usernameField: 'email'
  },
  function(username, password, done) {
    Utilisateur.findOne({ email: username }, function (err, utilisateur) {
      if (err) { return done(err); }
      // Return if user not found in database
      if (!utilisateur) {
        return done(null, false, {
          message: 'Mauvais eMail'
        });
      }
      // Return if password is wrong
      if (!utilisateur.validPassword(password)) {
        return done(null, false, {
          message: 'Mauvais mot de passe'
        });
      }
      // If credentials are correct, return the user object
      return done(null, utilisateur);
    });
  }
));