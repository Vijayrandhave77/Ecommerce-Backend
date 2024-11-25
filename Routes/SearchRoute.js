const express = require('express')
const router = express.Router()
const searchData = require('../Models/searchSchema')

router.get('/api/searchdata',async(req,res)=>{
    try{
        const response = await searchData.find();
        res.status(200).json(response)
    }catch(err){
        res.status(500).json({error:"internal server error"})
    }
})

module.exports = router;