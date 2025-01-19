import photosData from "../../data/photos.json";
import tagsData from "../../data/tags.json";

function PhotoCard({ photo, title, id, photographer, tags }) {
  const tagArray = Array.isArray(tags) ? tags : tags.split(",");

  return (
    <div className="photo__card-wrap">
      <div className="photo__card">
        <img className="photo__card-image" src={photo} alt={title} key={id} />
        <p className="photo__card-photographer">{photographer}</p>
        <div className="photo__card-tag">
          {tagArray.map((tag, index) => (
            <button key={index} className="photo__card-tag">
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PhotoCard;
