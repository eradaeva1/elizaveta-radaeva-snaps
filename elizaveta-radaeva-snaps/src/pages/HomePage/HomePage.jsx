import React, { useState, useEffect } from "react";
import { fetchPhotos, fetchTags } from "../../utils/api"; // Axios fetch helper
import Header from "../../components/Components/Header";
import Footer from "../../components/Components/Footer";
import FilterDrawer from "../../components/Components/FilterDrawer";
import Hero from "../../components/Components/Hero";
import PhotoCardsList from "../../components/Components/PhotoCardsList"; // Include PhotoCardsList



function HomePage() {
  const [photos, setPhotos] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [photosLoading, setPhotosLoading] = useState(true);
const [tagsLoading, setTagsLoading] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  const [tags, setTags] = useState([]);
  const [photoError, setPhotoError] = useState(null);
const [tagError, setTagError] = useState(null);


  // Function to toggle the drawer (for filter functionality)
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);



  useEffect(() => {
  
  const getPhotos = async () => {
      //   try {
      //     setPhotosLoading(true); // Set loading to true before starting the API call
      //     const data = await fetchPhotos(); 
      //     console.log("getPhotos=", data);
      //     // Use the API helper to fetch photos
      //     setPhotos(data); // Update state with fetched data
      //   } catch (err) {
      //     setPhotoError("Error fetching photos. Please try again later."); // Handle errors
      //     console.error(err);
      //   } finally {
      //     setPhotosLoading(false); // Ensure loading is set to false after the API call
      //   }
      // };

        try {
          setPhotosLoading(true);
          const data = await fetchPhotos();
          console.log('Fetched Photos:', data);
          setPhotos(data);
        } catch (err) {
          setError('Error fetching photos. Please try again later.');
          console.error('Fetch Photos Error:', err);
        } finally {
          setPhotosLoading(false);
        }
      };
  
  

    const getTags = async () => {
        try {
          setTagsLoading(true);
    const response = await fetchTags();
    setTags(response.data);
  } catch (err) {
    setTagError("Error fetching tags. Please try again later.");
    console.error(err);
  } finally {
    setTagsLoading(false);
  }
};

      getPhotos();
    getTags();
  }, [fetchPhotos, fetchTags]);
  

  if (photoError || tagError) {
    return <div>{photoError || tagError}</div>;
  }

  if (photosLoading || tagsLoading) {
    return <div>Loading...</div>;
  }

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }

  // Filtering the photos based on selected tag
  // const filteredPhotos = selectedTag
  //   ? photos.filter((photo) => photo.tags.includes(selectedTag))
  //   : photos;
  const filteredPhotos = selectedTag
  ? photos.filter((photo) => Array.isArray(photo.tags) && photo.tags.includes(selectedTag))
  : photos;

    // console.log("Filtered Photos:", filteredPhotos); // Debug log
  return (
    <>
      <Header toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen} />
      <FilterDrawer
        isDrawerOpen={isDrawerOpen}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
        tags={tags}
      />
      <Hero />
      <main className="home__page">
        <PhotoCardsList  selectedTag={selectedTag} photos={filteredPhotos} />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;



//   useEffect(() => {
//     const getPhotos = async () => {
//       try {
//         const data = await fetchPhotos(); // Fetch photos using Axios
//         setPhotos(data);
//       } catch (err) {
//         console.error("Error fetching photos:", err);
//         setError("Failed to load photos.");
//       } finally {
//         setLoading(false);
//       }
//     };