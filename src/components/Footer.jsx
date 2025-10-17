import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 text-white py-10 relative overflow-hidden">
      {/* Animated background glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#60a5fa_0%,_transparent_70%)]"
      ></motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-6">
        {/* Logo / Name */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-extrabold tracking-wide"
        >
          Carft<span className="text-blue-300">Web</span>
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-blue-100 text-lg max-w-xl mx-auto leading-relaxed"
        >
          Building modern, scalable, and stunning web experiences for your business.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex justify-center space-x-6 mt-4"
        >
          {[
            { icon: <FaFacebook />, link: "#" },
            { icon: <FaInstagram />, link: "#" },
            { icon: <FaLinkedin />, link: "#" },
            { icon: <FaGithub />, link: "#" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-2xl text-blue-100 hover:text-white transition-colors"
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.hr
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1 }}
          className="border-blue-400/40 mt-6 mx-auto w-1/2"
        />

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-sm text-blue-200 pt-4"
        >
          © {new Date().getFullYear()} <span className="font-semibold">CarftWeb</span>. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
