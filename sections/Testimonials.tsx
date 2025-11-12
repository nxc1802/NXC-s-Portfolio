'use client';

import React from 'react';
import Section from '@/components/Section';
import testimonialsData from '@/data/testimonials.json';

const Testimonials = () => {
  return (
    <Section id="testimonials" title="TESTIMONIALS">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonialsData.map((testimonial, index) => (
          <div key={index}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full">
              {/* Quote Text - Centered */}
              <p className="text-gray-300 dark:text-gray-400 text-center leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author Info - Centered with inline avatar */}
              <div className="flex items-center justify-center gap-3 pt-4 border-t border-white/10">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Name and Title */}
                <div className="text-left">
                  <h4 className="font-bold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </Section>
  );
};

export default Testimonials;
