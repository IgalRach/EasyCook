const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
app.use(cors());
//--------------------------------Database Connection--------------------------------------------------
const mongoose = require('mongoose');
const connectionString = ("mongodb+srv://easycook:asd123@easycook.8bkru.mongodb.net/<easycook>?retryWrites=true&w=majority");

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//-----------------------------------End of Database Connection----------------------------------------
const recipes = require('./routes/recipes');
const geners = require('./routes/geners');
const comments = require('./routes/comments');
const users= require('./routes/users');
const admins=require('./routes/admins');
const recipeCarts=require('./routes/recipeCarts');
const categories=require('./routes/categories');


app.use(bodyParser.urlencoded({ extended: true }));
app.use('/recipes', recipes);
app.use('/admins', admins);
app.use('/geners', geners);
app.use('/comments', comments);
app.use('./users', users);
app.use('./recipeCarts',recipeCarts);
app.use('./categories',categories);

app.use(express.json());
app.use((req,res,next)=>{
    res.status(404).json({
        massage: 'Not Found'
    })
})


module.exports=app;
app.listen(8082);