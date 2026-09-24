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
        <a href="#home" className="flex items-center gap-2 group">
          <img src="/logo.svg" alt="Logo" className="w-10 h-10 group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] transition-all duration-300" />
          <span className="text-xl font-bold text-slate-100 tracking-wide hidden sm:block group-hover:text-emerald-400 transition-colors">Charan</span>
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
