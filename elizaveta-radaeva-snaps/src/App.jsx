import { useState } from "react";
import "./App.scss";
import Header from "./components/Components/Header";
import Hero from "./components/Components/Hero";
import Footer from "./components/Components/Footer";
import PhotoCardsList from "./components/Components/PhotoCardsList";
import FilterDrawer from "./components/Components/FilterDrawer";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>
      <Header toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen} />
      <FilterDrawer
        isDrawerOpen={isDrawerOpen}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />
      <Hero />
      <PhotoCardsList selectedTag={selectedTag} />
      <Footer />
    </>
  );
}

export default App;
