import { useState } from "react";
import { postComment } from "../../utils/api";
import axios from "axios";

const CommentForm = ({ addComment, photoId }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    if (!name || !comment) {
      alert("Please fill in both fields.");
      return;
    }

    try {
      const newComment = { name, comment };
      await postComment(photoId, name, comment);

      if (addComment) {
        addComment(newComment);
      }

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
    </form>
  );
};

export default CommentForm;
