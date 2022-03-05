import React from "react";
import {useDispatch} from "react-redux"
import { useState } from "react";
import { getRecipeByName } from "../../Actions";
import "../SearchBar/SearchBar.css"


export function SearchBar({getRecipes}) {
const [searchWord, setSearchWord] = useState("")
const dispatch = useDispatch()

function handleInputChange(e){
    e.preventDefault()
    setSearchWord(e.target.value)
}

function handleSubmit(e){
    e.preventDefault()
    dispatch(getRecipeByName(searchWord))
}

    return (
        <div className="search_div">
        <input type="text" className="searchbar"
        placeholder="Search by name..."
        onChange={(e) => handleInputChange(e)}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)} className="search_button">Search</button>
        </div>
    )
}

export default SearchBar