import { useState } from "react";
import axios from "axios";


const CommentForm = ({ addComment, photoId }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

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

    
      await axios.post(`${baseUrl}/photos/${photoId}/comments`, newComment);

     
      if (addComment) {
        addComment(newComment);
      }

      const updatedComments = await axios.get(`${baseUrl}/photos/${photoId}/comments`);
    setComment(updatedComments.data);


      setName("");
      setComment("");
    } catch (err) {
      console.error("Error posting comment", err);
    }
  };

  
  // const handleCommentSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!name || !comment) {
  //     alert("Please fill in both fields.");
  //     return;
  //   }

  //   try {
  //     const newComment = { name, comment };

  //     // Send request to the server
  //     const response = await axios.post(`${baseUrl}/photos/${photoId}/comments`, newComment);
  //     const savedComment = response.data; // Get the saved comment from the server

  //     // Update comments state
  //     setComments((prevComments) => [...prevComments, savedComment]);

  //     setName("");
  //     setComment("");
  //   } catch (err) {
  //     console.error("Error posting comment", err);
  //   }
  // };

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
