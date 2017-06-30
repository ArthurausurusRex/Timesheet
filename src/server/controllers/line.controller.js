var mongoose = require('mongoose');
var User = mongoose.model('User');
var TimeLine = mongoose.model('TimeLine');

module.exports.getTimeLinesByMonth = function(req,res) {
    TimeLine.find({email : req.user.email, month : req.params.month}, function (err, timeLine){
        if(err)
            res.send(err);
        res.json(timeLine)
    })
}

module.exports.createTimeLine = function(req,res){
    var newTimeLine = new TimeLine()
    newTimeLine.month = req.body.month;
    newTimeLine.line = req.body.line;
    newTimeLine.email = req.user.email;

    newTimeLine.save(function(err) {
        if(err){
            return res.send(err)
        }
        res.status(200);
        res.json({message : " TimeLine enregistrée avec succès" })

    });
}

module.exports.deleteTimeLine = function(req,res){
    TimeLine.remove({ _id: req.params._id}, function(err, timeLine){
        if (err)
            res.send(err);
        res.json({message: 'Timeline bien suprimée'})
    });
};

module.exports.updateTimeLine = function(req,res){
    TimeLine.findOneAndUpdate({_id: req.params._id},req.body, function(err, timeLine){
        if (err)
            res.send(err);
        res.json({message: 'TimeLine bien modifiée'})
    });
};






