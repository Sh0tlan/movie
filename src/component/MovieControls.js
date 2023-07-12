import React from "react";
import "./MovieControls.css";
import { useDispatch, useSelector } from "react-redux";
import { requestAction } from "../store/requestSlice";

function MovieControls({ movie, type }) {
  const dispatch = useDispatch();

  function addToWatchedlist() {
    dispatch(requestAction.moveToList({ listType: "watchlist", movie }));
  }

  function addToWatchlist() {
    dispatch(requestAction.moveToList({ listType: "watchedlist", movie }));
  }

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button onClick={addToWatchedlist} className="ctrl-btn">
            <i className="fa-fw far fa-eye"></i>
          </button>
          <button className="ctrl-btn">
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
      {type === "watchedlist" && (
        <>
          <button onClick={addToWatchlist} className="ctrl-btn">
            <i className="fa-fw far fa-eye-slash"></i>
          </button>

          <button className="ctrl-btn">
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
}

export default MovieControls;
