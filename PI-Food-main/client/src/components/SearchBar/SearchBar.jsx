
import { getRecipesName, searchBarName } from "../../redux/actions";
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import SearchBarCss from "../SearchBar/SearchBar.module.css"


export default function SearchBar(){
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function onChange(e){
        console.log(name)
        e.preventDefault()
        setName(e.target.value); 
    }

    function handleSubmit(e){

        e.preventDefault();
        dispatch(getRecipesName(name))
    }

    return(
        <div>
            <span htmlFor="name"></span>
            <input 
            type="text"
            name="name"
            autoComplete="on"
            placeholder="Enter..."
            onChange={(e) => onChange(e)}
            className={SearchBarCss.select}
            />
            <button className={SearchBarCss.button}type="submit" onClick={(e) => handleSubmit(e)}>Search</button>
        </div>)
}

