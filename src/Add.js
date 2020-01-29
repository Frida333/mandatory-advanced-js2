import React from 'react';
import axios from 'axios';
import { Helmet } from "react-helmet";
import Form from "./Form.js"
import {Redirect} from "react-router-dom";

export default class Add extends React.Component {
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

  submitChanges = (e) => {
    e.preventDefault()
    axios.post(`http://3.120.96.16:3001/movies/`, this.state.movie)
    .then((data) =>{
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
  onUpdateState =(e) => {
    this.setState({
      movie: {
        ...this.state.movie,[e.target.id]: e.target.value,
      }
    })
  }
  render(){
    return(
      <div>
        {this.state.redirect && <Redirect to= "/" />}
          <Helmet>
            <title>Add</title>
          </Helmet>
        <h2>Add movie</h2>
        {this.state.error && <p>Oops something went wrong</p>}
        <Form movieForm= {this.state.movie} onUpdateState={this.onUpdateState} submitChanges={this.submitChanges}/>
      </div>
    )
  }
}
