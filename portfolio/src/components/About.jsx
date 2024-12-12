import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 bg-black text-white shadow-md shadow-gray-200">
      <div className="container  text-center">
        <h2 className="text-4xl font-serif text-orange-500">About Me</h2>
        <img src="arjun.jpg" alt="" className='w-36 h-36 object-cover rounded-full m-auto mt-7 transform hover:scale-105   transition-all duration-500 hover:shadow-md hover:shadow-cyan-500'/>
        <h3 className='text-l mt-5 text-gray-500'> Hey I'm,</h3>
        <h3 className='text-xl mt-2 text-orange-500'> Arjun K Santhosh</h3>
        <p className="mt-4 text-base mb-12 w-9/12 m-auto text-justify indent-20">I'm a passionate web developer specializing in front-end technologies like React, JavaScript, and Tailwind CSS.
As a passionate MERN stack developer, I specialize in creating dynamic, responsive, and user-centric web applications. With expertise in MongoDB, Express.js, React, and Node.js, I enjoy building full-stack solutions that are both scalable and efficient. My journey began with front-end development, where I mastered HTML, CSS, and JavaScript, before diving deeper into the back-end with Node.js and Express. I am driven by a strong desire to solve complex problems and deliver seamless user experiences. Whether it’s building APIs, managing databases, or crafting intuitive interfaces, I am committed to writing clean, maintainable code.        </p>

        <div className="">
       
          <div className="bg-gray-800 text-white p-8  shadow-lg  mx-auto shadow-md shadow-cyan-100">
            <h3 className="text-2xl font-serif">Skills</h3>
            <ul className="mt-4 flex justify-center gap-6">
              <li className='transform hover:scale-110 transition-all duration-400'>HTML</li>
              <li className='transform hover:scale-110 transition-all duration-400'>CSS</li>
              <li className='transform hover:scale-110 transition-all duration-400'>JavaScript</li>
              <li className='transform hover:scale-110 transition-all duration-400'>Tailwind CSS</li>
              <li className='transform hover:scale-110 transition-all duration-400'>NodeJS</li>
              <li className='transform hover:scale-110 transition-all duration-400'>ReactJS</li>
              <li className='transform hover:scale-110 transition-all duration-400'>ExpressJS</li>
            </ul>
          </div>
         
        </div>
      </div>
    </section>
  );
}

export default About;
