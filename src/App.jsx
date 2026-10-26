import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowRight, Mail, Layout, Database, Search, Video } from 'lucide-react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import ProjectCard from './components/ProjectCard';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import heroImage from './assets/hero.png';
import aiAgentImage from './assets/ai-agent.jpg'; // <-- Local image import

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 20; 
    const y = (e.clientY / innerHeight - 0.5) * 20;
    setMousePosition({ x, y });
  };

  const projects = [
    {
      id: 1,
      title: "Web Developer",
      category: "DEVELOPMENT",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "App Creator",
      category: "MOBILE APP",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Graphic Designer",
      category: "DESIGN",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      title: "Content Creator",
      category: "MEDIA",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      title: "Digital Marketing",
      category: "MARKETING",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 6,
      title: "Leads Generation",
      category: "GROWTH",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 7,
      title: "AI Agent",
      category: "AUTOMATION",
      image: aiAgentImage // <-- Custom local image path
    },
    {
      id: 8,
      title: "Software Creation",
      category: "DEVELOPMENT",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 9,
      title: "YouTube Automation",
      category: "CONTENT",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 10,
      title: "Grow Business",
      category: "STRATEGY",
      image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const skills = [
    { icon: <Layout className="text-amber-400" />, title: "Frontend Expertise", desc: "React, Next.js, JavaScript (ES6+), HTML5/CSS3, Vite" },
    { icon: <Database className="text-orange-400" />, title: "Backend & Design", desc: "Node.js, Express, MongoDB, Brand Strategy, UI/UX" },
    { icon: <Search className="text-amber-400" />, title: "SEO Expert", desc: "On-page SEO, Performance Optimization, Semantic HTML, Ranking Strategy" },
    { icon: <Video className="text-orange-400" />, title: "Content Creator", desc: "Digital Media, Visual Storytelling, Brand Identity, Creative Direction" },
  ];

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="bg-[#070707] text-neutral-100 font-sans selection:bg-amber-500/30 overflow-x-hidden relative"
    >
      <CustomCursor />
      <WhatsAppFloat />

      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-300 z-50 origin-left"
        style={{ scaleX }}
      />

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 120 }}
      >
        <Navbar />
      </motion.div>

      {/* 1. HERO SECTION */}
      <section id="home" className="min-h-screen w-full pt-36 pb-16 px-6 lg:px-16 flex items-center justify-center relative">
        <div className="absolute top-1/2 left-[20%] -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-orange-500/70 via-amber-500/60 to-red-600/40 rounded-full blur-[130px] pointer-events-none z-0" />
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
          
          <motion.div 
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.8 }}
            className="lg:col-span-5 flex justify-start relative items-end"
          >
            <motion.div 
              animate={{ 
                rotateY: mousePosition.x * 0.5, 
                rotateX: -mousePosition.y * 0.5 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-sm h-[480px] sm:h-[540px] flex items-end justify-start ml-0 lg:-ml-4 [perspective:1000px]"
            >
              <img 
                src={heroImage} 
                alt="Jamil" 
                className="w-full h-full object-contain object-bottom scale-[1.08] origin-bottom drop-shadow-[0_25px_35px_rgba(0,0,0,0.95)]"
              />
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="inline-flex items-center gap-2 bg-[#141414] border border-amber-500/30 px-4 py-1.5 rounded-full mb-6 text-xs tracking-wider text-amber-400 font-mono shadow-inner"
            >
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              AI WORKFLOW & FULL-STACK EXPERT
            </motion.div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.1]" style={{ fontFamily: 'Flecha Medium, Georgia, serif' }}>
              Hi, I'm <span className="text-amber-500 underline decoration-amber-500/30 underline-offset-8">Jamil.</span>
            </h1>

            <p className="text-amber-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-6" style={{ fontFamily: 'Flecha Medium, Georgia, serif' }}>
              FREELANCER FULL-STACK DEVELOPER & BRAND IDENTITY
            </p>

            <p className="text-neutral-300 text-base sm:text-lg max-w-xl mb-8 leading-relaxed font-sans">
              I craft premium visual identities and scalable web applications for ambitious brands — clean, considered and unforgettable.
            </p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="flex flex-wrap gap-4"
            >
              <button 
                onClick={() => setIsResumeOpen(true)} 
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-neutral-950 font-semibold px-7 py-3.5 rounded-xl text-sm transition-all flex items-center gap-2 shadow-[0_0_25px_rgba(245,158,11,0.4)] cursor-pointer interactive"
              >
                View Resume <ArrowRight size={16} />
              </button>
              
              <a 
                href="mailto:jamilrafiq51@gmail.com?subject=Portfolio Inquiry" 
                className="border border-neutral-700 hover:border-amber-500/40 bg-neutral-900/60 hover:bg-neutral-900 px-7 py-3.5 rounded-xl text-neutral-200 text-sm transition-all flex items-center gap-2 cursor-pointer font-sans interactive no-underline"
              >
                <Mail size={16} className="text-amber-500" /> Contact Me
              </a>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="py-24 px-6 lg:px-16 max-w-6xl mx-auto border-t border-neutral-800/60">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-400 mb-6" style={{ fontFamily: 'Flecha Medium, Georgia, serif' }}>About Me</h2>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-sans mb-12 max-w-3xl">
            I am a passionate Full-Stack Developer, SEO Specialist, and Content Creator with a strong focus on building clean, high-performing, and visible digital experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-6 bg-neutral-900/70 border border-amber-500/15 hover:border-amber-500/50 rounded-2xl transition-shadow hover:shadow-[0_10px_30px_rgba(245,158,11,0.15)] interactive relative overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="p-3 bg-neutral-800/90 rounded-xl border border-amber-500/20 w-fit mb-4 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-amber-200 mb-2 font-sans group-hover:text-amber-400 transition-colors">{skill.title}</h3>
                <p className="text-neutral-400 text-sm font-sans leading-relaxed">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 3. PORTFOLIO SECTION */}
      <section id="portfolio" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-neutral-800/60">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-bold text-amber-400 mb-3" style={{ fontFamily: 'Flecha Medium, Georgia, serif' }}>
              Featured Work
            </h2>
            <p className="text-neutral-400 text-sm font-sans">Explore our core services and specialized digital solutions.</p>
          </div>

          <ProjectCard projects={projects} />
        </motion.div>
      </section>

      {/* 4. TESTIMONIALS SECTION */}
      <section id="testimonials" className="border-t border-neutral-800/60">
        <Testimonials />
      </section>

      {/* 5. CONTACT SECTION */}
      <Contact />

      {/* 3D Resume Modal Component */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {/* 6. FOOTER */}
      <Footer />
    </div>
  );
}

export default App;