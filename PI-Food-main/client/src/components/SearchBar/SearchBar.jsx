
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
 
    
    function handleSubmit(e){
        
        e.preventDefault();
        dispatch(getRecipesName(name))
        setName('')  
    }

    return(
        <div>
            <span htmlFor="name"></span>
            <input 
            type="text"
            name="name"
            autoComplete="on"
            placeholder="Enter..."
            onChange={evt => handleInput(evt)}
            className={SearchBarCss.select}
            value={name}
            />
          <button className={SearchBarCss.button}type="submit" onClick={(e) => handleSubmit(e)}>Search</button>
        </div>)
}

