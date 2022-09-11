import React, { useState } from 'react'
import Logo from '../assets/logo.svg'
import {HiChevronDown, HiChevronUp} from 'react-icons/hi'
import {BsFillCalendarEventFill} from 'react-icons/bs'
import {RiCalendarTodoFill} from 'react-icons/ri'
import {FaBell} from 'react-icons/fa'
import {HiClock} from 'react-icons/hi'

const Navbar = () => {

  const [drop, setDrop] = useState(false);
  const handleDrop = () => {
    setDrop(!drop);
  }

  const [drop2, setDrop2] = useState(false);
  const handleDrop2 = () => {
    setDrop2(!drop2);
  }

  return (
    <header className='w-full h-[250px]'>
      <nav className='flex justify-between items-center w-full max-w-[1680px] mx-auto py-8 px-8'>

        {/* Far left half */}
        <div className='flex justify-between items-center relative gap-16'>
          <img src={Logo} alt="logo"/>
          <ul className='flex justify-between items-center gap-8 lg:hidden'>
            <li onClick={handleDrop} className='flex items-center'>Features {drop ? <HiChevronUp onClick={handleDrop} className="ml-1"/> : <HiChevronDown onClick={handleDrop} className="ml-1"/>}</li>
            <ul className={drop ? 'absolute top-7 left-24 w-[150px] flex flex-col items-center py-4 shadow-2xl rounded-lg' : 'hidden'}>
              <li className='flex items-center p-2'><RiCalendarTodoFill className='mr-3 text-[#7749c3]' /> Todo List</li>
              <li className='flex items-center p-2'><BsFillCalendarEventFill className='mr-3 text-[#4cd0e0]'/> Calendar</li>
              <li className='flex items-center p-2'><FaBell className='mr-3 text-[#e5d335]' /> Reminders</li>
              <li className='flex items-center p-2'><HiClock className='mr-3 text-purple-800' /> Planning</li>
            </ul>
            <li onClick={handleDrop2} className='flex items-center'>Company {drop2 ? <HiChevronUp onClick={handleDrop2} className="ml-1"/> : <HiChevronDown onClick={handleDrop2} className="ml-1"/>}</li>
            <ul className={drop2 ? 'absolute top-7 left-64 w-[150px] flex flex-col items-center py-4 shadow-2xl rounded-lg' : 'hidden'}>
              <li className='p-2'>History</li>
              <li className='p-2'>Our Team</li>
              <li className='p-2'>Blog</li>
            </ul>
            <li>Careers</li>
            <li>About</li>
          </ul>
        </div>

        {/* Far right half */}
        <div className='flex justify-between items-center gap-16 md:gap-4 text-[#696969]'>
          <button className='hover:text-[#141414] duration-300 px-6 py-3'>
            Login
            </button>
          <button className='hover:text-[#141414] duration-300 border-2 px-6 py-3 hover:border-[#141414] rounded-xl'>
            Register
          </button>
        </div>

      </nav>
    </header>
  )
}

export default Navbar