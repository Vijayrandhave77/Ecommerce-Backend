const mongoose = require('mongoose');
require('dotenv').config()

const URL = process.env.MONGODB_URL
const ONLINEURL = process.env.ONLINEURL
mongoose.connect(ONLINEURL);

const db = mongoose.connection;

db.on("connected",()=>{
    console.log("mongodb server is connected")
})

db.on("error",(err)=>{
    console.log(err)
})

db.on("disconnected",()=>{
    console.log("mongodb server is disconnected")
})


module.exports = db;