const pug = require('pug');
const Post=require("../models/postModel")

async function getPosts(req,res){
    const posts = await Post.find()
    res.render('posts/index',{postes:posts,title:'Blog'})
}

async function getPost(req,res){
    //Recupérer un post definie par son _id dans myBlogdb et envoyer post.pug au client
    const post = await Post.findById(req.params.id)
    if(post == null)res.redirect('/')
    res.render('posts/show',{post:post})
}

async function addPost(req,res){
   //Créer un nouveau post dans myBlogdb et rediriger le client vers /
   req.post = new Post()
   let post = req.post
    post.titre = req.body.titre
    post.auteur = req.body.auteur
    post.resume = req.body.resume
    post.content = req.body.contenu

    post = await post.save()
    res.redirect(`/`)
}

async function editPost(req,res){
    const post = await Post.findById(req.params.id)
    res.render('posts/edit', { post: post })
}
async function updatePost(req,res){
    
    req.post = await Post.findById(req.params.id)
    let post = req.post
    post.titre = req.body.titre
    post.auteur = req.body.auteur
    post.resume = req.body.resume
    post.content = req.body.contenu

    post = await post.save()
    res.redirect(`/`)
}

async function deletePost(req,res){
    //Suprimer un post et rediriger le client vers /
    await Post.findByIdAndDelete(req.params.id)
    res.redirect('/')
}

module.exports={getPosts,getPost,addPost,editPost,updatePost,deletePost}