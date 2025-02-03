import { useState } from "react";
import axios from "axios";
import "./CommentForm.scss";

const CommentForm = ({ addComment, photoId }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  
  const baseUrl = import.meta.env.VITE_APP_URL;

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    if (!name || !comment) {
      alert("Please fill in both fields.");
      return;
    }

    try {
      const newComment = { name, comment };

      
      await axios.post(`${baseUrl}/photos/${photoId}/comments`, newComment);

     
      setComments((prevComments) => [newComment, ...prevComments]);

     
      setName("");
      setComment("");
    } catch (err) {
      console.error("Error posting comment", err);
    }
  };

  return (
    <form className="comment__form" onSubmit={handleCommentSubmit}>
      <div className="comment__form-field">
        <label htmlFor="name" className="label">
          Name
        </label>
        <input
          id="name"
          className="input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="comment__form-field">
        <label htmlFor="comment" className="label">
          Comment
        </label>
        <textarea
          id="comment"
          className="input"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <button type="submit" className="comment__form-btn">
        Submit
      </button>

      
      <div className="comment__form">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <p>
              <strong>{comment.name}:</strong> {comment.comment}
            </p>
          </div>
        ))}
      </div>
    </form>
  );
};

export default CommentForm;
