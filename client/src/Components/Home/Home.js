import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { getRecipes } from "../../Actions"; // Importing the Axios request from Actions

import "../Home/Home.css"
import {Card} from "../Card/Card"
import {Paginado} from "../Paginado/Paginado"
import SearchBar from "../SearchBar/SearchBar";
import Filters from "../Filters/Filters";

export function Home() {

  const dispatch = useDispatch(); // despachando acciones
  const allRecipes = useSelector((state) => state.recipes)   // acceso al store, en vez de mapStateToProps. Trae todo en el state de recipes

  useEffect(() => {
    dispatch(getRecipes())
  },[])

  function clickHandler(e){
    e.preventDefault();
    dispatch(getRecipes());
  }


  // Setting the local states:

// const [loading, setLoading] = useState(false)
const [currentPage, setCurrentPage] = useState(1)
const [recipesPerPage, setRecipesPerPage] = useState(9)

//Get current recipes
const indexOfLastRecipe = currentPage * recipesPerPage;
const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage; 
const currentRecipe = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe)

const pages = function(pageNumber) {
	setCurrentPage(pageNumber)
}
 
  return (
    <div className="home">
     <h1>Componente Home</h1>

      
			<Filters />
			<SearchBar />
			<Paginado 
				recipesPerPage={recipesPerPage}
				allRecipes={allRecipes.length}
				pages={pages}
			/>
		{
				currentRecipe?.map(e => {
					return (
					<Fragment>
					 	<Link to={`/home/${e.apiId}`}>
					 	<Card name_of_dish={e.name_of_dish} diets={e.diets + " "} summary={e.summary} image={e.image} id={e.apiId}/>
						</Link>
					 </Fragment>
				)})
			}
			

       
    </div>
  );
}

export default Home;