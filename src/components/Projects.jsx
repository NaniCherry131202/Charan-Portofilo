import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-5xl py-24 mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 flex items-center">
          <span className="text-emerald-400 font-mono text-xl md:text-2xl mr-3">03.</span> 
          Some Things I've Built
        </h2>
        <div className="h-px bg-slate-700 flex-grow ml-6"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-slate-800/50 hover:bg-slate-800 backdrop-blur-sm border border-slate-700 hover:border-emerald-400/50 p-6 rounded-xl transition-all duration-300 group flex flex-col h-full"
          >
            {project.imageSrc && (
              <div className="w-full h-48 mb-6 overflow-hidden rounded-lg">
                <img 
                  src={project.imageSrc} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
            )}
            {!project.imageSrc && (
              <div className="flex justify-between items-center mb-4">
                <div className="text-emerald-400">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <div className="flex gap-3 items-center">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors">
                      <FiExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            )}
            
            {/* Title and external link if image exists (since folder header is hidden) */}
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              {project.imageSrc && project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors mt-1">
                  <FiExternalLink size={20} />
                </a>
              )}
            </div>
            
            <p className="text-base md:text-sm text-emerald-400 font-mono mb-4">{project.subtitle}</p>
            
            <p className="text-slate-300 text-base leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>

            <ul className="flex flex-wrap gap-2 mt-auto">
              {project.skills.map((skill, i) => (
                <li key={i} className="text-sm font-mono text-slate-400 bg-slate-900/50 px-3 py-1.5 rounded">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
