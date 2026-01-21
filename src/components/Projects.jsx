import data from "../data/project"
import {motion} from 'framer-motion'
const Projects = () => {
  return (
    <div id='projects'className='min-h-screen w-full pb-20'>
      <h1 className='text-center pb-8 text-5xl font-bold text-gray-700'>Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 items-stretch p-10 gap-10 w-full ">
        {data && data.map((item) => {
            return(
              <div className="pt-6 pb-8 p-12 flex flex-col justify-center items-center border border-none rounded-lg shadow-2xl bg-gray-200 hover:translate-x-1 hover:scale-105 duration-200 delay-100 ease-in-out" key={item.id}>
                  <h1 className="text-2xl text-gray-800 font-bold text-center pb-6">{item.title}</h1>
                  <img 
                  className="w-100 h-60 object-cover gap-8 pb-8 rounded" src={item.image} alt="Crytp_Dash" />
                  {/* TechStack For Frontend */}
                  <div className="flex gap-4 ">
                    {item && item.techStack.Frontend.map((skill, id) => {
                      return(
                        <div key={id}>
                            <p className="border border-none px-3 py-2 bg-gray-300 font-bold rounded-lg shadow-lg mb-2" >{skill}</p>
                        </div>
                      );
                  })}
                  </div>

                  {/* TechStack for Backend */}
                 <div className="flex gap-4">
                   {item.techStack.Backend?.map((skill, idx)=>{
                        return(
                          <div key={idx}>
                            <p className="border border-none px-3 py-2 bg-gray-300 font-bold rounded-lg shadow-lg mt-2 mb-2" >{skill}</p>
                          </div>
                        );
                  })}
                 </div>
                  <p className="pb-4 text-center font-semibold text-gray-600 text-sm p-4">{item.description}</p>
                  <a href={item.live} className="px-14 py-3 font-bold flex justify-center items-center border border-none bg-gray-900 text-gray-100 rounded-full shadow-lg hover:bg-gray-800 transition duration-200 tracking-wider" target="_blank" rel="noopener noreferer">View Project</a>
              </div>
            )
        })}
      </div>
    </div>
  )
}

export default Projects
