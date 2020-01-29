import React from 'react';
import {Link} from "react-router-dom";
import MaterialIcon from "material-icons-react";


export default class Navigation extends React.Component {
  render(){
    return(
      <header>
        <nav className="nav">
          <Link to="/"><MaterialIcon icon="home"/></Link>
          <Link to="/Add"><MaterialIcon icon="add" /></Link>
          <h1>Movies</h1>
        </nav>
      </header>
    )
  }
}
