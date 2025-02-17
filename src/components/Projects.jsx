import React from 'react';
import { projects } from '../data';
import "./Projects.css"

const Projects = () => {
  return (
    <section className='projects__container' id='projects'>
      <h2 className='projects__title'>Projects</h2>
      <div className="projects">
        {projects.map((project, id) => (
          <div className='project-card' key={id}>
            <img src={project.imageSrc} className='project-img' alt={project.title} />
            <div className="project-content">
              <h3 className='project-title'>{project.title}</h3>
              <h4 className='project-subtitle'>{project.subtitle}</h4>
              <p className='project-description'>{project.description}</p>
              <ul className='project-skills'>
                {project.skills.map((skill, id) => (
                  <li className='project-skill' key={id}>{skill}</li>
                ))}
              </ul>
              <div className='project-links'>
                <a href={project.demo} className='project-link btn'>Demo</a>
                <a href={project.source} className='project-link btn'>Source</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
