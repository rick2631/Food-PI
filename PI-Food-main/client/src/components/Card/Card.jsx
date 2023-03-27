import React from 'react';
import { useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
//import { searchId } from '../../redux/actions'
import s from '../Card/Card.module.css';

export default function Card(props) {
    // acá va tu código
  
  let types = [];

    if(props.types){

      props.types.forEach(type => types.push(type.name) )

    }

    let diets = types.length > 0 ? types : props.diets;
    


    return( 
      <div className={s.card} >
          <img className={s.image} src={props.image} alt="" />
          <div className={s.textContainer}>
            <Link className={s.link} to={`/recipes/${props.id}`}>
              <span className={s.text}>{props.title}</span>
            </Link>
            <div className={s.punctuation}>
              {
                diets ? diets.map(d =>(
                  <div key={d}>
                      <span  className={s.typeText}>{d}</span>
                    
                   </div>
                )) : ""
              }
              
            </div>
          </div>
          
         
      </div>
    )
  };
