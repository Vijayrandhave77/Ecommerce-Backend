const express = require('express')
const router = express.Router()
const watchData = require('../Models/watchdataSchema')

router.get('/api/watchdata',async(req,res)=>{
    try{
        const response = await watchData.find();
        res.status(200).json(response)
    }catch(err){
        res.status(500).json({error:"internal server error"})
    }
})

module.exports = router;