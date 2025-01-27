import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchPhotoById, fetchComments, postComment } from "../../utils/api"; // Axios fetch helper
import Header from "../../components/Components/Header";
import Footer from "../../components/Components/Footer";
import CommentForm from "../../components/CommentForm/CommentForm"; // Assuming you have a separate CommentForm component





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
        const details = await fetchPhotoById(photoId);
        // const matchedPhoto = response.find((photo) => photo.id === parseInt(photoId));
        
        setPhotoDetails(details);
        // setLikes(response.likes); // Assuming the API provides likes
      } catch (err) {
        setError("Failed to load photo details.");
        console.error(err);
      }
    };

   

    getPhotoDetails();
    // getComments();
  }, [photoId]);

  const handleBackHome = () => {
    navigate("/"); // Navigate back to the homepage
  };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  if (error) {
    return <div>{error}</div>;
  }



  // const getComments = async() => {
  //   try {
  //     const comments = await fetchComments(photoId);
  //     setComments(comments);
  //   } catch (err) {
  //     setError("Failed to load photo details.");
  //     console.error(err)
  //   }
  // };
  // const handleCommentSubmit = async (name, comment) => {
  //   if (!name || !comment) {
  //     setCommentError("Both name and comment are required.");
  //     return;
  //   }
  //   try {
  //     await postComment(tag, name, comment); // Post the new comment
  //     setCommentError(null); // Reset error message if successful
  //     getComments(); // Refresh comments
  //   } catch (err) {
  //     console.error("Error posting comment", err);
  //   }
  // };


   //     const getComments = async () => {
    //   try {
    //     const comments = await fetchComments(photoId); // Fetch comments for the selected tag
    //     setComments(comments);
    //   } catch (err) {
    //     setError("Failed to load comments.");
    //     console.error(err);
    //   }
    // };
  return (
    <>
      <Header />
      <button onClick={handleBackHome} className="back-home-btn">
        Back to Home
      </button>

      <main className="photo__detail">
        {photoDetails && (
          <div className="photo__detail-content">
            <h1 className="photo__detail-title">{photoDetails.title}</h1>
            <img
              className="photo__detail-image"
              src={photoDetails.photo}
              alt={photoDetails.title}
            />
            <p className="photo__detail-photographer">Photographer: {photoDetails.photographer}</p>
            <p className="photo-detail__likes">Likes: {likes}</p>
          </div>
        )}

        <section className="photo__detail-comments">
          <h2>Comments</h2>
          {/* <CommentForm
          handleCommentSubmit={handleCommentSubmit} // Pass the submit handler
          /> */}
          {/* {commentError && <p className="comment-error">{commentError}</p>} */}
          {/* <ul>
            {comments.map((comment, index) => (
              <li key={index}>
                <strong>{comment.name}</strong>: {comment.comment}
              </li>
            ))}
          </ul> */}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default PhotoDetail;