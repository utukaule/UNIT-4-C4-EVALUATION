const User = require("../models/user_model");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const generateToken = (user)=>{
    return jwt.sign({user}, process.env.SECRET_KEY);
}

const register = async(req,res)=>{
    try {
        let user = await User.findOne({email: req.body.email});

        //we are looking for email if it exists then this below msg will show
        if(user){
            return res.status(400).send({message:"This is email is already exists"});
        }

        //here if there is a new user then it will allow it or create it
        user = await User.create(req.body);

        const token = generateToken(user);
        return res.status(200).send({user,token});
    }
    catch(err){
        res.status(400).send({message:err.message});
    }
}



const login = async(req,res)=>{
    try {
        let user = await User.findOne({email: req.body.email});

        //we are looking for email if it exists then this below msg will show
        if(!user){
            return res.status(400).send({message:"wrong email or password"});
        }

        const match = user.checkpassword(req.body.password);
        if(!match){
            return res.status(400).send({message:"wrong email or password"});
        }

        const token = generateToken(user);
        return res.status(200).send({user,token});
    }
    catch(err){
        res.status(400).send({message:err.message});
    }
}



module.exports = {register, generateToken, login}