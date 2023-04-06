const axios = require("axios");
const { Recipe } = require("../db");
const { Op } = require("sequelize");
const Diet = require("../models/Diet");
require("dotenv").config();
const API_KEY = process.env.API_KEY;

exports.getRecipeFromDB = async (idRecipe) => {
  const recipeDB = await Recipe.findByPk(idRecipe);

  return recipeDB;
};
exports.getRecipeFromAPI = async (idRecipe) => {
  const { data } = await axios.get(
    `https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${API_KEY}`
  );
  const { id, title, summary, healthScore, instructions, image, diets } = data;

  return {
    id,
    title,
    summary,
    healthScore,
    instructions,
    image,
    diets,
  };
};

exports.getRecipeByQuery = async (query) => {
  try {
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
    return [...recipes, ...results];
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.postRecipe = async (
  diets,
  title,
  image,
  summary,
  healthScore,
  instructions
) => {
  try {
    const newRecipe = await Recipe.create({
      title,
      image,
      summary,
      healthScore,
      instructions,
    });
    diets = diets.map((diet) => diet.name);
    await newRecipe.addDiet(diets.id);

    // newRecipe.save();
    return newRecipe;
  } catch (error) {
    throw new Error(error.message);
  }
};
