import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger and close icons

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white bg-opacity-75 p-4 text-black shadow-lg sticky top-0 z-10 h-20">
      <div className="container m-auto flex justify-between items-center">
        <h2 className="text-2xl text-orange-500">Arjun K Santhosh</h2>
        
        {/* Hamburger Icon */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="text-2xl text-orange-500" />
            ) : (
              <FaBars className="text-2xl text-orange-500" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`lg:flex space-x-6 lg:space-x-8 ${isMenuOpen ? 'flex flex-col items-center absolute top-20 left-0 right-0 bg-white p-6 lg:p-0 lg:static lg:flex-row' : 'hidden'}`}>
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
