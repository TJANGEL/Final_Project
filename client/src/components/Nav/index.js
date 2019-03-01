import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  // Depending on the current path, this component sets the "active" class on the appropriate navigation link item
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <Link className="navbar-brand" to="/">
        IMPATIENT NETFLIXING
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/about"
              className={
                window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
            <Link
              to="/login"
              className={
                window.location.pathname === "/login"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Login
            </Link>
            <Link
              to="/roulette"
              className={
                window.location.pathname === "/roulette"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Roulette
            </Link>
            <Link
              to="/favorites"
              className={
                window.location.pathname === "/favorites"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Favorites
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
