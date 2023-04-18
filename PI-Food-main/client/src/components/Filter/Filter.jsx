import React from 'react'
import { useDispatch } from "react-redux";
import { filterByOrder, filterCreated, getFilterByDiets, orderByScore } from "../../redux/actions";
import s from '../Filter/Filter.module.css'

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
    function handleFilterCreated(evt){
        dispatch(filterCreated(evt.target.value));  
        
        }


    return (
                <div>
           <div className={s.filters}>
                       <select defaultValue='Filter by Order' className={s.select} onChange={evt => handleFilterByOrder(evt)}>
                            <option disabled>Filter by Order</option>
                            <option key= 'up' value = 'up'>Upward</option>
                            <option key= 'down' value = 'down'>Descendant</option>
                        </select>
                   
                   
                   
                        <select defaultValue='Filter by type' className={s.select}  onChange={evt => handleFilterByDiets(evt)}>
                            <option disabled>Filter by type</option>
                            {typesAll?.map((type,id) => <option key={`${type.name}-${id}`} value={type.name}>{type.name}</option>)}
                        </select>  
                    

                  
                        <select defaultValue='Order by score' className={s.select} onChange={evt => handleOrderByScore(evt)}>
                            <option disabled>Order by score</option>
                            <option value="high"> High score </option>
                             <option value="low"> Low score </option>
                        </select>
                        <select name="ifoapidb" className={s.select} onChange = {evt => handleFilterCreated(evt)}>
                           
                           <option value = 'all'>All </option>
                           <option value = 'existent'>Api</option>
                           <option value = 'created'>Created </option> 
                               </select>
   
       </div>
  </div>      
    )

            }
            