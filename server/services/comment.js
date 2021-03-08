const Comment = require('../models/comment');
const Recipe = require('../models/recipe');

const deleteComment = async (id) => {
  const comment = await Comment.findById(id);
//   const recipe = await  Recipe.findById(req.params.recipeid).populate('comments', null, { _id: id }).remove();
//   console.log('recipe',recipe);
//const commentsInRecipes= await Recipe.findOne({comments: comments});
// var recipe= Recipe.findById(comment.recipe);
var recipeComments = recipe.comments;

var tryk = recipeComments["comment.recipe"];
console.log(tryk);
// for(var i=0; i<recipeComments.length; i++){
//     if( id === recipeComments[i]._id )
    
// }

  if (!comment)
      return null;
 // await comment.remove();
}


module.exports = {
    deleteComment,
};
