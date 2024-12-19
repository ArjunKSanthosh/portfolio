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
    <section id="contact" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className={`text-4xl font-semibold mb-10 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>Contact Me</h2>
        <p className={`mt-4 text-lg ${isVisible ? 'animate-slide-in' : 'opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
          Feel free to reach out for any inquiries or collaboration opportunities!
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center mt-10 space-y-6 md:space-y-0 md:space-x-6">
          {[
            {
              icon: <FaGithub className="text-white text-3xl" />,
              title: "GitHub",
              description: "ArjunKSanthosh",
              link: "https://github.com/ArjunKSanthosh",
            },
            {
              icon: <FaPhone className="text-white text-3xl" />,
              title: "Phone",
              description: "9072240203",
              link: null,
            },
            {
              icon: <FaEnvelope className="text-white text-3xl" />,
              title: "E-mail",
              description: "arjunk80043@gmail.com",
              link: "mailto:arjunk80043@gmail.com",
            },
            {
              icon: <FaLinkedin className="text-white text-3xl" />,
              title: "LinkedIn",
              description: "Connect with me.",
              link: "https://www.linkedin.com/in/arjun-k-santhosh-650a18294/",
            }
          ].map((item, index) => (
            <div key={index} className={`flex items-center bg-yellow-500 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 hover:shadow-xl ${isVisible ? 'animate-slide-in' : 'opacity-0'}`} style={{ transitionDelay: `${index * 100}ms`, width: '250px' }}>
              <div className="mr-4">
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    {item.icon}
                  </a>
                ) : (
                  <span className="flex items-center">{item.icon}</span>
                )}
              </div>
              <div className="text-left">
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-white hover:text-yellow-600">{item .title}</a>
                ) : (
                  <span className="text-lg font-semibold text-white">{item.title}</span>
                )}
                <p className="text-sm mt-1 text-white">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;