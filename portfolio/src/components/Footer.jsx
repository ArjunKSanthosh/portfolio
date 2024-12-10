import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 My Portfolio. All Rights Reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-orange-500 mx-3 hover:underline transition">LinkedIn</a>
          <a href="#" className="text-orange-500 mx-3 hover:underline transition">GitHub</a>
          <a href="#" className="text-orange-500 mx-3 hover:underline transition">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
