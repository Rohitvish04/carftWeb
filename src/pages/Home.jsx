// Home.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center gap-10 min-h-screen px-6 bg-gradient-to-b from-blue-50 via-white to-blue-100 text-center md:text-left overflow-hidden"
    >
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 leading-tight">
          Build Fast. Build Smart. <br /> Welcome to <span className="underline decoration-blue-400">CarftWeb</span>
        </h1>

        <p className="text-gray-600 mt-6 text-lg">
          We create high-performance, responsive, and modern websites for
          businesses and startups that want to stand out online.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link
            to="/services"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-transform hover:scale-105"
          >
            Get Started
          </Link>
          <Link
            to="/portfolio"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-transform hover:scale-105"
          >
            View Projects
          </Link>
        </div>
      </motion.div>

      {/* Image / Illustration Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <motion.img
          src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
          alt="Web Developer Illustration"
          className="w-72 md:w-[420px] drop-shadow-lg rounded-xl"
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
        />
        <div className="absolute -z-10 top-10 left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      </motion.div>
    </section>
  );
};

export default Home;
