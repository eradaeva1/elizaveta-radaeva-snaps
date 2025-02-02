import React, { useState, useEffect } from "react";
import { fetchPhotos, fetchTags } from "../../utils/api";
import Header from "../../components/Components/Header";
import Footer from "../../components/Components/Footer";
import FilterDrawer from "../../components/Components/FilterDrawer";
import Hero from "../../components/Components/Hero";
import PhotoCardsList from "../../components/Components/PhotoCardsList";

function HomePage() {
  const [photos, setPhotos] = useState([]);
  const [photosLoading, setPhotosLoading] = useState(true);
  const [tagsLoading, setTagsLoading] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  const [tags, setTags] = useState([]);
  const [photoError, setPhotoError] = useState(null);
  const [tagError, setTagError] = useState(null);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
 

  const baseUrl = import.meta.env.VITE_APP_URL;

  useEffect(() => {
    const getPhotos = async () => {
      try {
        setPhotosLoading(true);
        const response = await axios.get(baseUrl);
        setPhotos(response.data);
      } catch (err) {
        setError("Error fetching photos.");
        console.error("Fetch Photos Error:", err);
      } finally {
        setPhotosLoading(false);
      }
    };

    const getTags = async () => {
      try {
        setTagsLoading(true);
        const response = await axios.get(baseUrl); // Adjust URL if needed
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
  }, []);

  if (photoError || tagError) {
    return <div>{photoError || tagError}</div>;
  }

  if (photosLoading || tagsLoading) {
    return <div>Loading...</div>;
  }

  const filteredPhotos = selectedTag
    ? photos.filter(
        (photo) => Array.isArray(photo.tags) && photo.tags.includes(selectedTag)
      )
    : photos;

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
        <PhotoCardsList selectedTag={selectedTag} photos={filteredPhotos} />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
