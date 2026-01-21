import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <>
      <nav className="fixed top-0 left-0 z-10 h-24 bg-gray-100 flex justify-around items-center w-full">
        <div>
          <h2 className="text-3xl font-bold">Portfolio</h2>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden gap-8 md:flex">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-md font-bold text-gray-600 outline-none rounded-full hover:bg-gray-200 hover:cursor-pointer px-4 py-3 border-none transition duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="text-md font-bold text-gray-600 outline-none rounded-full hover:bg-gray-200 hover:cursor-pointer px-4 py-3 border-none transition duration-200"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="text-md font-bold text-gray-600 outline-none rounded-full hover:bg-gray-200 hover:cursor-pointer px-4 py-3 border-none transition duration-200"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="certificate"
              smooth={true}
              duration={500}
              className="text-md font-bold text-gray-600 outline-none rounded-full hover:bg-gray-200 hover:cursor-pointer px-4 py-3 border-none transition duration-200"
            >
              Certificates
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-md font-bold text-gray-600 outline-none rounded-full hover:bg-gray-200 hover:cursor-pointer px-4 py-3 border-none transition duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div onClick={handleNav} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Nav */}
        <ul
          className={`
    fixed top-0 right-0 w-1/2 h-screen bg-gray-100
    flex flex-col justify-start pt-16 gap-y-4 items-start
    transition-transform duration-500 ease-in-out
    ${nav ? "translate-x-0" : "translate-x-full"}
  `}
        >
          <li className="w-full p-4 hover:bg-gray-200">
            <Link
              to="about"
              onClick={()=> setNav(false)}
              smooth={true}
              duration={500}
              className="pl-4 text-md font-bold text-gray-600 outline-none rounded-lg border-none transition duration-200 hover:cursor-pointer"
            >
              About
            </Link>
          </li>
          <li className="w-full p-4 hover:bg-gray-200">
            <Link
              to="skills"
              onClick={()=> setNav(false)}
              smooth={true}
              duration={500}
              className="pl-4 text-md font-bold text-gray-600 outline-none rounded-lg border-none transition duration-200 hover:cursor-pointer"
            >
              Skills
            </Link>
          </li>
          <li className="w-full p-4 hover:bg-gray-200">
            <Link
              to="projects"
              onClick={()=> setNav(false)}
              smooth={true}
              duration={500}
              className="pl-4 text-md font-bold text-gray-600 outline-none rounded-lg border-none transition duration-200 hover:cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li className="w-full p-4 hover:bg-gray-200">
            <Link
              to="certificate"
              onClick={()=> setNav(false)}
              smooth={true}
              duration={500}
              className="pl-4 text-md font-bold text-gray-600 outline-none rounded-lg border-none transition duration-200 hover:cursor-pointer"
            >
              Certificates
            </Link>
          </li>
          <li className="w-full p-4 hover:bg-gray-200">
            <Link
              to="contact"
              onClick={()=> setNav(false)}
              smooth={true}
              duration={500}
              className="pl-4 text-md font-bold text-gray-600 outline-none rounded-lg border-none transition duration-200 hover:cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
