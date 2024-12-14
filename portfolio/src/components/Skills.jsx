import React from "react";

function Skill(){
    
    return(
        <div className=" bg-gray-800 mt-36 h-full">
        <div className="bg-gray-800 text-white p-8 mx-auto ">
          <h3 className='text-5xl mb-10 font-serif m-auto text-center' >SKILLS</h3>
          <ul className="mt-4 flex justify-center flex-wrap gap-6 m-auto">
                    {["JavaScript", "MongoDB", "ExpressJS", "ReactJS", "NodeJS", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "C", "C++", "SQL"].map(skill => (
                        <li key={skill} className='bg-gray-700 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-40 h-10 text-center flex items-center justify-center text-lg font-semibold transform hover:scale-105 hover:bg-gradient-to-r from-blue-500 to-purple-500'>
                            {skill}
                        </li>
                    ))}
                </ul>
     
          </div>

          </div>
    )
}
export default Skill;