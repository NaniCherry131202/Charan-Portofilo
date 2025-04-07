import React from 'react';
import { skills } from '../data/index';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills__container" id="skills">
      <h2 className="skills__title">Skills</h2>
      <ul className="skills__grid">
        {skills.map((skill) => (
          <li className="skills__card" key={skill.id}>
            <div className="skills__imageContainer">
              <img 
                src={skill.imageSrc} 
                alt={`Icon representing ${skill.title}`} 
                onError={(e) => { e.target.src = 'fallbackImage.jpg'; }} 
              />
            </div>
            <p className="skills__name">{skill.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;