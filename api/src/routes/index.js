const { Router } = require('express');
// Importar todos los routers;
const authRouter = require('./AuthRoute.js');
const recipeRouter = require('./RecipeRoute.js');
const dietRouter = require('./DietRoute.js');


const router = Router();

// Configurar los routers
router.use('/auth', authRouter);
router.use('/recipes', recipeRouter);
router.use('/diets', dietRouter);



module.exports = router;
