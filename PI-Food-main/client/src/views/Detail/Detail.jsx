import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import { searchId } from "../../redux/actions";
import  DetailsCss from "../Detail/Detail.module.css";

export default function Detail (){
    
    
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(searchId(id));

    },[id,dispatch])

    const { detail: detailfood } = useSelector((state) => state)

    //console.log(detailfood)

        
    return(
        <div className={ DetailsCss.contenedor}>
            <div className={ DetailsCss.card}>
                <div className={ DetailsCss.card}>
                    <div className={ DetailsCss.card_detailfood}>
                    <h1 className={ DetailsCss.name}>{detailfood.name}</h1>
                    <h1 className={ DetailsCss.types}> {detailfood.types?.map((dish, index)=> <p key={index} >{dish.name ? dish.name : dish}</p>)}</h1>
                    <h1 className={ DetailsCss.diets}> {detailfood.diets?.map((diet, index) => <p key={index} >{diet}</p>)}</h1>
                    <img src={detailfood.image}alt={`${detailfood.name}' DetailsCss`} width="400px" height="100px" />
                        
                    </div>
                </div>
            
            </div>
            <div>
            <a href = '/home'>
                        <button className={DetailsCss.button}>Return home</button>
                     </a>
            </div>

        </div>
    )
}
