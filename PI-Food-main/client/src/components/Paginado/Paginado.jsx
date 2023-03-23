import React from "react";
import modules from "../Paginado/Paginado.module.css";


export default function Paginado({recipesPage,recipesAll,paginado }){
    const pageNumber = [];

    for(let i = 1; i <= Math.ceil(recipesAll/recipesPage); i++){
        pageNumber.push(i)
    }

    return(
        <div className={modules.Paginado}>
            <ul className = {modules.Paginado}>
                {pageNumber  && pageNumber.map(number =>{
                    return(
                    <li key = {number} className = {modules.Paginado}>
                    <button className = {modules.btna} onClick = {()=> paginado(number)} > {number} </button>
                    </li>)
                })}
            </ul>
        </div>
    )
}