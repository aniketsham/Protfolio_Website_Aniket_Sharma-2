import React from 'react'
import './Contact.scss'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons';
const Contact = () => {
  return (
    <div>
      <div className='parent-class-heading'>
      <h1  className='Heading'>Contact</h1>
      <div className='Feel-free'>
        <p>
          Feel <b>free</b> to contact me!
        </p>
      </div>
      <div className='contact-details-en'>
      <FontAwesomeIcon icon={faEnvelope} className='Envelope-icon'/>
      <span className='email-addr'>anikets2408@gmail.com</span>
      
      </div>
      <div className='contact-details-in'>
       <FontAwesomeIcon icon={faInstagram} className='Instagram-icon' />
      <span className='email-addr'><Link to="https://www.instagram.com/aniketsharma_24/">aniketsharma_24</Link></span>
      </div>
      
      <div className='contact-details-ph'>
       <FontAwesomeIcon icon={faPhone} className='Phone-icon' />
      <span className='email-addr'>+91 9920376331</span>
      </div>

      <div className='contact-details-li'>
       <FontAwesomeIcon icon={faLinkedin} className='Linkedin-icon' />
      <span className='email-addr'><Link to="https://www.linkedin.com/in/aniket-sharma-1850aa244/">aniket-sharma-1850aa244</Link></span>
      </div>

      <div className='contact-details-gh'>
       <FontAwesomeIcon icon={faGithub} className='Github-icon' />
      <span className='email-addr'><Link to="https://github.com/aniketsham">aniketsham</Link></span>
      </div>
      </div>
      
    </div>
  )
}

export default Contact
