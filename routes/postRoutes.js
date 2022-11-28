const express=require("express");
const app = require("../app");
const Post = require('../models/postModel')
const {getPosts,getPost,addPost,editPost,updatePost,deletePost }=require("../controllers/postsController")

const router=express.Router();

// les routes post
router.get('/posts/edit/:id',editPost)
router.get('/posts/new', (req,res)=>{
    res.render('posts/new',{post:new Post()})
})
router.get('/',getPosts)
router.get('/:id',getPost)

router.post('/posts',addPost)
router.put('/posts/:id',updatePost)

router.delete('/:id',deletePost)


module.exports=router