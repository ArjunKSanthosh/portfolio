import React from 'react';

function Projects() {
  return (
    <div id="projects" className=" main py-20 bg-black text-white flex flex-row">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-serif text-orange-500">My Projects</h2>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <div className="bg-stone-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            {/* <img src="/path-to-project-image.jpg" alt="Project 1" className="rounded-lg mb-4" /> */}
            <h3 className="text-xl font-serif text-orange-500">Project Title</h3>
            <p className="mt-4">A description of the project goes here. Mention the technologies used and link to the GitHub or live site.</p>
            <a href="#" className="text-orange-500 hover:underline mt-4 inline-block">View Project</a>
          </div>
          {/* Add more project cards as needed */}
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <div className="bg-stone-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            {/* <img src="/path-to-project-image.jpg" alt="Project 1" className="rounded-lg mb-4" /> */}
            <h3 className="text-xl font-serif text-orange-500">Project Title</h3>
            <p className="mt-4">A description of the project goes here. Mention the technologies used and link to the GitHub or live site.</p>
            <a href="#" className="text-orange-500 hover:underline mt-4 inline-block">View Project</a>
          </div>
          {/* Add more project cards as needed */}
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <div className="bg-stone-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            {/* <img src="/path-to-project-image.jpg" alt="Project 1" className="rounded-lg mb-4" /> */}
            <h3 className="text-xl font-serif text-orange-500">Project Title</h3>
            <p className="mt-4">A description of the project goes here. Mention the technologies used and link to the GitHub or live site.</p>
            <a href="#" className="text-orange-500 hover:underline mt-4 inline-block">View Project</a>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
