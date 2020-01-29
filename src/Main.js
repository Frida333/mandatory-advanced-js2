import React from 'react';
import axios from 'axios';
import { Helmet } from "react-helmet";
import Table from "./Table";


export default class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movies: [],
      search: "",
      error: false,
    };
  }
  componentDidMount(){
    this.getMovies()
  }
  getMovies(){
    axios.get('http://3.120.96.16:3001/movies')
    .then((data) =>{
      console.log(data);
      this.setState({
        movies: data.data,
      })
    })
    .catch((error) => {
      this.setState({
        error: true,
      })
    });
  }
  updateSearch =(e) =>{
    this.setState({
      search: e.target.value,
    })
  }
  render(){
    return(
      <div>
        <Helmet>
          <title>Main</title>
        </Helmet>
        {this.state.error && <p>Oops something went wrong</p>}
        <Table movieTable={this.state.movies} getMovies={this.getMovies} searchMovie={this.state.search} updateSearch={this.updateSearch}/>
      </div>
    )
  }
}
