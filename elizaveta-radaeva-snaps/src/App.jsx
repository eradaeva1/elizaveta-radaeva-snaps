import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PhotoDetail from "./pages/PhotoDetail/PhotoDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photos/:photoId" element={<PhotoDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
