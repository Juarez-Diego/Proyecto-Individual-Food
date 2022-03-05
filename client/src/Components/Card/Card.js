import React from "react";
import "../Card/Card.css"

export function Card({name_of_dish, diets, image, summary, id, recipes}){
    return(
        <div className="card">
            <img src={image} alt="yummy" width="120" height="120" className="card_img"></img>
            <h3 className="card_title">{name_of_dish}</h3>
            <h3 className="card_diets">{diets}</h3>
            {/* <p>{summary.replace(/<[^>]*>?/g, '')}</p> */}
            
            {/* This div should be clickable, or a "More Details" button that
            will take the user to the entire summary of the recipe. The URL
            will be the "Get Recipe by ID" URL: http:localhost:3000/:id  */}
        </div>
    );
}

export default Card;
