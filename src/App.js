import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Hero from "./pages/Hero";

import Background from "./components/background/Background";
import MusicTherapy from "./pages/MusicTherapy";
import ScrollToTop from "./components/ScrollToTop";
import ProfessionalSupportPage1 from "./pages/ProfessionalSupportPage1";
import ProfessionalSupportPage2 from "./pages/ProfessionalSupportPage2";


function App() {
  return (
    <Background>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/musictherapy" element={<MusicTherapy />} />
          <Route path="/professionalsupport" element={<ProfessionalSupportPage1/>} />
          <Route path="/viewprofessionalprofile" element={<ProfessionalSupportPage2/>}/>
        </Routes>
      </Router>
    </Background>
  );
}

export default App;
