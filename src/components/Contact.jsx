import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const [selectedService, setSelectedService] = useState('WEB-DEVELOPMENT');
  const [selectedBudget, setSelectedBudget] = useState('5-10K');
  const [formData, setFormData] = useState({ name: '', email: '' });

  const services = ['WEB-DESIGN', 'WEB-DEVELOPMENT', 'BRANDING', 'MARKETING', 'OTHER'];
  const budgets = ['<$5K', '5-10K', '10-20K', '>20K', 'I DON\'T KNOW YET'];

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry: ${selectedService}`);
    const body = encodeURIComponent(`Hi Jamil,\n\nName: ${formData.name}\nEmail: ${formData.email}\nInterested in: ${selectedService}\nBudget: ${selectedBudget}\n\nLet's discuss the project!`);
    window.location.href = `mailto:jamilrafiq51@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="w-full py-28 px-6 lg:px-16 relative overflow-hidden bg-[#070707] text-white">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col items-start justify-center space-y-8"
        >
          <div>
            <h2 className="text-5xl sm:text-7xl font-light text-white tracking-tight mb-6 leading-tight" style={{ fontFamily: 'Flecha Medium, Georgia, serif' }}>
              Let’s <span className="text-amber-400 italic">connect</span>
            </h2>
            <p className="text-neutral-400 font-mono text-xs sm:text-sm tracking-widest uppercase leading-relaxed max-w-md">
              NOW IT'S TIME TO TELL THE WHOLE WORLD ABOUT YOUR BUSINESS
            </p>
          </div>

          <a 
            href="mailto:jamilrafiq51@gmail.com"
            className="group inline-flex items-center gap-3 bg-neutral-200 hover:bg-amber-400 text-neutral-950 font-semibold px-7 py-3.5 rounded-full text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] no-underline"
          >
            <span>SEND A MAIL</span>
            <div className="w-7 h-7 rounded-full bg-neutral-950 text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight size={15} />
            </div>
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 shadow-2xl relative"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-neutral-400 font-mono text-xs tracking-widest uppercase mb-4">CONTACT INFO*</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  required
                  placeholder="YOUR NAME*"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-neutral-950/80 border border-neutral-800 focus:border-amber-500/80 text-amber-50 placeholder-neutral-500 rounded-xl px-5 py-4 text-xs font-mono tracking-wider focus:outline-none transition-colors"
                />
                <input 
                  type="email" 
                  required
                  placeholder="YOUR E-MAIL*"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-neutral-950/80 border border-neutral-800 focus:border-amber-500/80 text-amber-50 placeholder-neutral-500 rounded-xl px-5 py-4 text-xs font-mono tracking-wider focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-neutral-400 font-mono text-xs tracking-widest uppercase mb-4">YOU ARE INTERESTED IN*</label>
              <div className="flex flex-wrap gap-3">
                {services.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider border transition-all duration-300 cursor-pointer ${
                      selectedService === service 
                        ? 'bg-amber-400/10 border-amber-400 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.25)]' 
                        : 'bg-neutral-950/60 border-neutral-800 text-neutral-400 hover:border-neutral-600 hover:text-neutral-200'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-neutral-400 font-mono text-xs tracking-widest uppercase mb-4">YOUR BUDGET IN USD*</label>
              <div className="flex flex-wrap gap-3">
                {budgets.map((budget) => (
                  <button
                    key={budget}
                    type="button"
                    onClick={() => setSelectedBudget(budget)}
                    className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider border transition-all duration-300 cursor-pointer ${
                      selectedBudget === budget 
                        ? 'bg-amber-400/10 border-amber-400 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.25)]' 
                        : 'bg-neutral-950/60 border-neutral-800 text-neutral-400 hover:border-neutral-600 hover:text-neutral-200'
                    }`}
                  >
                    {budget}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-neutral-200 hover:bg-amber-400 text-neutral-950 font-mono font-bold py-4 rounded-2xl text-xs tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] cursor-pointer mt-4"
            >
              START A JOURNEY
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;