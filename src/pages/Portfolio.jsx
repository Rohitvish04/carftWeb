import React from 'react'

// --- SVG Icon for Links ---
const ExternalLinkIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const Portfolio = () => {
  const projects = [
    {
      name: 'E-commerce Platform',
      image: 'https://images.unsplash.com/photo-1582004531564-50f300aae039?ixlib=rb-4.1.0&q=80&w=800&auto=format&fit=crop',
      desc: 'A modern, full-featured online store built with React, Redux, and Tailwind CSS for a seamless shopping experience.',
      tags: ['React', 'Node.js', 'E-commerce'],
      liveUrl: '#',
    },
    {
      name: 'Creative Portfolio Site',
      image: 'https://images.unsplash.com/photo-1635405074683-96d6921a2a68?ixlib=rb-4.1.0&q=80&w=800&auto=format&fit=crop',
      desc: 'A clean and fast personal portfolio website designed to showcase creative work with a minimalist aesthetic.',
      tags: ['Next.js', 'Tailwind', 'Design'],
      liveUrl: '#',
    },
    {
      name: 'SaaS Landing Page',
      image: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.1.0&q=80&w=800&auto=format&fit=crop',
      desc: 'An elegant and responsive landing page for a business, focused on lead generation and clear communication.',
      tags: ['HTML5', 'CSS3', 'Marketing'],
      liveUrl: '#',
    },
  ];

  const handleImageError = (e) => {
    e.target.src = 'https://placehold.co/800x600/6366f1/white?text=Project';
  };


  return (
    <>
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.7s ease-out forwards; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
      `}</style>
      <section id="portfolio" className="bg-slate-50 font-sans antialiased">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase text-indigo-600 font-semibold tracking-wider animate-fade-in-up opacity-0">
              Our Work
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight animate-fade-in-up opacity-0 delay-100">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto animate-fade-in-up opacity-0 delay-200">
              Here are a few examples of projects we've recently completed. Each one is a testament to our commitment to quality and modern web standards.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {projects.map((p, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 transform animate-fade-in-up opacity-0"
                style={{ animationDelay: `${300 + i * 100}ms` }}
              >
                <div className="relative">
                  <img
                    src={p.image}
                    alt={p.name}
                    onError={handleImageError}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-lg font-semibold transform hover:scale-105 transition-transform"
                    >
                      View Project <ExternalLinkIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {p.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{p.name}</h3>
                  <p className="text-slate-600 mt-2 text-base leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
