import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Briefcase, GraduationCap, Code } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: 15 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          exit={{ opacity: 0, scale: 0.8, rotateX: -15 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 120, damping: 20 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0d0d12] border-2 border-amber-500/40 rounded-3xl p-8 shadow-[0_0_60px_rgba(245,158,11,0.3)] text-neutral-100 font-sans"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-neutral-900 border border-neutral-700 hover:border-amber-400 text-neutral-400 hover:text-amber-400 transition-all cursor-pointer"
          >
            <X size={20} />
          </button>

          <div className="mb-8 border-b border-neutral-800 pb-6">
            <span className="text-xs font-mono tracking-widest text-amber-400 uppercase bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
              CURRICULUM VITAE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3" style={{ fontFamily: 'Flecha Medium, Georgia, serif' }}>
              Jamil Rafiq
            </h2>
            <p className="text-amber-500 font-mono text-xs tracking-wider uppercase mt-1">
              Full-Stack Developer • AI Workflow Expert • SEO & Brand Specialist
            </p>
          </div>

          <div className="space-y-6 text-sm">
            <div>
              <h3 className="flex items-center gap-2 text-amber-400 font-semibold text-base mb-3 font-mono">
                <Briefcase size={18} /> PROFESSIONAL EXPERIENCE
              </h3>
              <div className="bg-neutral-900/60 p-4 rounded-xl border border-neutral-800 space-y-2">
                <div className="flex justify-between items-center text-xs text-neutral-400 font-mono">
                  <span className="text-white font-bold">Senior Full-Stack & AI Developer</span>
                  <span>2023 - Present</span>
                </div>
                <p className="text-neutral-300 text-xs leading-relaxed">
                  Executing high-converting custom web applications, AI automation workflows, and advanced branding solutions for international clients.
                </p>
              </div>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-amber-400 font-semibold text-base mb-3 font-mono">
                <Code size={18} /> CORE EXPERTISE & TECH STACK
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Next.js', 'Node.js', 'Tailwind CSS', 'JavaScript (ES6+)', 'AI Agents', 'SEO Optimization', 'UI/UX Design', 'MongoDB'].map((skill, i) => (
                  <span key={i} className="text-xs font-mono bg-neutral-900 border border-neutral-700 text-neutral-200 px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-amber-400 font-semibold text-base mb-3 font-mono">
                <GraduationCap size={18} /> EDUCATION & CERTIFICATIONS
              </h3>
              <div className="bg-neutral-900/60 p-4 rounded-xl border border-neutral-800">
                <div className="flex justify-between items-center text-xs text-neutral-400 font-mono">
                  <span className="text-white font-bold">BS Computer Science & Software Engineering</span>
                  <span>2020 - 2024</span>
                </div>
                <p className="text-neutral-300 text-xs mt-1">Specialized in Web Technologies, Software Architecture, and Artificial Intelligence.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-800 flex justify-end gap-4">
            <button 
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl border border-neutral-700 hover:bg-neutral-900 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
            >
              Close
            </button>
            <a 
              href="mailto:jamilrafiq51@gmail.com?subject=Hiring Inquiry / Resume Download"
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] cursor-pointer no-underline"
            >
              <Download size={14} /> Download / Contact
            </a>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ResumeModal;