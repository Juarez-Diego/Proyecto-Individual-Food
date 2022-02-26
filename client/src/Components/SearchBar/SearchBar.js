import React from "react";
import {useDispatch, useSelector} from "react-redux"
import { useState, useEffect } from "react";
import { getRecipeByName } from "../../Actions";
import Card from "../Card/Card";

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
        <div>
        <input type="text" 
        placeholder="Search by name..."
        onChange={(e) => handleInputChange(e)}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>Search</button>
        </div>
    )
}

export default SearchBar