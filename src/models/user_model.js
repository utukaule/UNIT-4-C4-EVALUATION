// const express = require("express");
// const app = express();


const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
},
    {
        timestamps: true,
        versionKey: false,
    }
);

userSchema.pre("save",(next)=>{
    const hash = bcrypt.hashSync(this.password,5);
    this.password = hash;
    return next();
})

userSchema.method.checkpassword = (password)=>{
    return bcrypt.hashSync(this.password);
}

module.exports = mongoose.model("user",userSchema);