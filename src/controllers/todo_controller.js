const express = require("express");
const router = express.Router();

const todo = require("../models/todo_models");

router.get("/",async(req,res)=>{
    try{
        const todo = await todo.fing().lean().exec();
        return res.status(200).send(todo);
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})
module.exports = router;