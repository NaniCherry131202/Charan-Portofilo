import React from 'react'
import charan from "../assets/Charan Hero.jpg"
import Resume from '../assets/Sri-Krishna-Revanth-Kona-Frontend-Developer-Resume.pdf'
import "./Hero.css"

const Hero = () => {
  return (
    <section className='hero__container' id='about'>
      <div className='hero__content'>
        <h1 className='hero__title'>Hi I'm</h1>
        <h2 className='hero__title1'>Peddi Charan</h2>
        <p className='hero__description'>
          I’m a passionate <strong>MERN Stack Developer</strong> focused on creating responsive, user-friendly, and scalable web applications. reach out to know more!</p>
        <div className="hero__btn">
          <a href='#contact' className='hero__contactBtn'>Contact Me</a>
          <a href={Resume} download className='hero__contactBtn'>Resume</a>
        </div>
      </div>
      <img src={charan} className='hero__img' alt='' />
      <div className='hero__topBlur'></div>
      <div className='hero__bottomBlur'></div>
    </section>
  )
}

export default Hero
