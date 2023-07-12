import React from "react";
import { Outlet } from "react-router";
import Header from "../component/Header";

function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default RootLayout;
