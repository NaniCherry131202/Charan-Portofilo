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
      <ul className="contact__links">
        <li className="contact__link">
          <img src={phoneIcon} alt="Phone Icon" />
          <a href="tel:+919701057048">Phone</a>
        </li>
        <li className="contact__link">
          <img src={emailIcon} alt="Email Icon" />
          <a href="mailto:charanpeddi37@gmail.com">Gmail</a>
        </li>
        <li className="contact__link">
          <img src={linkedinIcon} alt="LinkedIn Icon" />
          <a href="https://www.linkedin.com/in/peddi-charan-724526284/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li className="contact__link">
          <img src={githubIcon} alt="GitHub Icon" />
          <a href="https://github.com/NaniCherry131202" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
