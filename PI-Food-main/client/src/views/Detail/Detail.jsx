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

    const {detail: detailfood } = useSelector((state) => state)

    //console.log(detailfood)

        
    return(
        <div className={ DetailsCss.contenedor}>
            <div className={ DetailsCss.card}>
<div>
                    <div className={ DetailsCss.card_detailfood}>
                    <h5 className={ DetailsCss.name}>{detailfood.name}</h5>
                    <h2 className={ DetailsCss.types}> {detailfood.types?.map((dish, index)=> <p key={index} >{dish[0].toUpperCase() + dish.slice(1)}</p>)}</h2>
                    <center><img className={DetailsCss.img}src={detailfood.image}alt={``} width="200px" height="200px" /></center>
                     <h2 className={ DetailsCss.diets}> {detailfood.diets?.map((diet, index) => <p key={index} > {diet.name ? diet.name : diet},</p>)}</h2> 
                    <h3 className={DetailsCss.subTitle}>Summary</h3>
                    <p className={DetailsCss.summary}>{detailfood.summary && detailfood.summary.replace(/<[^>]+>/g, "")}</p>
                    <div className={DetailsCss.healths}>
                        <span id="healthScore" className={DetailsCss.subTitle}>
                            Health Level:{" "}
                            
                            <progress
                                id="healthScore"
                                max="100"
                                value={detailfood.healthScore}

                            />{" "}
                            <span className={DetailsCss.numbers}>

                                {detailfood.healthScore}/100
                            </span>
                        </span>
                    </div>
                


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
