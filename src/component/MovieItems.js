import React from "react";
import { requestAction } from "../store/requestSlice";
import "./MovieItems.css";
import { useDispatch, useSelector } from "react-redux";

function MovieItems(props) {
  const { Title: title, Year: year, Poster: poster, imdbID: id } = props.movie;
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.request.watchlist);
  const watchedlist = useSelector((state) => state.request.watchedlist);

  const addToList = (listType) => {
    dispatch(
      requestAction.addToList({
        listType,
        movie: {
          key: id,
          id,
          title,
          poster,
          year,
        },
      })
    );
  };

  const storedWatchlist = watchlist.find((movie) => movie.id === id);

  // check if movie is already in the watchedlist
  const storedToWatchedlist = watchedlist.find((movie) => movie.id === id);

  const watchListDisable = storedWatchlist
    ? true
    : storedToWatchedlist
    ? true
    : false;

  const watchedDisable = storedToWatchedlist ? true : false;

  const addToWatchHandler = () => {
    addToList("watchlist");
  };
  const addToWatchedHandler = () => {
    addToList("watchedlist");
  };

  return (
    <div className="movie-card">
      <div className="overlay"></div>

      <img src={poster} alt="movie"></img>

      <div className="info">
        <div className="header">
          <h1 className="title"> {title}</h1>
          <h2 className="release-date"> {year}</h2>
        </div>
        <div className="button">
          <button
            onClick={addToWatchHandler}
            disabled={watchListDisable}
            className="btn"
          >
            Add to Watch List
          </button>
          <button
            onClick={addToWatchedHandler}
            disabled={watchedDisable}
            className="btn"
          >
            Add to Watched List
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieItems;
