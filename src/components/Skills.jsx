import React from 'react';
import { skills } from '../data/index';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills__container" id="skills">
      <h2 className="skills__title">Skills</h2>
      <div className="skills__grid">
        {skills.map((skill, id) => (
          <div className="skills__card" key={id}>
            <div className="skills__imageContainer">
              <img src={skill.imageSrc} alt={skill.title} />
            </div>
            <p className="skills__name">{skill.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
