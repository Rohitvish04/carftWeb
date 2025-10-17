import React, { useState } from 'react';

// --- SVG Icons ---
const PhoneIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MailIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

// --- Main Contact Component ---
const App = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending', 'sent', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    const subject = encodeURIComponent(`Website inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n---\nContact: ${form.email}`);
    
    // Simulate a small delay before opening mail client for better UX
    setTimeout(() => {
        window.location.href = `mailto:hello@carftweb.in?subject=${subject}&body=${body}`;
        setStatus('sent');
        // Reset form and status after a while
        setTimeout(() => {
            setForm({ name: '', email: '', message: '' });
            setStatus(null);
        }, 4000);
    }, 500);
  };

  return (
    <>
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
      `}</style>
      <section id="contact" className="bg-blue-50 font-sans antialiased">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Side: Contact Info & Text */}
            <div className="space-y-6 text-center lg:text-left">
              <p className="text-sm uppercase text-indigo-600 font-semibold tracking-wider animate-fade-in-up opacity-0">
                Contact Us
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight animate-fade-in-up opacity-0 delay-100">
                Let’s Build Something Together
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-lg mx-auto lg:mx-0 animate-fade-in-up opacity-0 delay-200">
                Have a project in mind? Send us a message, and we’ll get back to you within 24 hours. Or, feel free to book a free 30-minute consultation call.
              </p>

              <div className="pt-6 space-y-6 animate-fade-in-up opacity-0 delay-300">
                <div className="flex items-center gap-4 justify-center lg:justify-start">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-indigo-100 flex items-center justify-center">
                    <PhoneIcon className="w-7 h-7 text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Phone</div>
                    <a href="tel:+919619876309" className="font-semibold text-slate-800 text-lg hover:text-indigo-600 transition-colors">+91 9619876309</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 justify-center lg:justify-start">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-indigo-100 flex items-center justify-center">
                    <MailIcon className="w-7 h-7 text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Email</div>
                    <a href="mailto:hello@carftweb.in" className="font-semibold text-slate-800 text-lg hover:text-indigo-600 transition-colors">hello@carftweb.in</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl animate-fade-in-up opacity-0 delay-400">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">Your Name</label>
                  <input
                    id="name"
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-lg border-slate-300 px-4 py-3 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    placeholder="Aman Kumar"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                  <input
                    id="email"
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-lg border-slate-300 px-4 py-3 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    placeholder="hello@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                  <textarea
                    id="message"
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="4"
                    className="mt-2 block w-full rounded-lg border-slate-300 px-4 py-3 bg-slate-50 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={status === 'sending' || status === 'sent'}
                    className="w-full sm:w-auto bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 disabled:bg-indigo-400 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                  {status === 'sent' && (
                    <div className="text-sm text-green-600 text-center sm:text-left">Opening your email client...</div>
                  )}
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default App;

