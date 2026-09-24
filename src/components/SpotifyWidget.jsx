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
