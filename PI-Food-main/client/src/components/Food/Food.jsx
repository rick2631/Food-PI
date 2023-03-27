import React from "react";
import { getRecipesAll } from "../../redux/actions";
import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import Error from "../Error/Error";
import Card from "../Card/Card";
import r from "../Food/Food.module.css";




export const Food = ({currentRecipes}) => {
    const dispatch = useDispatch()
    const [cargar,setCarga] = useState(true);
    

    useEffect(() => {
        dispatch(getRecipesAll()).then(() => setCarga(false)) 
    }, [dispatch])

   console.log(currentRecipes)
    
    
      return (
        <div className={r.contenedor}>
        {currentRecipes.length > 0 ? (
          currentRecipes?.map((r) => {
            return (
              <Card
                    title = {r.title}
                    image={r.image}
                    key={r.id ? r.id : r.code}
                    healthScore={r.healthScore}
                    likes={r.aggregateLikes}
                    diets={r.diets}
                    types = {r.types}
                    id={r.id ? r.id : r.code}
                />
              );
            })
            ) : (
  <Error />
              )} 
</div>
);
  
}
