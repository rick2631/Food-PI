import React from "react";
import { Link } from "react-router-dom";
import l from "../Landing/Landing.module.css";
import imagen from "../imagen/landi2.png"; // Corrección en la importación de la imagen

export default function Landing() {
  return (
    <div className={l.container}>
      {/* Corrección en la ruta y atributos de la imagen */}
      <img className={l.imagen} src={imagen} alt="Descripción de la imagen" /> 
      
      <div>
        <h1 className={l.h1}>Welcome</h1>
      </div>
      <br />
      <Link to="/home">
        <button className={l.btn}>Click to enter</button>
      </Link>
    </div>
  );
}
