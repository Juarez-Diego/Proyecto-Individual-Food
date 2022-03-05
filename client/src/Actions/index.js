import axios from "axios";

// Aqui me traigo todas la recetas tanto de la API como de la DB, conexion con el back
export function getRecipes(){
    return async function(dispatch){
        const recipes = await axios.get("http://localhost:3001/recipes");
        return dispatch({
            type: "GET_RECIPES",
            payload: recipes.data
        })
    }
}

// Aqui me traigo solo la receta que coincida con el quiery nombre
export function getRecipeByName(name){
    return async function(dispatch){
        const recipeByName = await axios.get(`http://localhost:3001/recipes?name=${name}`)
        return dispatch({
            type: "GET_RECIPE_BY_NAME",
            payload: recipeByName.data
        })
    }
}

export function getDiets(){
    return async function(dispatch){
        const allDiets = await axios.get("http://localhost:3001/types")
        return dispatch({
            type: "GET_DIETS",
            payload: allDiets.data
        })
    }
}

export function createRecipe(payload){
    return async function(dispatch){
        const response = await axios.post("http://localhost:3001/recipe", payload)
    }
}

export function recipeDetails(id){
    return async function(dispatch){
        let oneRecipe = await axios.get(`http://localhost:3001/recipes/${id}`)
        return dispatch({
             type: "RECIPE_DETAILS", 
             payload: oneRecipe.data})
    }
}

export function orderAlphabetically(payload){
    return {
        type: "SORT_ALPHABETICALLY",
        payload
    }
}

export function sortByScore(payload){
    return {
        type: "SORT_BY_SCORE",
        payload
    }
}

export function sortByDiets(payload){
    return {
        type: "SORT_BY_DIETS",
        payload
    }
}