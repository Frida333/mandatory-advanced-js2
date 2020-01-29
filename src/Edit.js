import React from 'react';
import { Helmet } from "react-helmet";
import Form from "./Form.js"
import {Redirect} from "react-router-dom";
import axios from 'axios';

export default class Edit extends React.Component {
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
  submitChanges = (e) => {
    e.preventDefault()
    axios.put(`http://3.120.96.16:3001/movies/${this.props.match.params.id}`, this.state.movie)
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
        {this.state.redirect && <Redirect to={{
          pathname:`/description/${this.props.match.params.id}`,
          state: this.state.movie,
          }} />
        }
          <Helmet>
            <title>Edit</title>
          </Helmet>
        <h2>Edit movie</h2>
        <div className="edit">
          {this.state.error && <p>Oops deleted movie</p>}
        </div>
        <Form movieForm= {this.state.movie} onUpdateState={this.onUpdateState} submitChanges={this.submitChanges}/>
      </div>
    )
  }
}
