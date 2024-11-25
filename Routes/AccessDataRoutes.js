const express = require('express')
const router = express.Router()
const accessData = require('../Models/accessdataSchema')

router.get('/api/accessdata',async(req,res)=>{
    try{
        const response = await accessData.find();
        res.status(200).json(response)
    }catch(err){
        res.status(500).json({error:"internal server error"})
    }
})

module.exports = router;