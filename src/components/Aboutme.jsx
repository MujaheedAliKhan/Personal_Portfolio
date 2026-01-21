import React, { useState } from 'react'
import {motion} from 'framer-motion'
const Aboutme = () => {


  return (
    <div id='about' className='pt-20 w-full min-h-\[160px\]'>
      <div className="flex flex-col items-center justify-around">
        <div className='flex flex-col justify-around items-center'>
          <motion.img 
          initial={{opacity:0, y:40}}
          animate={{opacity:1, y:0}}
          transition={{duration: 1}}
          className='mx-auto mb-6 h-72 w-72 object-cover border-gray-400 border-2 rounded-full shadow-gray-400 shadow-md ' src="/images/Mujaheed.jpeg" alt="Mujaheed.jpeg" />
          <h1 className='text-4xl mb-4 text-center font-bold text-gray-500 text-wrap'><span className='text-black'>I'm</span> Lavani Mujaheed Ali Khan, </h1>
          <h2 className='text-3xl mb-4 font-bold'><span className='text-black'>Frontend Developer</span></h2>
          <p className='max-w-5xl text-wrap p-4 text-md text-center sm:text-md font-semibold text-gray-600 '>Enthusiastic and dedicated fresher seeking an opportunity as an Analyst Trainee in the IT sector
              to provide technical support, troubleshoot hardware and software issues, and deliver excellent
              customer service while contributing to organizational growth. Quick learner with strong
              problem-solving and analytical skills, seeking to work in a 24/7 support environment with
              flexibility to work in shifts.</p>
        </div>

        <div className='mt-8 flex flex-row gap-12'>
          <motion.a 
          initial={{opacity:0, x:-30}}
          animate={{opacity:1, x:0}}
          transition={{duration:0.8}}
          href="../src/assets/images/LavaniMujaheedAliKhan_resume.pdf" className='border-none text-md font-bold bg-black text-white px-5 py-3 rounded-full transition duration-200 shadow-lg hover:bg-gray-700' target='_blank'>View Resume</motion.a>
          <motion.a 
          initial={{opacity:0, x:30}}
          animate={{opacity:1, x:0}}
          transition={{duration:0.8}}
          href="../src/assets/images/LavaniMujaheedAliKhan_resume.pdf" className='border-none text-md font-bold bg-gray-700 text-white px-5 py-3 rounded-full transition duration-150 shadow-lg  hover:bg-black' download={"LavaniMujaheedAliKhan_resume.pdf"}>Download CV</motion.a>
        </div>
        
      </div>
      
    </div>
  )
}

export default Aboutme
