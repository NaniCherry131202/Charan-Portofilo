import React from 'react';
import { projects } from '../data';
import "./Projects.css";

const Projects = () => {
  return (
    <section className='projects__container' id='projects'>
      <h2 className='projects__title'>Projects</h2>
      <div className="projects">
        {projects.map((project, id) => (
          <div className='project-card' key={id}>
            {project.imageSrc ? (
              <img 
                src={project.imageSrc} 
                className='project-img' 
                alt={`Screenshot of ${project.title}`} 
                onError={(e) => { e.target.src = 'fallbackImage.jpg'; }} 
              />
            ) : (
              <div className='project-img-placeholder'>Image Not Available</div>
            )}
            <div className="project-content">
              <h3 className='project-title'>{project.title || 'Untitled Project'}</h3>
              <h4 className='project-subtitle'>{project.subtitle || 'No Subtitle'}</h4>
              <p className='project-description'>{project.description || 'No description available.'}</p>
              <ul className='project-skills'>
                {project.skills?.map((skill) => (
                  <li className='project-skill' key={skill}>{skill}</li>
                )) || <li>No skills listed</li>}
              </ul>
              <div className='project-links'>
                {project.demo && <a href={project.demo} className='project-link btn' rel="noopener noreferrer" target="_blank">Demo</a>}
                {project.source && <a href={project.source} className='project-link btn' rel="noopener noreferrer" target="_blank">Source</a>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;