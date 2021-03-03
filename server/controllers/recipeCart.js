const RecipeCart = require('../models/recipeCart');
const mongoose = require('mongoose');

const get = (req,res)=>{
    
    const userId = req.params.userId;
    RecipeCart.find({user: userId})
    .select('id user cart')
    .populate('cart.recipe', 'name recipePic')
    .exec()
    .then(recipeCart => {
        res.status(200).json({
            message: recipeCart
        })
    })
}



const update=(req,res)=>{
    RecipeCart.findOne({user: req.body.user})
    .exec()
    .then(recipeCart => {
    
        if(recipeCart){
    
            const item = recipeCart.cart.find(item => item.recipe == req.body.recipe);
            let where, action, set;
            if(item){
                action = "$set";
                where = { "user": req.body.user, "cart.recipe": req.body.recipe};
                set = "cart.$";
            }else{
                action = "$push";
                where = { "user": req.body.user };
                set = "cart"
            }
    
            RecipeCart.findOneAndUpdate(where, {
                [action] : {
                    [set] : {
                        id: item ? item.id : new mongoose.Types.ObjectId(),
                        recipe: req.body.recipe,                        
                    }
                }
            })
            .exec()
            .then(newItem => {
                res.status(201).json({
                    message: newItem
                    })
            })
            .catch(error => {
                res.status(400).json({
                    message: error
                })
            })
        }
    });
}

const create=(req,res)=>{
    const newRecipeCart = new RecipeCart({
        id: new mongoose.Types.ObjectId(),
        user: req.body.user,
        cart: [
            {
                id: new mongoose.Types.ObjectId(),
                recipe: req.body.recipe,
                rating: Number    
            }
        ]
    });
        
    newRecipeCart
    .save()
    .then(newCart => {
        res.status(201)
        .json({
            message: newCart
        })
    })
    .catch(error => {
        res.status(500).json({
            error : error
        });
    });

}

const remove=(req,res)=>{
    RecipeCart.findByIdAndDelete(req.params.id).then(()=>
    res.send('success')).catch(()=>
    res.send('Failure'));
}

module.exports = {update,get,create,remove}