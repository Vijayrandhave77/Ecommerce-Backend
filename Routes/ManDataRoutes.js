const express = require('express')
const router = express.Router()
const manData = require('../Models/mandataSchema')

router.get('/api/mandata',async(req,res)=>{
    try{
        const response = await manData.find();
        res.status(200).json(response)
    }catch(err){
        res.status(500).json({error:"internal server error"})
    }
})

module.exports = router;