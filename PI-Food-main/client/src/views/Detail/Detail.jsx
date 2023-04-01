import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import { searchId } from "../../redux/actions";
import  DetailsCss from "../Detail/Detail.module.css";

export default function Detail (){
    
    const detail = useSelector((state) => state.detail) 

        
    return(
        <div className={ DetailsCss.contenedor}>
            <div className={ DetailsCss.card}>
                <div className={ DetailsCss.card}>
                    <div className={ DetailsCss.card_detailFood}>
                    <h1 className={ DetailsCss.name}>{detail.name}</h1>
                    <h1 className={ DetailsCss.types}> {detail.types?.map((dish, index)=> <p key={index} >{dish.name ? dish.name : dish}</p>)}</h1>
                    <h1 className={ DetailsCss.diets}> {detail.diets?.map((diet, index) => <p key={index} >{diet}</p>)}</h1>
                    <image src={detail.image} className='img' alt= {'spoonaacular'} />
                        
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
