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
          Days I <span className="text-sky-400">Code</span>
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
