import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-serif text-orange-500">About Me</h2>
        <p className="mt-4 text-lg mb-12">I'm a passionate web developer specializing in front-end technologies like React, JavaScript, and Tailwind CSS.

Here's a professional and concise "About Me" paragraph tailored for a MERN stack web developer's portfolio:

As a passionate MERN stack developer, I specialize in creating dynamic, responsive, and user-centric web applications. With expertise in MongoDB, Express.js, React, and Node.js, I enjoy building full-stack solutions that are both scalable and efficient. My journey began with front-end development, where I mastered HTML, CSS, and JavaScript, before diving deeper into the back-end with Node.js and Express. I am driven by a strong desire to solve complex problems and deliver seamless user experiences. Whether it’s building APIs, managing databases, or crafting intuitive interfaces, I am committed to writing clean, maintainable code. Outside of coding, I stay current with the latest web development trends, contributing to open-source projects and experimenting with new technologies to enhance my skills.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-orange-500 text-black p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-serif">My Journey</h3>
            <p className="mt-4">From HTML/CSS basics to building full-scale React applications, my journey has been fueled by curiosity and creativity.</p>
          </div>
          <div className="bg-orange-500 text-black p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-serif">Skills</h3>
            <ul className="mt-4">
              <li>React.js</li>
              <li>Tailwind CSS</li>
              <li>JavaScript</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
          <div className="bg-orange-500 text-black p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-serif">Hobbies</h3>
            <p className="mt-4">When I'm not coding, I enjoy photography, traveling, and learning new languages.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
