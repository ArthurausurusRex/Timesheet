var mongoose = require('mongoose');

var timeLineSchema = new mongoose.Schema({
    num : Number,
    user : String,
    line : Object,
})

mongoose.model(TimeLine, timelineSchema)