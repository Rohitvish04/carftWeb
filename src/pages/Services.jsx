import React from 'react'

// --- SVG Icons (Self-contained components for clean usage) ---

const WebDevIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const DesignIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9"></path>
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
  </svg>
);

const SeoIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="20" x2="12" y2="10"></line>
    <line x1="18" y1="20" x2="18" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="16"></line>
  </svg>
);

const Services = () => {
  const servicesData = [
    { 
      title: 'Web Development', 
      desc: 'We build modern, scalable, and secure web applications using cutting-edge technologies like React & Node.js.',
      icon: <WebDevIcon className="w-8 h-8 text-indigo-600" />
    },
    { 
      title: 'UI/UX Design', 
      desc: 'Our design process focuses on creating beautiful, responsive, and user-centered digital experiences that are intuitive to use.',
      icon: <DesignIcon className="w-8 h-8 text-indigo-600" />
    },
    { 
      title: 'SEO Optimization', 
      desc: 'We help improve your online visibility and organic search rankings to attract more customers and grow your business.',
      icon: <SeoIcon className="w-8 h-8 text-indigo-600" />
    }
  ];

  return (
    <>
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
      `}</style>
      <section id="services" className="bg-blue-50 font-sans antialiased">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase text-indigo-600 font-semibold tracking-wider animate-fade-in-up opacity-0">
              Our Services
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight animate-fade-in-up opacity-0 delay-100">
              What We Do
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto animate-fade-in-up opacity-0 delay-200">
              From initial concept to final deployment, we offer a range of services to bring your digital vision to life and ensure its success.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, i) => (
              <div 
                key={i}
                className="bg-white p-8 rounded-2xl shadow-lg text-center transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up opacity-0"
                style={{ animationDelay: `${300 + i * 100}ms` }}
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-indigo-100 mx-auto mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
