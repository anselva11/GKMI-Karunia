import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Heart, Mail } from 'lucide-react';
import { churchData } from '../data/churchData';

export default function Pastor() {
  return (
    <section id="pastor" className="py-24 sm:py-32 bg-[#F4F0EA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photo Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Main Photo Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[3/4] bg-[#0C1222]">
                <img
                  src={churchData.pastor.image}
                  alt={churchData.pastor.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = churchData.identity.logo;
                  }}
                  className="w-full h-full object-cover object-top filter brightness-[0.92] transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1222]/80 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-[#DFC69D] font-semibold">
                    {churchData.pastor.role}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white mt-1">
                    {churchData.pastor.name}
                  </h3>
                  <p className="text-xs text-white/70">{churchData.identity.name}</p>
                </div>
              </div>

              {/* Decorative Gold Frame Offset */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border border-[#C5A880]/40 -z-10 pointer-events-none" />
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-[#C5A880]" />
              <span className="text-xs uppercase tracking-widest font-semibold text-[#C5A880]">
                {churchData.pastor.eyebrow}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#0C1222] tracking-tight">
              {churchData.pastor.name}
            </h2>

            <p className="mt-1 text-sm uppercase tracking-widest text-[#A5865E] font-semibold">
              {churchData.pastor.role} • {churchData.pastor.church}
            </p>

            {/* Pastor's Quote Box */}
            <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] border border-[#E8E2D8] shadow-sm relative">
              <Quote className="w-10 h-10 text-[#C5A880]/20 absolute top-4 right-4" />
              <p className="text-[#0C1222] font-serif italic text-lg sm:text-xl md:text-2xl font-normal leading-relaxed">
                "{churchData.pastor.quote}"
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-[#64748B]">
                <Heart className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>A heart for God’s people in East Bekasi</span>
              </div>
            </div>

            {/* Biography Paragraphs */}
            <div className="mt-6 space-y-4 text-base text-[#475569] font-light leading-relaxed">
              {churchData.pastor.bio.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>

            {/* Pastoral Contact Link */}
            <div className="mt-8 pt-6 border-t border-[#E8E2D8] flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0C1222] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold hover:bg-[#1E293B] active:scale-95 transition-all shadow"
              >
                <Mail className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Connect with Pastoral Team</span>
              </a>
              <span className="text-xs text-[#64748B]">
                Office: {churchData.identity.phone}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
