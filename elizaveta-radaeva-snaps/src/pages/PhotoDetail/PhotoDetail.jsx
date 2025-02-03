import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CommentForm from "../../components/CommentForm/CommentForm";
import axios from "axios";
import "./PhotoDetail.scss";
import likeOutline from "../../assets/logos/Like_Outline.svg";
function PhotoDetail() {
  const { photoId } = useParams();
  const [photoDetails, setPhotoDetails] = useState(null);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const baseUrl = import.meta.env.VITE_APP_URL;

  useEffect(() => {
    const getPhotoDetails = async () => {
      try {
        const response = await axios.get(`${baseUrl}/photos/${photoId}`);
        setPhotoDetails(response.data);
      } catch (err) {
        setError("Failed to load photo details.");
        console.error(err);
      }
    };

    const getComments = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/photos/${photoId}/comments`
        );
        setComments(response.data);
      } catch (err) {
        setError("Failed to load comments.");
        console.error(err);
      }
    };

    const fetchData = async () => {
      await Promise.all([getPhotoDetails(), getComments()]);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleBackHome = () => {
    navigate("/");
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
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
                  <img src={likeOutline} alt="Like outline" className="like__outline" />
                  {photoDetails.likes} likes
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

          {/* Show the number of comments */}
          <p className="comments__count">
            {comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}
          </p>

          <ul className="comment__list">
            {comments.map((comment, index) => (
              <li className="comment__list-item" key={index}>
              <p className="comment__list-date">
                  {formatDate(comment.timestamp)} </p>
                <p className="comment__list-name">{comment.name}</p>
                <p className="comment__list-comment">{comment.comment} </p> 
                
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
