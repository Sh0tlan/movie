import { configureStore } from "@reduxjs/toolkit";
import requestReducer from "./requestSlice";

const store = configureStore({
  reducer: {
    request: requestReducer,
  },
});

export default store;
