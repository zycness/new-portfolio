import React from 'react'

import logo from "../assets/logo1.png"

const Navbar = () => {
  return (
    <nav className='container bg-white mx-auto flex flex-row justify-between items-center space-x-6 px-2'>

        <img src={logo} alt="Portfolio logo" className='h-24'/>
        <div className="container flex flex-row justify-end space-x-6">
            <ul className='flex-row hidden md:flex items-center space-x-6 font-bold text-lg '>
            <li className='flex items-center justify-center'>
                <a href="#">Home</a>
            </li>
            <li className='flex items-center justify-center'>
                <a href="#">About</a>
            </li>
            <li className='flex items-center justify-center'>
                <a href="#">Services</a>
            </li>
            <li className='flex items-center justify-center'>
                <a href="#">Contact</a>
            </li>
        </ul>
        <button className='rounded-lg bg-sky-600 w-30 h-12 px-4 font-bold text-white active:bg-sky-800'>Download CV</button>
        </div>
        
    </nav>
  )
}

export default Navbar