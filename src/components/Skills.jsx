import React from 'react'
import { useEffect, useState } from 'react';
import {FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithubSquare} from 'react-icons/fa' 

const skills = [
  {
    id:1,
    icon: <FaHtml5/>,
    name: "Html5",
    desc: "Hyper Text MarkUp Language",
    summary: "Build semantic, accessible, SEO-friendly web pages",
    percent: "90",
    list:{
      point1:"One"
    }
  },
  {
    id:2,
    icon: <FaCss3Alt/>,
    name: "Css3",
    desc: "Cascading Sytle Sheet",
    summary: "Style responsive layouts with modern CSS",
    percent: "70"
  },
  {
    id:3,
    icon: <FaJs/>,
    name: "JavaScript",
    desc: "JavaScript",
    summary: "Add interactivity and logic to web applications",
    percent:"60"
  },
  {
    id:4,
    icon: <FaReact/>,
    name: "Reactjs",
    desc: "React is a Javascript Library",
    summary: "Build reusable UI components and SPA",
    percent: "50"
  },
  {
    id:5,
    icon: <FaGithubSquare/>,
    name: "Git & GitHub",
    desc: "Version Control System",
    summary: "Version control and project collaboration",
    percent:"65"
  }
];

const Skills = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 200);
  }, []);

  return (
    <div id='skills' className='bg-gray-200 min-h-screen w-full pt-10'>
      <h1 className='text-center pt-8 text-5xl font-bold text-gray-700'>SKILLS</h1>
    <div className='grid grid-cols-1 md:grid-cols-3 items-stretch w-full pt-20 p-4 gap-10 pb-20'>
        {skills && skills.map((skill, index) => {
            return(
              <div key={skill.id} className='grid max-w-/[250px] items-stretch border border-none px-5 py-8 rounded-lg bg-gray-100 shadow-lg transition delay-75 duration-200 ease-in-out hover:scale-105'>
                 <div className='flex flex-col flex-1 gap-2'> 
                    <div className='flex w-full items-center'>
                      <span className='text-5xl' >{skill.icon}</span>
                    <p className='pl-4 text-lg font-bold text-gray-500 text-wrap'>{skill.name}</p>
            
                    </div>
                   <div className='flex justify-around items-center gap-4 font-bold'>
                    <div className='w-full h-3 bg-gray-200 rounded-full overflow-hidden'> 
                          <div className='h-full bg-gray-400 rounded-full transition-all duration-3000 ease-in-out'
                          style={
                            {width: animate ? `${skill.percent}%` : "0%",
                             transitionDelay : `${index * 150}ms`
                            }}>   
                          </div>
                    </div>
                    <span>{skill.percent}%</span>
                   </div>
                    
                    <p className='text-md text-gray-700 font-semibold'>{skill.desc}</p>
                    <p className='pt-2 text-sm text-gray-600 font-semibold'>{skill.summary}</p>
                 </div>
              </div>
            );
        })}
      </div>
    </div>
  )
}

export default Skills
