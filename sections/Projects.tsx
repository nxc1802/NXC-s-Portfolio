'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import Button from '@/components/Button';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projectsData from '@/data/projects.json';

const Projects = () => {
  return (
    <Section id="projects" title="PROJECTS">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-blue-400/30 transition-all duration-300">
              {/* Project Image - Full size, no margin */}
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-purple-600 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="flex gap-3">
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <FaExternalLinkAlt className="text-white" size={20} />
                    </a>
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <FaGithub className="text-white" size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Info - Centered */}
              <div className="p-6 text-center">
                {/* Project Name */}
                <h3 className="text-2xl font-bold mb-3 text-white font-heading">
                  {project.name}
                </h3>

                {/* Single Description Line */}
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.summary}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded-full text-xs font-medium"
                    >
                      {tech}
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

export default Projects;
