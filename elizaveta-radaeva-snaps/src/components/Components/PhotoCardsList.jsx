// import PhotoCards from './PhotoCards.scss';
import PhotoCard from "./PhotoCard";
import photosData from "../../data/photos.json";

// function PhotoCardsList() {
//   const displayPhotos = photosData.slice(0, 24);
//   return (
//     <section className="photo__cards-list">
//       {displayPhotos.map((photo) => (
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

function PhotoCardsList({ selectedTag }) {
    const filteredPhotos = selectedTag
      ? photosData.filter((photo) => photo.tags.includes(selectedTag))
      : photosData;
  
    return (
        <section className="photo__cards-list">
        {filteredPhotos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo.photo}
            title={photo.title}
            photographer={photo.photographer}
            tags={photo.tags}
          />
        ))}
      </section>
    );
  }

export default PhotoCardsList;
