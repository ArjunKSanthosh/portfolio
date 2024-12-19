// src/components/Education.jsx
import React, { useEffect, useState } from 'react';
import { FaGraduationCap, FaLaptopCode, FaSchool } from 'react-icons/fa';

function Education() {
  const [isVisible, setIsVisible] = useState(false); // Start as not visible
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    const section = document.getElementById('education');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setAnimationClass('animate-slide-in'); // Set animation class when in view
        } else {
          setIsVisible(false);
          setAnimationClass(''); // Reset animation class when out of view
        }
      });
    }, { threshold: 0.1 });

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="education" 
      className="py-20 text-white"
      style={{
        backgroundImage: 'url("gd2.jpg")', // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
      }}
    >
      <div className="container mx-auto text-center">
        <h2 className={`text-4xl font-semibold mb-10 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>Education</h2>
        <div className="flex flex-col items-center space-y-6">
          {[
            {
              icon: <FaLaptopCode className="text-yellow-500" />,
              title: "MERN Stack Internship",
              description: "Developed full-stack applications using MongoDB, Express.js, React, and Node.js.",
              date: "Completed: 2024",
              duration: "6 Months",
            },
            {
              icon: <FaGraduationCap className="text-yellow-500" />,
              title: "Bachelor Of Computer Applications (BCA)",
              description: "Mahatma Gandhi University, Kerala.",
              date: "Graduation Year: 2024",
            },
            {
              icon: <FaSchool className="text-yellow-500" />,
              title: "Plus Two (Higher Secondary Education)",
              description: "St. George HSS Aruvithura.",
              date: "Completed: 2021",
            },
          ].map((edu, index) => (
            <div
              key={index}
              className={`flex items-center justify-between w-full max-w-4xl bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl ${animationClass}`}
              style={{ transitionDelay: `${index * 100}ms` }} // Stagger the animation
            >
              <div className="flex items-center w-1/2">
                {edu.icon}
                <span className="ml-2 text-xl font-semibold text-black">{edu.title}</span>
              </div>
              <div className="border-l-2 border-yellow-500 h-16 mx-4"></div> {/* Vertical Divider */}
              <div className="w-1/2 text-left">
                <p className="mt-1 text-gray-700">{edu.description}</p>
                {edu.date && <p className="mt-1 text-gray-700">{edu.date}</p>}
                {edu.duration && <p className="mt-1 text-gray-700">{edu.duration}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;