var passport = require('passport');
var mongoose = require('mongoose');
var Utilisateur = mongoose.model('Utilisateur');

module.exports.listUsers = function(req, res) { // A protéger
	Utilisateur.find({}, function(err, utilisateur){
		if (err)
			res.send(err);
		res.json(utilisateur);
	});
};
//retourne juste email
module.exports.listUsersByRole = function(req, res) {
	Utilisateur.find({role : req.params.role}, {email: true, role:true}, function(err, utilisateur){
		if (err)
			res.send(err);
		res.json(utilisateur)
	});
};


module.exports.getUser = function(req, res) {
	Utilisateur.findById(req.params.utilisateurId, function(err, utilisateur){
		if (err)
			res.send(err);
		res.json(utilisateur);
	});
};

module.exports.updateUser=function(req, res) {
	var newUser=req.body;
	delete newUser._id;
	Utilisateur.findOneAndUpdate({_id: req.params.utilisateurId }, newUser, {new: true}, function(err, utilisateur){
		if (err)
			res.send(err);
		res.json(utilisateur);

	});
};

module.exports.deleteUser=function(req,res){
	Utilisateur.remove({ _id: req.params.utilisateurId }, function(err, utilisateur){
		if (err)
			res.send(err);
		res.json({message: 'L\'Utilisateur a bien été supprimé'});
	});
};

