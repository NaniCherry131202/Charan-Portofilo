import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import charanImg from '../assets/charan.jpg';

export default function Hero() {
  return (
    <section id="experience" className="w-full max-w-6xl min-h-[90vh] flex flex-col md:flex-row items-center justify-between pt-20 pb-12 gap-12">
      
      {/* Left Content - Text */}
      <div className="flex-1 flex flex-col items-start justify-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-emerald-400 font-mono mb-4 text-lg"
        >
          &gt; console.log("Hello, World!");
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-slate-100 mb-4"
        >
          Charan Peddi.
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold text-slate-400 mb-6"
        >
          I build scalable web applications.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-slate-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
        >
          I'm a Full Stack Engineer &amp; AI Systems Architect specializing in Next.js, React, Node.js, and LLMs. I architect enterprise SaaS platforms, autonomous AI voice receptionists, and comprehensive ERP &amp; HRMS systems that drive real business value.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center gap-6"
        >
          <a href="#projects" className="group flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-8 py-4 rounded-lg transition-all">
            View My Work
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <div className="flex items-center gap-4 text-slate-300">
            <a href="https://github.com/NaniCherry131202" target="_blank" rel="noreferrer" className="hover:text-emerald-400 hover:-translate-y-1 transition-all duration-300 p-2">
              <FaGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/charanpeddi" target="_blank" rel="noreferrer" className="hover:text-emerald-400 hover:-translate-y-1 transition-all duration-300 p-2">
              <FaLinkedin size={28} />
            </a>
            <a href="mailto:charanpeddi37@gmail.com" className="hover:text-emerald-400 hover:-translate-y-1 transition-all duration-300 p-2">
              <FaEnvelope size={28} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right Content - Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="flex-1 flex justify-center md:justify-end items-center relative w-full max-w-md"
      >
        <div className="relative group cursor-pointer w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          {/* Animated Glowing Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse"></div>
          
          {/* Image Container */}
          <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-emerald-400/30 group-hover:border-emerald-400 transition-colors duration-500 bg-slate-800 z-10">
            <div className="absolute inset-0 bg-emerald-500/10 group-hover:bg-transparent transition-colors duration-500 z-20"></div>
            <img 
              src={charanImg} 
              alt="Charan Peddi" 
              className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[1.05]"
            />
          </div>

          {/* Floating decorative elements */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 bg-slate-900 border border-emerald-500/30 p-4 rounded-xl shadow-2xl z-30"
          >
            <FaReact className="text-cyan-400 text-3xl" />
          </motion.div>
          <motion.div 
            animate={{ y: [10, -10, 10] }} 
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-slate-900 border border-emerald-500/30 p-4 rounded-xl shadow-2xl z-30"
          >
            <FaNodeJs className="text-green-500 text-3xl" />
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
}
