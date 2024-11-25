const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const signinSchema  = mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true,
        unique:true
    },
    userPwd:{
        type:String,
        required:true
    }
})

signinSchema.pre('save',async function(next){
    const user = this;
    if(!user.isModified('userPwd')) return next();
    try{
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(user.userPwd,salt);
        user.userPwd = hashPassword;
        next();
    }catch(err){
         return next(err)
    }
});

signinSchema.methods.comparePassword = async function(candidatePassword){
    try{
        const isMatch = await bcrypt.compare(candidatePassword,this.userPwd);
        return isMatch;
    }catch(err){
        throw err;
    }
};


module.exports = mongoose.model('SignIn',signinSchema)