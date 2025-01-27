import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchPhotoById, fetchComments, postComment } from "../../utils/api";
import Header from "../../components/Components/Header";
import Footer from "../../components/Components/Footer";
import CommentForm from "../../components/CommentForm/CommentForm";

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

function PhotoDetail() {
  const { photoId } = useParams();
  const [photoDetails, setPhotoDetails] = useState(null);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getPhotoDetails = async () => {
      try {
        const details = await fetchPhotoById(photoId);

        setPhotoDetails(details);
      } catch (err) {
        setError("Failed to load photo details.");
        console.error(err);
      }
    };
    const getComments = async () => {
      try {
        const comments = await fetchComments(photoId);
        setComments(comments);
      } catch (err) {
        setError("Failed to load photo details.");
        console.error(err);
      }
    };

    getPhotoDetails();
    getComments();
  }, [photoId]);

  const handleBackHome = () => {
    navigate("/");
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Header />
      <button onClick={handleBackHome} className="back-home-btn">
        Back to Home
      </button>

      <main className="photo__detail">
        {photoDetails && (
          <div className="photo__detail-content">
            <div className="photo__detail-wrap">
              <img
                className="photo__detail-image"
                src={photoDetails.photo}
                alt={photoDetails.title}
              />
              <div className="photo__card-tags">
                {photoDetails.tags && photoDetails.tags.length > 0 ? (
                  photoDetails.tags.map((tag, index) => (
                    <span key={index} className="photo__card-tag">
                      {tag}
                    </span>
                  ))
                ) : (
                  <span>No tags available</span>
                )}
              </div>
              <div className="photo__detail-info">
                <p className="photo__detail__likes">
                  ♡ {photoDetails.likes} likes
                </p>
                <p className="photo__detail-date">
                  {formatDate(photoDetails.timestamp)}
                </p>
                <p className="photo__detail-photographer">
                  Photo by {photoDetails.photographer}
                </p>
              </div>
            </div>
          </div>
        )}

        <section className="photo__detail-comments">
          <CommentForm photoId={photoId} />

          <ul>
            {comments.map((comment, index) => (
              <li key={index}>
                <strong>{comment.name}</strong>: {comment.comment}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default PhotoDetail;
