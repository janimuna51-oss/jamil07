import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, X, Bot, User } from 'lucide-react';

const Navbar = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'ai', text: "Hi! I'm Jamil's AI Assistant. Ask me anything about his full-stack dev skills, AI workflow, or projects!" }
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setInput('');

    setTimeout(() => {
      let aiReply = "Jamil is an expert Full-Stack Developer and AI Workflow specialist. He builds custom web apps, AI agents, and high-end brand identities!";
      const lower = userMsg.toLowerCase();
      if (lower.includes('contact') || lower.includes('hire') || lower.includes('reach')) {
        aiReply = "You can directly connect with Jamil via email or book a call using the contact section below!";
      } else if (lower.includes('project') || lower.includes('work') || lower.includes('portfolio')) {
        aiReply = "Jamil has built amazing projects including AI Work Automators, SaaS dashboards, E-commerce Luxe platforms, and mobile apps.";
      }
      setMessages(prev => [...prev, { sender: 'ai', text: aiReply }]);
    }, 600);
  };

  return (
    <>
      {/* Wider Horizontal Pill Navbar with Modern Clean Font */}
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ originX: 0.5 }}
          className="pointer-events-auto w-full max-w-3xl sm:max-w-4xl flex items-center justify-between gap-6 px-6 py-3 rounded-full bg-neutral-950/90 border border-amber-500/30 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.85)]"
        >
          {/* Left Logo / Icon */}
          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-500 text-neutral-950 font-bold hover:scale-105 transition-transform shadow-md shrink-0">
            <Sparkles size={18} />
          </a>

          {/* Center Links with Modern Clean Sans-Serif Font */}
          <div className="hidden sm:flex items-center gap-10 sm:gap-14 font-sans text-sm font-medium tracking-wide text-neutral-200">
            <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
            <a href="#portfolio" className="hover:text-amber-400 transition-colors">Portfolio</a>
            <a href="#testimonials" className="hover:text-amber-400 transition-colors">Testimonials</a>
          </div>

          {/* Right Action Button ("Let's Talk") */}
          <button
            onClick={() => setIsChatOpen(true)}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-neutral-950 font-sans text-xs font-bold tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] cursor-pointer shrink-0"
          >
            <Bot size={15} />
            <span>Let's Talk</span>
          </button>
        </motion.nav>
      </header>

      {/* ChatGPT / Gemini Style AI Assistant Modal */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 260, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 w-full max-w-sm sm:max-w-md h-[500px] bg-neutral-950/95 border border-amber-500/40 rounded-3xl backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden"
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-neutral-900/50">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-amber-500 animate-pulse" />
                <span className="font-sans text-xs font-bold text-amber-50 uppercase tracking-widest">
                  Jamil's AI Assistant
                </span>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="p-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 font-sans text-xs">
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`flex items-start gap-2 max-w-[85%] ${msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
                >
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${msg.sender === 'user' ? 'bg-amber-500 text-neutral-950' : 'bg-neutral-800 text-amber-400 border border-amber-500/30'}`}>
                    {msg.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  <div className={`p-3 rounded-2xl leading-relaxed ${msg.sender === 'user' ? 'bg-amber-500 text-neutral-950 font-medium rounded-tr-none' : 'bg-neutral-900/90 text-neutral-200 border border-neutral-800 rounded-tl-none'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input Footer */}
            <form onSubmit={handleSendMessage} className="p-3 border-t border-white/10 bg-neutral-900/60 flex items-center gap-2">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Jamil's skills or projects..."
                className="flex-1 bg-neutral-950 border border-amber-500/20 rounded-xl px-4 py-2.5 text-xs text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-amber-400 font-sans"
              />
              <button 
                type="submit"
                className="p-2.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 rounded-xl transition-all shadow-md cursor-pointer"
              >
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;