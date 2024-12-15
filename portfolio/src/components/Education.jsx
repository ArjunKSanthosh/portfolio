// src/components/Education.jsx
import React, { useEffect, useState } from 'react';
import { FaGraduationCap, FaLaptopCode, FaSchool } from 'react-icons/fa';

function Education() {
  const [isVisible, setIsVisible] = useState(true); // Start as visible

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('education');
      const rect = section.getBoundingClientRect();
      // Check if the section is in the viewport
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false); // Reset visibility when out of view
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function to remove the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="education" className="py-20 bg-gradient-to-r from-gray-800 to-black text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-serif text-orange-500 mb-10">Education</h2>
        <div className="flex flex-col items-center space-y-8">
          <div className={`bg-gray-800 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-3/4 md:w-1/2 lg:w-1/3 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <h3 className="text-2xl font-semibold flex items-center justify-center mb-4">
              <FaLaptopCode className="mr-2 text-blue-500" />
              MERN Stack Internship
            </h3>
            <p className="mt-2">Company Name - Location</p>
            <p className="mt-1">Duration: Month Year - Month Year</p>
            <p className="mt-1">Description: Gained hands-on experience in developing full-stack applications using MongoDB, Express.js, React, and Node.js.</p>
          </div>
          <div className={`bg-gray-800 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-3/4 md:w-1/2 lg:w-1/3 ${isVisible ? 'animate-slide-in-left delay-200' : 'opacity-0'}`}>
            <h3 className="text-2xl font-semibold flex items-center justify-center mb-4">
              <FaGraduationCap className="mr-2 text-green-500" />
              Bachelor's Degree in Computer Science
            </h3>
            <p className="mt-2">University Name - Location</p>
            <p className="mt-1">Graduation Year: Year</p>
            <p className="mt-1">Description: Focused on software development, algorithms, and data structures.</p>
          </div>
          <div className={`bg-gray-800 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-3/4 md:w-1/2 lg:w-1/3  ${isVisible ? 'animate-slide-in-left delay-400' : 'opacity-0'}`}>
            <h3 className="text-2xl font-semibold flex items-center justify-center mb-4">
              <FaSchool className="mr-2 text-red-500" />
              Higher Secondary Education
            </h3>
            <p className="mt-2">School Name - Location</p>
            <p className="mt-1">Graduation Year: Year</p>
            <p className="mt-1">Description: Completed higher secondary education with a focus on science and mathematics.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;