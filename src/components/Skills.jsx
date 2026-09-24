import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiJavascript, SiTypescript, SiVercel, SiMysql, SiFirebase } from 'react-icons/si';

const skills = [
  { name: 'React', icon: FaReact, color: 'text-blue-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-slate-200' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
  { name: 'Express', icon: SiExpress, color: 'text-slate-300' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400' },
  { name: 'MySQL', icon: SiMysql, color: 'text-blue-300' },
  { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' },
  { name: 'Vercel', icon: SiVercel, color: 'text-slate-100' },
  { name: 'Git', icon: FaGithub, color: 'text-slate-300' }
];

export default function Skills() {
  return (
    <section id="skills" className="w-full max-w-5xl py-24 mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 flex items-center">
          <span className="text-emerald-400 font-mono text-xl md:text-2xl mr-3">04.</span> 
          Technical Arsenal
        </h2>
        <div className="h-px bg-slate-700 flex-grow ml-6"></div>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex flex-col items-start p-6 bg-slate-800/30 border border-slate-700 rounded-xl hover:border-emerald-400/50 hover:bg-slate-800/50 transition-all duration-300 group"
          >
            <skill.icon className={`text-4xl mb-4 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
            <p className="text-slate-300 font-medium group-hover:text-emerald-400 transition-colors">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
