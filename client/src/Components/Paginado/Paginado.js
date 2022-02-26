import React from "react";

export function Paginado({pages, recipesPerPage, allRecipes}){
    const pageNumber = [];

    for(var i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++){
        pageNumber.push(i)
    }
    return (
        <div className="navDiv">
        <nav className="nav">
            <ul>
                
            {
                pageNumber && pageNumber.map(number => {
                    return(
                   <li key={number}>
                    <a onClick={() => pages(number)}>
                        {number}
                    </a>
                    </li>
                )})
            }
           </ul>
        </nav>
        </div>
    )
}

export default Paginado;