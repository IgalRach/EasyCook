const  express = require('express');
//--------------------------------Database Connection--------------------------------------------------
const mongoose = require('mongoose');
const connectionString = ("mongodb+srv://easycook:asd123@easycook.8bkru.mongodb.net/<easycook>?retryWrites=true&w=majority");
mongoose.connect(connectionString,{useNewUrlParser: true},{ useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//-----------------------------------End of Database Connection----------------------------------------
const recipes = require('./routes/recipes');
const geners = require('./routes/geners');
const accounts = require('./routes/accounts');
const comments = require('./routes/comments');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use('/recipes',recipes);
app.use('/accounts',accounts);
app.use('/geners',geners);
app.use('/comments',comments);





app.listen(8082);

