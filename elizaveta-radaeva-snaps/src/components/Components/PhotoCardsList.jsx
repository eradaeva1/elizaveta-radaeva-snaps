import React from "react";
import { Link } from "react-router-dom";

function PhotoCardsList({ photos, tags }) {
  const safePhotos = Array.isArray(photos) ? photos : [];
  console.log("photoCardList", tags);
  console.log("PhotoCardList", photos);

  return (
    <section className="photo__cards-list">
      {safePhotos.map((photo) => (
        <Link to={`/photos/${photo.id}`} key={photo.id}>
          <div className="photo__card-wrap">
            <div className="photo__card">
              <img
                className="photo__card-image"
                src={photo.photo}
                alt={photo.photoDescription}
              />

              <p className="photo__card-photographer">{photo.photographer}</p>

              <ul className="photo__card-tags">
                {photo.tags.map((tag, index) => (
                  <li key={index} className="photo__card-tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}

export default PhotoCardsList;
