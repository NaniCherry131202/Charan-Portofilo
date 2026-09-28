import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data';
import { GraduationCap, Award, Calendar } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="w-full max-w-4xl py-16 mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 flex items-center">
          <span className="text-emerald-400 font-mono text-xl md:text-2xl mr-3">🎓</span> 
          Academic Background
        </h2>
        <div className="h-px bg-slate-800 flex-grow ml-6"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 backdrop-blur-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                  <GraduationCap size={22} />
                </div>
                <span className="font-mono text-xs text-slate-400 flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-full">
                  <Calendar size={12} className="text-emerald-400" />
                  {item.period}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-100 mb-1 group-hover:text-emerald-300 transition-colors leading-snug">
                {item.degree}
              </h3>
              
              <p className="text-sm text-slate-400 mb-4 font-medium">
                {item.school}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Score</span>
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md flex items-center gap-1.5">
                <Award size={13} />
                {item.details}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}