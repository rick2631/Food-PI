import React from "react";
import { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getRecipesAll, getTypes } from "../../redux/actions";
import Card from "../../components/Card/Card";
import Error from "../../components/Error/Error";
import r from "../Home/Home.module.css";


export default function Home(){
    const dispatch = useDispatch();
    const recipesAll = useSelector((state) => state.recipes)
    const typesAll = useSelector(state => state.types)
    
    const [order, setOrder] = useState('')
    const [currenPage, setCurrentPage] = useState(1)
    const recipesPage = 9; 
  
    const indexLastRecipe = currenPage * recipesPage
    const indexFirstRecipe = indexLastRecipe - recipesPage
    const currentRecipes = recipesAll.length ? recipesAll.slice(indexFirstRecipe, indexLastRecipe) : []


    useEffect(() => {
        dispatch(getRecipesAll())
      },[])  
      
      useEffect(() => {
        dispatch(getTypes())
      }, [])

      
    return  (
        <div className={r.contenedor}>
        {recipesAll.length > 0 ? (
          currentRecipes?.map((r) => {
            return (
              <Card
              key={r.id}
              id={r.id}
              image={r.image ? r.image : r.image} 
              types={r.types}
              name={r.name}
              diets={r.diets}
              />
              );
            })
            ) : (
              <Error />
              )}
      </div>
    )}