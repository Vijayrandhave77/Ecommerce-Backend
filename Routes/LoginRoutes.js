const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.json())
const signin = require('../Models/SigninSchema')
const { jwtAuthMiddleware, generateToken } = require("../JWT");


router.post('/api/user/login',async(req,res)=>{
    try{
        const {userEmail,userPwd} = req.body;
         const user  = await signin.findOne({userEmail:userEmail});
         if(! user || !(await user.comparePassword(userPwd))){
            return res.status(401).json({error:"invalid userEmail or userPwd"})
         }
         const payload = {
            id:user.id,
            userEmail:user.userEmail
         }
         const token = generateToken(payload);
         res.cookie('jwtToken',token,{
            maxAge: 3600000, // 1 hour in milliseconds
            httpOnly: true,
            secure: true,  
            sameSite: 'Strict', 
          });
          res.json({token})
        }catch(err){
        res.status(500).json({error:"internal server error"})
    }
});


module.exports = router;