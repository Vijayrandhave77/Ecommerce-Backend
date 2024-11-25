const mongoose = require('mongoose');

const accessdataSchema = mongoose.Schema({
    img1:String,
    img2:String,
    name:String,
    brand:String,
    price:Number,
    return:Number,
    color:String
})

module.exports = mongoose.model('AccessData',accessdataSchema);