const Comment = require('../models/comment');
const Recipe = require('../models/recipe');

const CommentService = require('../services/comment');

const create = async (req,res)=>{
    const comment = await CommentService.create(req);
    res.json(comment);
}
//get
const get = async (req,res)=>{
    await Recipe.findById(req.params.recipeId).populate('comments').exec(function(err, docs) {
        if (err) console.log(err.stack||err);
        res.json(docs.comments);
    });
}

//getById
const getById = async (req,res)=>{
    Recipe.findById(req.params.recipeid).populate('comments', null, { _id: req.params.commentid }).exec(function(err, docs) {
           if (err) console.log(err.stack||err);
           res.json(docs.comments);
    })
}

const remove = async (req,res)=>{
    Recipe.findById(req.params.recipeid).populate('comments', null, { _id: req.params.commentid }).exec(function(err, docs) {
           if (err) console.log(err.stack||err);
        //    console.log(docs.comments);
           res.json(req.params.recipeid,docs.comments);
    })
}

//remove
const remove2 = async (req,res)=>{
    try {
        var comment = await CommentService.deleteComment(req.params.commentid);

        res.send(comment);
      } catch (err) {
        res.status(500).send(err);
      }
}

module.exports ={create,get,getById,remove2}
    // ,getByTitle,update,remove}

