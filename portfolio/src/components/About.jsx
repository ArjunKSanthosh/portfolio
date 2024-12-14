import React, { useEffect, useState } from 'react';

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Initial delay for the first reveal

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="py-20 text-white shadow-md shadow-gray-200">
      <div className="container text-center">
        <h2 className={`text-4xl font-serif text-black ${isVisible ? 'reveal-top' : ''}`} style={{ transitionDelay: '0.1s' }}>About Me</h2>
        <img 
          src="arjun.jpg" 
          alt="" 
          className={`w-36 h-36 object-cover rounded-full m-auto mt-7 transform hover:scale-105 transition-all duration-500 hover:shadow-md hover:shadow-cyan-500 ${isVisible ? 'reveal-bottom' : ''}`} 
          style={{ transitionDelay: '0.2s' }}
        />
        <h3 className={`text-l mt-5 text-gray-500 ${isVisible ? 'reveal-left' : ''}`} style={{ transitionDelay: '0.3s' }}> Hey I'm,</h3>
        <h3 className={`text-4xl mt-2 text-black ${isVisible ? 'reveal-right' : ''}`} style={{ transitionDelay: '0.4s' }}> Arjun K Santhosh</h3>
        <p className={`mt-4 text-base mb-12 w-9/12 m-auto text-justify indent-20 text-black ${isVisible ? 'reveal-left' : ''}`} style={{ transitionDelay: '0.5s' }}>
          I'm a passionate web developer specializing in front-end technologies like React, JavaScript, and Tailwind CSS.
          As a passionate MERN stack developer, I specialize in creating dynamic, responsive, and user-centric web applications. 
          With expertise in MongoDB, Express.js, React, and Node.js, I enjoy building full-stack solutions that are both scalable and efficient. 
          My journey began with front-end development, where I mastered HTML, CSS, and JavaScript, before diving deeper into the back-end with Node.js and Express. 
          I am driven by a strong desire to solve complex problems and deliver seamless user experiences. 
          Whether it’s building APIs, managing databases, or crafting intuitive interfaces, I am committed to writing clean, maintainable code.
        </p>

        <div className="mt-28">
          <div className="bg-gray-800 text-white p-8 shadow-lg mx-auto shadow-md shadow-cyan-100">
            <h3 className={`text-2xl font-serif ${isVisible ? 'reveal-top' : ''}`} style={{ transitionDelay: '0.6s' }}>Skills</h3>
            <ul className="mt-4 flex justify-center gap-6">
              <li className={`transform hover:scale-110 transition-all duration-400 ${isVisible ? 'reveal-left' : ''}`} style={{ transitionDelay: '0.7s' }}>HTML</li>
              <li className={`transform hover:scale-110 transition-all duration-400 ${isVisible ? 'reveal-left' : ''}`} style={{ transitionDelay: '0.8s' }}>CSS</li>
              <li className={`transform hover:scale-110 transition-all duration-400 ${isVisible ? 'reveal-left' : ''}`} style={{ transitionDelay: '0.9s' }}>JavaScript</li>
              <li className={`transform hover:scale-110 transition-all duration-400 ${isVisible ? 'reveal-left' : ''}`} style={{ transitionDelay: '1s' }}>Tailwind CSS</li>
              <li className={`transform hover:scale-110 transition-all duration-400 ${isVisible ? 'reveal-left' : ''}`} style={{ transitionDelay: '1.1s' }}>NodeJS</li>
              <li className={`transform hover:scale-110 transition-all duration-400 ${isVisible ? 'reveal-left' : ''}`} style={{ transitionDelay: '1.2s' }}>ReactJS</li>
              <li className={`transform hover:scale-110 transition-all duration-400 ${isVisible ? 'reveal-left' : ''}`} style={{ transitionDelay: '1.3s' }}>ExpressJS</li>
              <li className={`transform hover:scale-110 transition-all duration-400 ${isVisible ? 'reveal-left' : ''}`} style={{ transitionDelay: '1.3s' }}>MongoDB</li>
            </ul>
            </div>

            </div>
            </div>
            </section>
  )
}
export default About