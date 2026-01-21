import React, { useState } from 'react'
import certificate from "../data/certificates"
import {motion} from 'framer-motion'

const Certification = () => {
  const [activeFilter, setactiveFilter] = useState("All");
  
  const filteredCertificates = activeFilter === "All" 
  ? certificate 
  : certificate.filter(
    (cert) => cert.type === activeFilter );
  return (
    <div id='certificate' className='w-full min-h-screen bg-gray-200'>
      <h1 className='text-center pt-20 text-5xl font-bold text-gray-700'>CERTIFICATION</h1>

      {/* Filter Button */}
      <div className='flex justify-center mt-6 gap-4'>
        {["All", "Tech", "Internship"].map((filter) => (
          <button 
          key={filter}
          onClick={() => setactiveFilter(filter)}
          className={`px-5 py-2 rounded-lg font-semibold transition duration-200
              ${
                activeFilter === filter
                  ? "bg-black text-white shadow-lg"
                  : "bg-gray-300 text-gray-700 hover:bg-black hover:text-white"
              }`}>
             {filter}
          </button>
        ))}
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 p-4 pt-20'>
         {filteredCertificates && filteredCertificates.map((cert, id)=>{
            return (
              <div key={id} className='flex flex-col gap-4 justify-center items-center border border-none bg-gray-100 p-6 shadow-lg rounded-md hover:transform hover:scale-105 duration-200'>
                <img className='w-60 h-40 object-contain' src={cert.image} alt="certificates"/>
                 <p className='text-lg font-bold text-gray-700 text-center'>{cert.title}</p>
                <p className='text-sm text-gray-500 font-semibold text-center'>{cert.description}</p>
                <motion.a
                initial={{opacity:0, y:10}}
                animate={{opacity:1, y:0}}
                transition={{duration:1, ease:"easeIn"}}
                href={cert.image} className="px-14 py-3 font-bold flex justify-center items-center border border-none bg-gray-900 text-gray-100 rounded-full shadow-lg hover:bg-gray-800 transition duration-200 tracking-wider" target='_blank' rel='noopener noreferer'>View</motion.a>
                <p className="text-sm text-gray-500">{cert.type}</p>
              </div>
            )
         })}
      </div>
    </div>
  )
}

export default Certification
