import React from 'react'
import './About.scss'
import Web from '../../assests/Web.png'
import API from '../../assests/API.png'
import Backend from '../../assests/Backend.png'
const About = () => {
  return (
    <div>
      <div className='parent-class-heading'>
      <h1 className='Heading'>
        About Me
      </h1>
      </div>
      <div className='parent-class-aboutme-data'>
        <p className='aboutme-heading'>
          I'm <b>Aniket Sharma,</b> Full Stack Web / Backend Developer 
        </p>
        <p className='aboutme-body'>
        I'm a Computer Engineering Student in Mumbai,India.Currently studing in Atharva College of Engineering.
        Along with pursing B.Tech I have also completed multiple courses which have helped me improve my skills
        particularly in WebDev. I started programming in 2021 and since then havent stopped.
        It is joy after solving problems what drives me.
        </p>
        
      </div>
      <div className='what-I-do'>
      <h2>
        What I Do?
      </h2>
      <div className='WEB'>
        <img src={Web} alt="Web Development"></img>
        <p className='role-header'>
       Web Development
        </p>
        <p>
        Web development involves designing, creating, and maintaining websites or web applications, encompassing both front-end (user interface) and back-end (server-side) development using various technologies and programming languages.
        </p>
      </div>
      <div className='API'>
        <img src={API} alt='API development'></img>
        <p className='role-header'>
          API Development
        </p>
        <p>
        API development involves creating and maintaining a set of rules and protocols that allow different software applications to communicate and interact with each other, enabling seamless data exchange and functionality integration.
        </p>
      </div>
      <div className='BACK'>
        <img src={Backend} alt='Backend Development'></img>
        <p className='role-header'>
         Backend Development
        </p>
        <p>
        Backend development involves building and maintaining the server-side of web applications, handling data storage, server logic, and ensuring seamless communication between the server and the frontend.
        </p>
      </div>
    
      </div>
    </div>
  )
}

export default About
