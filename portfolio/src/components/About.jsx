// src/components/About.jsx
import React, { useEffect, useState } from 'react';

function About() {
  const [isVisible, setIsVisible] = useState(true); // Start as visible

  useEffect(() => {
    const section = document.getElementById('about');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set to true when in view
        } else {
          setIsVisible(false); // Set to false when out of view
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the section is visible

    observer.observe(section);

    // Cleanup function to remove the observer
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-8 text-black bg-yellow-300  min-h-screen">
      <div className="container text-center">
        <div className='flex justify-center items-center'>
          <img 
            src="arjun.jpg" 
            alt="" 
            className={`w-72 h-72 object-cover rounded-full mt-28 border-4 border-gray-800 transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:border-cyan-500 hover:shadow-cyan-500 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} 
            style={{ transitionDelay: '0.2s' }}
          />
          <div className='w-8/12'>
            <h2 className={`text-6xl mt-5 font-sans ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ transitionDelay: '0.1s' }}>About Me</h2>
            <h3 className={`text-l text-red-500 mt-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ transitionDelay: '0.3s' }}> Hey I'm,</h3>
            <h3 className={`text-4xl mt-2 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ transitionDelay: '0.4s' }}> Arjun K Santhosh</h3>
            <p className={`mt-4 text-base w-5/6 m-auto text-justify indent-20 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ transitionDelay: '0.5s' }}>
              I'm a passionate web developer specializing in front-end technologies like React, JavaScript, and Tailwind CSS.
              As a passionate MERN stack developer, I specialize in creating dynamic, responsive, and user-centric web applications. 
              With expertise in MongoDB, Express.js, React, and Node.js, I enjoy building full-stack solutions that are both scalable and efficient. 
              My journey began with front-end development, where I mastered HTML, CSS, and JavaScript, before diving deeper into the back-end with Node.js and Express. 
              I am driven by a strong desire to solve complex problems and deliver seamless user experiences. 
              Whether it’s building APIs, managing databases, or crafting intuitive interfaces, I am committed to writing clean, maintainable code.
            </p>
            {/* Download Resume Button */}
            <a 
              href="Arjun  K Santhosh Resume.pdf" // Replace with the actual path to your resume
              download
              className={`mt-8 inline-block px-6 py-3 text-lg font-semibold text-white bg-gray-500 rounded-3xl shadow-lg transition-transform transform hover:scale-105 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`} 
              // style={{ transitionDelay: '0.1s' }}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;