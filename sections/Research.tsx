'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from '@/components/Section';
import { FaFilePdf } from 'react-icons/fa';
import researchData from '@/data/research.json';

const Research = () => {
  return (
    <Section id="research" title="RESEARCH">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {researchData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-blue-400/30 transition-all duration-300">
              {/* Research Image */}
              <div className="relative w-full h-64 bg-gradient-to-br from-indigo-500 to-cyan-600 overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="flex gap-3">
                    {item.pdf && (
                      <a
                        href={item.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors text-white font-medium"
                      >
                        <FaFilePdf size={20} />
                        <span>View PDF</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Research Info */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-3 text-white font-heading">
                  {item.name}
                </h3>

                <p className="text-gray-400 mb-4 line-clamp-2">
                  {item.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {item.tech.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Research;
