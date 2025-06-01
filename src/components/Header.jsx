import React from 'react'
import logo from '../assets/nlogo-removebg-preview.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-[#92b9ad] w-full h-[90px] flex items-center
    justify-between px-[20px] md:px-[80px]'>
        <NavLink to="/">
           <img src={logo} alt="logo" width={70} height={70} />
        </NavLink>
        <ul className='grid grid-cols-2 md:flex items-center gap-[20px] text-[20px] text-[white] cursor-pointer'>
            <li className='hover:text-[#d74e09] transition duration-400'><NavLink to="/">Home</NavLink></li>
            <li className='hover:text-[#d74e09] transition duration-400'><NavLink to="/portfolio">Portfolio</NavLink></li>
            <li className='hover:text-[#d74e09] transition duration-400'><NavLink to="/resume">Resume</NavLink></li>
            <li className='hover:text-[#d74e09] transition duration-400'><NavLink to="/contact">Contact</NavLink></li>
        </ul>
    </div>
  )
}

export default Header