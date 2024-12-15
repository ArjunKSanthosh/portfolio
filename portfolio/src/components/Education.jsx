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
    <section id="education" className="py-20 bg-gradient-to-r from-gray-800 to-black text-white mb-">
      <div className="container mx-auto ">
        <h2 className="text-6xl font-serif text-orange-500 mb-10 text-center">Education</h2>
        <div className="flex flex-col w-full items-center space-y-8">
          <div className={`bg-gray-800 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-4/5 md:w-4/5 lg:w-14/5 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'} zoom-shadow`}>
            <h3 className="text-2xl font-semibold flex items-center mb-4">
              <FaLaptopCode className="mr-2 text-blue-500" />
              MERN Stack Internship
            </h3>
            <p className="mt-1">Gained hands-on experience in developing full-stack applications using MongoDB, Express.js, React, and Node.js.</p>
            <p className="mt-1">Completed:2024</p>
            <p className="mt-1">Duration:6 Months</p>
          </div>
          <div className={`bg-gray-800 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-4/5 md:w-4/5 lg:w-14/5 ${isVisible ? 'animate-slide-in-left delay-200' : 'opacity-0'} zoom-shadow`}>
            <h3 className="text-2xl font-semibold flex items-center mb-4">
              <FaGraduationCap className="mr-2 text-green-500" />
              Bachelor Of Computer Applications(BCA)
            </h3>
            <p className="mt-2">Mahatma Gandhi University, Kerala</p>
            <p className="mt-1">Graduation Year:2024</p>
            <p className="mt-1">Focused on software development, algorithms, and data structures.</p>
          </div>
          <div className={`bg-gray-800 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-4/5 md:w-4/5 lg:w-14/5 ${isVisible ? 'animate-slide-in-left delay-400' : 'opacity-0'} zoom-shadow`}>
            <h3 className="text-2xl font-semibold flex items-center mb-4">
              <FaSchool className="mr-2 text-red-500" />
              Plus Two (Higher Secondary Education)
            </h3>
            <p className="mt-2">St. George HSS Aruvithura</p>
            <p className="mt-1">Completed:2021</p>
            <p className="mt-1">Stream:Science</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;