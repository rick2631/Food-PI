import React from 'react';
import { useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { searchId } from '../../redux/actions'
import CardCss from '../Card/Card.module.css';

export default function Card({id, name, image, diets, types}){
    const dispatch = useDispatch();
   
    
    return(
             <Link className = {CardCss.link} to={'/home/' + id} onClick={()=>dispatch(searchId(id))}> 
        <div className={CardCss.card}>
            <h2 className={CardCss.title}>{name}</h2>
            <div className= {CardCss.divimagen}>
            <img  className = {CardCss.image} src = {image} alt = 'img not found' />
            <h1>Diets Types: </h1> {diets?.map((diet, index) => <> {diet}, </> )}
            <h1>Dish Types:</h1>{types?.map((dish, index)=> <> {dish.name ? dish.name : dish}, </>)}
 
            </div>
         
        </div>

            </Link>
    )
}