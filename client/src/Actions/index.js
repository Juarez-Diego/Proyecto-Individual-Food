import React from "react";
import axios from "axios";

// Aqui me traigo todas la recetas tanto de la API como de la DB, conexion con el back
export function getRecipes(){
    return async function(dispatch){
        const recipes = await axios.get("http://localhost/3001/recipes");
        return dispatch({
            type: "GET_RECIPES",
            payload: recipes.data
        })
    }
}

