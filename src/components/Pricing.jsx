// Pricing.jsx
import React from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  const packages = [
    {
      title: "3-Page Static Website",
      desc: "Simple and fast landing pages or small business websites.",
      price: "₹3,000–₹5,000",
    },
    {
      title: "Dynamic Site (Node.js)",
      desc: "Full-featured dynamic websites with database & backend.",
      price: "₹7,000–₹15,000",
    },
    {
      title: "Full Web App",
      desc: "Complex web applications with authentication, APIs, and dashboards.",
      price: "₹20,000+",
    },
  ];

  return (
    <section
      id="pricing"
      className="py-20 px-6 md:px-12 bg-gradient-to-b from-blue-50 via-white to-blue-100 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <motion.h3
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase text-blue-600 font-semibold tracking-widest"
        >
          Pricing
        </motion.h3>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-extrabold text-slate-800 mt-2"
        >
          Our Packages
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-slate-600 max-w-2xl mx-auto"
        >
          Transparent pricing for every type of project. Choose what suits your business best.
        </motion.p>

        {/* Pricing Cards */}
        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-white border rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-300 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <h4 className="text-xl font-semibold text-blue-600">{pkg.title}</h4>
              <p className="mt-3 text-slate-600">{pkg.desc}</p>
              <div className="mt-5 text-2xl font-bold text-slate-800">
                {pkg.price}
              </div>
              <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition-transform hover:scale-105">
                Hire Me
              </button>
            </motion.div>
          ))}
        </div>

        {/* Contract Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 bg-white border rounded-2xl p-10 shadow-md text-left md:text-left max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-blue-600 mb-4 text-center md:text-left">
            Contract & Terms
          </h3>
          <ul className="space-y-4 text-slate-700 leading-relaxed">
            <li>
              <strong>📋 Scope of Work:</strong> Defines the project requirements,
              deliverables, and functionality.
            </li>
            <li>
              <strong>💰 Payment Milestones:</strong> 50% advance before starting, 50%
              after delivery and approval.
            </li>
            <li>
              <strong>⏳ Delivery Timeline:</strong> Typically 1–4 weeks for small
              sites, 4–12 weeks for full web apps.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
