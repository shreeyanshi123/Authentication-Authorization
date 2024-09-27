const mongoose=require('mongoose');
const validator=require('validator');

const SignupSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:[3,"Name must contain atleast 3 characters"],
        maxLength:[30,"Name must not exceed 30 characters"],
    },

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

module.exports=mongoose.model("Signup",SignupSchema);