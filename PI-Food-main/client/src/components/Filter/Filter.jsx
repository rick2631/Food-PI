import React from 'react'
import { useDispatch } from "react-redux";
import { filterByOrder, getFilterByDiets, orderByScore } from "../../redux/actions";

export default function Filter({typesAll,setCurrentPage, setOrder}) {
    const dispatch = useDispatch();


    function handleFilterByDiets(evt){
        dispatch(getFilterByDiets(evt.target.value))
        setCurrentPage(1)
        setOrder(`${evt.target.value}`)
    }

    function handleFilterByOrder(evt){
        evt.preventDefault()
        dispatch(filterByOrder(evt.target.value))
        setCurrentPage(1)
        setOrder(`${evt.target.value}`)
    }

    function handleOrderByScore(evt){
        evt.preventDefault()
        dispatch(orderByScore(evt.target.value))
        setCurrentPage(1)
        setOrder(`${evt.target.value}`)
    }



    return (
                <div>
           
                       <select defaultValue='Filter by Order' onChange={evt => handleFilterByOrder(evt)}>
                            <option disabled>Filter by Order</option>
                            <option key= 'up' value = 'up'>Upward</option>
                            <option key= 'down' value = 'down'>Descendant</option>
                        </select>
                   
                   
                   
                        <select defaultValue='Filter by type' onChange={evt => handleFilterByDiets(evt)}>
                            <option disabled>Filter by type</option>
                            {typesAll?.map((type) => <option key={type.name} value={type.name}>{type.name}</option>)}
                        </select>  
                    

                  
                        <select defaultValue='Order by score' onChange={evt => handleOrderByScore(evt)}>
                            <option disabled>Order by score</option>
                            <option key= 'SSc' value= 'SSc'>Spooncular Score</option>
                            <option key= 'HSc' value= 'HSc'>health Score</option>
                        </select>
                   
       
  </div>      
    )

            }
            