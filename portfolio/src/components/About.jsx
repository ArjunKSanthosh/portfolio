import React, { useEffect, useState } from 'react';

function About() {
  const [isVisible, setIsVisible] = useState(false); // Start as not visible

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
    <section 
      id="about" 
      className={`py-8 min-h-screen bg-cover bg-center transition-all duration-500`} // Add blur effect when visible
      style={{ 
        backgroundImage: 'url("cover2.jpg")', // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className={`container transition-all duration-500 `}>
        <h2 className={`text-6xl mb-12 text-center font-sans ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ transitionDelay: '0.1s', animationDuration: '1.5s' }}>
          About Me
        </h2>
        <div className='flex flex-col sm:flex-row justify-between bg-white w-full sm:w-3/5 bg-opacity-75 rounded-e-full p-4'>
          <div className='w-full'>
            <h3 className={`text-l text-red-500 mt-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ transitionDelay: '0.3s', animationDuration: '1.5s' }}> Hey I'm,</h3>
            <h3 className={`text-4xl mt-2 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ transitionDelay: '0.4s', animationDuration: '1.5s' }}>
              Arjun K Santhosh
            </h3>
            <p className={`mt-4 text-base w-full sm:w-5/6 ml-5 text-justify indent-20 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ transitionDelay: '0.5s', animationDuration: '1.5s' }}>
              I'm a passionate web developer specializing in front-end technologies like React, JavaScript, and Tailwind CSS.
              As a passionate MERN stack developer, I specialize in creating dynamic, responsive, and user-centric web applications. 
              With expertise in MongoDB, Express.js, React, and Node.js, I enjoy building full-stack solutions that are both scalable and efficient. 
              My journey began with front-end development, where I mastered HTML, CSS, and JavaScript, before diving deeper into the back-end with Node.js and Express. 
              I am driven by a strong desire to solve complex problems and deliver seamless user experiences. 
              Whether it’s building APIs, managing databases, or crafting intuitive interfaces, I am committed to writing clean, maintainable code.
            </p>
            {/* Download Resume Button */}
            <div className="flex justify-center mt-8 mb-8">
              <a 
                href="Arjun K Santhosh Resume.pdf" // Replace with the actual path to your resume
                download
                className={`px-6 py-3 text-lg font-semibold text-white bg-gray-500 rounded-3xl shadow-lg transition-transform transform hover:scale-105 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`} 
                style={{ transitionDelay: '0.6s', animationDuration: '1.5s' }}
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
