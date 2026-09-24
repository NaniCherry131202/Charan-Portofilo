import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Nav from './components/Nav';
import Hero from './components/Hero';
import DeveloperBackground from './components/DeveloperBackground';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import GithubGraph from './components/GithubGraph';
import SpotifyWidget from './components/SpotifyWidget';
import { FaWhatsapp } from 'react-icons/fa';

function App() {
  return (
    <>
      <CustomCursor />
      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-transparent min-h-screen text-slate-200 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 overflow-hidden relative"
        >
          <DeveloperBackground />
          <Nav />
        <main className="relative z-10 flex flex-col items-center px-6 md:px-12 lg:px-24">
          <Hero />
          <Experience />
          <Projects />
          <GithubGraph />
          <Skills />
          <Testimonials />
          <Contact />
        </main>

        <SpotifyWidget />

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919701057048?text=Hi%20Charan,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 hover:bg-green-400 text-white rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={32} />
        </a>
      </motion.div>
      </AnimatePresence>
    </>
  );
}

export default App;