'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import profileData from '@/data/profile.json';

const Hero = () => {
  const heroImage = '/images/personal image/profile-hero.png';

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 pt-12 pb-28 relative">
      <div className="max-w-4xl mx-auto w-full text-center">
        {/* Header Text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="inline-flex items-center gap-4 text-lg md:text-xl uppercase tracking-[0.8em] font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-cyan-200 to-sky-400 drop-shadow-[0_10px_25px_rgba(14,165,233,0.45)]">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.85)]" />
            NXC&nbsp;-&nbsp;Portfolio
            <span className="w-5 h-[2px] bg-gradient-to-r from-sky-400 to-purple-500" />
          </h1>
        </motion.div>

        {/* Profile Image - Behind text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 flex justify-center relative"
        >
          <motion.div
            className="relative w-64 h-80 md:w-72 md:h-96 overflow-hidden rounded-[32px]"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <Image
              src={heroImage}
              alt={`${profileData.name} portrait`}
              fill
              priority
              sizes="(max-width: 768px) 16rem, 18rem"
              className="object-contain"
            />
          </motion.div>
        </motion.div>

        {/* Name - Very Large */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-[clamp(4rem,13vw,11rem)] font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-indigo-400 font-heading uppercase tracking-tight leading-none drop-shadow-[0_25px_45px_rgba(59,130,246,0.45)]">
            {profileData.name}
          </h2>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto"
        >
          <p>{profileData.title}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
