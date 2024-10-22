import React from "react";
import { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import Paginado from "../../components/Paginado/Paginado";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filter from "../../components/Filter/Filter";
import { getRecipesAll, getTypes } from "../../redux/actions";
import  Food from '../../components/Food/Food';
import HomeCss from '../Home/Home.module.css'

export default function Home() {
  const dispatch = useDispatch();
  const recipesAll = useSelector((state) => state.recipes);
  const typesAll = useSelector((state) => state.types);

  const [order, setOrder] = useState("");
  const [currenPage, setCurrentPage] = useState(1);
  const recipesPage = 9;

  const indexLastRecipe = currenPage * recipesPage;
  const indexFirstRecipe = indexLastRecipe - recipesPage;
  const currentRecipes = recipesAll.length
    ? recipesAll.slice(indexFirstRecipe, indexLastRecipe)
    : [];


  useEffect(() => {
    dispatch(getRecipesAll());
  }, []);

  useEffect(() => {
    dispatch(getTypes());
  }, []);
  //console.log(typesAll);
  //console.log(recipesAll);
  const paginado = (pageNumber) => {
   setCurrentPage(pageNumber);
  };

  return (
    <div>
<div class={HomeCss.micomponente}>
  

          
      <div>
        <Filter
          typesAll={typesAll}
          setOrder={setOrder}
          setCurrentPage={setCurrentPage}
        />
        <a href = '/create'> 
<center><button className={HomeCss.button} > CREAR </button></center>
        </a>
      </div>
      <div>
      <center><SearchBar/></center>
      </div>
      <div>
        <Food currentRecipes={currentRecipes} />
      </div>
      <div>
         <Paginado
                      recipesPage = {recipesPage}
                      recipesAll = {recipesAll.length}
                      paginado = {paginado}
                    /> 
      </div>
    </div>
    </div>
  );
}