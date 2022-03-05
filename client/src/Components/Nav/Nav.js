import React from "react";
import { Link } from "react-router-dom";
import "../Nav/Nav.css"

export function Nav() {
  return (
    <div className="nav">
      
        <nav className="navigation" > 
          <Link to="/" style={{ color: 'black', textDecoration: 'none' }} >Henry Food App</Link>
          <Link to="/home" style={{ color: 'black', textDecoration: 'none' }}>Explore Recipes</Link>
          <Link to="/recipe" style={{ color: 'black', textDecoration: 'none' }}>Create Recipe</Link> 
        </nav>
    </div>
  );
}

export default Nav;

