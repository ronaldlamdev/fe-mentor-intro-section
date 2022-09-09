import React from 'react'
import Logo from '../assets/logo.svg'
import {HiChevronDown, HiChevronUp} from 'react-icons/hi'
import {BsFillCalendarEventFill} from 'react-icons/bs'
import {RiCalendarTodoFill} from 'react-icons/ri'
import {FaBell} from 'react-icons/fa'
import {HiClock} from 'react-icons/hi'

const Navbar = () => {
  return (
    <header className='w-full h-[250px]'>
      <nav className='flex justify-between items-center w-full max-w-[1680px] mx-auto py-8'>

        {/* Far left half */}
        <div className='flex justify-between items-center relative gap-16'>
          <img src={Logo} alt="logo"/>
          <ul className='flex justify-between items-center gap-8'>
            <li className='flex items-center'>Features <HiChevronDown /></li>
            <ul className='absolute hidden'>
              <li><RiCalendarTodoFill /> Todo List</li>
              <li><BsFillCalendarEventFill /> Calendar</li>
              <li><FaBell /> Reminders</li>
              <li><HiClock /> Planning</li>
            </ul>
            <li className='flex items-center'>Company <HiChevronDown /></li>
            <ul className='absolute hidden'>
              <li>History</li>
              <li>Our Team</li>
              <li>Blog</li>
            </ul>
            <li>Careers</li>
            <li>About</li>
          </ul>
        </div>

        {/* Far right half */}
        <div className='flex justify-between items-center gap-16'>
          <button>Login</button>
          <button>Register</button>
        </div>

      </nav>
    </header>
  )
}

export default Navbar