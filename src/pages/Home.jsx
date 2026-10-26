import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import heroImage from '../assets/hero.png';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-amber-50/90 pt-24 px-6 lg:px-12 flex items-center relative overflow-hidden">
      
      {/* Warm Red/Orange Spot Glow behind Picture */}
      <div className="absolute top-1/2 left-[22%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-600/50 via-amber-800/30 to-transparent rounded-full blur-[140px] pointer-events-none z-0" />
      
      {/* Bottom Floor Dark Shadow Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center z-10">
        
        {/* Left Side: Photo (Zoomed & Fitted Larger) */}
        <div className="lg:col-span-6 flex justify-center relative items-end">
          <div className="relative w-full max-w-2xl h-[500px] sm:h-[500px] flex items-end justify-center">
            <img 
              src={heroImage} 
              alt="Jamil" 
              className="w-full h-full object-contain object-bottom scale-[1.1] sm:scale-[1.0] origin-bottom drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)]"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden absolute inset-0 items-center justify-center text-amber-500 text-6xl font-bold bg-neutral-900/40 rounded-2xl">
              J
            </div>
          </div>
        </div>

        {/* Right Side: Content & Typography */}
        <div className="lg:col-span-6 flex flex-col items-start text-left pl-0 lg:pl-4">
          
          <div className="inline-flex items-center gap-2 bg-[#141414] border border-amber-500/20 px-4 py-1.5 rounded-full mb-6 text-xs tracking-wider text-neutral-300 font-mono">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            AVAILABLE FOR PROJECTS
          </div>

          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-amber-50 mb-4 leading-none">
            Hi, I'm <span className="text-amber-500">Jamil.</span>
          </h1>

          <p className="text-amber-400/90 font-mono text-sm tracking-widest uppercase mb-6">
            FULL-STACK DEVELOPER & BRAND IDENTITY
          </p>

          <p className="text-neutral-400 text-base sm:text-lg max-w-lg mb-8 leading-relaxed font-light">
            I craft premium visual identities and scalable web applications for ambitious brands — clean, considered and unforgettable.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="/portfolio" className="bg-amber-500 hover:bg-amber-600 text-neutral-950 font-semibold px-8 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-[0_0_25px_rgba(245,158,11,0.35)]">
              View Portfolio <ArrowRight size={18} />
            </a>
            <a href="/contact" className="border border-neutral-700 hover:border-amber-500/40 bg-neutral-900/60 hover:bg-neutral-900 px-8 py-3.5 rounded-xl text-neutral-200 transition-all flex items-center gap-2">
              <Mail size={18} className="text-amber-500" /> Contact Me
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;