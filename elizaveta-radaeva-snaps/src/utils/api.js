import axios from 'axios';

// The API URL and API key directly in the code
const API_URL = "https://unit-3-project-c5faaab51857.herokuapp.com";
const API_KEY = "44e7d366-4987-486b-9dc5-fb3b6220a2ef";  // Directly hardcoded API key

// Fetch photos from the API
 export const fetchPhotos = async () => {
  try {
    const response = await axios.get(`${API_URL}/photos?api_key=${API_KEY}`) 
      console.log(response.data)
    return response.data;
  } catch (error) {
    throw new Error("Error fetching photos");
}
 };

 

export const fetchPhotoById = async (id) => {
    try {
      const response = await axios.get(`${API_URL}/photos/${id}?api_key=${API_KEY}`);
      return response.data;  // Return the photo data
    } catch (error) {
      console.error("Error fetching photo:", error); // Log the error if it occurs
      throw error;
    }
  };
  



// ?api_key=
// Fetch comments for a specific photo
export const fetchComments = async (id) => {
    try {
      const response = await axios.get(`${API_URL}/photos/${id}/comments?api_key=${API_KEY}`);
      return response.data;  // Return the comments
    } catch (error) {
      console.error("Error fetching comments:", error);
      throw error;
    }
  };

// Post a comment for a specific photo
export const postComment = async (id, name, comment) => {
    try {
      const response = await axios.post(
        `${API_URL}/photos/${id}/comments?api_key=${API_KEY}`,
        { name, comment },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );
      return response.data;  // Return the posted comment
    } catch (error) {
      console.error("Error posting comment:", error);
      throw error;
    }
  };

  export const fetchTags = async () => {
    try {
      const response = await axios.get(`${API_URL}/tags?api_key=${API_KEY}`);
      console.log(response.data)
      return response.data; 
      
    } catch (error) {
      console.error("Error fetching tags:", error);
      throw error;
    }
  };