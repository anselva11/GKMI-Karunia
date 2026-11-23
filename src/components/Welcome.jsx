import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Quote, Heart } from 'lucide-react';
import { churchData } from '../data/churchData';

export default function Welcome() {
  return (
    <section id="welcome" className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0C1222]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-[#C5A880]" />
              <span className="text-xs uppercase tracking-widest font-semibold text-[#C5A880]">
                {churchData.welcome.eyebrow}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#0C1222] tracking-tight leading-tight">
              You Have a <span className="italic font-normal text-[#A5865E]">Place Here</span>
            </h2>

            <p className="mt-6 text-lg sm:text-xl text-[#475569] font-light leading-relaxed">
              "{churchData.welcome.content}"
            </p>

            {/* Scripture Highlight Card */}
            <div className="mt-8 p-6 rounded-2xl bg-white border border-[#E8E2D8] shadow-sm relative">
              <Quote className="w-8 h-8 text-[#C5A880]/20 absolute top-4 right-4" />
              <p className="text-[#1E293B] italic text-base sm:text-lg font-serif">
                "{churchData.welcome.featuredVerse.text}"
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A880]">
                  {churchData.welcome.featuredVerse.reference}
                </span>
                <span className="text-xs text-[#94A3B8] flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 text-[#C5A880]" />
                  A place of grace
                </span>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-10">
              <a
                href={churchData.welcome.ctaLink}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0C1222] text-[#FAF8F5] text-sm uppercase tracking-wider font-semibold hover:bg-[#1E293B] active:scale-95 transition-all duration-200 shadow-md group"
              >
                <span>{churchData.welcome.ctaText}</span>
                <ArrowRight className="w-4 h-4 text-[#C5A880] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Photo Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-[#E8E2D8]">
                <img
                  src={churchData.welcome.image}
                  alt="Worship community at GKMI Karunia"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = churchData.identity.logo;
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1222]/70 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xs uppercase tracking-widest text-[#DFC69D] font-semibold">East Bekasi, West Java</p>
                  <p className="text-lg font-serif font-medium mt-1">Gereja Kristen Muria Indonesia</p>
                </div>
              </div>

              {/* Floating Church Building Emblem Card from Assets */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute -bottom-8 -left-6 sm:-left-10 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-[#C5A880]/30 max-w-[220px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-[#FAF8F5] p-1.5 border border-[#E8E2D8] shrink-0">
                    <img
                      src={churchData.identity.logo}
                      alt="Church Building Emblem"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0C1222] font-serif leading-snug">
                      GKMI Karunia
                    </p>
                    <p className="text-[11px] text-[#64748B] mt-0.5">
                      Established for God’s Glory
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Frame Line */}
              <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl border border-[#C5A880]/40 -z-10 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
