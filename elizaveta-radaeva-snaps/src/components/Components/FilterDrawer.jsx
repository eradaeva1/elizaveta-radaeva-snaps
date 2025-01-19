import tagsData from "../../data/tags.json";
import { useState } from "react";
import photosData from "../../data/photos.json";



function FilterDrawer({ isDrawerOpen, selectedTag, setSelectedTag }) {
    const handleTagClick = (tag) => {
      if (selectedTag === tag) {
        setSelectedTag(null); // Deselect tag
      } else {
        setSelectedTag(tag); // Select tag
      }
    };
  
    if (!isDrawerOpen) return null;
  
    return (
      <div className="nav__button-content">
      <h2 className="filter__tags">Filters</h2>
        {tagsData.map((tag, index) => (
          <button
            key={index}
            className={`filter__tags-items ${
              selectedTag === tag ? "filter__tags-items--selected" : ""
            }`}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    );
  }

export default FilterDrawer;
