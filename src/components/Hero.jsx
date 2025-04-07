import React from 'react';
import charan from "../assets/Charan Hero.jpg";
import Resume from '../assets/Charan_Resume.pdf';
import "./Hero.css";

const Hero = () => {
  return (
    <section className='hero__container' id='about'>
      <div className='hero__content'>
        <h1 className='hero__title'>
          Hi, I'm <span className='hero__name'>Peddi Charan</span>
        </h1>
        <p className='hero__description'>
          I’m a passionate <strong>MERN Stack Developer</strong> focused on creating responsive, user-friendly, and scalable web applications. Reach out to know more!
        </p>
        <div className="hero__btn">
          <a href='#contact' className='hero__contactBtn'>Contact Me</a>
          <a href={Resume} download className='hero__contactBtn' rel="noopener noreferrer">Resume</a>
        </div>
      </div>
      <img 
        src={charan} 
        className='hero__img' 
        alt='Peddi Charan - MERN Stack Developer' 
        onError={(e) => { e.target.src = 'fallbackImage.jpg'; }} 
      />
    </section>
  );
};

export default Hero;