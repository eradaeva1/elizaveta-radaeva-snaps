import React from "react";

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
  );
}

export default FilterDrawer;
