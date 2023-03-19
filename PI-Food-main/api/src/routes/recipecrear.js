const express = require('express') // importa Express
const router = express.Router() // crea una instancia de router de Express
require('dotenv').config(); // importa y configura dotenv
const {Recipe,Diet} = require ('../db.js'); // importa los modelos Recipe y Diet desde el archivo app.js

router.post('/', async (req, res) => { // define la ruta POST '/'
    let{
        name,
        summary,
        score,
        healthScore,
        image,
        steps,
        diets
    } = req.body // obtiene los valores del cuerpo de la solicitud

    try{ // maneja cualquier excepción que pueda ocurrir
        let recipeCreate = await Recipe.create({ // crea una nueva receta en la base de datos
            name,
            summary,
            score,
            healthScore,
            image,
            steps,
        })

        let dietDB = await Diet.findAll({ // busca las dietas en la base de datos que coincidan con los nombres especificados
            where: {name: diets}
        })

        // comprueba si los campos obligatorios están presentes en el cuerpo de la solicitud y, si no, envía un error al cliente
        if (!name) return res.status(400).send({error: 'Debe ingresar el name para la receta'});
        if (!summary) return res.status(400).send({error: 'Debe ingresar un summary del receta'});
        
        // agrega la receta creada a las dietas especificadas
        recipeCreate.addDiet(dietDB);
        res.send('Succesfull'); // envía una respuesta exitosa al cliente

    }catch(error){ // maneja cualquier excepción que pueda ocurrir
        res.status(400).send(error); // envía un objeto de error al cliente
    }
})

module.exports = router // exporta el router para su uso en otros archivos




