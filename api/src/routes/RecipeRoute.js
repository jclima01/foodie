const { Router } = require("express");
const router = Router();
require("dotenv").config();
const {
  getRecipe,
  getRecipeByQuery,
  postRecipe,
} = require("../controllers/RecipeController.js");

router.get("/:idRecipe", async (req, res) => {
  const { idRecipe } = req.params;
  try {
    const recipe = await getRecipe(idRecipe);
    res.status(200).json(recipe);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
});
router.get("/", async (req, res) => {
  const { query } = req.query;
  try {
    const recipe = await getRecipeByQuery(query);
    res.status(200).json(recipe);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
});

router.post("/", async (req, res) => {
  const { title, image, summary, healthScore, instructions } = req.body;
  try {
    const newRecipe = await postRecipe(
      title,
      image,
      summary,
      healthScore,
      instructions
    );
    res.status(200).json(newRecipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
