import React from 'react';
import educationIcon from "../assets/educationIcon.png";
import "./Education.css";

const Education = () => {
  return (
    <section className='education__container' id='education'>
      <h2 className='education__title'>Education</h2>
      <div className='education__card'>
        <img src={educationIcon} alt='Education Icon' className='education__icon' />
        <div className='education__details'>
          <p className='education__degree'>
            <strong>B.Tech</strong> (Computer Science and Engineering)
          </p>
          <h3 className='education__university'>Mahatma Gandhi University, Nalgonda</h3>
          <p className='education__years'>2020 - 2024</p>
          <p className='education__cgpa'>CGPA: 6.83/10</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
