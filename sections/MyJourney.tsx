'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Section from '@/components/Section';
import journeyData from '@/data/journey.json';

type GalleryImage = {
  url: string;
  caption: string;
};

type JourneyPeriod = {
  id: string;
  year: string;
  title: string;
  description: string;
  achievements: string[];
  gallery?: GalleryImage[];
};

const fallbackGallery: GalleryImage[] = [{ url: '/images/test.jpg', caption: 'Journey Memory' }];

const JourneyGallery: React.FC<{
  images?: GalleryImage[];
  label: string;
  alignLeft: boolean;
}> = ({ images, label, alignLeft }) => {
  const slides = React.useMemo(() => {
    return images && images.length > 0 ? images : fallbackGallery;
  }, [images]);

  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goTo = React.useCallback(
    (nextIndex: number) => {
      setCurrent((nextIndex + slides.length) % slides.length);
    },
    [slides.length]
  );

  return (
    <div className="relative w-full mb-8">
      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] rounded-[34px] overflow-hidden border border-white/15 bg-gradient-to-br from-slate-900 via-indigo-900/60 to-sky-900/50 shadow-[0_25px_65px_rgba(15,23,42,0.6)]">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 via-transparent to-fuchsia-500/25 blur-2xl" />
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].url}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].url}
              alt={slides[current].caption}
              fill
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover object-center"
              priority={alignLeft}
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation Buttons - Left & Right - More transparent */}
        <button
          type="button"
          aria-label="Previous memory"
          onClick={() => goTo(current - 1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/20 border border-white/10 backdrop-blur-sm text-white text-2xl hover:bg-black/40 transition-all flex items-center justify-center opacity-60 hover:opacity-100"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Next memory"
          onClick={() => goTo(current + 1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/20 border border-white/10 backdrop-blur-sm text-white text-2xl hover:bg-black/40 transition-all flex items-center justify-center opacity-60 hover:opacity-100"
        >
          ›
        </button>
        
        {/* Dots Indicator */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={`${label}-${idx}`}
              type="button"
              aria-label={`View memory ${idx + 1}`}
              onClick={() => goTo(idx)}
              className={`h-2.5 rounded-full transition-all ${
                idx === current ? 'w-8 bg-white' : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* Caption - Fixed height to prevent jumping */}
      <div className="mt-4 text-center h-12 flex items-center justify-center">
        <p className="text-sm text-gray-300 italic line-clamp-2">{slides[current].caption}</p>
      </div>
    </div>
  );
};

const MyJourney = () => {
  const journeyPeriods = journeyData.periods as JourneyPeriod[];

  return (
    <Section id="about" title="MY JOURNEY">
      <div className="max-w-5xl mx-auto relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 transform -translate-x-1/2 hidden lg:block" />

        <div className="space-y-20">
          {journeyPeriods.map((period, index) => {
            const alignLeft = index % 2 === 0;

            return (
              <motion.article
                key={period.id}
                initial={{ opacity: 0, x: alignLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                {/* Timeline Node - centered on timeline */}
                <div 
                  className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)] border-4 border-slate-900 z-30 hidden lg:block left-1/2 -translate-x-1/2 top-[6.5rem]"
                />

                <div className="flex flex-col gap-8">
                  {/* Content and Gallery Grid */}
                  <div className={`flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12`}>
                    {/* Content Side */}
                    <div className={`flex flex-col ${alignLeft ? 'lg:text-right lg:pr-16' : 'lg:col-start-2 lg:pl-16'}`}>
                      {/* Year Badge - aligned with title */}
                      <div className={`flex ${alignLeft ? 'lg:justify-end' : 'lg:justify-start'} justify-center mb-4 relative`}>
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-900 border border-white/10 text-xs uppercase tracking-[0.4em] font-semibold text-cyan-200 relative z-20">
                          {period.year}
                        </div>
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-heading font-semibold text-white mb-4">
                        {period.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {period.description}
                      </p>

                      <div className="space-y-4">
                        <div className={`flex items-center gap-3 text-amber-300 uppercase tracking-[0.3em] text-xs ${alignLeft ? 'lg:justify-end' : ''}`}>
                          <span className="w-8 h-[1px] bg-gradient-to-r from-amber-400 to-transparent" />
                          Achievements
                        </div>
                        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_25px_60px_rgba(15,23,42,0.35)]">
                          <div className="journey-scroll max-h-[12rem] overflow-y-auto pr-2">
                            <ul className="space-y-3">
                              {period.achievements.map((achievement) => (
                                <motion.li
                                  key={achievement}
                                  whileHover={{ x: alignLeft ? -6 : 6 }}
                                  className={`flex items-start gap-3 text-sm text-gray-100 ${alignLeft ? 'lg:flex-row-reverse lg:text-right' : ''}`}
                                >
                                  <span className="mt-1 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.7)] flex-shrink-0" />
                                  <span className="leading-relaxed">{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Gallery Side - aligned with title with top margin */}
                    <div className={`${alignLeft ? 'lg:col-start-2 lg:row-start-1 lg:pl-16' : 'lg:col-start-1 lg:row-start-1 lg:pr-16'} lg:mt-14`}>
                      <JourneyGallery images={period.gallery} label={period.title} alignLeft={alignLeft} />
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default MyJourney;
