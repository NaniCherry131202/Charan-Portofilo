import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    const formData = new FormData(formRef.current);
    const data = {
      name: formData.get('user_name'),
      email: formData.get('user_email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccess(true);
        formRef.current.reset();
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full max-w-2xl py-32 mx-auto">
      <div className="text-center mb-12">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-emerald-400 font-mono mb-4"
        >
          06. What's Next?
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-slate-100 mb-6"
        >
          Get In Touch
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-400 text-lg mb-10"
        >
          I am currently open to new opportunities. Whether you have a question, a project proposal, or just want to say hi, feel free to drop a message!
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 shadow-xl backdrop-blur-sm"
      >
        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-slate-300 text-sm font-mono" htmlFor="user_name">Your Name</label>
            <input 
              type="text" 
              name="user_name" 
              id="user_name"
              required 
              className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
              placeholder="John Doe"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-slate-300 text-sm font-mono" htmlFor="user_email">Your Email</label>
            <input 
              type="email" 
              name="user_email" 
              id="user_email"
              required 
              className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
              placeholder="john@example.com"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-slate-300 text-sm font-mono" htmlFor="message">Message</label>
            <textarea 
              name="message" 
              id="message"
              required 
              rows="5"
              className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors resize-none"
              placeholder="Hello Charan, I'd like to discuss..."
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full mt-4 px-8 py-4 bg-sky-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-lg transition-colors flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {success && <p className="text-green-400 text-center mt-2 font-mono text-sm">Message sent successfully! I'll get back to you soon.</p>}
          {error && <p className="text-red-400 text-center mt-2 font-mono text-sm">Oops! Something went wrong. Please try again or email me directly.</p>}
        </form>
      </motion.div>

      <footer className="mt-32 pb-8 text-slate-500 font-mono text-sm text-center">
        <p>Built by Charan Peddi using React, Next.js & Tailwind</p>
      </footer>
    </section>
  );
}
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.closest('button') ||
        e.target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-emerald-400 rounded-full pointer-events-none z-[100] mix-blend-screen"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-emerald-400/50 rounded-full pointer-events-none z-[99]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
          mass: 0.8
        }}
      />
    </>
  );
}
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const codeSnippets = [
  "const charan = new Developer({ stack: 'MERN' });",
  "await ai.generate({ prompt: 'optimize' });",
  "db.collection('users').createIndex({ email: 1 });",
  "import { motion } from 'framer-motion';",
  "function optimizeSEO(page) { return score > 90; }",
  "sudo systemctl restart nginx",
  "charan.deploy(project);",
  "Error: Stack Overflow at line 42",
  "npm run build && npm start",
  "const res = await fetch('/api/v1/leads');",
  "while (coffee.isEmpty()) { code(); }",
  "<div className='flex justify-center'></div>"
];

export default function DeveloperBackground() {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    // Generate random floating code lines
    const newLines = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      duration: 15 + Math.random() * 20, // seconds
      delay: Math.random() * 10,
    }));
    setLines(newLines);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#050505]">
      {/* Grid overlay for terminal feel */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNEwzNiA0NiA0NiA0NiA0NiAzNCAzNiAzNHpNMzQgMzJMMzQgNDggNDggNDggNDggMzIgMzQgMzJ6TTEyIDE0TDEyIDI2IDI2IDI2IDI2IDE0IDEyIDE0ek0xMCAxMkwxMCAyOCAyOCAyOCAyOCAxMiAxMCAxMnoiIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>

      {/* Floating Code Lines */}
      {lines.map((line) => (
        <motion.div
          key={line.id}
          className={`absolute text-xs md:text-sm font-mono whitespace-nowrap opacity-10 ${
            line.text.includes('Error') ? 'text-red-500' : 'text-emerald-500'
          }`}
          style={{ left: `${line.x}%`, top: `${line.y}%` }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: [0, 0.2, 0.2, 0], y: -500 }}
          transition={{
            duration: line.duration,
            repeat: Infinity,
            delay: line.delay,
            ease: "linear",
          }}
        >
          {line.text}
        </motion.div>
      ))}

      {/* Subtle radial gradients for professional look */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-900/20 blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-900/20 blur-[120px]"></div>
    </div>
  );
}
import React, { useEffect, useRef } from 'react';
import { education } from '../data';
import educationIcon from "./education.svg";
import "./Education.css";

const Education = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section ref={sectionRef} className='education__container' id='education'>
      <h2 className='education__title animate-on-scroll'>Education</h2>
      <div className='education__timeline'>
        {education.map((edu, index) => (
          <div key={index} className="education__card animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
            <div className="education__card-header">
              <img src={educationIcon} alt="Education Icon" className="education__card-icon" />
              <div className="education__card-info">
                <h3>{edu.degree}</h3>
                <p>{edu.school}</p>
                <span>{edu.period}</span>
              </div>
            </div>
            <div className="education__card-details">
              <p>{edu.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
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
            
            <ul className="flex flex-col gap-3">
              {exp.description.map((desc, i) => (
                <li key={i} className="text-slate-400 relative pl-6">
                  <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-emerald-400 rounded-sm"></span>
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
import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';

export default function GithubGraph() {
  const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 12; // Adjust if you want fewer months
    
    return contributions.filter(day => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();
      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths
      );
    });
  };

  return (
    <section className="w-full max-w-5xl py-12 mx-auto px-4 flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h3 className="text-2xl font-bold text-slate-100">
          Days I <span className="text-emerald-400">Code</span>
        </h3>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 shadow-xl backdrop-blur-sm overflow-x-auto max-w-full"
      >
        <GitHubCalendar 
          username="Charan-Peddi" 
          blockSize={15}
          blockMargin={5}
          colorScheme="dark"
          theme={{
            dark: ['#1e293b', '#0284c7', '#0ea5e9', '#38bdf8', '#7dd3fc']
          }}
          fontSize={14}
        />
      </motion.div>
    </section>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
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
          I'm a Senior Full Stack Engineer specializing in the MERN stack, Next.js, and AI integrations. I architect enterprise-grade SaaS platforms, autonomous AI chatbots, and comprehensive ERP systems that drive real business value.
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
            <a href="https://github.com/Charan-Peddi" target="_blank" rel="noreferrer" className="hover:text-emerald-400 hover:-translate-y-1 transition-all duration-300 p-2">
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
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function Starfield(props) {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(5000 * 3), { radius: 1.5 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#0ea5e9"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 bg-slate-900 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Starfield />
      </Canvas>
    </div>
  );
}
import React, { useEffect, useRef } from 'react';
import { achievements } from '../data';
import './KeyAchievements.css';
import achievementIcon from './achievement.svg';

const KeyAchievements = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section ref={sectionRef} className="achievements__container" id="achievements">
      <h2 className="achievements__title animate-on-scroll">Key Achievements</h2>
      <ul className="achievements__list">
        {achievements.map((achievement, index) => (
          <li key={index} className="achievements__item animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
            <img src={achievementIcon} alt="" aria-hidden="true" className="achievements__item-icon" />
            <p>{achievement}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default KeyAchievements;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/80 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-emerald-400 font-mono">
          CP
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="text-slate-300 hover:text-emerald-400 font-mono text-sm transition-colors"
            >
              <span className="text-emerald-400 mr-1">0{i + 1}.</span>
              {link.name}
            </motion.a>
          ))}
          <motion.a 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
            href="/resume.pdf" 
            target="_blank"
            className="px-4 py-2 border border-emerald-400 text-emerald-400 rounded-md hover:bg-emerald-400/10 transition-colors font-mono text-sm ml-4"
          >
            Resume
          </motion.a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-emerald-400 z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-slate-900 z-40 flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col gap-8 items-center text-center">
              {navLinks.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl text-slate-300 hover:text-emerald-400 font-mono transition-colors"
                >
                  <span className="block text-emerald-400 text-lg mb-1">0{i + 1}.</span>
                  {link.name}
                </a>
              ))}
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="mt-4 px-8 py-3 border border-emerald-400 text-emerald-400 rounded-md hover:bg-emerald-400/10 transition-colors font-mono text-lg"
              >
                Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
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
            
            <p className="text-sm text-emerald-400 font-mono mb-4">{project.subtitle}</p>
            
            <p className="text-slate-400 text-sm mb-6 flex-grow">
              {project.description}
            </p>

            <ul className="flex flex-wrap gap-2 mt-auto">
              {project.skills.map((skill, i) => (
                <li key={i} className="text-xs font-mono text-slate-500 bg-slate-900/50 px-2 py-1 rounded">
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
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaBootstrap, FaPython, FaGitAlt 
} from 'react-icons/fa';
import { 
  SiJavascript, SiNextdotjs, SiMongodb, SiExpress, SiTailwindcss, 
  SiTypescript, SiVercel, SiSocketdotio, SiFirebase, SiFramer, SiMysql
} from 'react-icons/si';

const allSkills = [
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-slate-100" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "Framer Motion", icon: SiFramer, color: "text-fuchsia-500" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "Express.js", icon: SiExpress, color: "text-slate-300" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-300" },
  { name: "Socket.IO", icon: SiSocketdotio, color: "text-slate-100" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
  { name: "Vercel", icon: SiVercel, color: "text-slate-100" }
];

export default function Skills() {
  return (
    <section id="skills" className="w-full max-w-5xl py-24 mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 flex items-center">
          <span className="text-emerald-400 font-mono text-xl md:text-2xl mr-3">04.</span> 
          Technologies I Use
        </h2>
        <div className="h-px bg-slate-700 flex-grow ml-6"></div>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
        {allSkills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-slate-800/40 border border-slate-700 hover:border-emerald-400/50 rounded-xl p-6 flex flex-col items-center justify-center gap-4 transition-colors group cursor-pointer backdrop-blur-sm"
            >
              <Icon className={`text-4xl md:text-5xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
              <span className="text-slate-300 font-mono text-sm tracking-wider group-hover:text-emerald-400 transition-colors">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaSpotify } from 'react-icons/fa';

export default function SpotifyWidget() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Polling every 10 seconds to keep it live
    const fetchSpotify = async () => {
      try {
        const res = await fetch('/api/spotify');
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSpotify();
    const interval = setInterval(fetchSpotify, 10000);
    return () => clearInterval(interval);
  }, []);

  if (!data) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed bottom-6 left-6 z-40 hidden md:flex"
    >
      <a 
        href={data.songUrl || "https://spotify.com"} 
        target="_blank" 
        rel="noreferrer"
        className="flex items-center gap-4 bg-slate-900/90 border border-slate-700 p-3 rounded-xl shadow-2xl backdrop-blur-md hover:border-green-500/50 transition-colors max-w-[280px]"
      >
        {data.isPlaying ? (
          <img src={data.albumImageUrl} alt={data.album} className="w-12 h-12 rounded-md animate-spin" style={{ animationDuration: '4s' }} />
        ) : (
          <FaSpotify size={32} className="text-green-500 ml-2" />
        )}
        
        <div className="flex flex-col overflow-hidden">
          <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-0.5">
            {data.isPlaying ? 'Now Playing' : 'Spotify'}
          </p>
          <p className="text-slate-200 text-sm font-semibold truncate">
            {data.isPlaying ? data.title : 'Not Playing'}
          </p>
          <p className="text-slate-400 text-xs truncate">
            {data.isPlaying ? data.artist : 'Spotify currently offline'}
          </p>
        </div>
        
        {data.isPlaying && (
          <div className="flex gap-1 items-end h-4 ml-2 opacity-70">
            <motion.span animate={{ height: ["4px", "16px", "4px"] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1 bg-green-500"></motion.span>
            <motion.span animate={{ height: ["8px", "12px", "8px"] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-1 bg-green-500"></motion.span>
            <motion.span animate={{ height: ["16px", "4px", "16px"] }} transition={{ repeat: Infinity, duration: 1.2 }} className="w-1 bg-green-500"></motion.span>
          </div>
        )}
      </a>
    </motion.div>
  );
}
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Cosmo Radiance Hospitals",
    role: "Healthcare Client",
    text: "Charan's work on our HMS and ERP system completely transformed our operations. The AI chatbot alone automated 70% of patient interactions. Truly exceptional work.",
  },
  {
    id: 2,
    name: "Sri Sampoornam",
    role: "E-Commerce Client",
    text: "He delivered a robust, fast, and highly secure e-commerce platform for us. The integration of the payment gateways and product management is seamless.",
  },
  {
    id: 3,
    name: "Ashoka Vidya Mandir",
    role: "Education Client",
    text: "The school management dashboard Charan built gave us exactly what we needed to track attendance and marks. It's incredibly user-friendly and reliable.",
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="w-full max-w-4xl py-24 mx-auto px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 flex items-center">
          <span className="text-emerald-400 font-mono text-xl md:text-2xl mr-3">05.</span> 
          Client Testimonials
        </h2>
        <div className="h-px bg-slate-700 flex-grow ml-6"></div>
      </motion.div>

      <div className="relative bg-slate-800/50 border border-slate-700 rounded-2xl p-8 md:p-12 text-center shadow-xl backdrop-blur-sm">
        <FaQuoteLeft className="text-4xl text-emerald-400/20 absolute top-8 left-8" />
        
        <div className="min-h-[160px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg md:text-xl text-slate-300 italic mb-8 relative z-10">
                "{testimonials[currentIndex].text}"
              </p>
              <div>
                <h4 className="text-emerald-400 font-bold text-lg">{testimonials[currentIndex].name}</h4>
                <p className="text-slate-500 font-mono text-sm">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button 
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-slate-900 border border-slate-700 hover:border-emerald-400 hover:text-emerald-400 text-slate-400 transition-colors"
          >
            <FaChevronLeft />
          </button>
          <button 
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-slate-900 border border-slate-700 hover:border-emerald-400 hover:text-emerald-400 text-slate-400 transition-colors"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
