import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import FilterDrawer from "../FilterDrawer/FilterDrawer";
import arrowLogo from "../../assets/logos/Arrow.svg";
import "./Header.scss";

function Header({ toggleDrawer, isDrawerOpen }) {
  const location = useLocation();

  return (
    <header>
      <nav className="nav">
        <Link to="/" className="nav__logo-link">
          <h2 className="nav__logo">Snaps</h2>
        </Link>
        <div className="nav__right">
          {location.pathname === "/" ? (
            <button
              className={`nav__button ${
                isDrawerOpen ? "nav__button--active" : ""
              }`}
              onClick={toggleDrawer}
            >
              Filters
              <img
                src={
                  isDrawerOpen
                    ? "src/assets/logos/Filter-White.svg"
                    : "src/assets/logos/Filter.svg"
                }
                alt={isDrawerOpen ? "Close Filter" : "Open Filter"}
                className="nav__button-icon"
              />
            </button>
          ) : (
            <Link to="/" className="nav__button nav__button--home">
              <img src={arrowLogo} alt="Arrow logo" className="arrow__logo" />
              Home
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
