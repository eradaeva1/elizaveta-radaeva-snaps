import { useState } from "react";
import axios from "axios";


const CommentForm = ({ addComment, photoId }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  // Get the base URL from environment variables
  // Get the base URL from environment variables
  const baseUrl = import.meta.env.VITE_APP_URL;

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    if (!name || !comment) {
      alert("Please fill in both fields.");
      return;
    }

    try {
      const newComment = { name, comment };

      // Post the new comment to the server
      await axios.post(`${baseUrl}/photos/${photoId}/comments`, newComment);

      // Update the comments list by adding the new comment at the top
      setComments((prevComments) => [newComment, ...prevComments]);

      // Reset the form fields
      setName("");
      setComment("");
    } catch (err) {
      console.error("Error posting comment", err);
    }
  };

  return (
    <form className="comment__form" onSubmit={handleCommentSubmit}>
      <div className="comment__form-field">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="comment__form-field">
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <button type="submit" className="comment__form-btn">
        Submit
      </button>

      {/* Display the comments below the form, in reverse order */}
      <div className="comment__form">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <p><strong>{comment.name}:</strong> {comment.comment}</p>
          </div>
        ))}
      </div>
    </form>
  );
};

export default CommentForm;
