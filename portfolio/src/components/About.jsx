import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'; // Import the icons from react-icons

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById('about');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true); 
        } else {
          setIsVisible(false);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      className={`py-8 min-h-screen bg-cover bg-center transition-all duration-500`}
      style={{ 
        backgroundImage: 'url("cover2.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className={`container transition-all duration-500`}>
        <h2 className={`text-6xl mb-12 text-center font-sans text-rose-800 font-extrabold ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ transitionDelay: '0.1s', animationDuration: '1.5s' }}>
          About Me
        </h2>
        <div className='flex flex-col sm:flex-row justify-between bg-white w-full sm:w-3/5 bg-opacity-75 rounded-e-full p-4'>
          <div className='w-full'>
            <h3 className={`text-l text-red-500 mt-8 ml-4 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ transitionDelay: '0.3s', animationDuration: '1.5s' }}> Hey I'm,</h3>
            <h3 className={`text-5xl mt-2 ml-4 font-bold	 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ transitionDelay: '0.4s', animationDuration: '1.5s' }}>
              Arjun 
            </h3>
            <h3 className={`text-5xl mt-2 ml-4 font-bold	 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ transitionDelay: '0.4s', animationDuration: '1.5s' }}>
               K Santhosh
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
            <div className="flex justify-center  mt-8 mb-8">
              <a 
                href="Arjun K Santhosh Resume.pdf" // Replace with the actual path to your resume
                download
                className={`px-6 py-3 text-lg font-semibold text-white bg-gray-500 rounded-3xl shadow-lg transition-transform transform hover:scale-105 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`} 
                style={{ transitionDelay: '0.6s', animationDuration: '1.5s' }}
              >
                Download Resume
              </a>
            </div>

            {/* Social Icons Section */}
            <div className="flex justify-center gap-6 mt-8">
              <a 
                href="https://github.com/your-username" // Replace with your actual GitHub profile link
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl text-gray-700 transition-transform duration-400 border-e-2 w-12 border-black transform hover:scale-110 hover:text-red-950 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} 
                
              >
                <FaGithub />
              </a>
              <a 
                href="mailto:youremail@example.com" // Replace with your email address
                className={`text-2xl text-gray-700 transition-transform transform duration-500 border-e-2 w-12  border-black hover:scale-110 hover:text-red-950 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`} 
                
              >
                <FaEnvelope />
              </a>
              <a 
                href="tel:+1234567890" // Replace with your phone number
                className={`text-2xl text-gray-700 transition-transform transform border-e-2 w-12  border-black hover:scale-110 hover:text-red-950 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} 
                style={{ transitionDelay: '0.7s', animationDuration: '1.5s' }}
              >
                <FaPhoneAlt />
              </a>
              <a 
                href="https://www.linkedin.com/in/your-profile" // Replace with your LinkedIn profile link
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl text-gray-700 transition-transform transform border-e-2 w-12  border-black hover:scale-110 hover:text-red-950 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} 
                style={{ transitionDelay: '0.7s', animationDuration: '1.5s' }}
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
