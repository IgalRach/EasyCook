const Account = require('../models/account');

const create = (req,res)=>{
    const account = new Account({ 
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        profilePicture: req.body.type,
        // array of recipes
    });

    account.save().then(() => {
        res.redirect('/accounts');
    }).catch(error => {
        res.send('failed');
    });
}

const get = (req,res)=>{
    Account.find().then(results => {
        res.json(results);
    });
}

const getByTitle = (req,res)=>{
    Account.findOne({
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