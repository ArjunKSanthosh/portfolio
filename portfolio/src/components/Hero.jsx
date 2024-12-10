import React from 'react';

function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center text-white text-center bg-fixed"
      style={{ backgroundImage: 'url("/path-to-your-image.jpg")' }}
    >
      <div className="h-full flex items-center justify-center bg-black bg-opacity-70">
        <div className="transform scale-90 hover:scale-100 transition-all duration-500">
          <h2 className="text-5xl font-serif text-orange-500">Welcome to My Portfolio</h2>
          <p className="mt-4 text-xl"> Mern Stack Developer | React Enthusiast</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
