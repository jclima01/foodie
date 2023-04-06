const {
  getRecipeFromDB,
  getRecipeFromAPI,
  getRecipeByQuery,
  postRecipe,
} = require("../controllers/RecipeController");

const getRecipeHandler = async (req, res) => {
  const { idRecipe } = req.params;

  try {
    if (isNaN(idRecipe)) {
      const recipe = await getRecipeFromDB(idRecipe);
      res.status(200).json(recipe);
    } else {
      const recipe = await getRecipeFromAPI(idRecipe);
      res.status(200).json(recipe);
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const getRecipebyQueryHandler = async (req, res) => {
  const { query } = req.query;
  try {
    const recipes = await getRecipeByQuery(query);
    res.status(200).json(recipes);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};
const postRecipeHandler = async (req, res) => {
  const { diets, title, image, summary, healthScore, instructions } = req.body;
  try {
    const newRecipe = await postRecipe(
      diets,
      title,
      image,
      summary,
      healthScore,
      instructions,
      
    );
    
    res.status(200).json(newRecipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  postRecipeHandler,
  getRecipeHandler,
  getRecipebyQueryHandler,
};
