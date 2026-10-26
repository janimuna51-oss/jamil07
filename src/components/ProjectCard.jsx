import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

const ProjectCard = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleShuffle = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[420px] sm:h-[460px] flex items-center justify-center perspective-[1000px] cursor-pointer" onClick={handleShuffle}>
      <AnimatePresence mode="popLayout">
        {projects.map((project, index) => {
          // Calculate relative position in the stack deck
          const offset = (index - currentIndex + projects.length) % projects.length;
          
          if (offset > 2 && offset !== projects.length - 1) return null; // Show only top 3 cards in stack

          return (
            <motion.div add .
              key={project.id}
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ 
                scale: offset === 0 ? 1 : offset === 1 ? 0.95 : 0.9, 
                opacity: offset === 0 ? 1 : offset === 1 ? 0.6 : 0.3,
                y: offset * 20,
                zIndex: projects.length - offset
              }}
              exit={{ scale: 0.8, opacity: 0, y: -100 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`absolute w-full max-w-2xl bg-neutral-900/90 border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl flex flex-col sm:flex-row gap-6 items-center ${offset === 0 ? 'border-amber-500/50 shadow-[0_0_40px_rgba(245,158,11,0.2)]' : ''}`}
            >
              <div className="w-full sm:w-1/2 h-52 sm:h-64 rounded-2xl overflow-hidden relative border border-neutral-800">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="w-full sm:w-1/2 flex flex-col justify-between h-full space-y-4 text-left">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full uppercase inline-block mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Flecha Medium, Georgia, serif' }}>
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-sans">
                    {project.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-neutral-500">{project.tech}</span>
                  <span className="text-xs font-mono text-amber-400 flex items-center gap-1 hover:underline">
                    Explore <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default ProjectCard;