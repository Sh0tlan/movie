import React from "react";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import "./App.css";
import RootLayout from "./pages/RootLayout.js";
import WatchList from "./component/WatchList.js";

import SearchList from "./component/SearchList.js";
import WatchedList from "./component/WatchedList.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <WatchList /> },
      { path: "/watched", element: <WatchedList /> },
      { path: "/search", element: <SearchList /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
