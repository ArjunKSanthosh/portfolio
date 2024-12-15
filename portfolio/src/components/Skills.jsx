// src/components/Skills.jsx
import React, { useEffect, useState } from "react";
import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase, FaBootstrap, FaGithub } from 'react-icons/fa'; // Import icons
import { SiC, SiCplusplus, SiMysql } from 'react-icons/si'; // Import icons for C, C++, and SQL

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
    { name: "JavaScript", icon: <FaJs className="text-white" />, color: "bg-yellow-500" },
    { name: "ReactJS", icon: <FaReact className="text-white" />, color: "bg-blue-600" },
    { name: "NodeJS", icon: <FaNodeJs className="text-white" />, color: "bg-green-600" },
    { name: "ExpressJS", icon: <FaNodeJs className="text-white" />, color: "bg-stone-600" },
    { name: "HTML", icon: <FaHtml5 className="text-white" />, color: "bg-teal-400	" },
    { name: "CSS", icon: <FaCss3Alt className="text-white" />, color: "bg-blue-500" },
    { name: "MongoDB", icon: <FaDatabase className="text-white" />, color: "bg-green-500" },
    { name: "Bootstrap", icon: <FaBootstrap className="text-white" />, color: "bg-purple-600" },
    { name: "TailwindCSS", icon: <FaBootstrap className="text-white" />, color: "bg-purple-950" },
    { name: "GitHub", icon: <FaGithub className="text-white" />, color: "bg-gray-800" },
    { name: "C", icon: <SiC className="text-white" />, color: "bg-blue-700" }, // C icon
    { name: "C++", icon: <SiCplusplus className="text-white" />, color: "bg-blue-800" }, // C++ icon
   
  ];

  return (
    <div id="skills" className="bg-gray-800  h-full">
      <div className="bg-gray-800 text-white p-8 mx-auto">
        <h3 className="text-5xl mb-10 font-serif m-auto text-center">SKILLS</h3>
        <ul className="mt-4 w-3/5 flex justify-center flex-wrap gap-6 m-auto">
          {skills.map((skill, index) => {
            // Determine animation class based on index and visibility
            const animationClass = animationTriggered
              ? index % 4 === 0
                ? 'animate-slide-in-left'
                : index % 4 === 1
                ? 'animate-slide-in-right'
                : index % 4 === 2
                ? 'animate-slide-in-top'
                : 'animate-slide-in-bottom'
              : 'opacity-0';

            return (
              <li
                key={skill.name}
                className={`flex items-center justify-center p-4 rounded-lg shadow-lg transition-all duration-300 w-40 h-20 text-center text-lg font-semibold transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500 ${skill.color} ${animationClass}`}
                style={{ animationDelay: `${index * 100}ms` }} // Stagger the animation
              >
                <div className="flex items-center justify-center">
                  {skill.icon} {/* Render the icon */}
                  <span className="ml-2">{skill.name}</span> {/* Skill name */}
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