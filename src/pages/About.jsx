import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-amber-50/90 pt-32 px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-amber-400 mb-6">About Me</h2>
      <p className="text-neutral-300 leading-relaxed mb-6">
        I am a passionate Full-Stack Developer with a knack for building clean, user-friendly, and highly functional web applications. 
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="p-6 bg-neutral-900/60 border border-amber-500/10 rounded-xl">
          <h3 className="text-xl font-semibold text-amber-200 mb-2">Frontend</h3>
          <p className="text-neutral-400 text-sm">React, Next.js, Tailwind CSS, JavaScript, HTML5/CSS3</p>
        </div>
        <div className="p-6 bg-neutral-900/60 border border-amber-500/10 rounded-xl">
          <h3 className="text-xl font-semibold text-amber-200 mb-2">Backend</h3>
          <p className="text-neutral-400 text-sm">Node.js, Express, MongoDB, REST APIs, PostgreSQL</p>
        </div>
      </div>
    </div>
  );
};

export default About;