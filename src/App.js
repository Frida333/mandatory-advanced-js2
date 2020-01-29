import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Add from "./Add";
import Edit from "./Edit";
import Description from "./Description";
import Navigation from "./Navigation";
import Main from "./Main";

export default class App extends React.Component {
  render(){
    return (
      <Router>
        <Navigation></Navigation>
        <Route exact path="/" component={Main} />
        <Route path="/description/:id" component={Description} />
        <Route path="/add/" component={Add} />
        <Route path="/edit/:id" component={Edit} />
      </Router>
    )
  }
}
