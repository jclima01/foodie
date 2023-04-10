const axios = require("axios");
const { Recipe } = require("../db");
const { Op } = require("sequelize");
const { Diet } = require("../db");
require("dotenv").config();
const API_KEY = process.env.API_KEY;
exports.getAllRecipes = async () => {
  const dbResults = await Recipe.findAll({
    include: {
      model: Diet,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  // dataValues = dataValues.map((recipe) => {
  //   console.log(recipe)
  //   return {
  //     id: recipe.id,
  //     title: recipe.title,
  //     summary: recipe.summary,
  //     healthScore: recipe.healthScore,
  //     instructions: recipe.instructions,
  //     image: recipe.image,
  //     diets: recipe.Diets
  //   };
  // });

  console.log(dbResults);
  const { data } = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true
      `
  );
  const { results } = data;
  const apiResults = results.map((recipe) => {
    return {
      id: recipe.id,
      title: recipe.title,
      summary: recipe.summary,
      healthScore: recipe.healthScore,
      instructions: recipe.instructions,
      image: recipe.image,
      diets: recipe.diets,
    };
  });
  return [...dbResults, ...apiResults];
};

exports.getRecipeFromDB = async (idRecipe) => {
  const recipeDB = await Recipe.findByPk(idRecipe, {
    include: {
      model: Diet,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

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

exports.getRecipeByQuery = async (name) => {
  try {
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&name=${name}&number=100&addRecipeInformation=true
      `
    );
    const { results } = data;
    const apiResults = results.map((recipe) => {
      return {
        id: recipe.id,
        title: recipe.title,
        summary: recipe.summary,
        healthScore: recipe.healthScore,
        instructions: recipe.instructions,
        image: recipe.image,
        diets: recipe.diets,
      };
    });

    const recipesFromDB = await Recipe.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.like]: `%${name}%` } },
          { summary: { [Op.like]: `%${name}%` } },
          { instructions: { [Op.like]: `%${name}%` } },
        ],
      },
      include: {
        model: Diet,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    const recipesdb = recipesFromDB.map((recipe) => {
      return {
        id: recipe.id,
        title: recipe.title,
        summary: recipe.summary,
        healthScore: recipe.healthScore,
        instructions: recipe.instructions,
        image: recipe.image,
        diets: recipe.diets,
      };
    });
    return [...recipesdb, ...apiResults];
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

    const arrDiets = diets.map((diet) => diet.id);

    await newRecipe.addDiet(arrDiets);

    return newRecipe;
  } catch (error) {
    throw new Error(error.message);
  }
};
