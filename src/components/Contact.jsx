import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.target;
    
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name.value,
          email: form.email.value,
          message: form.message.value,
        }),
      });
      
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="w-full max-w-5xl py-24 mx-auto mb-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 flex items-center">
          <span className="text-emerald-400 font-mono text-xl md:text-2xl mr-3">06.</span> 
          What's Next?
        </h2>
        <div className="h-px bg-slate-700 flex-grow ml-6"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-4xl font-bold text-slate-200 mb-6">Get In Touch</h3>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question, a project proposal, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
          </p>
          <a href="mailto:charanpeddi37@gmail.com" className="inline-block border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded font-mono hover:bg-emerald-400/10 transition-colors">
            Say Hello
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-800/30 p-8 rounded-xl border border-slate-700"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="block text-slate-300 font-mono text-sm mb-2" htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-slate-200 focus:outline-none focus:border-emerald-400 transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label className="block text-slate-300 font-mono text-sm mb-2" htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-slate-200 focus:outline-none focus:border-emerald-400 transition-colors"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label className="block text-slate-300 font-mono text-sm mb-2" htmlFor="message">Message</label>
              <textarea 
                id="message" 
                rows="4"
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-slate-200 focus:outline-none focus:border-emerald-400 transition-colors resize-none"
                placeholder="Hello Charan..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="bg-emerald-500 text-slate-900 font-bold py-3 rounded-lg hover:bg-emerald-400 transition-colors mt-2"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && <p className="text-emerald-400 text-sm mt-2">Message sent successfully!</p>}
            {status === 'error' && <p className="text-red-400 text-sm mt-2">Error sending message. Please try again.</p>}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
