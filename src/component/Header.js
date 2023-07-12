import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>
        <nav>
          <div className="header__logo">
            <p>Movie </p>
          </div>
          <ul className="nav__links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Watch List
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/watched"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Watched List
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/search"
                className={({ isActive }) => (isActive ? "active btn" : "btn")}
              >
                + Add
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
