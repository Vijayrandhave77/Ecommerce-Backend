const express = require('express')
const router = express.Router()
const shoesData = require('../Models/shoesdataSchema')

router.get('/api/shoesdata',async(req,res)=>{
    try{
        const response = await shoesData.find();
        res.status(200).json(response)
    }catch(err){
        res.status(500).json({error:"internal server error"})
    }
})

module.exports = router;