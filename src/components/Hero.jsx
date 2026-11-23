import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Calendar, ChevronDown, Sparkles } from 'lucide-react';
import { churchData } from '../data/churchData';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0C1222]"
    >
      {/* Background Image with subtle cinematic zoom animation */}
      <motion.div
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 7, ease: 'easeOut' }}
        className="absolute inset-0 z-0 overflow-hidden bg-[#0C1222]"
      >
        {/* Full-bleed background from Assets/images across the entire screen */}
        <img
          src={churchData.hero.bgImage}
          alt="GKMI Karunia"
          className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.1]"
          loading="eager"
        />

        {/* Multi-layered cinematic gradient overlay for perfect readability and editorial mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C1222] via-[#0C1222]/75 to-[#0C1222]/55" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0C1222]/35 to-[#0C1222]/90" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Top Pill / Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-white/10 text-[#DFC69D] border border-[#DFC69D]/30 backdrop-blur-md shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              {churchData.hero.badge}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-white tracking-tight leading-[1.08] max-w-4xl"
          >
            Welcome to <br />
            <span className="font-normal italic text-[#FAF8F5]">GKMI Karunia</span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg sm:text-xl md:text-2xl text-[#E8E2D8] font-light max-w-2xl leading-relaxed"
          >
            {churchData.hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#plan-visit"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm uppercase tracking-wider font-semibold rounded-full bg-[#C5A880] text-[#0C1222] hover:bg-[#DFC69D] active:scale-95 transition-all duration-200 shadow-lg hover:shadow-[#C5A880]/20"
            >
              {churchData.hero.primaryCta}
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm uppercase tracking-wider font-semibold rounded-full bg-white/10 text-white hover:bg-white/20 border border-white/25 backdrop-blur-sm active:scale-95 transition-all duration-200"
            >
              {churchData.hero.secondaryCta}
            </a>
          </motion.div>

          {/* Service Time Highlight Box */}
          <motion.div
            variants={itemVariants}
            className="mt-14 inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-6 py-3 rounded-2xl bg-[#0C1222]/80 border border-white/15 backdrop-blur-md text-xs sm:text-sm text-[#E8E2D8] shadow-2xl"
          >
            <div className="flex items-center gap-2 text-[#C5A880] font-semibold">
              <Calendar className="w-4 h-4" />
              <span>{churchData.hero.serviceHighlight.label}</span>
            </div>
            <div className="hidden sm:block text-white/30">•</div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C5A880]" />
              <span>{churchData.hero.serviceHighlight.time}</span>
            </div>
            <div className="hidden sm:block text-white/30">•</div>
            <div className="flex items-center gap-2 text-[#E8E2D8]/80">
              <MapPin className="w-4 h-4 text-[#C5A880]" />
              <span>{churchData.hero.serviceHighlight.location}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none text-white/60"
      >
        <span className="text-[10px] uppercase tracking-widest mb-1 text-white/50">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-[#C5A880]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
