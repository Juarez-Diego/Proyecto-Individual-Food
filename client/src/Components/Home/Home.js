import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { getRecipes, getDiets } from "../../Actions"; // Importing the Axios request from Actions

import "../Home/Home.css"
import {Card} from "../Card/Card"
import {Paginado} from "../Paginado/Paginado"
import SearchBar from "../SearchBar/SearchBar";
import { orderAlphabetically } from "../../Actions";
import { sortByScore } from "../../Actions";
import { sortByDiets } from "../../Actions";


export function Home() {

  const dispatch = useDispatch(); // despachando acciones
  const allRecipes = useSelector((state) => state.recipes)   // acceso al store, en vez de mapStateToProps. Trae todo en el state de recipes
  const diets = useSelector(state => state.diets)

  useEffect(() => {
    dispatch(getRecipes())
  },[])

  useEffect(() => {
	dispatch(getDiets());
}, [dispatch])

// Button to refresh Home
  function clickHandler(e){
    e.preventDefault();
    dispatch(getRecipes());
  }


  // Setting the local states:

// const [loading, setLoading] = useState(false)
const [currentPage, setCurrentPage] = useState(1)
const [recipesPerPage, setRecipesPerPage] = useState(9)
const [temp, setTemp] = useState("")
const [renderPage, setRenderPage] = useState("")

//Get current recipes
const indexOfLastRecipe = currentPage * recipesPerPage;
const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage; 
const currentRecipe = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe)


const pages = function(pageNumber) {
	setCurrentPage(pageNumber)
}

function orderAlpha(e){
	e.preventDefault()
	dispatch(orderAlphabetically(e.target.value))
	setCurrentPage(1)
	setTemp("Sorted " + e.target.value)
}

function orderScore(e){
	e.preventDefault()
	dispatch(sortByScore(e.target.value))
	setCurrentPage(1)
	setTemp("Sorted " + e.target.value)
}

function handleFilterByDiets(e) {
	dispatch(sortByDiets(e.target.value))
	setRenderPage()
};
 
  return (
	
    <div className="home">
     {/* <h1>Componente Home</h1> */}

	 		<div className="home_search">
			<SearchBar />
			</div>

			<div className="home_filters">

			<div className="home_order">
            <span>Alphabetical Order: </span>
			<select onChange={e => orderAlpha(e)}>
			  <option default value=""></option>
			  <option value="Ascending">A-Z</option>
			  <option value="Descending">Z-A</option>
		  	</select>
			  </div>

		<div className="home_score">
        <span>Order By Score: </span>
			<select onChange={e => orderScore(e)}>
			  <option default value=""></option>
			  <option value="high">High</option>
			  <option value="low">Low</option>
    		</select>
			</div>

			<div className="home_diets">
        <span>Filter By Diet: </span>
			<select onChange={e => handleFilterByDiets(e)}>
			  	<option value="all"> All </option>
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
        </div>

			

		{
				currentRecipe?.map(e => {
					return (
					<Fragment>
					 	<Link to={`/recipes/${e.id}`} style={{ textDecoration: 'none' }}> 
					 	<Card name_of_dish={e.name_of_dish} diets={e.diets + " "} image={e.image} id={e.id}/>
						</Link>
					 </Fragment>
				)})
			}

			{/* summary={e.summary} */}

			<div className="home_paginado">
			<Paginado 
				recipesPerPage={recipesPerPage}
				allRecipes={allRecipes.length}
				pages={pages}
			/>
			</div>

       
    </div>
  );
}

export default Home;