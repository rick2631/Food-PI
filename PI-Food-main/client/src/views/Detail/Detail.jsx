import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import { searchId } from "../../redux/actions";
import DetailsCss from "../Detail/Detail.module.css";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchId(id));
  }, [id, dispatch]);

  const { detail: detailfood } = useSelector((state) => state);

  //console.log(detailfood)

  return (
    <div className={DetailsCss.contenedor}>
      <div className={DetailsCss.card}>
        <div>
          <div className={DetailsCss.card_detailfood}>
            <h5 className={DetailsCss.name}>{detailfood.name}</h5>
            <center>
              <img
                className={DetailsCss.img}
                src={detailfood.image}
                alt={``}
                width="200px"
                height="200px"
              />
            </center>
            <h2 className={DetailsCss.types}>
              {detailfood.types?.map((dish, index) => (
                <span key={`${index}-plato`}>
                  {" "}
                  {dish.name
                    ? dish.name.charAt(0).toUpperCase() + dish.name.slice(1)
                    : dish}
                  ,{" "}
                </span>
              ))}
            </h2>
            <h2 className={DetailsCss.diets}>
              {" "}
              {detailfood.diets?.map((diet, index) => (
                <span key={`${index}-dieta`}> {diet}, </span>
              ))}
            </h2>
            <h3 className={DetailsCss.subTit}>Summary</h3>
            <p className={DetailsCss.summary}>
              {detailfood.summary && detailfood.summary.replace(/<[^>]+>/g, "")}
            </p>
            <center>
              {" "}
              <div className={DetailsCss.healths}>
                <span id="healthScore" className={DetailsCss.sub}>
                  Health Level:{" "}
                  <span className={DetailsCss.numbers}>
                    {detailfood.healthScore}/100
                  </span>
                </span>
              </div>
            </center>

            <center>
              <div class="healths-progress">
                {detailfood.healthScore >= 20 ? (
                  <span className={DetailsCss.star}>&#9733;</span>
                ) : (
                  <span className={DetailsCss.star}>&#9734;</span>
                )}
                {detailfood.healthScore >= 40 ? (
                  <span className={DetailsCss.star}>&#9733;</span>
                ) : (
                  <span className={DetailsCss.star}>&#9734;</span>
                )}
                {detailfood.healthScore >= 60 ? (
                  <span className={DetailsCss.star}>&#9733;</span>
                ) : (
                  <span className={DetailsCss.star}>&#9734;</span>
                )}
                {detailfood.healthScore >= 80 ? (
                  <span className={DetailsCss.star}>&#9733;</span>
                ) : (
                  <span className={DetailsCss.star}>&#9734;</span>
                )}
                {detailfood.healthScore >= 100 ? (
                  <span className={DetailsCss.star}>&#9733;</span>
                ) : (
                  <span className={DetailsCss.star}>&#9734;</span>
                )}
              </div>
            </center>
          </div>
        </div>
      </div>
      <div>
        <a href="/home">
          <button className={DetailsCss.button}>Return home</button>
        </a>
      </div>
    </div>
  );
}
