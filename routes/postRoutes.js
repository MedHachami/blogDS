const express=require("express");
const app = require("../app");
const {getPosts,getPost,addPost,updatePost,editPost,deletePost }=require("../controllers/postsController")

const router=express.Router();

// les routes post
router.get('/',()=>{console.log('hello');})

module.exports=router