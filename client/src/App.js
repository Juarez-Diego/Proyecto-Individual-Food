import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import LandingPage from "./Components/LandingPage/LandingPage";
import Nav from "./Components/Nav/Nav";
import Home from './Components/Home/Home';
import Form from "./Components/Form/Form"
import Card from "./Components/Card/Card";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
      <Route exact path="/" render={() => <LandingPage />}></Route>
      <Route path="/home" render={() => <Home />}></Route>
      <Route path="/recipe" render={() => <Form />}></Route>
      </Switch>
    </div>
  );
}

export default App;