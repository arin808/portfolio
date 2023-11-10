import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import logo from '../assets/AAlogoW.png'

function Navbar() {
  return (
    <nav  className='navbar '>
        <Link to='/'>
            <img src={logo} alt='logo' className='nav-logo justify-content-start'/>
        </Link>
        <div className='nav-container justify-content-end'>
            <Link to='/'>
                <button className='nav-btn'>Home</button>
            </Link>
            <Link to='/skills'>
              <button className='nav-btn'>Skills</button>
            </Link>
            <Link to='/experience'>
              <button className='nav-btn'>Experience</button>
            </Link>
            <Link to='/projects'>
              <button className='nav-btn'>Projects</button>
            </Link>
            <Link to='/about'>
              <button className='nav-btn'>About Me</button>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar