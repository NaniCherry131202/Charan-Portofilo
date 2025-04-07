import React from 'react';
import emailIcon from '../assets/emailIcon.png';
import linkedinIcon from '../assets/linkedinIcon.png';
import githubIcon from '../assets/githubIcon.png';
import phoneIcon from '../assets/phoneIcon.png';
import './Contact.css';

const Contact = () => {
  return (
    <footer className="contact__container" id="contact">
      <div className="contact__text">
        <h2>Contact Me</h2>
      </div>
      <nav>
        <ul className="contact__links">
          <li className="contact__link">
            <img 
              src={phoneIcon} 
              alt="Phone Contact Icon" 
              onError={(e) => { e.target.src = 'fallbackImage.png'; }} 
            />
            <a href="tel:+919701057048" aria-label="Call me">Phone</a>
          </li>
          <li className="contact__link">
            <img 
              src={emailIcon} 
              alt="Email Contact Icon" 
              onError={(e) => { e.target.src = 'fallbackImage.png'; }} 
            />
            <a href="mailto:charanpeddi37@gmail.com" aria-label="Send me an email">Gmail</a>
          </li>
          <li className="contact__link">
            <img 
              src={linkedinIcon} 
              alt="LinkedIn Contact Icon" 
              onError={(e) => { e.target.src = 'fallbackImage.png'; }} 
            />
            <a 
              href="https://www.linkedin.com/in/peddi-charan-724526284/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
            >
              LinkedIn
            </a>
          </li>
          <li className="contact__link">
            <img 
              src={githubIcon} 
              alt="GitHub Contact Icon" 
              onError={(e) => { e.target.src = 'fallbackImage.png'; }} 
            />
            <a 
              href="https://github.com/NaniCherry131202" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Contact;