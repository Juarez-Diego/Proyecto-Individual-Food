import React from 'react';
import { Link } from 'react-router-dom';

export function LandingPage() {
    return (
      <div>
        <h1>Henry Food App</h1>
          <Link to="/home">
             <button>Let's Cook!</button>
          </Link>
      </div>
    )
  };
  
  export default LandingPage;
  