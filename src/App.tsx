import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Auth from "./features/auth/Auth";
import Home from "./features/home/Home";
import HomePage from "./features/homePage/HomePage";

function App() {
  return (
    <Switch>
      <Route path='/login' component={Auth} />
      <Route path='/home-system'>
        <Home />
      </Route>
      <Route path='/home-page' component={HomePage} />
      <Route path='*'>
        <Redirect to='/home-page' />
      </Route>
    </Switch>
  );
}

export default App;
