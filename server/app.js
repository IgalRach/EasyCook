const  express = require('express');

const mongoose = require('mongoose');
const connectionString = ("mongodb+srv://easycook:asd123@easycook.8bkru.mongodb.net/<easycook>?retryWrites=true&w=majority");
mongoose.connect(connectionString,{useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const bosyParser = require('body-parser');
const recipes = require('./routes/recipes');
const geners = require('./routes/geners');
const accounts = require('./routes/accounts');
const bodyParser = require('body-parser');
const app = express();
app.use(bosyParser.urlencoded({extended:true}));
app.use('/recipes',recipes);
app.use('/accounts',accounts);
app.use('/geners',geners);





app.listen(8082);

