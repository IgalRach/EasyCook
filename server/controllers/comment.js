const Comment = require('../models/comment');

const create = (req,res)=>{
    const comment = new Comment({ 
        //AccountName: , need to take it from the account that connected
        commentbody: req.body.commentbody,
    });

    recipe.save().catch(error => {
        res.send('creation was failed');
    });
}

const get = (req,res)=>{
    Recipe.find().then(results => {
        res.json(results);
    });
}

const getByTitle = (req,res)=>{
    Recipe.findOne({
        'title': { $regex: `.*${req.params.recipeTitle}.*` }
    }).then(recipe => {
        res.json(recipe);
    });
}

const update =(req,res)=>{
    res.send('Put entry point');
}

const remove = (req,res)=>{
    res.send('Delete entry point');
}
module.exports ={create,get,getByTitle,update,remove}