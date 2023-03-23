import axios from 'axios';
export const POST_RECIPES = 'POST_RECIPES'
export const GET_RECIPES = 'GET_RECIPES'
//export const GET_DATABASE = 'GET_DATABASE'
export const GET_TYPES = 'GET_TYPES'
export const GET_STATE_ID = 'GET_STATE_ID'
export const GET_RECIPES_ID = 'GET_RECIPES_ID'
export const GET_RECIPES_NAME = 'GET_RECIPES_NAME'
export const FILTER_BY_SEARCHBAR = 'FILTER_BY_SEARCHBAR'
export const FILTER_BY_ORDER = 'FILTER_BY_ORDER'
export const ORDER_BY_SCORE = 'ORDER_BY_SCORE'
export const FILTER_BY_DIETS = 'FILTER_BY_DIETS'


export function getRecipesAll(){
    return async function(dispatch){
        let json = await axios.get(`http://localhost:3001/recipe`); //conexion btween front and back
      
          return dispatch({
              type: GET_RECIPES,
              payload: json.data
          })
  
      }
  };

export function getTypes(payload) {
    return async function  (dispatch) {
        try {
            let types = await axios.get(`http://localhost:3001/types`)
            return dispatch({
                type: GET_TYPES,
                payload: types.data
            })
            
        } catch (error) {
            console.log(error);
        }
    }
}
export function postRecipes(payload){
    console.log(payload)
    return async function(dispatch) {
        try {
            console.log(payload)
            const response = await axios.post(`http://localhost:3001/recipes`, payload)
            console.log(response)
            return response

        }catch(error){
            console.log(error);
        }
    }
}
//todo revisar 
export function searchId(id) {
    return async function (dispatch) {
     try  {
        const recipe = await axios.get(`http://localhost:3001/recipe/${id}`)
            return dispatch({
        type: GET_STATE_ID,
        payload: recipe.payload
            })
        } catch (error) {
            console.log(error);
        }
    
    }
}
export function searchBarName(payload) {
    return {
        type: FILTER_BY_SEARCHBAR,
        payload: payload
    }
    
}


export function getRecipesName(name) {
    return async function (dispatch) {
        try {
            const recipes = await axios.get(`http://localhost:3001/recipe?name=${name}`)
            return dispatch({
                type: GET_RECIPES_NAME,
                payload: recipes.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}


export function getFilterByDiets(payload){
    return {
        type: FILTER_BY_DIETS,
        payload: payload
    }
}

export function filterByOrder(payload){
    return {
        type: FILTER_BY_ORDER,
        payload: payload
    }
}

export function orderByScore(payload){
    return{
        type: ORDER_BY_SCORE,
        payload: payload
    }
}
