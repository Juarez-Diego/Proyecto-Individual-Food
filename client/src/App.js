import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import LandingPage from "./Components/LandingPage/LandingPage";
import Nav from "./Components/Nav/Nav";
import Home from './Components/Home/Home';


function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" render={() => <LandingPage />}></Route>
      <Route exact path="/home" render={() => <Home />}></Route>
    </div>
  );
}

export default App;