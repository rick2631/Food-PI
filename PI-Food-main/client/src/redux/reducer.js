import {
    GET_RECIPES,
    GET_RECIPES_NAME,
    GET_STATE_ID,
    GET_TYPES,
    POST_RECIPES,
    FILTER_BY_DIETS,
    FILTER_BY_ORDER,
   FILTER_BY_SEARCHBAR,
    ORDER_BY_SCORE,
    FILTER_CREATED
} from "./actions";

const inicialState = {
  recipes: [],
  recipesAll: [],
  types: [],
  detail: [],
};

function rootReducer(state = inicialState, action) {
  switch (action.type) {
    case GET_RECIPES:
     // console.log(action.payload);
      return {
        ...state,
        recipes: action.payload,
        recipesAll: action.payload,
      };
    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case POST_RECIPES:
      return {
        ...state,
      };

    case GET_STATE_ID:
      
      return {
        ...state,
        detail:action.payload,
    }
                            
    case GET_RECIPES_NAME:
      const addRecipe = state.recipesAll
        return {
                  ...state,
                  recipes: action.payload,
                  recipesAll: addRecipe
              } 


case FILTER_BY_SEARCHBAR:
          const filtSearch = state.recipesAll
          const filtOnState = filtSearch.filter((recipe) => {
          let name = recipe.name.toLowerCase();
          if (name.includes(action.payload)) return recipe;
        
          })
           //console.log(filtOnState)       
           return{
               ...state,
               recipes: filtOnState   
              }
              case FILTER_CREATED:
  const allCreated = state.recipesAll;
  const createdFilter =
    action.payload === 'created'
      ? allCreated.filter((e) =>typeof e.id==='string')
      : action.payload === 'existent'
      ? allCreated.filter((e) => typeof e.idApi==='number')
      : action.payload === 'all'
      ? allCreated
      : [];
  return {
    ...state,
    recipes: createdFilter,
  };


      case ORDER_BY_SCORE:

      const recypesByScore = action.payload === 'SSc' ? state.recipesAll.sort((a, b) => {
                     
      if ((a.score - b.score) < 0) return 1
          else return -1
         }) : state.recipesAll.sort((a, b) => {
                          
                          if ((a.healthScore - b.healthScore) < 0) return 1
                          else return -1
                      })
                      return{
                          ...state,
                          recipes: recypesByScore
                          
                      } 

    case FILTER_BY_ORDER:
      const recypesByOrder =
        action.payload === "up"
          ? state.recipesAll.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
              else return -1;
            })
          : state.recipesAll.sort((a, b) => {
              if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
              else return -1;
            });
      return {
        ...state,
        recipes: recypesByOrder,
      };

    case FILTER_BY_DIETS:
      const recipes_All = state.recipesAll;
      const { payload } = action;

      const filtByDiets =
        payload === "Filter by type"
          ? recipes_All
          : recipes_All.filter((recipe) => {
              if (payload === "vegetarian" && recipe.vegetarian) {
                return recipe;
              }
              if (payload === "dairyFree" && recipe.dairyFree) {
                return recipe;
              }
              if (recipe.diets.includes(payload)) {
                return recipe;
              }
              return false;
            });

      return {
        ...state,
        recipes: filtByDiets,
      };

    default:
      return state;
  }
}

export default rootReducer;
