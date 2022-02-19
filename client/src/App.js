import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';


import LandingPage from "./Components/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      {/* <h1>Levantáme la falda!</h1> */}
      <Route exact path="/" render={() => <LandingPage />}></Route>
    </div>
  );
}

export default App;