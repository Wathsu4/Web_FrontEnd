import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Hero from "./pages/Hero";

import Background from "./components/background/Background";
import MusicTherapy from "./pages/MusicTherapy";
import ScrollToTop from "./components/ScrollToTop";
import ExpressionsGallery from "./pages/ExpressionsGallery";
import Arts from "./pages/Arts";
import Poems from "./pages/Poems";
import HandCraft from "./pages/HandCraft";
function App() {
  return (
    <Background>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/musictherapy" element={<MusicTherapy />} />
          <Route path="/expressiongallery" element={<ExpressionsGallery />} />
          <Route path="/arts" element={<Arts />} />
          <Route path="/poems" element={<Poems />} />
          <Route path="/handcraft" element={<HandCraft />} />
        </Routes>
      </Router>
    </Background>
  );
}

export default App;
