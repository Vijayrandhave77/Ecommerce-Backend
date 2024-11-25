const mongoose = require('mongoose');

const searchdataSchema = mongoose.Schema({
    img1:String,
    img2:String,
    name:String,
    brand:String,
    price:Number,
    return:Number,
    color:String,
    size:String,
})

module.exports = mongoose.model('searchData',searchdataSchema);