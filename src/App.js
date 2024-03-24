import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import CurriculumVitae from "./pages/CurriculumVitae";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="curriculumVitae" element={<CurriculumVitae />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;