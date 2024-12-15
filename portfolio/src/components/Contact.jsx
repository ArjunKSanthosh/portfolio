// src/components/Contact.jsx
import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';

function Contact() {
  const [isVisible, setIsVisible] = useState(false); // Start as not visible

  useEffect(() => {
    const section = document.getElementById('contact');

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
    <section id="contact" className="py-20 bg-gradient-to-r from-gray-800 to-black text-white">
      <div className="container mx-auto text-center">
        <h2 className={`text-4xl font-serif text-orange-500 mb-10 ${isVisible ? 'animate-slide-in-top' : 'opacity-0'}`}>Contact Me</h2>
        <p className={`mt-4 text-lg ${isVisible ? 'animate-slide-in-top' : 'opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
          Feel free to reach out for any inquiries or collaboration opportunities!
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center mt-10 space-y-6 md:space-y-0 md:space-x-6">
          <div className={`contact-item bg-gray-900 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ transitionDelay: '0.3s', width: '300px' }}>
            <div className="flex items-center p-4">
              <FaGithub className="text-3xl text-orange-500 icon-hover" />
              <a href="https://github.com/ArjunKSanthosh" target="_blank" rel="noopener noreferrer" className="text-lg ml-4">GitHub</a>
            </div>
          </div>
          <div className={`contact-item bg-gray-900 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ transitionDelay: '0.4s', width: '300px' }}>
            <div className="flex items-center p-4">
              <FaPhone className="text-3xl text-orange-500 icon-hover" />
              <span className="text-lg ml-4">Phone</span>
            </div>
          </div>
          <div className={`contact-item bg-gray-900 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ transitionDelay: '0.5s', width: '300px' }}>
            <div className="flex items-center p-4">
              <FaEnvelope className="text-3xl text-orange-500 icon-hover" />
              <a href="mailto:www.arjunk80043@gmail.com" className="text-lg ml-4">E-mail</a>
            </div>
          </div>
          <div className={`contact-item bg-gray-900 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ transitionDelay: '0.6s', width: '300px' }}>
            <div className="flex items-center p-4">
              <FaLinkedin className="text-3xl text-orange-500 icon-hover" />
              <a href="https://www.linkedin.com/in/arjun-k-santhosh-650a18294/" target="_blank" rel="noopener noreferrer" className="text-lg ml-4">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;