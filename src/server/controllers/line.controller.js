var mongoose = require('mongoose');
var User = mongoose.model('User');
var TimeLine = mongoose.model('TimeLine');

module.exports.getTimeLinesByMonth = function(req,res) {
    TimeLine.find({email : req.user.email, month : req.params.month}, function (err, timeLine){
        if(err)
            res.send(err);
        res.json(timeLines)
    })
}

module.exports.createTimeLine = function(req,res){
    var newTimeLine = new TimeLine()

    newTimeLine.month = req.body.month;
    newTimeLine.line = req.body.line;
    newTimeLine.user = req.user.email;

    newTimeLine.save(function(err) {
        if(err){
            return res.send(err)
        }
        res.status(200);
        res.json({message : " TimeLine enregistrée avec succès" })

    });
}



