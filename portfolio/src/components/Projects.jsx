import React from 'react';

function Projects() {
  return (
    <div id="projects" className=" main py-20 bg-black text-white flex flex-col items-center">
        <h2 className="text-4xl font-serif text-orange-500">My Projects</h2>
      <div className="container mx-auto text-center flex gap-6 justify-around">
        <div className="w-1/4  flex flex-wrap justify-center  gap-8 mt-8">
          <div className="bg-gray-600	 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-200">
            {/* <img src="/path-to-project-image.jpg" alt="Project 1" className="rounded-lg mb-4" /> */}
            <h3 className="text-xl font-serif text-white">Project Title</h3>
            <p className="mt-4">A description of the project goes here. Mention the technologies used and link to the GitHub or live site.</p>
            <a href="#" className="text-white hover:underline mt-4 inline-block">View Project</a>
          </div>
          {/* Add more project cards as needed */}
        </div>
        <div className="w-1/4  flex flex-wrap justify-center gap-8 mt-8 ">
          <div className="bg-gray-600	 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-200">
            {/* <img src="/path-to-project-image.jpg" alt="Project 1" className="rounded-lg mb-4" /> */}
            <h3 className="text-xl font-serif text-white">Project Title</h3>
            <p className="mt-4">A description of the project goes here. Mention the technologies used and link to the GitHub or live site.</p>
            <a href="#" className="text-orange-500 hover:underline mt-4 inline-block">View Project</a>
          </div>
          {/* Add more project cards as needed */}
        </div>
        <div className="w-1/4  flex flex-wrap justify-center gap-8 mt-8">
          <div className="bg-gray-600	 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-200">
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
