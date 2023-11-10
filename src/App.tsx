import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Skills from './Components/TechnicalBackground/Skills';
import Experience from './Components/TechnicalBackground/Experience';
import Projects from './Components/TechnicalBackground/Projects';
import About from './Components/AboutMe';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
