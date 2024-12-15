// src/components/Skills.jsx
import React, { useEffect, useState } from "react";

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
    { name: "JavaScript", color: "text-yellow-500" },
    { name: "MongoDB", color: "text-green-500" },
    { name: "ExpressJS", color: "text-gray-400" },
    { name: "ReactJS", color: "text-blue-500" },
    { name: "NodeJS", color: "text-green-700" },
    { name: "HTML", color: "text-orange-500" },
    { name: "CSS", color: "text-blue-300" },
    { name: "Tailwind CSS", color: "text-teal-400" },
    { name: "Bootstrap", color: "text-purple-500" },
    { name: "C", color: "text-red-500" },
    { name: "C++", color: "text-blue-600" },
    { name: "SQL", color: "text-orange-600" },
  ];

  return (
    <div id="skills" className="bg-gray-800 mt-36 h-full">
      <div className="bg-gray-800 text-white p-8 mx-auto">
        <h3 className="text-5xl mb-10 font-serif m-auto text-center">SKILLS</h3>
        <ul className="mt-4 flex justify-center flex-wrap gap-6 m-auto">
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
                className={`bg-gray-700 p-4 rounded-lg shadow-lg transition-all duration-300 w-40 h-10 text-center flex items-center justify-center text-lg font-semibold transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500 ${animationClass}`}
                style={{ animationDelay: `${index * 100}ms` }} // Stagger the animation
              >
                {skill.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Skill;