const mongoose = require('mongoose');

const Category = require('../models/category');



const get=(req,res)=>{
    Category.find({})
    .exec()
    .then(docs => {
        
            res.status(201).json({
            message: categories
        });
    })
    .catch(er => {
        res.status(500).json({
            error: er
        })
    });

}

const create =(req,res)=>{
    const category = new Category({
        id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        createdAt: new Date(),
        createdBy: req.body.createdBy
    });

    category.save()
    .then(doc => {
        res.status(201).json({
            message: doc
        });
    })
    .catch(er => {
        res.status(500).json({
            error: er
        })
    });

}

module.exports = {create,get}