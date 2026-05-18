import data from "../data/project"
import {motion} from 'framer-motion'
import { RxExternalLink } from "react-icons/rx";
const Projects = () => {
  return (
    <div id='projects'className='min-h-screen w-full pb-20'>
      <h1 className='text-center pb-8 text-5xl font-bold text-gray-700'>PROJECTS</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 items-stretch p-8 md:p-4 gap-10 w-full ">
        {data && data.map((item) => {
            return(
              <div className="pt-6 pb-8 p-4 md:p-6 flex flex-col justify-center items-center border border-gray-300 rounded-lg shadow-2xl bg-white hover:translate-x-1 hover:scale-105 duration-200 delay-100 ease-in-out" key={item.id}>
                  <h1 className="text-2xl text-gray-800 font-bold text-center pb-6">{item.title}</h1>
                  <img 
                  className="max-w-80 md:w-100 h-35 md:h-55 object-cover gap-8 mb-6 rounded-lg" src={item.image} alt="Crytp_Dash" />
                  {/* TechStack For Frontend */}
                  <div className="flex gap-4 ">
                    {item && item.techStack.Frontend.map((skill, id) => {
                      return(
                        <div key={id}>
                            <p className="border border-none px-3 py-2 bg-gray-100 text-sm md:text-md font-bold rounded-lg shadow-lg mb-2" >{skill}</p>
                        </div>
                      );
                  })}
                  </div>

                  {/* TechStack for Backend */}
                 <div className="flex gap-4">
                   {item.techStack.Backend?.map((skill, idx)=>{
                        return(
                          <div key={idx}>
                            <p className="border border-none px-3 py-2 text-sm md:text-md bg-gray-100 font-bold rounded-lg shadow-lg mt-2 mb-2" >{skill}</p>
                          </div>
                        );
                  })}
                 </div>
                  <p className="pb-4 text-center text-gray-600 text-xs md:text-sm p-4">{item.description}</p>
                  <a href={item.live} className="text-center px-14 py-3 text-xs md:text-sm font-bold flex justify-center items-center border border-none bg-gray-900 text-gray-100 rounded-full shadow-lg hover:bg-gray-800 transition duration-200 tracking-wider" target="_blank" rel="noopener noreferer">View <RxExternalLink  className="ml-2 text-lg"/></a>
              </div>
            )
        })}
      </div>
    </div>
  )
}

export default Projects
