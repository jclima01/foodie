const { Router } = require('express');
// Importar todos los routers;
const authRouter = require('./AuthRoute.js');
const recipeRouter = require('./RecipeRoute.js');
const dietRouter = require('./DietRoute.js');


const mainRouter = Router();

// Configurar los routers
mainRouter.use('/auth', authRouter);
mainRouter.use('/recipes', recipeRouter);
mainRouter.use('/diets', dietRouter);



module.exports = mainRouter;
