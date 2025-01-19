import React, { useState } from "react";


function Header({toggleDrawer}) {
  return (
    <header>
      <nav className="nav">
        <h2 className="nav__logo">Snaps</h2>
        <div className="nav__right">
          <button className="nav__button" onClick={toggleDrawer}>
          Filters
            <img
              src="src\assets\logos\Filter.svg"
              alt="filter icon"
              className="nav__button-icon"
            />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
