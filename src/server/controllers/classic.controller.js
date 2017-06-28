var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.listUsers = function(req, res) {
	 // A protéger
	User.find({}, function(err, user){
		if (err)
			res.send(err);
		res.json(user);
	});
};
//retourne juste email
module.exports.listUsersByRole = function(req, res) {
	User.find({role : req.params.role}, {email: true, role:true}, function(err, user){
		if (err)
			res.send(err);
		res.json(user)
	});
};

module.exports.listUsersByManager = function(req, res){
	User.find({manager : req.params.manager}, {email: true}, function(err,user){
		ir (err)
			res.send(err);
		res.json(user)
	});
};


module.exports.getUser = function(req, res) {
	User.findById(req.params.userId, function(err, user){
		if (err)
			res.send(err);
		res.json(user);
	});
};

module.exports.updateUser=function(req, res) {
	var newUser=req.body;
	delete newUser._id;
	User.findOneAndUpdate({_id: req.params.userId }, newUser, {new: true}, function(err, user){
		if (err)
			res.send(err);
		res.json(user);

	});
};

module.exports.deleteUser=function(req,res){
	User.remove({ _id: req.params.userId }, function(err, user){
		if (err)
			res.send(err);
		res.json({message: 'L\'Utilisateur a bien été supprimé'});
	});
};

