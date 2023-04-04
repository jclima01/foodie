const axios = require("axios");
const { Recipe } = require("../db");
const { Op } = require("sequelize");
require("dotenv").config();
const API_KEY = process.env.API_KEY;
exports.getRecipe = async (idRecipe) => {
  try {
    const recipeDB = await Recipe.findByPk(idRecipe);

    if (!recipeDB) {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${API_KEY}`
      );
      const { id, title, summary, healthScore, instructions, image } = data;
      const newRecipe = await Recipe.create({
        id,
        title,
        summary,
        healthScore,
        instructions,
        image,
      });
      return data;
    } else {
      return recipeDB;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getRecipeByQuery = async (query) => {
  try {
    // const recipeDB = await Recipe.findByPk(idRecipe);
    if (!query) throw new Error("query null");
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}
      `
    );
    const { results } = data;
    const recipes = await Recipe.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.like]: `%${query}%` } },
          { summary: { [Op.like]: `%${query}%` } },
          { instructions: { [Op.like]: `%${query}%` } },
        ],
      },
    });
    return { db: recipes, api: results };
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.postRecipe = async (
  title,
  image,
  summary,
  healthScore,
  instructions
) => {
  try {
    const [recipe, created] = await Recipe.findOrCreate({
      where: { title },
      default: { title, image, summary, healthScore, instructions },
    });
    if (!recipe) throw new Error("recipe not created");
    return recipe;
  } catch (error) {
    throw new Error(error.message);
  }
};
