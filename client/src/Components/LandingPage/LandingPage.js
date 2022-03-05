import React from 'react';
import { Link } from 'react-router-dom';
import "../LandingPage/LandingPage.css"

export function LandingPage() {
    return (
      <div>
        <div className='landing' >
        <h1 className='landing_title'>Henry Food App</h1>
        <h3> A simple web application where you can 
          find delicious recipes <br/>
           for all diet types and even create your own.
        </h3>

        <br/>
          <Link to="/home">
             <button className='landing_button'>Let's Eat!</button>
          </Link>
          </div>
      </div>
    )
  };
  
  export default LandingPage;
  