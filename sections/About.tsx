'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import timelineData from '@/data/timeline.json';
import profileData from '@/data/profile.json';
import Image from 'next/image';

const About = () => {
  return (
    <Section id="about" title="About Me" subtitle={profileData.bio}>
      <div className="space-y-16">
        {/* Education Timeline */}
        <div>
          <motion.div
            className="flex items-center gap-4 mb-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
              🎓
            </div>
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
              Education Journey
            </h3>
          </motion.div>

          <div className="space-y-8">
            {timelineData.education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative group"
              >
                <div className="flex flex-col md:flex-row gap-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-gray-700/30">
                  {/* Image Section */}
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative w-full md:w-48 h-48 rounded-xl overflow-hidden bg-gradient-to-br from-blue-400 to-purple-600 group-hover:shadow-2xl transition-shadow">
                      <motion.div
                        className="w-full h-full flex items-center justify-center text-4xl font-bold text-white"
                        whileHover={{ scale: 1.1, filter: 'blur(3px)' }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.institution.split(' ')[0]}
                      </motion.div>
                      {/* Overlay gradient on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                    </div>
                  </motion.div>

                  {/* Content Section */}
                  <div className="flex-grow relative">
                    {/* Timeline dot */}
                    <div className="absolute -left-11 top-4 hidden md:block w-4 h-4 bg-blue-600 rounded-full border-4 border-blue-200 dark:border-blue-900"></div>
                    
                    <div className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/50 rounded-full mb-3">
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                        {item.year}
                      </span>
                    </div>
                    
                    <h4 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.degree}
                    </h4>
                    
                    <p className="text-lg text-gray-600 dark:text-gray-300 font-medium mb-3 flex items-center gap-2">
                      <span className="text-blue-500">📍</span>
                      {item.institution}
                    </p>
                    
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Connecting line for timeline */}
                {index < timelineData.education.length - 1 && (
                  <div className="hidden md:block absolute left-[-28px] top-20 bottom-[-32px] w-0.5 bg-gradient-to-b from-blue-600 via-purple-500 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <motion.div
            className="flex items-center gap-4 mb-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
              🏆
            </div>
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
              Achievements & Awards
            </h3>
          </motion.div>

          <div className="space-y-8">
            {timelineData.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative group"
              >
                <div className="flex flex-col md:flex-row gap-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-gray-700/30">
                  {/* Image Section */}
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative w-full md:w-48 h-48 rounded-xl overflow-hidden bg-gradient-to-br from-amber-400 to-orange-600 group-hover:shadow-2xl transition-shadow">
                      <motion.div
                        className="w-full h-full flex items-center justify-center text-6xl"
                        whileHover={{ scale: 1.1, filter: 'blur(3px)' }}
                        transition={{ duration: 0.3 }}
                      >
                        🏆
                      </motion.div>
                      {/* Overlay gradient on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                    </div>
                  </motion.div>

                  {/* Content Section */}
                  <div className="flex-grow">
                    <h4 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {achievement.title}
                    </h4>
                    
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {achievement.description}
                    </p>

                    {/* Badge */}
                    <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-amber-100 dark:bg-amber-900/30 rounded-full">
                      <span className="text-2xl">✨</span>
                      <span className="text-sm font-semibold text-amber-700 dark:text-amber-300">
                        Featured Achievement
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;

