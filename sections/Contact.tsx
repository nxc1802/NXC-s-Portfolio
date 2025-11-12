'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from '@/components/Section';
import Button from '@/components/Button';
import { FaGithub, FaLinkedin, FaEnvelope, FaEye, FaFacebook, FaTelegram, FaInstagram } from 'react-icons/fa';
import profileData from '@/data/profile.json';

const Contact = () => {
  const socialCards = [
    {
      name: 'Email',
      href: `mailto:${profileData.socialLinks.email}`,
      icon: FaEnvelope,
      accent: 'from-cyan-400 to-blue-500',
    },
    {
      name: 'GitHub',
      href: profileData.socialLinks.github,
      icon: FaGithub,
      accent: 'from-slate-800 to-slate-600',
    },
    {
      name: 'LinkedIn',
      href: profileData.socialLinks.linkedin,
      icon: FaLinkedin,
      accent: 'from-sky-500 to-blue-600',
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/nxc1802',
      icon: FaFacebook,
      accent: 'from-blue-600 to-indigo-600',
    },
    {
      name: 'Telegram',
      href: 'https://t.me/nxc1802',
      icon: FaTelegram,
      accent: 'from-sky-400 to-cyan-400',
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/nxc1802',
      icon: FaInstagram,
      accent: 'from-pink-500 via-orange-400 to-yellow-400',
    },
  ];

  return (
    <Section
      id="contact"
      title="CONTACT"
      className="pb-32"
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[36px] bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-900/50 border border-white/10 p-10 shadow-[0_35px_80px_rgba(2,6,23,0.75)]"
        >
          <div className="relative w-28 h-28 rounded-[28px] overflow-hidden mx-auto mb-8 shadow-[0_30px_60px_rgba(59,130,246,0.45)] border-2 border-cyan-400/30">
            <Image 
              src={profileData.profileImage} 
              alt={profileData.name}
              fill
              sizes="112px"
              className="object-cover"
            />
          </div>
          <div className="text-center space-y-4">
            <div className="text-xs uppercase tracking-[0.5em] text-cyan-200">
              Available Worldwide
            </div>
            <h3 className="text-3xl font-heading font-semibold text-white">
              {profileData.name}
            </h3>
            <p className="text-gray-300">{profileData.title}</p>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 text-sm text-white/80">
              <span className="w-2 h-2 rounded-full bg-emerald-300" />
              {profileData.location}
            </div>
          </div>
          <div className="mt-10 space-y-6 text-center">
            <p className="text-gray-400 text-sm">
              Need a prototype, AI integration, or a high-performance product? Let's jump on a
              call and make it happen.
            </p>
            
            {/* Social Media Icons - Horizontal */}
            <div className="flex items-center justify-center gap-4 py-4">
              {socialCards.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.accent} flex items-center justify-center text-white text-xl shadow-[0_10px_30px_rgba(59,130,246,0.2)] transition-all`}
                    aria-label={social.name}
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>

            <Button
              href={profileData.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="w-full"
            >
              <FaEye />
              View Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
