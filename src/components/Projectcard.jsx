import React from 'react';

const ProjectCard = () => {
  const services = [
    { 
      id: 1, 
      title: "Web Developer", 
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 2, 
      title: "App Creator", 
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 3, 
      title: "Graphic Designer", 
      image: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 4, 
      title: "Content Creator", 
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 5, 
      title: "Digital Marketing", 
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 6, 
      title: "Leads Generation", 
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 7, 
      title: "AI Agent", 
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 8, 
      title: "Software Creation", 
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 9, 
      title: "YouTube Automation", 
      // Updated with the exact 3D YouTube logo image
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 10, 
      title: "Grow Business", 
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80" 
    },
  ];

  return (
    <div className="w-full max-w-[95rem] mx-auto px-4 sm:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
        {services.map((item, index) => (
          <div 
            key={item.id || index}
            className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-amber-500/25 bg-neutral-950 group hover:border-amber-400 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all duration-300"
          >
            <img 
              src={item.image} 
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80";
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 z-10 flex flex-col items-start">
              <h3 
                className="text-lg sm:text-xl font-normal text-amber-50 tracking-wide leading-snug drop-shadow-xl"
                style={{ fontFamily: 'Flecha Medium, Georgia, serif' }}
              >
                {item.title.split(' ')[0]} <br />
                <span className="text-amber-400 font-semibold">{item.title.split(' ').slice(1).join(' ')}</span>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;