import React from "react";
import MovieControls from "./MovieControls";

function MovieCard({ movies, type }) {
  return (
    <div className="main-movie-card movie-card">
      <div className="overlay"> </div>
      <img src={movies.poster} alt={`${movies.title} Poster`} />
      <MovieControls type={type} movie={movies} />
    </div>
  );
}

export default MovieCard;
