// About.jsx
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-100 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Image / Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <img
            src="https://content-hub.dribbble.com/wp-content/uploads/2024/02/hero_image-40-1344x1000.jpg"
            alt="Creative Team at Work"
            className="w-80 md:w-[420px] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left"
        >
          <h3 className="text-4xl font-extrabold text-blue-700 mb-4">
            About <span className="text-blue-500">CarftWeb</span>
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg max-w-xl mx-auto md:mx-0">
            At CarftWeb, we specialize in crafting high-quality, user-friendly
            web experiences tailored to your business needs. Whether it’s a
            startup landing page or a dynamic web app, we focus on clean design,
            modern tech, and optimized performance — ensuring your digital
            presence shines.
          </p>

          <div className="mt-6">
            <a
              href="#services"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition-transform"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
