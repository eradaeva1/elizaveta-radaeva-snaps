// import PhotoCard from "./PhotoCard";
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


function PhotoCardsList({ photos, tags }) {

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
        <div className="photo__card-wrap" key={photo.id}>
      <div className="photo__card">
        <img className="photo__card-image" src={photo.photo} alt={photo.photoDescription}  />
        {/* <p className="photo__card-title">{title}</p> Show the photo's description */}
        <p className="photo__card-photographer">{photo.photographer}</p>
        {/* <p className="photo__card-likes">{likes} likes</p> Show the number of likes */}
        {/* <div className="photo__card-tags">
          {tagArray.map((tag, index) => (
            <Link
              key={index}
              to={`/photo/${tag}`}
              className="photo__card-tag"
            >
              {tag}
            </Link> */}
          {/* ))}
        </div> */}
      </div>
    </div>
      ))}   
    </section>
  );
}



export default PhotoCardsList;
