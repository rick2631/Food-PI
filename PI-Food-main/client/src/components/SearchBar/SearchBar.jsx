
import { getRecipesName, searchBarName } from "../../redux/actions";
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import SearchBarCss from "../SearchBar/SearchBar.module.css"


export default function SearchBar(){
    const dispatch = useDispatch();
    const [name, setName] = useState('');
 
    function handleInput(evt){
        evt.preventDefault();
        setName(evt.target.value);
        dispatch(searchBarName(evt.target.value))
    }
 
    function handleSubmit(evt){
        evt.preventDefault();
        if(name){
            dispatch(getRecipesName(name));
            setName('')   // poner el estado en cero otra  vez
        }
    } 

    return(
        <div>
            <span htmlFor="name"></span>
            <input 
            type="text"
            name="name"
            autoComplete="on"
            placeholder="Enter breed..."
            onChange={evt => handleInput(evt)}
            className={SearchBarCss.select}
            />
            <button className={SearchBarCss.button}type="submit" onClick={(e) => handleSubmit(e)}>Search</button>
        </div>)
}

