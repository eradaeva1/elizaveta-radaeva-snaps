import React from "react";
import "./FilterDrawer.scss";

function FilterDrawer({ isDrawerOpen, selectedTag, setSelectedTag, tags }) {
  const handleTagClick = (tag) => {
    if (selectedTag === tag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
    }
  };

  if (!isDrawerOpen) return null;

  return (
    <div className="nav__button-content">
      <div className="nav-button-content--flex-cont">
        <h2 className="filter__title">Filters</h2>
        <div className="filter__container">
          {tags.map((tag, index) => (
            <button
              key={index}
              className={`filter__tags ${
                selectedTag === tag ? "filter__tags--selected" : ""
              }`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilterDrawer;
