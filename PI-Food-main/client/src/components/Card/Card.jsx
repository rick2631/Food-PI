import React from "react";
import { useDispatch } from "react-redux";
//import { Link } from 'react-router-dom';
import { searchId } from "../../redux/actions";
import CardCss from "../Card/Card.module.css";
import { useHistory } from "react-router-dom";

export function Card({ id, name, image, diets, types, healthScore }) {
  const dispatch = useDispatch();
  const history = useHistory();

  async function handleCardClick(id) {
    try {
      dispatch(searchId(id));
      history.push(`/home/${id}`);
    } catch (error) {
      console.error("No hay detalle para esta receta:", error);
    }
  }
  return (
    <div>
      <div className={CardCss.card}>
        <img
          className={CardCss.img}
          src={image}
          alt=" "
          onClick={() => handleCardClick(id)}
        />
        <h2 className={CardCss.title}>{name}</h2>
        <h5 className={CardCss.diets}>
          {" "}
          {diets?.map((diet,index) => (
            <span key={`${index}-dieta`}> {diet}, </span>
          ))}
        </h5>
        <h5 className={CardCss.types}>
          {" "}
          {types?.map((dish,index) => (
            <span key={`${index}-plato`}> {dish.name ? dish.name : dish}, </span>
          ))}
        </h5>
        <h3 className={CardCss.healthScore}>Health Score: {healthScore}</h3>
        <center>
          <div className="healths-progress">
            {healthScore >= 20 ? (
              <span className={CardCss.star}>&#9733;</span>
            ) : (
              <span className={CardCss.star}>&#9734;</span>
            )}
            {healthScore >= 40 ? (
              <span className={CardCss.star}>&#9733;</span>
            ) : (
              <span className={CardCss.star}>&#9734;</span>
            )}
            {healthScore >= 60 ? (
              <span className={CardCss.star}>&#9733;</span>
            ) : (
              <span className={CardCss.star}>&#9734;</span>
            )}
            {healthScore >= 80 ? (
              <span className={CardCss.star}>&#9733;</span>
            ) : (
              <span className={CardCss.star}>&#9734;</span>
            )}
            {healthScore >= 100 ? (
              <span className={CardCss.star}>&#9733;</span>
            ) : (
              <span className={CardCss.star}>&#9734;</span>
            )}
          </div>
        </center>
      </div>
    </div>
  );
}
