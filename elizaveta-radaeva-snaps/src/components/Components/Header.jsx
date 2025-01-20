import React, { useState } from "react";
import FilterDrawer from "./FilterDrawer";

function Header({ toggleDrawer, isDrawerOpen }) {
  return (
    <header>
      <nav className="nav">
        <h2 className="nav__logo">Snaps</h2>
        <div className="nav__right">
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
        </div>
      </nav>
    </header>
  );
}

export default Header;
