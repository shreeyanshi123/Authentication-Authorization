const mongoose=require('mongoose');
const validator=require('validator')
const LoginSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Provide a valid email!"],
    },
    password:{
        type:String,
        required:true,
    }
});

module.exports=mongoose.model("Login",LoginSchema);