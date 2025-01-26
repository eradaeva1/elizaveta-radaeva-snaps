import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchPhotos } from "../../utils/api"; // Axios fetch helper
import Header from "../../components/Components/Header";
import Footer from "../..components/Components/Footer";
import CommentForm from "../../components/CommentForm/CommentForm"; // Assuming you have a separate CommentForm component
import axios from "axios";




function PhotoDetail() {
  const { photoId } = useParams(); // Get the photo ID from URL params
  const [photoDetails, setPhotoDetails] = useState(null);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0); // Default likes
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // For navigating back to the HomePage

  useEffect(() => {
    const getPhotoDetails = async () => {
      try {
        const response = await axios.get(`https://unit-3-project-c5faaab51857.herokuapp.com/photos/${photoId}`);
        setPhotoDetails(response.data);
        setLikes(response.data.likes); // Assuming the API provides likes
      } catch (err) {
        setError("Failed to load photo details.");
        console.error(err);
      }
    };

    const getComments = async () => {
      try {
        const response = await axios.get(`https://unit-3-project-c5faaab51857.herokuapp.com/comments?photoId=${photoId}`);
        setComments(response.data);
      } catch (err) {
        setError("Failed to load comments.");
        console.error(err);
      }
    };

    getPhotoDetails();
    getComments();
  }, [photoId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleBackHome = () => {
    navigate("/"); // Navigate back to the homepage
  };

  return (
    <>
      <Header />
      <button onClick={handleBackHome} className="back-home-btn">
        Back to Home
      </button>

      <main className="photo-detail">
        {photoDetails && (
          <div className="photo-detail__content">
            <h1 className="photo-detail__title">{photoDetails.title}</h1>
            <img
              className="photo-detail__image"
              src={photoDetails.photo}
              alt={photoDetails.title}
            />
            <p className="photo-detail__photographer">Photographer: {photoDetails.photographer}</p>
            <p className="photo-detail__likes">Likes: {likes}</p>
          </div>
        )}

        <section className="photo-detail__comments">
          <h2>Comments</h2>
          <CommentForm photoId={photoId} fetchComments={getComments} />
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