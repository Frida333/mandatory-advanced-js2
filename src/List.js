import React from 'react';



export default class List extends React.Component {
  render(){
    return(
      <ul>
        <li><p>Title:</p>{this.props.movieList.title}</li>
        <li><p>Director:</p>{this.props.movieList.director}</li>
        <li><p>Rating:</p>{this.props.movieList.rating}</li>
        <li><p>Description:</p>{this.props.movieList.description}</li>
      </ul>
    )
  }
}
