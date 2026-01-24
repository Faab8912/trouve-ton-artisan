import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArtisansListPage from "./pages/ArtisansListPage";
import ArtisanDetailPage from "./pages/ArtisanDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./styles/main.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artisans" element={<ArtisansListPage />} />
        <Route path="/artisans/:id" element={<ArtisanDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
