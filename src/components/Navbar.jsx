import React from 'react'
import Logo from '../assets/logo.svg'
import {HiChevronDown, HiChevronUp} from 'react-icons/hi'
import {BsFillCalendarEventFill} from 'react-icons/bs'
import {RiCalendarTodoFill} from 'react-icons/ri'
import {FaBell} from 'react-icons/fa'
import {HiClock} from 'react-icons/hi'

const Navbar = () => {
  return (
    <header>
      <nav>

        {/* Far left half */}
        <div>
          <img src={Logo} alt="logo"/>
          <ul>
            <li>Features <HiChevronDown /></li>
            <ul>
              <li><RiCalendarTodoFill /> Todo List</li>
              <li><BsFillCalendarEventFill /> Calendar</li>
              <li><FaBell /> Reminders</li>
              <li><HiClock /> Planning</li>
            </ul>
            <li>Company <HiChevronDown /></li>
            <ul>
              <li>History</li>
              <li>Our Team</li>
              <li>Blog</li>
            </ul>
            <li>Careers</li>
            <li>About</li>
          </ul>
        </div>

        {/* Far right half */}
        <div>
          <button>Login</button>
          <button><i class="fa fa-registered" aria-hidden="true"></i></button>
        </div>

      </nav>
    </header>
  )
}

export default Navbar