import axios from "axios";

const API_BASE_URL = "https://unit-3-project-c5faaab51857.herokuapp.com/";
const API_KEY = "44e7d366-4987-486b-9dc5-fb3b6220a2ef";

export const fetchPhotos = async () => {
  try {
    const response = await axios.get(API_BASE_URL, {
      headers: {
        Authorization: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching photos:", error);
    throw new Error("Failed to fetch photos.");
  }
};