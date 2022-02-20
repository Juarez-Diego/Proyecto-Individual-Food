import React from 'react';
import { Link } from 'react-router-dom';
import "../LandingPage/LandingPage.css"

export function LandingPage() {
    return (
      <div>
        <div className='landing' >
        <h1>Henry Food App</h1>
          <Link to="/home">
             <button>Let's Cook!</button>
          </Link>
          </div>
      </div>
    )
  };
  
  export default LandingPage;
  