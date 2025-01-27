import axios from "axios";

const API_URL = "https://unit-3-project-c5faaab51857.herokuapp.com";
const API_KEY = "44e7d366-4987-486b-9dc5-fb3b6220a2ef";

export const fetchPhotos = async () => {
  try {
    const response = await axios.get(`${API_URL}/photos?api_key=${API_KEY}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching photos");
  }
};

export const fetchPhotoById = async (photoId) => {
  try {
    const response = await axios.get(
      `${API_URL}/photos/${photoId}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching photo:", error);
    throw error;
  }
};

export const fetchComments = async (photoId) => {
  try {
    const response = await axios.get(
      `${API_URL}/photos/${photoId}/comments?api_key=${API_KEY}`
    );
    const sortedComments = response.data.sort(
      (a, b) => b.timestamp - a.timestamp
    );
    return sortedComments;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};

export const postComment = async (photoId, name, comment) => {
  try {
    console.log(photoId, name, comment);

    const response = await axios.post(
      `${API_URL}/photos/${photoId}/comments?api_key=${API_KEY}`,
      { name, comment }
    );

    return response.data;
  } catch (error) {
    console.error("Error posting comment:", error);
    throw error;
  }
};

export const fetchTags = async () => {
  try {
    const response = await axios.get(`${API_URL}/tags?api_key=${API_KEY}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching tags:", error);
    throw error;
  }
};
