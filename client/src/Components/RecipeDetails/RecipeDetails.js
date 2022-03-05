import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import { recipeDetails } from "../../Actions";
import "../RecipeDetails/RecipeDetails.css"

export function RecipeDetails(props){

    console.log(props)
    const dispatch = useDispatch();
    const detailedRecipe = useSelector(state => state.recipeDetail)
    const {id} = useParams()

    useEffect(() => {
        dispatch(recipeDetails(id));
    }, [dispatch, id]);


    return(
        
        <div className="detail">
            <div> <br/>
            {detailedRecipe.length > 0 ? 
            <div> 
                <h1 className="detail_name">{detailedRecipe[0].name_of_dish}</h1>
                <img src={detailedRecipe[0].image} alt="yummy" className="detail_img"></img>
                <h2>Summary</h2>
                <p className="detail_summary">{detailedRecipe[0].summary.replace(/<[^>]*>?/g, '')}</p>
                <h2 className="detail_diets">Diets: {detailedRecipe[0].diets.map(e => e + ", ")}</h2>
                <h3 className="detail_score">Score: {detailedRecipe[0].score}</h3> 
                <h3 className="detail_health">Health Score: {detailedRecipe[0].Health_Level}</h3>
                <h2>Instructions</h2>
                <p className="detail_summary">{detailedRecipe[0].steps}</p>
                
                
        
            </div> : <p>Fetching recipe...</p>
            }
        </div>

        </div>
    )
}


export default RecipeDetails;