import React, { useState, useEffect } from 'react';
import { Button } from "@heroui/react";

export const Hero = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0, visible: false });
  const [colorIndex, setColorIndex] = useState(0);
  let movementTimer = null;

  // Rainbow colors with slightly higher opacity
  const colors = [
    'rgba(255, 0, 0, 0.25)',      // Red
    'rgba(255, 165, 0, 0.25)',     // Orange
    'rgba(255, 255, 0, 0.25)',     // Yellow
    'rgba(0, 255, 0, 0.25)',       // Green
    'rgba(0, 0, 255, 0.25)',       // Blue
    'rgba(75, 0, 130, 0.25)',      // Indigo
    'rgba(238, 130, 238, 0.25)'    // Violet
  ];

  // Cycle colors every 1.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (cursorPos.visible) {
        setColorIndex((prev) => (prev + 1) % colors.length);
      }
    }, 1500);
    return () => clearInterval(interval);
  }, [cursorPos.visible]);

  const handleMouseMove = (e) => {
    // Get precise cursor position
    const x = e.clientX;
    const y = e.clientY;
    
    setCursorPos({ x, y, visible: true });

    // Hide after 300ms of inactivity
    clearTimeout(movementTimer);
    movementTimer = setTimeout(() => {
      setCursorPos(prev => ({ ...prev, visible: false }));
    }, 300);
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden cursor-default"
      onMouseMove={handleMouseMove}
    >
      {/* Precise cursor-following circle */}
      <div 
        className="fixed pointer-events-none transform -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          width: '120px',
          height: '120px',
          background: `radial-gradient(circle, ${colors[colorIndex]} 0%, transparent 70%)`,
          transition: 'opacity 0.3s, background 0.5s',
          opacity: cursorPos.visible ? 1 : 0,
          zIndex: 10
        }}
      />

      <div className="text-center relative z-20 px-4">
        <p className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent mb-2">
          Hi Everybody
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
          I'm Boutebbakh Chahrazed!
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          A passionate developer who builds awesome things.
        </p>
        <Button
          className="transition-all duration-300 ease-in-out bg-gradient-to-tr from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white px-8 py-3 rounded-full shadow-lg transform hover:scale-105"
        >
          Contact me
        </Button>
      </div>
    </section>
  );
};