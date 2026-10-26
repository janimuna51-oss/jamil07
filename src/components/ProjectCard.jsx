import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto px-4">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          whileHover={{ y: -8, scale: 1.02 }}
          className="bg-neutral-900/90 border border-neutral-800 hover:border-amber-500/50 rounded-2xl p-4 shadow-xl backdrop-blur-xl flex flex-col justify-between group cursor-pointer transition-all duration-300"
        >
          <div className="w-full h-36 rounded-xl overflow-hidden relative border border-neutral-800 mb-4">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="flex flex-col text-left">
            <span className="text-[9px] font-mono tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2.5 py-0.5 rounded-full uppercase inline-block mb-2 w-fit">
              {project.category}
            </span>
            <h3 className="text-base font-bold text-white" style={{ fontFamily: 'Flecha Medium, Georgia, serif' }}>
              {project.title}
            </h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectCard;