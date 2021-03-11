const express = require('express');
const app = express();
const server = require('http').createServer(app);
const socketIo = require('socket.io');
const io = socketIo(server);
const bodyParser = require('body-parser');

const recipes = require('./routes/recipes');
const categories = require('./routes/categories');
const comments = require('./routes/comments');
const cookingTerms = require('./routes/cookingTerms');
const category = require('./routes/category');



var cors = require('cors');
app.use(cors());

//--------------------------------Database Connection--------------------------------------------------
const mongoose = require('mongoose');
const { isObject } = require('util');
const connectionString = ("mongodb+srv://easycook:asd123@easycook.8bkru.mongodb.net/<easycook>?retryWrites=true&w=majority");

mongoose.connect(connectionString, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//-----------------------------------End of Database Connection----------------------------------------



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use('/recipes', recipes);
app.use('/comments', comments);
app.use('/categories', categories);
app.use( cookingTerms);
app.use('/category', category);




const commentModel = require("./models/comment");
const recipeModel = require("./models/recipe");
const cookingTerm = require('./models/cookingTerm');


var count = 0;
io.on('connection', (socket) => {
  //counting the users that connected to the site.
  if (socket.handshake.headers.origin === 'http://localhost:3000') {
    count++;
    socket.broadcast.emit('count', count);

    console.log(count);

    socket.on('disconnect', () => {
      count--;
      socket.broadcast.emit('count', count);
      console.log(count);
    });
  }
  // End of counting users.
});




server.listen(8082);

