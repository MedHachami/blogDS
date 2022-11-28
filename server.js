//requirements
const mongoose = require('mongoose')
let app = require('./app');
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT
const dbUrl = process.env.DB_URI

//dfinition du moteur de template
app.set('view engine','ejs')
app.set("views",'views')

// Etablire une connexion à la base de données
mongoose.connect(dbUrl, {useUnifiedTopology: true, useNewUrlParser: true })
    .then(()=>console.log('connection réussite'))
    .catch(()=> console.log('echec de connecter'))

//Démarage du serveur su le le port : PORT dans .env
app.listen(process.env.PORT,console.log("Server Started at port"+PORT))