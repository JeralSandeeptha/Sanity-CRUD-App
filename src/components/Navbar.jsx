import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-inner">
        <NavLink className='nav-link-logo' to='/'>Jeral</NavLink>
        <NavLink className='nav-link' to='/post'>Blog</NavLink>
        <NavLink className='nav-link' to='/about'>About</NavLink>
      </div>
    </div>
  )
}

export default Navbar