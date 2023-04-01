import React from "react";
//import { getRecipesAll } from "../../redux/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Error from "../Error/Error";
import {Card} from "../Card/Card";
import r from "../Food/Food.module.css";




 const Food = ({currentRecipes}) => {
    const dispatch = useDispatch()
   // const recipesAll = useSelector((state) => state.recipesAll);
    //const [cargar,setCarga] = useState(true);
    //console.log(recipesAll)

    useEffect(() => {
   //dispatch(getRecipesAll() )
    }, [dispatch])

console.log(currentRecipes)
    
    
      return (
        <div className={r.contenedor}>
        {currentRecipes.length > 0 ? (
          currentRecipes?.map((r) => {
            return (
              <Card
                    title = {r.name}
                    image={r.image}
                    key={r.id}
                    healthScore={r.healthScore}
                    likes={r.aggregateLikes}
                    diets={r.diets}
                    types = {r.types}
                    id={r.idApi ? r.idApi : r.id}
                />
              );
            })
            ) : (
  <Error />
              )} 
</div>
);
  
}
export default Food;