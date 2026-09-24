import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: "Dr. Prem Sunder Thum",
    role: "Director, Cosmo Radiance",
    review: "Charan transformed our entire clinical workflow. The Next.js public platform load times dropped to zero, and his custom CRM dashboard organized our telecallers flawlessly. He's an elite full-stack engineer who deeply understands enterprise needs.",
    initials: "PT",
    color: "bg-emerald-500"
  },
  {
    name: "K Narrena",
    role: "Director, Ashoka Vidya Mandir",
    review: "The School Management platform Charan built for us is incredibly robust. From secure student logins to real-time attendance tracking, everything just works. The intuitive UI saved our teachers hundreds of hours.",
    initials: "KN",
    color: "bg-blue-500"
  },
  {
    name: "K Thilak",
    role: "Director, Sri Sampoornam",
    review: "I needed a scalable e-commerce solution with Stripe integration fast. Charan delivered ahead of schedule with flawless code. His ability to navigate complex backend states in Node.js while keeping the React frontend snappy is rare.",
    initials: "KT",
    color: "bg-purple-500"
  },
  {
    name: "Praveen",
    role: "Director, Syscore Info",
    review: "Charan developed an extremely professional and responsive IT services website for us. His focus on SEO and performance significantly boosted our inbound leads. The modern frontend design is immaculate.",
    initials: "PI",
    color: "bg-orange-500"
  },
  {
    name: "Chandra",
    role: "Founder, Chandra Computer Info",
    review: "We needed a dynamic website to showcase our hardware services. Charan delivered a blazingly fast React site that provides a silky smooth user experience for our customers. Highly recommended for any IT business.",
    initials: "CC",
    color: "bg-teal-500"
  },
  {
    name: "Rahul",
    role: "Freelance Video Editor",
    review: "As a video editor, visuals are everything to me. Charan built a sleek, visually stunning personal portfolio that perfectly highlights my video reels. The framer-motion animations are absolutely fantastic!",
    initials: "RV",
    color: "bg-rose-500"
  },
  {
    name: "Venkatesh",
    role: "Independent Consultant",
    review: "Charan transformed my professional brand with a modern, responsive frontend portfolio. The Vercel deployment was seamless, and the entire site looks incredibly premium and polished.",
    initials: "VS",
    color: "bg-indigo-500"
  }
];

export default function Testimonials() {
  return (
    <section id="reviews" className="w-full max-w-5xl py-24 mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 flex items-center">
          <span className="text-emerald-400 font-mono text-xl md:text-2xl mr-3">05.</span> 
          Client Endorsements
        </h2>
        <div className="h-px bg-slate-700 flex-grow ml-6"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((rev, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-slate-800/30 p-8 rounded-xl border border-slate-700 hover:border-emerald-400/50 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="text-4xl text-emerald-400 mb-4 font-serif">"</div>
              <p className="text-slate-300 italic mb-8 leading-relaxed">
                {rev.review}
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-slate-100 font-bold text-lg ${rev.color}`}>
                {rev.initials}
              </div>
              <div>
                <h4 className="text-slate-100 font-bold">{rev.name}</h4>
                <p className="text-emerald-400 text-sm font-mono">{rev.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
