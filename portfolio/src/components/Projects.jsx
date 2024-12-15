import React, { useEffect, useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Import icons

function Projects() {
  const [animationClass, setAnimationClass] = useState('opacity-0'); // Start as not visible

  useEffect(() => {
    const section = document.getElementById('projects');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Set animation class to slide in from the left
          setAnimationClass('animate-slide-in-left');
        } else {
          setAnimationClass('opacity-0'); // Reset visibility when out of view
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the section is visible

    observer.observe(section);

    // Cleanup function to remove the observer
    return () => observer.disconnect();
  }, []);

  // Array of project data with separate GitHub and Live Demo links
  const projects = [
    {
      title: "Instagram clone",
      description: "A full-stack Instagram clone with user authentication and posting functionality built using MERN (MongoDB, Express, React, Node.js). Users can post images, create accounts, and like posts. The UI is made using HTML and CSS.",
      githubLink: "https://github.com/ArjunKSanthosh/instagram.git",  // Replace with actual GitHub link
      liveDemoLink: "https://your-live-demo-link.com/instagram-clone"  // Replace with actual live demo link
    },
    {
      title: "OLX Clone",
      description: "This project is an OLX clone that allows users to buy and sell products. Users can upload items they wish to sell, and others can browse and purchase these products. Built with MongoDB, Node.js, Express, HTML, CSS, and JavaScript.",
      githubLink: "https://github.com/ArjunKSanthosh/olx.git",  // Replace with actual GitHub link
      liveDemoLink: "https://your-live-demo-link.com/olx-clone"  // Replace with actual live demo link
    },
    {
      title: "Book My Show Clone",
      description: "This is a clone of the BookMyShow platform, featuring a user-friendly interface. Users can browse and add movies, view detailed information, and explore showtimes. Built with MongoDB, Node.js, Express, HTML, CSS, and JavaScript.",
      githubLink: "https://github.com/ArjunKSanthosh/bms.git",  // Replace with actual GitHub link
      liveDemoLink: "https://your-live-demo-link.com/bookmyshow-clone"  // Replace with actual live demo link
    },
  ];

  return (
    <div id="projects" className="py-20 bg-gradient-to-r from-black to-slate-500 text-white flex flex-col items-center">
      <h2 className={`text-6xl font-serif text-orange-500 mb-10 ${animationClass}`}>My Projects</h2>
      <div className="container mx-auto text-center flex gap-6 justify-around flex-wrap">
        {projects.map((project, index) => (
          <div key={index} className={`w-1/4 flex flex-wrap justify-center gap-8 mt-8 mb-32 ${animationClass}`} style={{ transitionDelay: `${index * 100}ms` }}>
            <div className={`p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl ${index === 0 ? 'bg-gray-800' : index === 1 ? 'bg-gray-700' : 'bg-gray-600'}`}>
              {/* Project content */}
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mt-2 mb-4">{project.description}</p>
              <div className="flex justify-between mt-4">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-white hover:underline flex items-center">
                  <FaGithub className="mr-1" /> GitHub
                </a>
              
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
