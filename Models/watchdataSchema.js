const mongoose = require('mongoose');

const watchdataSchema = mongoose.Schema({
    img1:String,
    img2:String,
    name:String,
    brand:String,
    price:Number,
    return:Number,
    color:String
})

module.exports = mongoose.model('WatchData',watchdataSchema);