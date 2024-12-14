import React from 'react';

function Navbar() {
  return (
    <nav className="bg-black p-4 text-white shadow-lg sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-xl font-serif text-orange-500">Arjun K Santhosh</h2>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-orange-500 transition">About</a></li>
          <li><a href="#projects" className="hover:text-orange-500 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-orange-500 transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
