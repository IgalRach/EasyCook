const express = require("express");
const router = express.Router();

const RecipeController = require("../controllers/recipe");

router.get("/recipies", RecipeController.getAllRecepies);
router.get("/recipies/:recipeName",RecipeController.getRecipeDataByName);
router.get("/reciperating/:id", RecipeController.getRecipeRatingById);
router.get("/recipies/:recipeName/comments", RecipeController.getRecipeComments);
router.get(
  "/recipies/reciperating/:recipeName",
  RecipeController.getTodayRecipeRatingByName
);
router.get(
  "/recipies/historicalreciperating/:recipeName",
  RecipeController.getHistoricalRecipeRatingByName
);

router.post("/recipies", RecipeController.createRecipe);
router.post("/recipies/:recipeName/comment", RecipeController.addCommentToRecipe);

router.put("/recipies/update", RecipeController.updateRecipe);

router.delete("/recipies/:recipeName", RecipeController.deleteRecipe);


module.exports = router;