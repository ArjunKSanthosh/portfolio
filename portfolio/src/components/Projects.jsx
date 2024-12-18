import React, { useEffect, useState } from 'react';

// Component for displaying the project image
function ProjectImage({ imgSrc, title, projectLink, isVisible }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative w-1/2 transition-transform duration-500 ${isVisible ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-10 opacity-0'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={projectLink} target="_blank" rel="noopener noreferrer">
        <img 
          src={imgSrc} 
          alt={`Image of ${title}`}
          className={`w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ${isHovered ? 'filter grayscale' : ''}`}
        />
      </a>
      {isHovered && (
        <a 
          href={projectLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white py-2 px-4 rounded transition-all duration-300 opacity-100 hover:opacity-80"
        >
          View Project
        </a>
      )}
    </div>
  );
}

// Component for displaying the project description
function ProjectDescription({ title, description, isVisible }) {
  return (
    <div className={`w-1/2 p-4 transition-transform duration-500 ${isVisible ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-10 opacity-0'}`}>
      <h2 className={`text-3xl font-bold text-black ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>{title}</h2>
      <p className={`mt-4 text-black ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        {description}
      </p>
    </div>
  );
}

// Main component for displaying project details
function ProjectDetails() {
  const [visibleProjects, setVisibleProjects] = useState(Array(3).fill(false));

  const projects = [
    {
      imgSrc: 'ig2.jpg', // Replace with your project image path
      title: 'Instagram Clone',
      description: 'A full-stack Instagram clone with user authentication and posting functionality built using MERN (MongoDB, Express, React, Node.js). Users can post images, create accounts, and like posts. The UI is made using HTML and CSS.',
      projectLink: 'https://github.com/ArjunKSanthosh/instagram.git', // Replace with your project link
    },
    {
      imgSrc: 'ecom', // Replace with your project image path
      title: 'Olx Clone',
      description: 'This project is an OLX clone that allows users to buy and sell products. Users can upload items they wish to sell, and others can browse and purchase these products. Built with MongoDB, Node.js, Express, HTML, CSS, and JavaScript.',
      projectLink: 'https://github.com/ArjunKSanthosh/olx.git', // Replace with your project link
    },
    {
      imgSrc: 'bms2.jpg', // Replace with your project image path
      title: 'Book My Show',
      description: 'This is a clone of the BookMyShow platform, featuring a user-friendly interface. Users can browse and add movies, view detailed information, and explore showtimes. Built with MongoDB, Node.js, Express, HTML, CSS, and JavaScript.',
      projectLink: 'https://github.com/ArjunKSanthosh/bms.git', // Replace with your project link
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const projectElements = document.querySelectorAll('.project');
      projectElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setVisibleProjects((prev) => {
            const newVisible = [...prev];
            newVisible[index] = true; // Set to true when in view
            return newVisible;
          });
        } else {
          setVisibleProjects((prev) => {
            const newVisible = [...prev];
            newVisible[index] = false; // Reset to false when out of view
            return newVisible;
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col space-y-8 text-black   p-4 bg-yellow-300">
      {/* Title for My Projects */}
      <h2 className="text-4xl font-bold text-center text-black 800 mb-6">My Projects</h2>
      
      {projects.map((project, index) => (
        <div key={index} className={`flex justify-between items-center bg-neutral-300		 rounded-lg shadow-lg text-black p-4 project ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}>
          {/* Left Div for Project Image */}
          <ProjectImage imgSrc={project.imgSrc} title={project.title} projectLink={project.projectLink} isVisible={visibleProjects[index]} />
          
          {/* Right Div for Project Description */}
          <ProjectDescription title={project.title} description={project.description} isVisible={visibleProjects[index]} />
        </div>
      ))}
    </div>
  );
}

export default ProjectDetails;