import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="w-full max-w-4xl py-24 mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 flex items-center">
          <span className="text-emerald-400 font-mono text-xl md:text-2xl mr-3">02.</span> 
          Where I've Worked
        </h2>
        <div className="h-px bg-slate-700 flex-grow ml-6"></div>
      </motion.div>

      <div className="relative border-l border-slate-700 ml-4 md:ml-0">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-12 pl-8 relative"
          >
            {/* Timeline Dot */}
            <div className="absolute w-4 h-4 bg-slate-900 border-2 border-emerald-400 rounded-full -left-[9px] top-1"></div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-2xl font-bold text-slate-200">
                {exp.title} <span className="text-emerald-400">@ {exp.company}</span>
              </h3>
              <span className="text-slate-400 font-mono text-sm mt-1 md:mt-0">{exp.period}</span>
            </div>
            
            <p className="text-slate-400 mb-4 font-mono text-sm">{exp.location}</p>
            
            <ul className="flex flex-col gap-4 text-left mt-4">
              {exp.description.map((desc, i) => (
                <li key={i} className="text-slate-300 text-base md:text-lg leading-relaxed relative pl-8">
                  <span className="absolute left-0 top-2.5 w-2 h-2 border border-emerald-400 bg-emerald-400/20 rounded-sm"></span>
                  {desc}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
