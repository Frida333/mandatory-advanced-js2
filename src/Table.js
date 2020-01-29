import React from 'react';
import {Link} from "react-router-dom";




export default class Table extends React.Component {
  render(){
    return(
      <div className="inputSearch">
        <input type="text" placeholder="Search" value={this.props.searchMovie} onChange={this.props.updateSearch}/>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Director</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
          {this.props.movieTable
            .filter(movie => {
              if(movie.title.toLowerCase().includes(this.props.searchMovie.toLowerCase()) || movie.director.toLowerCase().includes(this.props.searchMovie.toLowerCase())){
                return movie
              }
              else {
                return null
              }
            })
            .map(movie => {return(
            <tr key={movie.id}>
              <td><Link to={{
                pathname:`/description/${movie.id}`,
                state:{
                  title: movie.title,
                  director: movie.director,
                  rating: movie.rating,
                  description: movie.description,
                }
              }}>{movie.title}</Link></td>
              <td>{movie.director}</td>
              <td>{movie.rating}</td>
            </tr>
            )})
          }
          </tbody>
        </table>
      </div>
      </div>
    )
  }
}
