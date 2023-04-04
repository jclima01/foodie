const axios = require("axios");
const { Diet } = require("../db");
require("dotenv").config();
const API_KEY = process.env.API_KEY;
exports.getDiet = async () => {
  try {
    // Realizamos la solicitud a la API de Spoonacular utilizando Axios
    const {data} = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`
    );
    const diets = [];
    data.results.forEach((result) => {
      result.diets.forEach((diet) => {
        if (!diets.includes(diet)) {
          diets.push(diet);
        }
      });
    });
    // diets.forEach(diet => {
    //   await Diet.create(diet);
    // });

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
