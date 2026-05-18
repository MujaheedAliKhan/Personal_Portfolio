import React, { useState } from 'react'
import {motion} from 'framer-motion' //Transition
import {TypeAnimation} from 'react-type-animation' //Text Animation
const Aboutme = () => {


  return (
    <div id='about' className='pt-20 w-full min-h-\[160px\] p-8'>
      <div className="flex flex-col items-center justify-around">
        <div className='flex flex-col justify-around items-center'>
          <motion.img 
          initial={{opacity:0, y:40}}
          animate={{opacity:1, y:0}}
          transition={{duration: 1}}
          className='mx-auto mb-6 h-46 w-46 sm:h-72 sm:w-72 md:h-72 md:w-72 object-cover border-gray-400 border-2 rounded-full shadow-gray-400 shadow-md ' src="/images/Mujaheed.jpeg" alt="Mujaheed.jpeg" />
          <h1 className='text-3xl sm:text-4xl md:text-4xl mb-4 text-center font-semibold text-gray-500 text-wrap'><span className='text-black'>I'm</span> Lavani Mujaheed Ali Khan, </h1>
          <h2 className='text-2xl sm:text-3xl md:text-3xl mb-4 font-semibold'><span className='text-black'>
            <TypeAnimation
            sequence={[
              "Frontend Developer..", 2000,
              "JavaScript Enthusiast..", 2000,
              "Responsive Web Designer..", 2000,
              "Full Stack Enthusiast..", 2000,
              "React Developer.."
            ]}
            speed={10}
            repeat={Infinity}>

            </TypeAnimation>
            </span></h2>
          <p className='max-w-5xl text-wrap p-4 text-md text-start text-md text-gray-600 '>Fresher Computer Science graduate with hands-on experience in building web applications and working
            with databases and APIs. Strong foundation in programming, problem-solving, and software development
            fundamentals, with the ability to quickly learn and adapt to new technologies. Open to relocation and
            flexible to work in rotational shifts.</p>
        </div>

        <div className='mt-8 flex flex-row gap-12'>
          <motion.a 
          initial={{opacity:0, x:-30}}
          animate={{opacity:1, x:0}}
          transition={{duration:0.8}}
          href="../public/images/Mujaheed_Ali_KhanRes.pdf" className='border-none text-sm md:text-md font-semibold bg-black text-white px-5 py-3 rounded-full transition duration-200 shadow-lg hover:bg-gray-700' target='_blank'>View Resume</motion.a>
          <motion.a 
          initial={{opacity:0, x:30}}
          animate={{opacity:1, x:0}}
          transition={{duration:0.8}}
          href="../public/images/Mujaheed_Ali_KhanRes.pdf" className='text-sm md:text-md font-semibold bg-white text-black border border-black px-5 py-3 rounded-full transition duration-150 shadow-lg hover:border hover:border-black hover:bg-black hover:text-white' download={"LavaniMujaheedAliKhan_resume.pdf"}>Download CV</motion.a>
        </div>
        
      </div>
      
    </div>
  )
}

export default Aboutme
