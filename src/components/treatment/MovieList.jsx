import React from "react";
import MovieDetails from "./MovieDetails";
const MovieList=(props)=>{
      const selectedFilm = props.selectedFilm;
      const currentFilms = props.currentFilms;
  return(<div>
    <div className="container">
      {props.currentFilms.map((film, index) => (
        <div className="card" key={index}>
          <div className="bd-card" onClick={() => props.onDetails(film.title)}>
            <h3 >{film.title}</h3>
            <p>{film.genre}</p>
          </div>
          <div className="btn">
            <button onClick={() => props.onSave(film.title)} className={props.savedFilms.some((saved)=> (saved.title).includes(film.title)) ? "active" : ""}>{props.savedFilms.some((saved)=> (saved.title).includes(film.title)) ? "saved" : "save"}</button>
          </div>
        </div>
      ))}
    </div>
    <div className="details">
      <MovieDetails selectedFilm={selectedFilm} currentFilms={currentFilms}/>
    </div>
    </div>)
}
export default MovieList;