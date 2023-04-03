import React from 'react';
import { useDispatch} from 'react-redux';
//import { Link } from 'react-router-dom';
import { searchId } from '../../redux/actions'
import CardCss from '../Card/Card.module.css';
import { useHistory } from "react-router-dom";


 export function Card({id, name, image, diets, types}) {
 
     const dispatch = useDispatch();
     const navegate = useHistory();
  
  async function handleId(id){
      dispatch(searchId(id));
      navegate('/home/id');
  }
   return(
    <div>
        
        <div className={CardCss.card}>
    <img className = {CardCss.img} src={image} alt= 'image' onClick={() => handleId(id)}/>
    <h2 className={CardCss.title}>{name}</h2>
    <h5 className={CardCss.diets} > {diets?.map((diet) => <> {diet}, </> )}</h5>
    <h5 className={CardCss.types}>  {types?.map((dish)=> <> {dish.name ? dish.name : dish}, </>)}</h5>
    </div>
    </div>
   )
   }
 