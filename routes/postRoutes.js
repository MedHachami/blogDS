const express=require("express");
const app = require("../app");
const {getPosts,getPost,addPost,editPost,updatePost,deletePost }=require("../controllers/postsController")

const router=express.Router();

// les routes post
router.get('/',getPosts)
router.get('/:id',getPost)
router.get('/posts/edit/:id',editPost)
router.post('/post',addPost)
router.post('/post',updatePost)
router.delete('/:id',deletePost)


module.exports=router