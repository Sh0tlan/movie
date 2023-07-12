import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  isLoading: false,
  watchlist: [],
  watchedlist: [],
  query: "",
};

const requestSlice = createSlice({
  name: "handleRequest",
  initialState,
  reducers: {
    setLoading(state) {
      state.isLoading = !state.isLoading;
    },

    setMovies(state, action) {
      state.movies = action.payload;
    },

    addToList(state, action) {
      const { listType, movie } = action.payload;
      const newList =
        listType === "watchlist" ? state.watchlist : state.watchedlist;
      console.log(newList);
      const existingMovie = newList.find((m) => m.id === movie.id);

      if (!existingMovie) {
        newList.push({
          id: movie.id,
          key: movie.id,
          title: movie.title,
          poster: movie.poster,
          year: movie.year,
        });
      }
    },

    moveToList(state, action) {
      console.log(action.payload);
      const { listType, movie } = action.payload;
      console.log(listType);
      if (listType === "watchlist") {
        state.watchedlist.push(movie);
        state.watchlist = state.watchlist.filter((mov) => mov.id !== movie.id);
      }
      if (listType === "watchedlist") {
        state.watchlist.push(movie);
        state.watchedlist = state.watchedlist.filter(
          (mov) => mov.id !== movie.id
        );
      }
    },
  },
});

export const requestAction = requestSlice.actions;

export default requestSlice.reducer;

export const sendRequest = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${query}&apikey=8a5de800`
      );
      const data = await response.json();

      if (data.response !== "False") {
        console.log(data.Search);
        dispatch(requestAction.setLoading());
        dispatch(requestAction.setMovies(data.Search)); // Dispatch the `setMovies` action with the fetched movie data
      } else {
        dispatch(requestAction.setLoading());
        dispatch(requestAction.setMovies([])); // Reset the `movies` state when the response is false
      }
    } catch (error) {
      console.error("Could not fetch", error.messagge);
      return false;
    }
  };
};
