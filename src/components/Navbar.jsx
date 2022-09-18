import React, { useState } from 'react'
import Logo from '../assets/logo.svg'
import {HiChevronDown, HiChevronUp} from 'react-icons/hi'
import {BsFillCalendarEventFill} from 'react-icons/bs'
import {RiCalendarTodoFill} from 'react-icons/ri'
import {FaBell} from 'react-icons/fa'
import {HiClock} from 'react-icons/hi'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'


const Navbar = () => {

  // Dropdown for desktop's features
  const [drop, setDrop] = useState(false);
  const handleDrop = () => {
    setDrop(!drop);
  }

  // Dropdown for desktop's company
  const [drop2, setDrop2] = useState(false);
  const handleDrop2 = () => {
    setDrop2(!drop2);
  }

  // Open and close mobile nav
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  }

  // Dropdown for mobile's features
  const [mdrop1, setMDrop1] = useState(false);
  const handleMDrop1 = () => {
    setMDrop1(!mdrop1);
  }

  // Dropdown for mobile's company
  const[mdrop2, setMDrop2] = useState(false);
  const handleMDrop2 = () => {
    setMDrop2(!mdrop2);
  }

  return (
    <header className='w-full'>
      <nav className='flex justify-between items-center w-full max-w-[1680px] mx-auto p-8'>

        {/* Far left half */}
        <div className='flex justify-between items-center relative gap-16 lg:gap-8'>
          <a href='/'>
            <img src={Logo} alt="logo"/>
          </a>
          <ul className='flex justify-between items-center gap-8 md:hidden'>
            <li onClick={handleDrop} className='flex items-center'>Features {drop ? <HiChevronUp className="ml-1"/> : <HiChevronDown className="ml-1"/>}</li>
            <ul className={drop ? 'absolute top-7 left-24 w-[150px] flex flex-col items-center py-4 shadow-2xl rounded-lg border border-gray-100 bg-white' : 'hidden'}>
              <li className='flex items-center p-2'><RiCalendarTodoFill className='mr-3 text-[#7749c3]' /> Todo List</li>
              <li className='flex items-center p-2'><BsFillCalendarEventFill className='mr-3 text-[#4cd0e0]'/> Calendar</li>
              <li className='flex items-center p-2'><FaBell className='mr-3 text-[#e5d335]' /> Reminders</li>
              <li className='flex items-center p-2'><HiClock className='mr-3 text-purple-800' /> Planning</li>
            </ul>
            <li onClick={handleDrop2} className='flex items-center'>Company {drop2 ? <HiChevronUp className="ml-1"/> : <HiChevronDown className="ml-1"/>}</li>
            <ul className={drop2 ? 'absolute top-7 left-64 w-[150px] flex flex-col items-center py-4 shadow-2xl rounded-lg border border-gray-100 bg-white' : 'hidden'}>
              <li className='p-2'>History</li>
              <li className='p-2'>Our Team</li>
              <li className='p-2'>Blog</li>
            </ul>
            <li>Careers</li>
            <li>About</li>
          </ul>
        </div>

        {/* Far right half */}
        <div className='flex justify-between items-center text-[#696969] md:hidden'>
          <button className='hover:text-[#141414] duration-300 px-6'>
            Login
            </button>
          <button className='hover:text-[#141414] duration-300 border-2 px-6 py-3 hover:border-[#141414] rounded-xl'>
            Register
          </button>
        </div>

        {/* Dark Background for mobile menu */}
        <div className={nav? 'hidden md:absolute md:top-0 md:left-0 md:w-full md:bg-[#141414]/70 md:h-screen md:block' : 'hidden'}></div>

        <FaBars onClick={handleNav} className='cursor-pointer hidden md:flex' size={23}/>

        <div className={nav? 'md:bg-white md:absolute md:w-[60%] md:h-screen md:top-0 md:right-0 md:block md:duration-300 hidden': 'bg-white absolute w-[60%] h-screen top-[-100%] right-0 duration-300'}>
          <AiOutlineClose onClick={handleNav} className='md:absolute md:right-8 md:top-7 md:cursor-pointer md:flex hidden' size={25}/>
          <ul className='flex flex-col items-center px-8 py-20'>
            <li onClick={handleMDrop1} className='py-2 flex items-center'>Features {mdrop1 ? <HiChevronUp className='ml-1' /> : <HiChevronDown className='ml-1'/>} </li>
              <ul className={mdrop1 ? 'flex flex-col items-center w-full' : 'hidden'}>
                <li className='flex items-center py-2'><RiCalendarTodoFill className='mr-3 text-[#7749c3]' /> Todo List</li>
                <li className='flex items-center py-2'><BsFillCalendarEventFill className='mr-3 text-[#4cd0e0]'/> Calendar</li>
                <li className='flex items-center py-2'><FaBell className='mr-3 text-[#e5d335]' /> Reminders</li>
                <li className='flex items-center py-2'><HiClock className='mr-3 text-purple-800' /> Planning</li>
              </ul>
            <li onClick={handleMDrop2} className='py-2 flex items-center'>Company {mdrop2 ? <HiChevronUp className='ml-1' /> : <HiChevronDown className='ml-1'/>}</li>
              <ul className={mdrop2 ? 'flex flex-col items-center w-full' : 'hidden'}>
                <li className='py-2'>History</li>
                <li className='py-2'>Our Team</li>
                <li className='py-2'>Blog</li>
              </ul>
            <li className='py-2'>Careers</li>
            <li className='py-2'>About</li>
          </ul>

          <div className='flex flex-col items-center gap-4'>
            <button className='text-[#696969] hover:text-[#141414]'>Login</button>
            <button className='text-[#696969] hover:text-[#141414] duration-300 border-2 px-16 py-3 hover:border-[#141414] rounded-xl'>
              Register
            </button>
          </div>
          
        </div>

      </nav>
    </header>
  )
}

export default Navbar