// import photosData from "../../data/photos.json";
// import tagsData from "../../data/tags.json";
import React from "react";
import { Link } from "react-router-dom";

function PhotoCard({ photo, title, id, photographer, tags }) {
  const tagArray = Array.isArray(tags) ? tags : tags.split(",");

  return (
    <div className="photo__card-wrap">
      <div className="photo__card">
        <img className="photo__card-image" src={photo} alt={title} key={id} />
        <p className="photo__card-photographer">{photographer}</p>
        <div className="photo__card-tags">
        {tagArray.map((tag, index) => (
            <Link
              key={index}
              to={`/photo/${tag}`}
              className="photo__card-tag"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PhotoCard;
