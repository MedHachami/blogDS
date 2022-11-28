const express=require("express");
const app = require("../app");
const {getPosts,getPost,addPost,updatePost,deletePost }=require("../controllers/postsController")

const router=express.Router();

// les routes post
router.get('/',getPosts)
router.get('/post/:id',getPost)
router.post('/post',addPost)
router.post('/post',updatePost)


module.exports=router