import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse,faFile,faUser,faPaperPlane,faCode} from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  return (
    <div className='container'>
   
   
    <nav>
      <NavLink exact="true" activeclassname="active"  to='/'>
      <FontAwesomeIcon icon={faHouse} className='home-logo'  />
      </NavLink>
     
      
      <br/>

      <NavLink exact="true" activeclassname="active"  to='/About'>
      <FontAwesomeIcon icon={faUser} className='user-logo'  />
      </NavLink>
     

      <br/>

      
      <NavLink exact="true" activeclassname="active"   to='/Resume'>
      <FontAwesomeIcon icon={faFile} className='file-logo' />
      </NavLink>
      

      <br/>

      <NavLink exact="true" activeclassname="active"  to='/Project'>
      <FontAwesomeIcon icon={faCode}  className='project-logo' />
      </NavLink>
      

      <br/>

      
      <NavLink exact="true" activeclassname="active"  to='/Contact'>
      <FontAwesomeIcon icon={faPaperPlane} className='contact-us-logo' />
      </NavLink>
      
    </nav>
    
    </div>
  )
}

export default Navbar
