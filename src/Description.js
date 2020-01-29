import React from 'react';
import { Helmet } from "react-helmet";
import MaterialIcon from "material-icons-react";
import {Link} from "react-router-dom";
import {Redirect} from "react-router-dom";
import axios from 'axios';
import List from "./List";

export default class Description extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movie: {
      title: "",
      director: "",
      rating: "",
      description: "",
    },
      redirect: false,
      error: false,
    }
  }
  componentDidMount =() =>{
    this.initState()
  }
  initState =() =>{
    this.setState({
      movie:{
        ...this.props.location.state,
      }
    })
  }
  deleteMovie =() =>{
    axios.delete(`http://3.120.96.16:3001/movies/${this.props.match.params.id}`)
      .then(() =>{
        this.setState({
          redirect: true,
        })
      })
      .catch((error) => {
        this.setState({
          error: true,
        })
    });
  }
  render(){
    return(
      <div className="description">
        {this.state.redirect && <Redirect to="/" />}
        <Helmet>
          <title>{this.state.movie.title}</title>
        </Helmet>
        <h2>Movie description</h2>
        {this.state.error && <p>Oops something went wrong</p>}
        <List movieList={this.state.movie}/>
        <Link to=
          {{
            pathname: `/edit/${this.props.match.params.id}`,
            state:this.state.movie,
          }}>
          <MaterialIcon icon="edit" />
        </Link>
        <button onClick={this.deleteMovie}><MaterialIcon icon="delete" /></button>
      </div>
    )
  }
}
