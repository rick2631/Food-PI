import axios from 'axios'
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
export const FILTER_CREATED = 'FILTER_CREATED'
//require('dotenv').config();


export function getRecipesAll(){
    // return  function(dispatch){
    //     let json =  axios.get(`http://localhost:3001/recipe`); //conexion btween front and back
      
    //       return dispatch({
    //           type: GET_RECIPES,
    //           payload: json.data
    //       })
    return function(dispatch){
        axios.get(`http://localhost:3001/recipe`)
       .then((json) => {
       return dispatch({
           type: GET_RECIPES,
           payload: json.data
       })
   }).catch((error) => {
       console.log(error)
   })
}
}

export function getTypes() {
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

export const searchId = (id) => async (dispatch) => {
    try {
        const recipe = await axios.get(`http://localhost:3001/recipe/${id}`);
        dispatch({
            type: GET_STATE_ID,
            payload: recipe.data
        });
    } catch (error) {
        console.log(error);
    }
};
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
export function filterCreated(payload){
    return {
        type: FILTER_CREATED,
        payload:payload
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
