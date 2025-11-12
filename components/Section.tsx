'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

const Section: React.FC<SectionProps> = ({ children, id, className = '', title, subtitle }) => {
  const marqueeText = title ? Array.from({ length: 8 }, () => `${title} •`).join(' ') : '';

  return (
    <section
      id={id}
      className={`relative py-20 px-4 md:px-8 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {title && (
          <div className="mb-16 overflow-hidden relative">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="w-2/3 h-24 bg-gradient-to-r from-purple-500/20 via-cyan-400/20 to-blue-500/20 blur-3xl" />
            </div>
            <div className="relative flex">
              <motion.h2
                className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-[0.25em] font-heading whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-white/10 via-white/40 to-white/10 drop-shadow-[0_0_25px_rgba(59,130,246,0.25)]"
                animate={{
                  x: ['0%', '-50%'],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'linear',
                }}
              >
                {marqueeText}
              </motion.h2>
              <motion.h2
                className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-[0.25em] font-heading whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-white/10 via-white/40 to-white/10 drop-shadow-[0_0_25px_rgba(59,130,246,0.25)]"
                animate={{
                  x: ['0%', '-50%'],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'linear',
                }}
              >
                {marqueeText}
              </motion.h2>
            </div>
            {subtitle && (
              <p className="relative text-gray-600 dark:text-gray-400 text-lg max-w-3xl text-center mx-auto mt-6">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
