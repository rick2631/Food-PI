const express = require('express') // importa Express
const router = express.Router() // crea una instancia de router de Express
require('dotenv').config(); // importa y configura dotenv
const {Recipe,Diet} = require ('../db.js'); // importa los modelos Recipe y Diet desde el archivo app.js

router.post('/', async (req, res) => { // define la ruta POST '/'

    const { name, summary, healthScore, image, steps,diets } = req.body; // obtiene los valores del cuerpo de la solicitud
    if (!name || !summary) return res.status(400).send({error: 'Debe ingresar el name para la receta'});
    
    try{ // maneja cualquier excepción que pueda ocurrir
        const recipeCreate = await Recipe.create({ // crea una nueva receta en la base de datos
            name,
            summary,
            healthScore,
            image,
            steps,
        })

        const dietDB = await Diet.findAll({ // busca las dietas en la base de datos que coincidan con los nombres especificados
            where: {name: diets}
        })
        recipeCreate.addDiet(dietDB);
        res.status(200).json( recipeCreate);
     

    }catch(err){ // maneja cualquier excepción que pueda ocurrir
       console.log(err);
    res.status(500).send('Error en crear');
  }
})

module.exports = router; // exporta el router para su uso en otros archivos




