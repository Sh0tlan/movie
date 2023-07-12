import React from "react";
import { useSelector } from "react-redux";
import "./WatchList.css";
import MovieCard from "./MovieCard";

function WatchList() {
  const movies = useSelector((state) => state.request.watchedlist);

  return (
    <div className="main-movie-page">
      <div className="header">
        <h1 className="heading"> My WatchedList</h1>
      </div>
      <div className="content">
        {movies.length > 0 ? (
          movies.map((movies) => (
            <MovieCard
              key={movies.id}
              movies={movies}
              type="watchedlist"
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

// function WatchedList() {
//   let b = JSON.parse(localStorage.getItem("tb"));
//   console.log(b.payload.poster);

//   return (
//     <div>
//       <h1>WathedList</h1>
//       <img src={b.payload.poster} alt="watched list"></img>
//     </div>
//   );
// }
