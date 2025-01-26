import PhotoCard from "./PhotoCard";
import React from "react";

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
function PhotoCardsList({ selectedTag, photos }) {

    // const filteredPhotos = selectedTag
    // ? photosData.filter((photo) => photo.tags.includes(selectedTag))
    // : photosData;

  return (
    <section className="photo__cards-list">
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo.photo}
          title={photo.title}
          id={photo.id}
          photographer={photo.photographer}
          tags={photo.tags}
        />
      ))}
    </section>
  );
}



export default PhotoCardsList;
