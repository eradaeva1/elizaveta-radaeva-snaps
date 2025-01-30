// import PhotoCard from "./PhotoCard";
import React from "react";
import { Link } from "react-router-dom";
// function PhotoCardsList({ selectedTag }) {
//   const filteredPhotos = selectedTag
//     ? photosData.filter((photo) => photo.tags.includes(selectedTag))
//     : photosData;

//   return (
//     <section className="photo__cards-list">
//       {filteredPhotos.map((photo) => (
//         <PhotoCard
//           key={photo.id}
//           photo={photo.photo}
//           title={photo.title}
//           photographer={photo.photographer}
//           tags={photo.tags}
//         />
//       ))}
//     </section>
//   );
// }


function PhotoCardsList({ photos, tags,  }) {

    // const filteredPhotos = selectedTag
    // ? photosData.filter((photo) => photo.tags.includes(selectedTag))
    // : photosData;
    const safePhotos = Array.isArray(photos) ? photos : [];
    console.log("photoCardList", tags);
    console.log("PhotoCardList", photos)
    // const tagArray = Array.isArray(tags) ? tags : tags.split("");
  //  if (safePhotos.length === 0) {
  //   return <div>No photos available.</div>;
  // }
  
    return (
    <section className="photo__cards-list">
      { 
        safePhotos.map((photo) => (
          <Link to={`/photos/${photo.id}`} key={photo.id}>
        <div className="photo__card-wrap">
      <div className="photo__card">
        <img className="photo__card-image" src={photo.photo} alt={photo.photoDescription}  />
        {/* <p className="photo__card-title">{title}</p> Show the photo's description */}
        <p className="photo__card-photographer">{photo.photographer}</p>
        {/* <p className="photo__card-likes">{likes} likes</p> Show the number of likes */}
        <ul className="photo__card-tags">
          {photo.tags.map((tag, index) => (
            <li
              key={index}
              // to={`/photo/${tag}`}
              className="photo__card-tag"
            >
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
