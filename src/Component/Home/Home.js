import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'


function Home() {
  return (
    <>
    <Navbar />
    <div className='home-section'>
    <div className='main'>
      <h1>Welcome To My Calculator Website</h1>
      <p className='description'>This Website is designed to provide you with a convenient and user Friendly Calculator.</p>
      <ul>Features of our Calculator </ul>
      <li>Basic Arithmetic operation Such as addition,Subtraction.</li>
      <li>Support for parentheses to handle complex expresssion.</li>
      <li>Clear button to easily reset the Calculator.</li>
      <li>Rresponsive design,allowing you to use this on various device.</li>

      <p>Start using our Calculator Now and make you calculations hassle-free!</p>

    </div>
    </div>
    </>
    
  )
}

export default Home