// src/components/Navbar.jsx
import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white p-4 text-black shadow-lg sticky top-0 z-10 h-20 content-center">
      <div className="container m-auto flex justify-between items-center">
        <h2 className="text-xl font-serif text-orange-500">Arjun K Santhosh</h2>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-orange-500 transition">About</a></li>
          <li><a href="#projects" className="hover:text-orange-500 transition">Projects</a></li>
          <li><a href="#education" className="hover:text-orange-500 transition">Education</a></li>
          <li><a href="#contact" className="hover:text-orange-500 transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;