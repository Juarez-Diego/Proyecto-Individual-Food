import React from "react";
import "../Paginado/Paginado.css"

export function Paginado({pages, recipesPerPage, allRecipes}){
    const pageNumber = [];

    for(var i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++){
        pageNumber.push(i)
    }
    return (
        <div className="paginado">
        <nav className="paginado_nav">
            <ul className="paginado_item">
                
            {
                pageNumber && pageNumber.map(number => {
                    return(
                   <li key={number} className="paginado_list">
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