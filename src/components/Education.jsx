import React from 'react';
import educationIcon from "../assets/educationIcon.png";
import "./Education.css";

const Education = () => {
  const educationDetails = {
    degree: "B.Tech (Computer Science and Engineering)",
    university: "Mahatma Gandhi University, Nalgonda",
    years: "2020 - 2024",
    cgpa: "6.83/10",
  };

  return (
    <section className='education__container' id='education'>
      <h2 className='education__title'>Education</h2>
      <div className='education__card'>
        <img
          src={educationIcon}
          alt='Icon representing education'
          className='education__icon'
          onError={(e) => { e.target.src = 'fallbackImage.png'; }}
        />
        <div className='education__details'>
          <p className='education__degree'>
            <strong>{educationDetails.degree}</strong>
          </p>
          <p className='education__university'>{educationDetails.university}</p>
          <p className='education__years'>{educationDetails.years}</p>
          <p className='education__cgpa'>CGPA: {educationDetails.cgpa}</p>
        </div>
      </div>
    </section>
  );
};

export default Education;