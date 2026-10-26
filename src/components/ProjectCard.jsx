import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          whileHover={{ y: -8, scale: 1.02 }}
          className="bg-neutral-900/90 border border-neutral-800 hover:border-amber-500/50 rounded-3xl p-6 shadow-xl backdrop-blur-xl flex flex-col justify-between group cursor-pointer transition-all duration-300"
        >
          <div className="w-full h-48 rounded-2xl overflow-hidden relative border border-neutral-800 mb-6">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="flex flex-col flex-grow justify-between space-y-4 text-left">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full uppercase inline-block mb-3">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Flecha Medium, Georgia, serif' }}>
                {project.title}
              </h3>
            </div>

            <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
              <span className="text-xs font-mono text-amber-400 flex items-center gap-1 group-hover:underline">
                Explore <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectCard;