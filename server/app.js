const app = require('express')();
const server =require('http').createServer(app);
const socketIo = require('socket.io');


const bodyParser = require('body-parser');

const recipes = require('./routes/recipes');
const accounts = require('./routes/accounts');
const comments = require('./routes/comments');

// var cors = require('cors'); 
// app.use(cors());

  const io = socketIo(server/*,{
    cors:{
        origins:['http://localhost:4200','http://localhost:3001'],
        methods:["GET","POST"],
        credentials:false
    }
  }*/);


//--------------------------------Database Connection--------------------------------------------------
const mongoose = require('mongoose');
const { isObject } = require('util');
const connectionString = ("mongodb+srv://easycook:asd123@easycook.8bkru.mongodb.net/<easycook>?retryWrites=true&w=majority");

mongoose.connect(connectionString, { useNewUrlParser: true,useCreateIndex: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//-----------------------------------End of Database Connection----------------------------------------



app.use(bodyParser.urlencoded({ extended: true }));
app.use('/recipes', recipes);
app.use('/accounts', accounts);
app.use('/comments', comments);


//counting the users that connected to the site.
var count=0;
io.on('connection', (socket) => {
    if (socket.handshake.headers.origin === 'http://localhost:3001') {
        count++;
        socket.broadcast.emit('count',count);

        console.log(count);

        socket.on('disconnect',()=>{
            count--;
            socket.broadcast.emit('count',count);
            console.log(count);
        });
    }
});




server.listen(8082);

