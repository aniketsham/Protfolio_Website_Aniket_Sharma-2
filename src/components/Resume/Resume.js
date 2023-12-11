import React from 'react'
import './Resume.scss'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCertificate, faCircleDown, faLightbulb, faSchool} from '@fortawesome/free-solid-svg-icons';
import CVpdf from '../../assests/CV.pdf'
const Resume = () => {
  return (
    <div className='parent-class-heading'>
      <h1 className='Heading'>Resume</h1>
      <div className='parent-class-education'>
      <h1 className='exp-heading'>
        Education  
        <FontAwesomeIcon icon={faSchool} className='education-logo'/>
      </h1>
      <div className='parent-class-education-details'>
      <div className='Education-details'> 
      <h3 className='Education-header'>
          School
        </h3>
        <p>
          Gyan Kendra Secondary School
        </p>
        <p>
          Percentage - <b>85.4%</b>
        </p>
        
       
      </div>
      <div className='Education-details'> 
      <h3 className='Education-header'>
          Junior College
        </h3>
        <p>
        Valia College of Science
        </p>
        <p>
          Percentage - <b>85.4%</b>
        </p>
       
      </div>
       
      <div className='Education-details'> 
      <h3 className='Education-header'>
         Bachelor's in Technology
        </h3>

        <p>
          Atharva College Of Engineering - <b>Computer Engineering </b>
        </p>
        <p>
          CGPA (Aggr.)- <b>9.3</b>
        </p>
       
      </div>
      </div>
      </div>
      <div className='parent-class-certification'>
      <h1 className='exp-heading'>
        Certification
        <FontAwesomeIcon icon={faCertificate} className='education-logo'/>
      </h1>
      <div className='parent-class-education-details'>
      <div className='Certification-details1'> 
      <h3 className='Certification-header'>
          Aug 2022
        </h3>
        <p>
        Django Web Framework & REST API
        </p>
        
       
      </div>
      <div className='Certification-details2'> 
      <h3 className='Certification-header'>
      July 2022
        </h3>
        <p>
        JavaScript MERN Full Stack
        </p>
       
        
       
      </div>
      <div className='Certification-details2'> 
      <h3 className='Certification-header'>
      Sept 2022
        </h3>
        <p>
        Machine Learning & Flask Deployment
        </p> 
       
      </div>
      <div className='Certification-details2'> 
      <h3 className='Certification-header'>
      Dec 2022
        </h3>
        <p>
        Complete Java with Desktop & Web App Development
        </p>

        
       
      </div>
      </div>

      </div>
      <div className='parent-class-experience'>
      <h1 className='exp-heading'>
      Experience
      </h1>
      <div className='parent-class-education-details'>
      <div className='experience-details'> 
      <h3 className='experience-header'>
          Aug 2022
        </h3>
        <p>
        Full Stack Development Seminar  [Django]
        </p>
        
        <p>
          Venue- <b>Atharva College Of Engineering</b>
        </p>
      </div>
      <div className='experience-details'> 
      <h3 className='experience-header'>
      June 2023 - Sept 2023
        </h3>
        <p>
        Full Stack Development Internship [MERN]
        </p>
        
        <p>
         <b>NullClass.com</b>
        </p>
      </div>
      </div>
      </div>
      <h2 className='skills-header'>Skills
      <FontAwesomeIcon icon={faLightbulb} className='education-logo'/></h2>
      <div className='parent-class-skills'>
    
       <div className='skills-details'>  
       <h3 className='skills-name'>
          Python
        </h3>
        <p className='skills-level'> <span class="skill-level"><div class="bar bar-4"></div></span>Intermediate Level</p>
       </div>
       <div className='skills-details'>  
       <h3 className='skills-name'>
         React
        </h3>
        <p className='skills-level'> <span class="skill-level"><div class="bar bar-4"></div></span>Higher Intermediate Level</p>
       </div>
       <div className='skills-details'>  
       <h3 className='skills-name'>
          Django
        </h3>
        <p className='skills-level'> <span class="skill-level"><div class="bar bar-3"></div></span>Intermediate Level</p>
       </div>
       <div className='skills-details'>  
       <h3 className='skills-name'>
          Flask
        </h3>
        <p className='skills-level'> <span class="skill-level"><div class="bar bar-4"></div></span>Higher Intermediate Level</p>
       </div>
       
       <div className='skills-details'>  
       <h3 className='skills-name'>
          JavaScript
        </h3>
        <p className='skills-level'><span class="skill-level"><div class="bar bar-3"></div></span>Intermediate Level</p>
       </div>
      </div>
    
    
      <div className='parent-class-DownloadCV-btn'>
      

        <button className='DownloadCV-btn'><Link
        to={CVpdf}
        download="Aniket_Sharma_CV"
        target="_blank"
        rel="noreferrer"
      >
        Download CV <FontAwesomeIcon icon={faCircleDown} className='Download-logo'  />
      </Link> </button>
      </div>
    </div>
  )
}

export default Resume
