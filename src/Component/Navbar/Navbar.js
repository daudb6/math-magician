import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <>
    <div className='navbar'>
      <h1 className='logo'>Mathmagic</h1>
     <nav> 

     <NavLink to="/" className='home'>Home</NavLink>
    <NavLink to="/Calculator" className='calculator'>Calculator</NavLink>
    <NavLink to="/Quote" className='quote'>Quote</NavLink>
    </nav>
    </div>
    

    </>
  )
}

export default Navbar