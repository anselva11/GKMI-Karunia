import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, HeartHandshake } from 'lucide-react';
import { churchData } from '../data/churchData';

export default function About() {
  const iconMap = {
    Cross: Sparkles,
    Users: Users,
    HeartHandshake: HeartHandshake,
  };

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F4F0EA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
              {churchData.about.eyebrow}
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
            Growing Together in <span className="italic font-normal text-[#A5865E]">Faith</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-[#475569] leading-relaxed font-light"
          >
            {churchData.about.description}
          </motion.p>
        </div>

        {/* 3 Core Values Cards */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {churchData.about.values.map((val, idx) => {
            const Icon = iconMap[val.icon] || Sparkles;
            return (
              <motion.div
                key={val.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
                className="group relative bg-[#FAF8F5] rounded-3xl p-8 sm:p-10 border border-[#E8E2D8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Subtle Number & Accent Line */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-[#E8E2D8] flex items-center justify-center text-[#C5A880] group-hover:bg-[#C5A880] group-hover:text-white transition-colors duration-300 shadow-sm">
                      <Icon className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="font-serif text-3xl font-light text-[#C5A880]/30 group-hover:text-[#C5A880]/60 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif font-semibold text-[#0C1222] tracking-tight mb-3">
                    {val.title}
                  </h3>

                  <p className="text-[#475569] text-base leading-relaxed font-light">
                    {val.description}
                  </p>
                </div>

                {/* Bottom subtle gold line highlight */}
                <div className="mt-8 pt-6 border-t border-[#E8E2D8]/60 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C5A880]" />
                  <span className="text-xs uppercase tracking-wider text-[#64748B] font-medium">
                    Core Value of GKMI Karunia
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
