'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaStar, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [particles, setParticles] = useState<Array<{ left: number; top: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    // Generate particle positions on client only
    setParticles(
      [...Array(5)].map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 2,
      }))
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'tech', 'projects', 'testimonials', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: 'NXC', icon: FaHome },
    { id: 'about', label: 'Journey', icon: FaUser },
    { id: 'tech', label: 'Tech', icon: FaCode },
    { id: 'projects', label: 'Projects', icon: FaProjectDiagram },
    { id: 'testimonials', label: 'Reviews', icon: FaStar },
    { id: 'contact', label: 'Contact', icon: FaEnvelope },
  ];

  return (
    <motion.nav
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.div
        className="relative bg-white/10 dark:bg-gray-900/30 backdrop-blur-2xl rounded-full px-6 py-4 shadow-2xl border border-white/20 dark:border-gray-700/30"
        whileHover={{ scale: 1.02 }}
      >
        {/* Gradient border effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl"></div>
        
        <div className="relative flex items-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            const isHovered = hoveredItem === item.id;

            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className="relative px-4 py-2 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Active background */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavBg"
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}

                {/* Hover background */}
                {isHovered && !isActive && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute inset-0 bg-white/10 dark:bg-gray-700/30 rounded-full"
                  />
                )}

                {/* Content */}
                <div className="relative flex items-center gap-2">
                  <Icon
                    className={`text-lg transition-colors ${
                      isActive
                        ? 'text-white'
                        : 'text-gray-600 dark:text-gray-300'
                    }`}
                  />
                  
                  {/* Show label on hover or active */}
                  <AnimatePresence>
                    {(isHovered || isActive) && (
                      <motion.span
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 'auto', opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className={`overflow-hidden whitespace-nowrap text-sm font-medium ${
                          isActive
                            ? 'text-white'
                            : 'text-gray-700 dark:text-gray-200'
                        }`}
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                {/* Active indicator dot */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavDot"
                    className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;

