
//requirements
const express = require('express')
const app=express();
const postRoutes =  require('./routes/postRoutes')
const methodOverride = require('method-override')
//utiliser les middleware nissecaires
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))
app.use(methodOverride('_method'))


//Definition des routes
app.use('/',postRoutes)

module.exports=app