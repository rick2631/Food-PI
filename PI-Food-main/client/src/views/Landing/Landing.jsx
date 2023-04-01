import {Link } from "react-router-dom";
import  l from "../Landing/Landing.module.css";
//import imagen from "../Landing/colors-food-1.jpg"

export default function Landing(){

    return(
        <div className = {l.landing}>
        {/* <img src={imagen} alt="Descripción de la imagen" /> */}
            <div>

                <h1 className = {l.h1}> Welcome </h1>
            </div> :
            <div><h1 className = {l.h1}> 
            
                Genießen

            </h1>
            <Link to = '/home'>
            
                <button className = {l.btn}>Click to enter</button>
            </Link>
            </div>
            
        </div>
    )
    
}