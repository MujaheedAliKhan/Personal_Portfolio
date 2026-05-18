import React from 'react'
import { useEffect, useState } from 'react';
import {FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithubSquare, FaNodeJs} from 'react-icons/fa'
import {TbBrandNodejs} from "react-icons/tb";
import {DiMongodb }  from "react-icons/di";

const skills = [
  {
    id:1,
    icon: <FaHtml5/>,
    name: "Html5",
    desc: "Structures the content and layout of web pages using elements and tags.",
    summary: "The foundation of every website, defining its content and structure.",
    percent: "70",
    list:{
      point1:"One"
    }
  },
  {
    id:2,
    icon: <FaCss3Alt/>,
    name: "Css3",
    desc: "Styles and designs web pages with colors, layouts, and responsive effects.",
    summary: "Controls the visual appearance and responsiveness of websites.",
    percent: "70"
  },
  {
    id:3,
    icon: <FaJs/>,
    name: "JavaScript",
    desc: "Adds interactivity and dynamic functionality to web applications.",
    summary: "The programming language that makes websites interactive and dynamic.",
    percent:"60"
  },
  {
    id:4,
    icon: <FaReact/>,
    name: "Reactjs",
    desc: "Builds fast and reusable user interfaces using component-based architecture.",
    summary: "A powerful JavaScript library for creating modern, dynamic web applications.",
    percent: "50"
  },
  {
    id:5,
    icon: <FaGithubSquare/>,
    name: "Git & GitHub",
    desc: "Version Control System",
    summary: "GitHub is a platform for storing, managing, and collaborating on code using Git version control.",
    percent:"65"
  },
  {
    id:6,
    icon: <FaNodeJs/>,
    name: "Nodejs",
    desc: "Handles the backend logic and runs JavaScript on the server.",
    summary: "Fast and scalable JavaScript runtime for building backend applications.",
    percent:"40"
  },
  {
    id:7,
    icon: <TbBrandNodejs/>,
    name: "Expressjs",
    desc: "Simplifies creating APIs and managing server routes.",
    summary: "Lightweight framework for creating APIs and web servers with Node.js.",
    percent:"40"
  },
  {
    id:8,
    icon: <DiMongodb/>,
    name: "MongoDB",
    desc: "Stores and manages application data in a flexible database.",
    summary: "Flexible NoSQL database for storing and managing application data.",
    percent:"35"
  },
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
    <div className='grid grid-cols-1 md:grid-cols-3 items-stretch w-full pt-20 p-6 gap-10 md:pb-20'>
        {skills && skills.map((skill, index) => {
            return(
              <div key={skill.id} className='grid max-w-/[250px] items-stretch border border-gray-300 px-5 py-8 rounded-lg bg-white  shadow-lg transition delay-75 duration-200 ease-in-out hover:scale-105'>
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
