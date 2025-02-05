import React from "react";
import MovieDetails from "./MovieDetails";

const Favoris=(props)=>{
      const selectedFilm = props.selectedFilm;
      const currentFilms = props.Films;
    return(<div className="">
      <div className="container">
        {props.Films.map((film) => (
          <div className="card" key={film.title}>
            <div className="bd-card" onClick={() => props.onDetails(film.title)}>
            <h3>{film.title}</h3>
            <p>{film.genre}</p>
          </div>
            <div className="btn">
              <button onClick={() => props.onRemove(film.title)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="details">
        <MovieDetails selectedFilm={selectedFilm} currentFilms={currentFilms}/>
      </div>
      </div>)
}
export default Favoris;