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
        <h2 className={`text-4xl font-serif text-orange-500 mb-10 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>Contact Me</h2>
        <p className={`mt-4 text-lg ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
          Feel free to reach out for any inquiries or collaboration opportunities!
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center mt-10 space-y-6 md:space-y-0 md:space-x-6">
          {[
            {
              icon: <FaGithub className="text-3xl text-orange-500 icon-hover" />,
              title: "GitHub",
              description: "ArjunKSanthosh",
              link: "https://github.com/ArjunKSanthosh",
              delay: '0.3s'
            },
            {
              icon: <FaPhone className="text-3xl text-orange-500 icon-hover" />,
              title: "Phone",
              description: "9072240203",
              link: null,
              delay: '0.4s'
            },
            {
              icon: <FaEnvelope className="text-3xl text-orange-500 icon-hover" />,
              title: "E-mail",
              description: "arjunk80043@gmail.com",
              link: "mailto:www.arjunk80043@gmail.com",
              delay: '0.5s'
            },
            {
              icon: <FaLinkedin className="text-3xl text-orange-500 icon-hover" />,
              title: "LinkedIn",
              description: "Connect with me.",
              link: "https://www.linkedin.com/in/arjun-k-santhosh-650a18294/",
              delay: '0.6s'
            }
          ].map((item, index) => (
            <div key={index} className={`contact-item bg-gray-900 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ transitionDelay: item.delay, width: '300px' }}>
              <div className="flex items-center p-4">
                {item.icon}
                <div className="ml-4 text-left">
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-lg">{item.title}</a>
                  ) : (
                    <span className="text-lg">{item.title}</span>
                  )}
                  <p className="text-sm mt-1">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;