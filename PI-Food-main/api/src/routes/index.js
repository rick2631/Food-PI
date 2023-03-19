const { Router } = require('express');
const diet = require ('./diets');
const recipes = require ('./recipecrear');
const  recipe = require ('./recipeIfo');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/recipe', recipe);
router.use('/types', diet);
router.use('/recipes', recipes);

module.exports = router;
