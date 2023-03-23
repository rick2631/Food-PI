import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import { searchId } from "../../redux/actions";
import  DetailsCss from "../Detail/Detail.module.css";

export default function Detail (){
    
    const dispatch = useDispatch()
    const {id} = useParams()
    
    useEffect(()=>{
        dispatch(searchId(id));

    },[id,dispatch])

    const { detail: detailFood } = useSelector((state) => state)

    console.log(detailFood)

        
    return(
        <div className={ DetailsCss.contenedor}>
            <div className={ DetailsCss.card}>
                <div className={ DetailsCss.card}>
                    <div className={ DetailsCss.card_detailFood}>
                    <h1 className={ DetailsCss.name}>{detailFood.name}</h1>
                    <h1 className={ DetailsCss.types}> {detailFood.types?.map((dish, index)=> <p key={index} >{dish.name ? dish.name : dish}</p>)}</h1>
                    <h1 className={ DetailsCss.diets}> {detailFood.diets?.map((diet, index) => <p key={index} >{diet}</p>)}</h1>
                    <image src={detailFood.image} className='img' alt= {'spoonaacular'} />
                        
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
