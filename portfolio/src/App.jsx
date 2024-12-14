import React from 'react';
import Navbar from './components/Navbar';

import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skill from './components/Skills';
import './css/app.css'

function App() {
  return (
    <div className="font-sans bg-gray-50">
      <Navbar />
      <About />
      <Skill/>  
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
