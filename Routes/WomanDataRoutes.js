const express = require('express')
const router = express.Router()
const womanData = require('../Models/womandataSchema')

router.get('/api/womandata',async(req,res)=>{
    try{
        const response = await womanData.find();
        res.status(200).json(response)
    }catch(err){
        res.status(500).json({error:"internal server error"})
    }
})

module.exports = router;