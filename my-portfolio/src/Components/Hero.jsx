import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@heroui/react";

export const Hero = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0, visible: false });
  const [colorIndex, setColorIndex] = useState(0);
  let movementTimer = null;

  const colors = [
    'rgba(244, 114, 182, 0.2)',
    'rgba(192, 132, 252, 0.2)',
    'rgba(147, 197, 253, 0.2)',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (cursorPos.visible) {
        setColorIndex((prev) => (prev + 1) % colors.length);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [cursorPos.visible]);

  const handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    setCursorPos({ x, y, visible: true });

    clearTimeout(movementTimer);
    movementTimer = setTimeout(() => {
      setCursorPos(prev => ({ ...prev, visible: false }));
    }, 300);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-pink-50/30 via-white to-white relative overflow-hidden cursor-default pt-16 pb-20"
      onMouseMove={handleMouseMove}
    >
      {/* Subtle cursor follow glow */}
      <div 
        className="fixed pointer-events-none transform -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          width: '180px',
          height: '180px',
          background: `radial-gradient(circle, ${colors[colorIndex]} 0%, transparent 70%)`,
          transition: 'opacity 0.3s, background 0.8s',
          opacity: cursorPos.visible ? 1 : 0,
          zIndex: 10
        }}
      />

      <div className="text-center relative z-20 px-4 max-w-3xl mx-auto">
        {/* Clean pill badge */}
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-pink-700 text-xs font-semibold mb-6 tracking-wide"
        >
          <span className="w-2 h-2 rounded-full bg-pink-500"></span>
          Data Science &amp; AI Engineer
        </motion.div>

        {/* Main Heading with clean accent */}
        <motion.h1
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-violet-600 bg-clip-text text-transparent">
            Chahrazed Boutebbakh
          </span>
        </motion.h1>

        {/* Clean accent line */}
        <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-violet-500 mx-auto rounded-full mb-6"></div>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed"
        >
          Specializing in end-to-end data pipelines, AI/ML models, cloud infrastructure (GCP, AWS), and intelligent IoT systems.
        </motion.p>

        {/* Clean location info */}
        <motion.p
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="text-xs font-medium text-gray-500 mb-8 flex items-center justify-center gap-1.5"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Constantine, Algeria • Open to Global &amp; Remote Opportunities
        </motion.p>

        {/* Clean Action Buttons */}
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Button
            onClick={scrollToContact}
            className="transition-all duration-200 bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white px-7 py-2.5 rounded-full shadow-md shadow-pink-100 font-medium text-sm cursor-pointer"
          >
            Get In Touch
          </Button>

          <Button
            onClick={scrollToProjects}
            className="transition-all duration-200 bg-white hover:bg-gray-50 text-gray-800 px-7 py-2.5 rounded-full border border-gray-200 shadow-2xs font-medium text-sm cursor-pointer"
          >
            View Projects
          </Button>

          <a
            href="/resume.pdf"
            download="Chahrazed_Boutebbakh_CV.pdf"
            className="inline-flex items-center gap-1.5 px-6 py-2.5 text-pink-600 hover:text-pink-700 bg-pink-50 hover:bg-pink-100/70 rounded-full font-medium text-sm transition-all border border-pink-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};