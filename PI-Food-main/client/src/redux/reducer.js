


const inicialState ={
 recipes:[],
 recipesAll:[],
 types:[],
 detail:[]
}

function rootReducer(state = initialState, action) {

 switch (action.types) {

  case GET_RECIPES:

    return {
        ...state,
        recipes:action.payload,
        recipesAll:action.payload

    }
    case GET_TYPES:{
    return{
        ...state,
        types:action,payload
    }
    }
    case POST_RECIPES:{
    return{
        ...state,
    }
    }
    case GET_STATE_ID:
        const filtid = state.recipesAll
        const idFind = filtid.find((recipe) => {
            if(typeof action.payload === 'number'){
                 if(recipe.idApi === action. payload) return recipe 
            }else{
                if (recipe.id === action.payload) return recipe  
            }
        })
        return {
            ...state,
            detail:idFind
        }

     case GET_RECIPES_NAME:
                        const addRecipe = state.recipesAll
                          return {
                                    ...state,
                                    recipes: action.payload,
                                    recipesAll: addRecipe
                                } 
     case FILTER_BY_SEARCHBAR:
        const filteSearch= state.recipesAll
        const filtOnState =filteSearch.filter ((recipe)=>{
            let name= recipe.name.tolowercase();
            if(name.includes(action.payload)) return recipe;
        })
        return {
            ...state,
            recipes:filtOnState
        }
   
        case FILTER_BY_ORDER:
            const recypesByOrder = action.payload === 'up' ? state.recipesAll.sort((a, b) => {
                     if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
                     else return -1
                        }): state.recipesAll.sort((a, b) => {
                               if (a.name.toLowerCase() < b.name.toLowerCase()) return 1
                               else return -1
                                })
             return{
               ...state,
              recipes: recypesByOrder
            }       
            
     
case FILTER_BY_DIETS:

    const recipes_All = state.recipesAll

    const filtByDiets = action.payload === 'Filter by type' ? 
    state.recipesAll : recipes_All.filter(recipe => {
        console.log(recipe.diets.length)
        if (recipe.diets.length > 0) {
            if(recipe.diets.find(element => element === action.payload)) return recipe
        }
        
        if ((action.payload === 'vegetarian') && (recipe.hasOwnProperty('vegetarian')) && (recipe.vegetarian === true)) return recipe
        
        if ((action.payload === 'dairyFree') && (recipe.hasOwnProperty('dairyFree')) && (recipe.dairyFree === true)) return recipe
        })
    return{
        ...state,
        recipes: filtByDiets
    }     


default: return state
    }


}



export default rootReducer;