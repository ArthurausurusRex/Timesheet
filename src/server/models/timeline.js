var mongoose = require('mongoose');

var timeLineSchema = new mongoose.Schema({
    email : { 
        type: String,
        required : true,
    },
    line : Object,
    month : {
        type: Number,
        required : true,
    },
    year : {
        type: Number,
        required: true,
    }
})

mongoose.model('TimeLine', timeLineSchema)