import React from 'react';
import { useDispatch} from 'react-redux';
//import { Link } from 'react-router-dom';
import { searchId } from '../../redux/actions'
import CardCss from '../Card/Card.module.css';
import { useHistory } from "react-router-dom";


 export function Card({id, name, image, diets, types,healthScore}) {
 
     const dispatch = useDispatch();
     const history = useHistory();
  
  async function handleCardClick(id){
    try {
        dispatch(searchId(id));
        history.push("/home/id");
      } catch (error) {
        console.error("No hay detalle para esta receta:", error);
        
      }
    }
   return(
    <div>
        
        <div className={CardCss.card}>
    <img className = {CardCss.img} src={image} alt= 'image' onClick={() => handleCardClick(id)}/>
    <h2 className={CardCss.title}>{name}</h2>
    <h5 className={CardCss.diets} > {diets?.map((diet,id) => <span key={`${id}-dieta`}> {diet}, </span> )}</h5>
    <h5 className={CardCss.types}>  {types?.map((dish,id)=> <span key ={`${id}-plato`}> {dish.name ? dish.name : dish}, </span>)}</h5>
    <h3 className={CardCss.healthScore}>Health Score: {healthScore}</h3>
    </div>
    </div>
   )
   }
 