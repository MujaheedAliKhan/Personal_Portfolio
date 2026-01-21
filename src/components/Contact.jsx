import {Link} from 'react-scroll'
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';
import {BsBriefcaseFill} from 'react-icons/bs';

const Contact = () => {
  return (
    <>
    <div id='contact' className='w-full min-h-1/2 pb-20 bg-black'>
    <div className='grid grid-cols-1 gap-10 md:grid-cols-3 justify-items-center md:gap-6 pt-20 p-6'>
      {/* left-side */}
      <div>
        <div className='flex flex-col gap-2 border-r-2 h-40 pr-10 border-gray-400'>
          <p className='text-white font-bold text-2xl tracking-widest'>Mujaheed Ali Khan Lavani</p>
          <p className='text-gray-400 font-light tracking-wide'>Frontend Developer | React Enthusiast</p>
          <p className='text-gray-400 font-light tracking-wide'>TCS NQT Qualified</p>
        </div>
      </div>
      {/* middle-side */}
      <div className='flex flex-col'>
        <p className='text-white font-bold text-2xl tracking-wider'>Quick Links</p>
        <ul className='pt-4 flex flex-col justify-items-center gap-2'>
          <li>
          <Link to="about" smooth={true} duration={500}
          className='text-md font-semilight text-gray-400 hover:cursor-pointer hover:underline'>About</Link>
          </li>
          <li>
          <Link to="skills" smooth={true} duration={500}
          className='text-md font-semilight text-gray-400 hover:cursor-pointer hover:underline'>Skills</Link>
          </li>
          <li>
          <Link to="projects" smooth={true} duration={500}
          className='text-md font-semilight text-gray-400 hover:cursor-pointer hover:underline'>Projects</Link>
          </li>
          <li>
          <Link to="certificate" smooth={true} duration={500}
          className='text-md font-semilight text-gray-400 hover:cursor-pointer hover:underline'>Certificates</Link>
          </li>
        </ul>
      </div>
      {/* right side */}
      <div className='flex flex-col justify-items-center gap-4 border-l-2 h-40 pl-30 border-gray-400'>
        <p className='text-white font-bold pr-50 text-2xl tracking-wider'>Contact</p>
        <p className='text-md font-semilight text-gray-400'>lavanimujaheedalikhan@gmail.com</p>
       <div className='flex gap-4 pt-2'>
        <a href="https://www.linkedin.com/in/mujaheedalikhan/" target='_blank' rel='noopener noreferer' className='text-2xl p-2 bg-white rounded-full transition duration-200 text-balck hover:bg-gray-800 hover:text-white hover:shadow-white'><FaLinkedin/></a>
        <a href="https://github.com/MujaheedAliKhan" target='_blank' className='text-2xl p-2 bg-white rounded-full transition duration-200 text-balck hover:bg-gray-800 hover:text-white hover:shadow-white'><FaGithub/></a>
        <a href="mailto:lavanimujaheedalikhan@gmail.com" target='_blank' className='text-2xl p-2 bg-white rounded-full transition duration-200 text-balck hover:bg-gray-800 hover:text-white hover:shadow-white'><SiGmail/></a>
        <a href="http://naukri.com/mnjuser/profile" target='_blank' className='text-2xl p-2 bg-white rounded-full transition duration-200 text-balck hover:bg-gray-800 hover:text-white hover:shadow-white'><BsBriefcaseFill/></a>
       </div>
      </div>
    </div>

    </div>
    <div className='min-h-16 flex flex-col justify-center items-center bg-black border-t-2 border-gray-400'>
      <h1 className='text-gray-400 tracking-widest'>© 2026 Mujaheed Ali Khan. All rights reserved</h1>
    </div>
    </>
  )
}

export default Contact
