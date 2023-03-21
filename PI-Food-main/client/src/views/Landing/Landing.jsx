import {Link } from "react-router-dom";
import  l from "../Landing/Landing.module.css";


export default function Landing(){

    return(
        <div className = {l.landing}>
        
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