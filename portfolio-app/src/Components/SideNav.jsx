import React from "react";
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineUser,
  AiOutlineFilePdf,
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BiLogoUpwork } from "react-icons/bi";
import { useState } from "react";

const SideNav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className='absolute top-4 right-4 z-[99] md:hidden'
      />
      {nav ? (
        <div className='fixed w-full h-screen bg-violet-300 flex flex-col justify-center items-center z-20 md:hidden'>
          <a
            href='#home'
            className='w-[50%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <AiOutlineHome size={20} />
            <span className='pl-4'>Home</span>
          </a>
          <a
            href='#main'
            className='w-[50%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <AiOutlineUser size={20} />
            <span className='pl-4'>About</span>
          </a>
          <a
            href='#main'
            className='w-[50%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <GrProjects size={20} />
            <span className='pl-4'>Projects</span>
          </a>
          <a
            href='#main'
            className='w-[50%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <AiOutlineFilePdf size={20} />
            <span className='pl-4'>Resume</span>
          </a>
          <a
            href='#main'
            className='w-[50%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <AiOutlineMail size={20} />
            <span className='pl-4'>Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}

      <div className='md:block hidden fixed top-4 right-4 z-[99]  '>
        <div className='flex flex-row'>
          <a
            href='/home'
            className='right- flex justify-center text-center rounded-lg shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200 hover:underline underline-offset-4 decoration-black'
          >
            Home
          </a>
          <a
            href='#main'
            className='right- flex justify-center text-center rounded-lg m-2 p-2 shadow-lg bg-gray-100 shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-200 hover:underline underline-offset-4 decoration-black'
          >
            About
          </a>
          <a
            href='#main'
            className=' flex justify-center text-center rounded-lg m-2 p-2 shadow-lg bg-gray-100 shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-200 hover:underline underline-offset-4 decoration-black'
          >
            Projects
          </a>
          <a
            href='#main'
            className='flex justify-center text-center rounded-lg m-2 p-2 shadow-lg bg-gray-100 shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-200 hover:underline underline-offset-4 decoration-black'
          >
            Resume
          </a>
          <a
            href='#main'
            className='flex justify-center text-center rounded-lg m-2 p-2 shadow-lg bg-gray-100 shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-200 hover:underline underline-offset-4 decoration-black'
          >
            Contact
          </a>
        </div>
      </div>

      <div className='md:block hidden fixed top-[70%] z-10'>
        <div className='flex flex-col'>
          <a
            href='https://www.linkedin.com/in/chaitra1212'
            className='rounded-full shadow-lg bg-blue-200 shadow-gray-400 m-2 p-2 ml-4 cursor-pointer hover:scale-110 ease-in duration-300'
          >
            <AiOutlineLinkedin size={20} />
          </a>
          <a
            href='https://github.com/chaitra-N'
            className='rounded-full shadow-lg bg-blue-200 shadow-gray-400 m-2 p-2 ml-4 cursor-pointer hover:scale-110 ease-in duration-300'
          >
            <AiOutlineGithub size={20} />
          </a>
          <a
            href='https://www.upwork.com/freelancers/~013e3e4feb23460703'
            className='rounded-full shadow-lg bg-blue-200 shadow-gray-400 m-2 p-2 ml-4 cursor-pointer hover:scale-110 ease-in duration-300'
          >
            <BiLogoUpwork size={20} />
          </a>
          <a
            href='https://gmail.com/'
            className='rounded-full shadow-lg bg-blue-200 shadow-gray-400 m-2 p-2 ml-4 cursor-pointer hover:scale-110 ease-in duration-300'
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
        <div className='absolute left-1/2 -ml-0.8 w-0.5 h-screen bg-black'></div>
      </div>
    </div>
  );
};

export default SideNav;
