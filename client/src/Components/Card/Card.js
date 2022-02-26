import React from "react";

export function Card({name_of_dish, diets, image, summary, id, recipes}){
    return(
        <div>
            <h3>{name_of_dish}</h3>
            <h3>{diets}</h3>
            <p>{summary.replace(/<[^>]*>?/g, '')}</p>
            <img src={image} alt="yummy" width="350" height="350"></img>
            {/* This div should be clickable, or a "More Details" button that
            will take the user to the entire summary of the recipe. The URL
            will be the "Get Recipe by ID" URL: http:localhost:3000/:id  */}
        </div>
    );
}

export default Card;
