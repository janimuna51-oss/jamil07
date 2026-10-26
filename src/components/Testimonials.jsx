import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    name: "Emily Rodriguez",
    role: "Startup Founder",
    project: "Web Development",
    rating: 5,
    borderGlow: "border-amber-500/60 shadow-[0_0_50px_rgba(245,158,11,0.3)]",
    badgeColor: "bg-amber-500/15 text-amber-400 border-amber-500/40",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    quote: "Prompt and helpful responses to my inquiry! The customer support and technical execution is worth the price alone."
  },
  {
    id: 2,
    name: "Michael Park",
    role: "CFO, TechVision",
    project: "AI Work Automator",
    rating: 5,
    borderGlow: "border-purple-500/60 shadow-[0_0_50px_rgba(168,85,247,0.3)]",
    badgeColor: "bg-purple-500/15 text-purple-400 border-purple-500/40",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote: "We saw ROI within weeks of starting. This autonomous AI agent has become essential to how our team operates."
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    role: "Creative Director",
    project: "Brand Identity",
    rating: 5,
    borderGlow: "border-rose-500/60 shadow-[0_0_50px_rgba(244,63,94,0.3)]",
    badgeColor: "bg-rose-500/15 text-rose-400 border-rose-500/40",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    quote: "Incredible service! Visually breathtaking design work that gave our brand an unfair competitive edge."
  },
  {
    id: 4,
    name: "David Chen",
    role: "E-Commerce Lead",
    project: "SEO & Automation",
    rating: 5,
    borderGlow: "border-emerald-500/60 shadow-[0_0_50px_rgba(16,185,129,0.3)]",
    badgeColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/40",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    quote: "Our organic traffic skyrocketed after his SEO overhaul. High execution speed with outstanding conversion results!"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-28 relative overflow-hidden flex flex-col items-center justify-center bg-gradient-to-b from-[#070707] via-neutral-950 to-[#070707]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-purple-600/20 via-amber-500/20 to-emerald-600/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="text-center mb-16 px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-6xl font-extrabold text-white tracking-tight mb-3" style={{ fontFamily: 'Flecha Medium, Georgia, serif' }}>
            Client <span className="text-amber-400 italic">Testimonials</span>
          </h2>
          <span className="text-xs font-mono tracking-widest text-amber-400/90 uppercase bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 rounded-full inline-block shadow-inner">
            ✦ CLIENT EXPERIENCES & REVIEWS ✦
          </span>
        </motion.div>
      </div>

      <div className="w-full overflow-hidden relative mb-10 py-4 opacity-30 pointer-events-none flex">
        <motion.div 
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
          className="flex gap-8 whitespace-nowrap shrink-0"
        >
          {[...testimonialsData, ...testimonialsData, ...testimonialsData].map((item, index) => (
            <div 
              key={index}
              className={`w-[320px] p-6 rounded-2xl border bg-neutral-900/60 backdrop-blur-md inline-flex flex-col justify-between ${item.borderGlow}`}
            >
              <div className="flex justify-between items-center mb-3">
                <Quote size={20} className="text-neutral-400" />
                <span className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                  {item.project}
                </span>
              </div>
              <p className="text-neutral-300 text-xs italic truncate">"{item.quote}"</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative z-20 flex items-center justify-center w-full max-w-2xl px-4 min-h-[350px]">
        <AnimatePresence mode="wait">
          {testimonialsData.map((item, idx) => {
            if (idx !== activeIndex) return null;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -30 }}
                transition={{ 
                  duration: 0.7, 
                  ease: [0.16, 1, 0.3, 1],
                  type: "spring",
                  stiffness: 100,
                  damping: 22
                }}
                className={`w-full h-[350px] p-8 sm:p-10 rounded-3xl border-2 bg-neutral-950/98 backdrop-blur-2xl shadow-2xl flex flex-col justify-between relative overflow-hidden group ${item.borderGlow}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <Quote size={32} className="text-amber-400 opacity-90 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                  <span className={`text-xs font-mono uppercase tracking-widest px-4 py-1.5 rounded-full border shadow-sm ${item.badgeColor}`}>
                    {item.project}
                  </span>
                </div>

                <p className="text-neutral-100 text-base sm:text-lg leading-relaxed font-sans italic my-auto font-light">
                  "{item.quote}"
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-800/80 mt-auto">
                  <div className="flex items-center gap-3.5">
                    <img 
                      src={item.avatar} 
                      alt={item.name} 
                      className="w-11 h-11 rounded-full object-cover border-2 border-amber-500/50 shadow-xl"
                    />
                    <div>
                      <h4 className="font-semibold text-sm text-white tracking-wide">{item.name}</h4>
                      <p className="text-xs text-neutral-400 font-sans">{item.role}</p>
                    </div>
                  </div>

                  <div className="flex gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={15} className="fill-current drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Testimonials;