import React from "react";

const MovieDetails=(props)=>{
    return(<div>
        {props.currentFilms.map((film, index) => (
            film.title === props.selectedFilm ? (
                <ul className="liste" key={index}>
                    <div className="card">
                        <li><span>Title :</span> {film.title}</li>
                        <li><span>Director :</span> {film.director}</li>
                        <li><span>Release Year : </span>{film.releaseYear}</li>
                        <li><span>Genre :</span> {film.genre}</li>
                        <li><span>Rating :</span> {film.rating}</li>
                    </div>
                </ul>
            ) : (
                null
            )
          
        ))}
      </div>)
}
export default MovieDetails;