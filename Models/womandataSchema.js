const mongoose = require('mongoose');

const womandataSchema = mongoose.Schema({
    img1:String,
    img2:String,
    name:String,
    brand:String,
    price:Number,
    return:Number,
    color:String,
    size:String,
})

module.exports = mongoose.model('WomanData',womandataSchema);