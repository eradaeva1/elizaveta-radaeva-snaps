import React, { useState } from "react";

function CommentForm({ addComment }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !comment) {
      alert("Please fill in both fields.");
      return;
    }

    const newComment = { name, comment };
    addComment(newComment);
    setName("");
    setComment("");
  };

  return (
    <form className="comment__form" onSubmit={handleSubmit}>
      <h3>Add a Comment</h3>
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
}

export default CommentForm;