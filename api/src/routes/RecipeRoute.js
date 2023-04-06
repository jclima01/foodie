const { Router } = require("express");
const recipeRouter = Router();
require("dotenv").config();

const {
  getRecipeHandler,
  postRecipeHandler,
  getRecipebyQueryHandler
} = require("../handlers/RecipeHandlers.js");



recipeRouter.get("/", getRecipebyQueryHandler);
recipeRouter.get("/:idRecipe", getRecipeHandler);

recipeRouter.post("/", postRecipeHandler);

module.exports = recipeRouter;
