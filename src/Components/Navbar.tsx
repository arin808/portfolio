import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='container'>
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
              <button className='nav-btn'>About</button>
            </Link>

        </div>
    </nav>
  )
}

export default Navbar