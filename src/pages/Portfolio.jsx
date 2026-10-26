import React from 'react';

const projects = [
  { title: "E-Commerce Platform", desc: "A modern warm-themed shopping experience.", tech: "React • Tailwind • Node.js" },
  { title: "Task Management App", desc: "Productivity dashboard with real-time sync.", tech: "React • Firebase • Tailwind" },
  { title: "AI Analytics Dashboard", desc: "Clean visualization tool for data insight.", tech: "Next.js • Tailwind • ChartJS" }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-amber-50/90 pt-32 px-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-amber-400 mb-8">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((item, index) => (
          <div key={index} className="p-6 bg-neutral-900/60 border border-amber-500/10 hover:border-amber-500/40 rounded-xl transition-all hover:-translate-y-1">
            <h3 className="text-xl font-bold text-amber-100 mb-2">{item.title}</h3>
            <p className="text-neutral-400 text-sm mb-4">{item.desc}</p>
            <span className="text-xs font-mono text-amber-400">{item.tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;