import React from "react";
import { Route, Switch } from 'react-router-dom';
import './App.css';

import LandingPage from "./Components/LandingPage/LandingPage";
import Nav from "./Components/Nav/Nav";
import Home from './Components/Home/Home';
import Form from "./Components/Form/Form"
import RecipeDetails from "./Components/RecipeDetails/RecipeDetails";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
      <Route exact path="/" render={() => <LandingPage />}></Route>
      <Route exact path="/home" render={() => <Home /> }></Route>
      <Route exact path="/recipes/:id" render={() => <RecipeDetails />}></Route>
      <Route exact path="/recipe" render={() => <Form />}></Route>
      </Switch>
    </div>
  );
}

export default App;