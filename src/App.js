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
import Assessment from "./pages/Assessment";
import Quiz from "./pages/Quiz";

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
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </Router>
    </Background>
  );
}

export default App;
