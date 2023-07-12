import React from "react";
import { useSelector } from "react-redux";
import "./WatchList.css";
import MovieCard from "./MovieCard";

function WatchList() {
  const movies = useSelector((state) => state.request.watchlist);
  console.log(movies);

  return (
    <div className="main-movie-page">
      <div className="header">
        <h1 className="heading"> My Watchlist</h1>
      </div>
      <div className="content">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movies={movie}
              type="watchlist"
            ></MovieCard>
          ))
        ) : (
          <p>No movies in watched list yet</p>
        )}
      </div>
    </div>
  );
}

export default WatchList;
