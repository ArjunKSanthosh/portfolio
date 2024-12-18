// src/components/Skills.jsx
import React, { useEffect, useState } from "react";
import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase, FaBootstrap, FaGithub } from 'react-icons/fa'; // Import icons
import { SiC, SiCplusplus } from 'react-icons/si'; // Import icons for C and C++

function Skill() {
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("skills");
      const rect = section.getBoundingClientRect();
      // Check if the section is in the viewport
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setAnimationTriggered(true); // Trigger animation when in view
      } else {
        setAnimationTriggered(false); // Reset animation state when out of view
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    { name: "JavaScript", icon: <FaJs className="text-yellow-600" /> },
    { name: "ReactJS", icon: <FaReact className="text-yellow-600" /> },
    { name: "NodeJS", icon: <FaNodeJs className="text-yellow-600" /> },
    { name: "ExpressJS", icon: <FaNodeJs className="text-yellow-600" /> },
    { name: "HTML", icon: <FaHtml5 className="text-yellow-600" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-yellow-600" /> },
    { name: "MongoDB", icon: <FaDatabase className="text-yellow-600" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-yellow-600" /> },
    { name: "TailwindCSS", icon: <FaBootstrap className="text-yellow-600"  />},,
    { name: "GitHub", icon: <FaGithub className="text-yellow-600" /> },
    { name: "C", icon: <SiC className="text-yellow-600" /> },
    { name: "C++", icon: <SiCplusplus className="text-yellow-600" /> },
  ];

  return (
    <div id="skills" className="bg-gradient-to-r from-yellow-200 to-yellow-400 py-20">
      <div className="container mx-auto text-center w-4/12">
        <h3 className="text-4xl font-semibold text-yellow-800 mb-10">Technical Skills</h3>
        <ul className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => {
            // Determine animation class based on index
            const animationClass = animationTriggered 
              ? index % 2 === 0 
                ? 'animate-slide-in-left' 
                : 'animate-slide-in-right' 
              : 'opacity-0';

            return (
              <li
                key={skill.name}
                className={`flex items-center justify-center p-6 rounded-2xl  gap-12 shadow-lg transition-all duration-300 w-32 h-32 text-lg font-medium text-center bg-white border border-yellow-300 hover:shadow-xl hover:scale-105 ${animationClass}`}
                style={{ animationDelay: `${index * 100}ms` }} // Stagger the animation
              >
                <div className="flex flex-col items-center">
                  {skill.icon} {/* Render the icon */}
                  <span className="mt-2 text-black font-semibold">{skill.name}</span> {/* Skill name */}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Skill;