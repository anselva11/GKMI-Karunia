import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { churchData } from '../data/churchData';

export default function Ministries() {
  return (
    <section id="ministries" className="py-24 sm:py-32 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="w-6 h-px bg-[#C5A880]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#C5A880]">
              {churchData.ministries.eyebrow}
            </span>
            <span className="w-6 h-px bg-[#C5A880]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#0C1222] tracking-tight"
          >
            Ministries for Every <span className="italic font-normal text-[#A5865E]">Generation</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-[#475569] leading-relaxed font-light"
          >
            {churchData.ministries.subtitle}
          </motion.p>
        </div>

        {/* 6 Ministry Cards Grid */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {churchData.ministries.list.map((m, idx) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative h-96 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-end p-8 bg-[#0C1222]"
            >
              {/* Background Image with Hover Zoom */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={m.image}
                  alt={m.title}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = churchData.identity.logo;
                  }}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.85] group-hover:brightness-95"
                  loading="lazy"
                />
              </div>

              {/* Dark Gradient Overlay for optimal contrast and mood */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1222] via-[#0C1222]/60 to-transparent transition-opacity duration-300" />

              {/* Card Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest bg-white/15 text-[#DFC69D] backdrop-blur-sm border border-white/10">
                    <Sparkles className="w-3 h-3 text-[#C5A880]" />
                    {m.ageGroup}
                  </span>

                  {/* Animated Arrow Icon */}
                  <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-[#C5A880] text-white group-hover:text-[#0C1222] flex items-center justify-center transition-all duration-300 shadow-sm">
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <h3 className="text-2xl font-serif font-semibold text-white tracking-tight mb-2">
                  {m.title}
                </h3>

                <p className="text-sm text-[#E8E2D8]/80 leading-relaxed font-light line-clamp-3">
                  {m.shortDescription}
                </p>
              </div>

              {/* Subtle top border highlight on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#C5A880] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Bottom invitation */}
        <div className="mt-16 text-center">
          <p className="text-sm text-[#64748B]">
            Interested in volunteering or joining a fellowship group?{' '}
            <a href="#contact" className="text-[#A5865E] font-semibold hover:underline">
              Get in touch with us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
