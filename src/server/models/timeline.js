var mongoose = require('mongoose');

var timeLineSchema = new mongoose.Schema({
    email : String,
    line : Object,
    month : {
        type: Number,
        required : true,
    }
})

mongoose.model('TimeLine', timeLineSchema)