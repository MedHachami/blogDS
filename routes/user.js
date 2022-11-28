const express=require("express");
const app = require("../app");
const User = require('../models/postModel')
const router=express.Router();
router.get('/register',(req,res)=>{
    res.render("login")
})

module.exports=router