import React from 'react'
import './Home.scss'
import {Link} from 'react-router-dom'
import ani from '../../assests/Untitled.jpeg'
const Home = () => {
  return (
    <div>
      
      <div>
      <div className='my-image'>
   <img  src={ani} alt='Aniket Sharma' />
   </div>
      <h1 className='Greeting'>
        HI THERE, 
      </h1>
      <h1>
        I'M <span className='myName'>ANIKET </span>
      </h1>
      <div className='parent-class-role-desc'>
      <p className='role-desc'>Full Stack Web Developer</p>

      </div>
      </div>
      <div className='parent-class-about-btn'>
      <Link to='/About' className='about-me-btn'> Know More About Me</Link>

      </div>
    </div>
  )
}

export default Home
