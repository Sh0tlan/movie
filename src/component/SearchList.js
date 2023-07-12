import { useEffect, useState } from "react";

import MovieItems from "./MovieItems";
import { useDispatch, useSelector } from "react-redux";
import { sendRequest } from "../store/requestSlice";
import "./Search.css";

function SearchList() {
  const query = useSelector((state) => state.request.query);
  const [localQuery, setLocalQuery] = useState(query);
  const dispatch = useDispatch();
  const results = useSelector((state) => state.request.movies);

  useEffect(() => {
    let timeoutId;
    if (localQuery) {
      timeoutId = setTimeout(() => {
        dispatch(sendRequest(localQuery));
      }, 2000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [localQuery, dispatch]);

  function changeHandler(e) {
    e.preventDefault();
    setLocalQuery(e.target.value);
  }

  return (
    <section className="add-page">
      <div className="container">
        <div className="container__list">
          <div className="search__input">
            <input
              type="text"
              placeholder="Search for a movie"
              value={localQuery || ""}
              onChange={changeHandler}
            />
          </div>
          <ul>
            {results !== undefined ? (
              results.map((movie) => (
                <MovieItems key={movie.imdbID} movie={movie} />
              ))
            ) : (
              <p>This name is not exist</p>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SearchList;
