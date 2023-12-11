import React from 'react'
import './Project.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {  faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
const Project = () => {
  return (
    <div>
      <div className='parent-class-heading'>
      <h1 className='Heading'>Project</h1>
      <div className='parent-class-Project class1'>
      
        <h2 className='project-header'>Mr E Commerce</h2>
        <p className="project-duration">Aug 2022 - Oct 2022</p>
        <div className='project-Desc'>
          <p>E commerce website made based on crypto currency (ACE coins).Used Flask for Backend Development of
          web application and MySql for database.</p>
        </div>
        <button className='project-link-btn'><Link to="http://anikets240802.pythonanywhere.com">Go To Site<FontAwesomeIcon icon={faArrowUpRightFromSquare} className='goto-site'/></Link></button>

      </div>
      <div className='parent-class-Project class2'>
      
        <h2 className='project-header'>Stack Overflow Clone</h2>
        <p className="project-duration">June 2023 - Sept 2023</p>
        <div className='project-Desc'>

          <p>A Stack Overflow Clone based upon React JS frontend and Node JS backend. Based upon the offical stack
          overflow website.</p>
        </div>
        <button className='project-link-btn '><Link to="https://stack-overflow-clone-aniket.netlify.app">Go To Site<FontAwesomeIcon icon={faArrowUpRightFromSquare} className='goto-site'/></Link></button>

      </div>
      
      <div className='parent-class-Project class3'>
        <h2 className='project-header'>Student Guide</h2>
        <p className="project-duration">Nov 2021 - Dec 2021</p>

        <div className='project-Desc'>

          <p>Student Guide is a website which will help students to get through their decision making process in academic life.</p>
        </div>
        <button className='project-link-btn'><Link to="https://the-student-guide.github.io/Thestudentguide">Go To Site<FontAwesomeIcon icon={faArrowUpRightFromSquare} className='goto-site'/></Link></button>

      </div>
      
      <div className='parent-class-Project class4'>
        <h2 className='project-header'>Class Management System</h2>
        <p className="project-duration">Jan 2023 - Feb 2023</p>

        <div className='project-Desc'>
          <p>A Class Management system which helps to maintain simple records like department and student details.</p>
        </div>
        <button className='project-link-btn'><Link to="http://anikets240805.pythonanywhere.com">Go To Site<FontAwesomeIcon icon={faArrowUpRightFromSquare} className='goto-site'/></Link></button>

      </div>
      <div className='parent-class-Project class5'>
        <h2 className='project-header'>Diabetes Detection website</h2>
        <p className="project-duration">Sept 2022 - Sept 2022</p>

        <div className='project-Desc'>
          <p>Create and deployed diabetes detection website using Machine Learning Algorithm and Flask Framework.</p>
        </div>
        <button className='project-link-btn'><Link to="http://anikets2048.pythonanywhere.com/">Go To Site<FontAwesomeIcon icon={faArrowUpRightFromSquare} className='goto-site'/></Link></button>

      </div>
      <div className='parent-class-Project class6'>
        <h2 className='project-header'>Email Authentication Web App</h2>
        <p className="project-duration">Jan 2022 - Feb 2022</p>

        <div className='project-Desc'>

          <p>Email Authentication application based on email otp generation and verification.</p>
        </div>
        <button className='project-link-btn'><Link to="http://anikets240803.pythonanywhere.com">Go To Site<FontAwesomeIcon icon={faArrowUpRightFromSquare} className='goto-site'/></Link></button>

      </div>
      <div className='parent-class-Project class6'>
        <h2 className='project-header'>Protfolio Website</h2>
        <p className="project-duration">Jan 2022 - Feb 2022</p>

        <div className='project-Desc'>
          <p>This website was create as a training method for me to learn and understand different aspects of web app development. This project has thought me various concept of react js and implementation of CSS inside the react js framework. This website has various components which makes the work for the user much more easier but at the same time makes the web app more beautiful.</p>
        </div>
        <button className='project-link-btn'><Link to="https://aniketsharma-80d4f8.netlify.app">Go To Site<FontAwesomeIcon icon={faArrowUpRightFromSquare} className='goto-site'/></Link></button>

      </div>
      </div>
    </div>
  )
}

export default Project
