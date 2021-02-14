const  express = require('express');
const bosyParser = require('body-parser');
const recipes = require('./routes/recipes');
const geners = require('./routes/geners');
const accounts = require('./routes/accounts');
const app = express();
app.use(bosyParser.urlencoded({extended:true}));
app.use('/recipes',recipes);
app.use('/accounts',accounts);
app.use('/geners',geners);


app.listen(8082);

