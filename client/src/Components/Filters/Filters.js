import React from "react";
import { useState } from "react";

export function Filters(){


    return (
        <div>
            <span>Alphabetical Order: </span>
			<select >
			  <option default value=""></option>
			  <option value="Ascending">A-Z</option>
			  <option value="Descending">Z-A</option>
		  	</select>

        <span>Order By Score: </span>
			<select>
			  <option default value=""></option>
			  <option value="high">High</option>
			  <option value="low">Low</option>
    		</select>

        <span>Filter By Diet: </span>
			<select>
			  	<option default value=""></option>
		      	<option value="gluten free">Gluten Free</option>
				<option value="dairy free">Ketogenic</option>
				<option value="vegetarian">Vegetarian</option>
				<option value="lacto vegetarian">Lacto-Vegetarian</option>
				<option value="lacto ovo vegetarian">Ovo-Vegetarian</option>
				<option value="vegan">Vegan</option>
				<option value="pescatarian">Pescetarian</option>
				<option value="paleolithic">Paleo</option>
				<option value="primal">Primal</option>
				<option value="whole 30">Whole30</option>;
			</select>
        </div>
    )
}

export default Filters;