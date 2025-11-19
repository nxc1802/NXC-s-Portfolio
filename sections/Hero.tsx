'use client';

import React, { useState, useEffect, useId } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import profileData from '@/data/profile.json';

// Configurable tilt angle for the rotating text (in degrees)
const TEXT_TILT_ANGLE = 15; // Adjust this value to change the tilt angle

interface RotatingTextProps {
  repeatedText: string;
  radius: number;
  tiltAngle: number;
  scale: number;
}

const RotatingText: React.FC<RotatingTextProps> = ({ repeatedText, radius, tiltAngle, scale }) => {
  
  // Animate startOffset for circular movement - seamless infinite loop
  const [offset, setOffset] = useState(0);
  
  // Generate unique IDs using useId() to avoid hydration mismatch
  // Clean the ID to ensure it's valid for SVG (remove colons and other special chars)
  const baseId = useId().replace(/:/g, '-');
  const frontId = `textPathFront-${baseId}`;
  const backId = `textPathBack-${baseId}`;
  const clipFrontId = `clipFront-${baseId}`;
  const clipBackId = `clipBack-${baseId}`;
  
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
            className="font-light tracking-wider"
            style={{
              fill: 'rgb(165, 243, 252)',
              opacity: 0.8,
              fontSize: 'clamp(0.625rem, 1.5vw, 0.875rem)', // Responsive: 10px on mobile, 14px on desktop
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
            className="font-light tracking-wider"
            style={{
              fill: 'rgb(165, 243, 252)',
              opacity: 0.6,
              fontSize: 'clamp(0.625rem, 1.5vw, 0.875rem)', // Responsive: 10px on mobile, 14px on desktop
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
  const fullName = profileData.name === 'NXC' ? 'Nguyen Xuan Cuong' : profileData.name;
  
  // Chốt số lượng repeat
  const REPEAT_COUNT = 5;
  const textWithSeparator = `${fullName} • `;
  const repeatedText = textWithSeparator.repeat(REPEAT_COUNT);
  
  // Tính toán radius dựa trên chiều dài text để chu vi vừa khít
  // Sử dụng fontSize trung bình để tính toán (giữa mobile 10px và desktop 14px)
  const averageFontSize = 12; // px - giá trị trung bình
  // Ước tính chiều rộng mỗi ký tự: fontSize * 0.6 (cho font-light tracking-wider)
  const avgCharWidth = averageFontSize * 0.68;
  // Tính tổng chiều dài text khi repeat
  const textLength = repeatedText.length * avgCharWidth;
  // Tính radius từ chu vi: circumference = 2 * π * radius => radius = circumference / (2 * π)
  // Chu vi = chiều dài text để vừa khít
  const circumference = textLength;
  const radius = circumference / (2 * Math.PI);
  
  // Scale factor when hovered
  const scale = isHovered ? 1.08 : 1;

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-3 sm:px-4 md:px-8 pt-8 sm:pt-12 pb-20 sm:pb-28 relative">
      <div className="max-w-4xl mx-auto w-full text-center relative">
        {/* Header Text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 sm:mb-6 relative z-10"
          id="nxc-header"
        >
          <h1 className="inline-flex items-center gap-2 sm:gap-3 md:gap-4 text-sm sm:text-lg md:text-xl uppercase tracking-[0.3em] sm:tracking-[0.5em] md:tracking-[0.8em] font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-cyan-200 to-sky-400 drop-shadow-[0_10px_25px_rgba(14,165,233,0.45)]">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.85)]" />
            NXC&nbsp;-&nbsp;Portfolio
            <span className="w-4 h-[2px] sm:w-5 sm:h-[2px] bg-gradient-to-r from-sky-400 to-purple-500" />
          </h1>
        </motion.div>

        {/* Name - Very Large */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-4 relative mt-[120px] sm:mt-[160px] md:mt-[450px]"
          id="nxc-name"
        >
          <h2 className="relative z-10 text-[clamp(3rem,12vw,11rem)] sm:text-[clamp(3.5rem,13vw,11rem)] font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-indigo-400 font-heading uppercase tracking-tight leading-none drop-shadow-[0_25px_45px_rgba(59,130,246,0.45)]">
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
              className="relative w-64 h-[332px] sm:w-72 sm:h-[374px] md:w-[400px] md:h-[500px] overflow-visible rounded-[24px] sm:rounded-[28px] md:rounded-[32px]"
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
                  repeatedText={repeatedText}
                  radius={radius}
                  tiltAngle={TEXT_TILT_ANGLE}
                  scale={scale}
                />
              </div>
              
              {/* Image with z-index to be between front and back text */}
              <div className="relative w-full h-full z-[2] rounded-[24px] sm:rounded-[28px] md:rounded-[32px] overflow-hidden">
                <Image
                  src={heroImage}
                  alt={`${profileData.name} portrait`}
                  fill
                  priority
                  sizes="(max-width: 640px) 16rem, (max-width: 768px) 18rem, 25rem"
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto mt-6 sm:mt-8 md:mt-12 px-2"
        >
          <p className="leading-relaxed">{profileData.title}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
