const express = require ('express');
const axios = require ('axios');
const router = express.Router();
const {Recipe,Diet} = require('../db.js');
require('dotenv').config();
const {API_KEY,spoonacularURL} = process.env;


const getApiInfo = async () => {
    try
    {
        const resApi = await axios.get(`${spoonacularURL}/recipes/complexSearch?number=100&addRecipeInformation=true&apiKey=${API_KEY}`);
        const { results } = resApi.data ;
    
        
        if (results.length > 0) {

            let response = await results?.map((r) => {
                return {
                    name: r.title,
                    vegetarian: r.vegetarian,
                    vegan: r.vegan,
                    glutenFree: r.glutenFree,
                    dairyFree: r.dairyFree, 
                    image: r.image, 
                    idApi: r.id, 
                    score: r.spoonacularScore,
                    healthScore: r.healthScore,
                    types: r.dishTypes?.map(element => element),  
                    diets: r.diets?.map(element => element), 
                    summary:r.summary, 
                    steps: (r.analyzedInstructions[0] && r.analyzedInstructions[0].steps?r.analyzedInstructions[0].steps.map(item=>item.step).join(" \n"):'')
                }        
            })

        return response;
    } 

    }catch (error) {
        console.error(error);
        return ([])
    }
}                

const getDBInfo = async () => {
        try{
            const dataDB =  await Recipe.findAll({ 
                include:{
                    model: Diet,
                    attributes: ['name'],
                    through:{
                        attributes: []
                    }
                }
            })
            let response = await dataDB?.map(r => {
                     return {
                         id: r.id,
                         name: r.name,
                         summary: r.summary,
                         score: r.score,
                         healthScore: r.healthScore,
                         image: r.image,
                         steps: r.steps,
                         diets: r.diets?.map(diet => diet.name),
                     }
                 });
            return response;
        }catch (error) {
          console.error(error);
        }
    }

    const getAllInfo = async () => {
        try{
            const apiInfo = await getApiInfo();
            const bdInfo = await getDBInfo();
            const infoTotal = apiInfo.concat(bdInfo);
            return infoTotal;
        }catch (error) {
            console.error(error);
        }
     }

//name
const getApiByName = async (name) => {
           
    try{
        const resAxios = await axios.get(`${spoonacularURL}/recipes/complexSearch?query=${name}&addRecipeInformation=true&number=100&apiKey=${API_KEY}`);
        const { results } = resAxios.data;
        if(results.length > 0){
            let response = results?.map((r) => {
                return {
                    name: r.title,
                    vegetarian: r.vegetarian,
                    vegan: r.vegan,
                    glutenFree: r.glutenFree,
                    dairyFree: r.dairyFree, 
                    image: r.image, 
                    idApi: r.id, 
                    score: r.spoonacularScore,
                    healthScore: r.healthScore,
                    types: r.dishTypes?.map(element => element),  
                    diets: r.diets?.map(element => element), 
                    summary:r.summary, 
                    steps: (r.analyzedInstructions[0] && r.analyzedInstructions[0].steps?r.analyzedInstructions[0].steps.map(item=>item.step).join(" \n"):'')
                }
            })
      return response           
    }

    else{
        console.log("NO hay coincidencia en la API");
        //return ('error');
    }

    }catch (error) {
        console.error(error);
        return ('error')
    }
}

                 
const getDBByName = async (name) => {
    try{
        const DBInfo = await getDBInfo();
        const filtByName = DBInfo.filter(recipe => recipe.name.includes(name));
       
        return filtByName;
    }catch (error) {
        return ('error')
    } 
}
                       
const getInfoByName = async (name) => {
    try{
        const apiByName = await getApiByName(name)
        const DBByName = await getDBByName(name)
        const infoTotal = apiByName.concat(DBByName)
        return infoTotal
    }catch (error) {
        return ('error')
    }
}     

//^       

router.get('/', async (req, res) => {

const { name } = req.query

if (name) {

    const infoByName = await getInfoByName(name);
    if (infoByName !== 'error'){
        console.log("Se encontro coincidencia con name")
        infoByName.length > 0 ? res.json(infoByName) : res.status(400).json([{ name: 'not found any recipes'}]);
    }else{
        console.log("Error")
        res.status(404).json([{ name: 'Error'}])
    }

}else{
   
    const allDate = await getAllInfo() 
    if (allDate !== 'error'){  
        res.json(allDate);
    }else{
        res.status(404).json({message:'Error en la búsqueda de datos'})
    }

}
});
// Constantes de la API

const idRecipe = async (id) => {    
  try {
    const recipeApi = await axios.get(`${spoonacularURL}/recipes/${id}/information?apiKey=${API_KEY}`);
    
    if (recipeApi ) {
      const dataDB= await recipeApi.data;
      const info ={
          id: dataDB.id,
          name: dataDB.name,
          summary: dataDB.summary,
          score: dataDB.score,
          healthScore: dataDB.healthScore,
          image: dataDB.image,
          steps: dataDB.steps,
          diets: dataDB.diets?.map(diet => diet.name)
      }
      return info;
    } else {
      return "no hay  con ese id";
    }
  } catch (error) {
    console.log(error);
  }
};
//A MI DB
const idDb = async (id) => {
  try {
    return await Recipe.findByPk(id, {
      include: [
        {
          model: Diet,
          atributes: ["name"],
          throught: {
            attributes: [],
          },
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
};
//UNO MIS DOS SOLICITUDES
const recipeD = async (id) => {
  const dbID = id.includes("-");
  if (dbID) {
    //si mi id contiene un signo "-"
    const getDb = await idDb(id);
    return getDb;
  } else {
    const allApi = await idRecipe(id);
    return allApi;
  }
};

// Ruta para obtener los detalles de una receta por ID
router.get('/:id', async (req, res, next) => {
  const id = req.params.id;

  try {
    const data = await recipeD(id);

    if (data) {
      res.send(data);
    } else {
      res.status(404).send('No se encontró la receta');
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;



 