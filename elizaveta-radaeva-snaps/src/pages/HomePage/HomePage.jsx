import React, { useState, useEffect } from "react";
import { fetchPhotos } from "../../utils/api"; // Axios fetch helper
import Header from "../../components/Components/Header";
import Footer from "../..components/Components/Footer";
import FilterDrawer from "../../components/Components/FilterDrawer";
import Hero from "../../components/Components/Hero";
import PhotoCardsList from "../../components/Components/PhotoCardsList"; // Include PhotoCardsList

function HomePage() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);

  // Function to toggle the drawer (for filter functionality)
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  useEffect(() => {
    const getPhotos = async () => {
      try {
        const data = await fetchPhotos(); // Fetch photos using Axios
        setPhotos(data);
      } catch (err) {
        console.error("Error fetching photos:", err);
        setError("Failed to load photos.");
      } finally {
        setLoading(false);
      }
    };

    getPhotos();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Filtering the photos based on selected tag
  const filteredPhotos = selectedTag
    ? photos.filter((photo) => photo.tags.includes(selectedTag))
    : photos;

  return (
    <>
      <Header toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen} />
      <FilterDrawer
        isDrawerOpen={isDrawerOpen}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
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