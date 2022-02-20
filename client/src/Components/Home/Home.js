import React from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { getRecipes } from "../../Actions"; // Importing the Axios request from Actions

import "../Home/Home.css"

export function Home() {

  const dispatch = useDispatch(); // despachando acciones
  const allRecipes = useSelector((state) => state.recipes)   // acceso al store, en vez de mapState to Props. Trae todo en el state de recipes

  useEffect(() => {
    dispatch(getRecipes())
  },[])

  function clickHandler(e){
    e.preventDefault();
    dispatch(getRecipes());
  }

  return (
    <div className="home">
     <h1>Componente Home</h1>
    </div>
  );
}

export default Home;