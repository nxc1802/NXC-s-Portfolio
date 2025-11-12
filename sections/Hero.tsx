'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import profileData from '@/data/profile.json';

// Configurable tilt angle for the rotating text (in degrees)
const TEXT_TILT_ANGLE = 15; // Adjust this value to change the tilt angle

interface RotatingTextProps {
  text: string;
  radius: number;
  tiltAngle: number;
  scale: number;
}

const RotatingText: React.FC<RotatingTextProps> = ({ text, radius, tiltAngle, scale }) => {
  // Repeat text many times to ensure seamless loop
  const repeatedText = `${text} • `.repeat(5);
  
  // Animate startOffset for circular movement - seamless infinite loop
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const duration = 20000; // 20 seconds for one full rotation
    let animationFrameId: number;
    let startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      // Use modulo to create seamless loop - when it reaches 100%, it seamlessly continues
      const progress = (elapsed % duration) / duration;
      setOffset(progress * 100);
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);
  
  // Calculate SVG dimensions
  const svgSize = radius * 2 + 100;
  const centerX = svgSize / 2;
  const centerY = svgSize / 2;
  
  // Generate unique IDs
  const frontId = `textPathFront-${Math.random().toString(36).substr(2, 9)}`;
  const backId = `textPathBack-${Math.random().toString(36).substr(2, 9)}`;
  const clipFrontId = `clipFront-${Math.random().toString(36).substr(2, 9)}`;
  const clipBackId = `clipBack-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <>
      {/* Front part - che người (phần dưới, hiển thị phía trước) */}
      <div
        className="rotating-text-wrapper rotating-text-front"
        style={{
          transform: `translate(-50%, -50%) rotateX(${tiltAngle}deg) scale(${scale})`,
          transformStyle: 'preserve-3d',
        }}
      >
        <svg
          width={svgSize}
          height={svgSize}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            overflow: 'visible',
          }}
        >
          <defs>
            <clipPath id={clipFrontId}>
              <rect x="0" y={centerY} width={svgSize} height={svgSize / 2} />
            </clipPath>
            <path
              id={frontId}
              d={`M ${centerX},${centerY} m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
              fill="none"
            />
          </defs>
          <text
            className="text-xs md:text-sm font-light tracking-wider"
            style={{
              fill: 'rgb(165, 243, 252)',
              opacity: 0.8,
            }}
            clipPath={`url(#${clipFrontId})`}
          >
            {/* First textPath - main rotation */}
            <textPath 
              href={`#${frontId}`} 
              startOffset={`${offset}%`}
            >
              {repeatedText}
            </textPath>
            {/* Second textPath - seamless continuation for infinite loop */}
            <textPath 
              href={`#${frontId}`} 
              startOffset={`${offset - 100}%`}
            >
              {repeatedText}
            </textPath>
          </text>
        </svg>
      </div>
      
      {/* Back part - bị người che (phần trên, hiển thị phía sau) */}
      <div
        className="rotating-text-wrapper rotating-text-back"
        style={{
          transform: `translate(-50%, -50%) rotateX(${tiltAngle}deg) scale(${scale})`,
          transformStyle: 'preserve-3d',
        }}
      >
        <svg
          width={svgSize}
          height={svgSize}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            overflow: 'visible',
          }}
        >
          <defs>
            <clipPath id={clipBackId}>
              <rect x="0" y="0" width={svgSize} height={centerY} />
            </clipPath>
            <path
              id={backId}
              d={`M ${centerX},${centerY} m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
              fill="none"
            />
          </defs>
          <text
            className="text-xs md:text-sm font-light tracking-wider"
            style={{
              fill: 'rgb(165, 243, 252)',
              opacity: 0.6,
            }}
            clipPath={`url(#${clipBackId})`}
          >
            {/* First textPath - main rotation */}
            <textPath 
              href={`#${backId}`} 
              startOffset={`${offset}%`}
            >
              {repeatedText}
            </textPath>
            {/* Second textPath - seamless continuation for infinite loop */}
            <textPath 
              href={`#${backId}`} 
              startOffset={`${offset - 100}%`}
            >
              {repeatedText}
            </textPath>
          </text>
        </svg>
      </div>
    </>
  );
};

const Hero = () => {
  const heroImage = '/images/personal image/profile-hero.png';
  const [isHovered, setIsHovered] = useState(false);
  
  // Get full name from profile data or use a default
  const fullName = profileData.name === 'NXC' ? 'Nguyễn Xuân Cường' : profileData.name;
  
  // Calculate radius based on image size - smaller to be closer to the person
  const imageWidth = 320; // w-80 = 320px
  const imageHeight = 416; // h-[416px]
  // Use width as base and make it closer to the person (around 40-45% of width)
  const radius = imageWidth * 0.411; // ~134px - closer to the person
  
  // Scale factor when hovered
  const scale = isHovered ? 1.08 : 1;

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 pt-12 pb-28 relative">
      <div className="max-w-4xl mx-auto w-full text-center relative">
        {/* Header Text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 relative z-10"
          id="nxc-header"
        >
          <h1 className="inline-flex items-center gap-4 text-lg md:text-xl uppercase tracking-[0.8em] font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-cyan-200 to-sky-400 drop-shadow-[0_10px_25px_rgba(14,165,233,0.45)]">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.85)]" />
            NXC&nbsp;-&nbsp;Portfolio
            <span className="w-5 h-[2px] bg-gradient-to-r from-sky-400 to-purple-500" />
          </h1>
        </motion.div>

        {/* Name - Very Large */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8 relative mt-[208px] md:mt-[450px]"
          id="nxc-name"
        >
          <h2 className="relative z-10 text-[clamp(4rem,13vw,11rem)] font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-indigo-400 font-heading uppercase tracking-tight leading-none drop-shadow-[0_25px_45px_rgba(59,130,246,0.45)]">
            {profileData.name}
          </h2>
          
          {/* Profile Image - Positioned from center of NXC upward (bottom aligns with middle of large NXC text) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute left-1/2 -translate-x-1/2 flex justify-center z-0"
            style={{
              bottom: '50%',
              transformOrigin: 'center bottom',
            }}
          >
            <motion.div
              className="relative w-80 h-[416px] md:w-[400px] md:h-[500px] overflow-visible rounded-[32px]"
              style={{
                transformOrigin: 'center bottom',
              }}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              {/* Rotating text container */}
              <div className="rotating-text-container">
                <RotatingText
                  text={fullName}
                  radius={radius}
                  tiltAngle={TEXT_TILT_ANGLE}
                  scale={scale}
                />
              </div>
              
              {/* Image with z-index to be between front and back text */}
              <div className="relative w-full h-full z-[2] rounded-[32px] overflow-hidden">
                <Image
                  src={heroImage}
                  alt={`${profileData.name} portrait`}
                  fill
                  priority
                  sizes="(max-width: 768px) 20rem, 25rem"
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Spacer to push content down and account for image overlap */}
        <div className="h-[416px] md:h-[500px] mb-12" />

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
