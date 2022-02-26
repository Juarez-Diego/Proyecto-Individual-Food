import React from "react";
import { Link } from "react-router-dom";
import "../Nav/Nav.css"

export function Nav() {
  return (
    <div className="nav">
      
        <nav className="navigation" > 
          <Link to="/">LOGO NAME</Link>
          <Link to="/home">Explore Recipes</Link>
          <Link to="/recipe">Create Recipe</Link> 
        </nav>
    </div>
  );
}

export default Nav;

