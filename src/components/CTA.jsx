import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { churchData } from '../data/churchData';

export default function CTA() {
  return (
    <section className="relative py-28 sm:py-36 bg-[#0C1222] overflow-hidden">
      {/* Background Image with subtle scale */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#0C1222]">
        <img
          src={churchData.cta.bgImage}
          alt="GKMI Karunia Church Community"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.1]"
          loading="lazy"
        />
        {/* Layered cinematic dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C1222] via-[#0C1222]/85 to-[#0C1222]/70" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Top subtle badge */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-white/10 text-[#DFC69D] border border-white/15 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              Join the Family
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-white tracking-tight leading-tight max-w-3xl">
            {churchData.cta.headline}
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-[#E8E2D8] font-light max-w-2xl leading-relaxed">
            {churchData.cta.subheadline}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#plan-visit"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#C5A880] text-[#0C1222] text-sm uppercase tracking-wider font-semibold hover:bg-[#DFC69D] active:scale-95 transition-all shadow-lg hover:shadow-[#C5A880]/20"
            >
              {churchData.cta.primaryButton}
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 text-sm uppercase tracking-wider font-semibold backdrop-blur-sm active:scale-95 transition-all"
            >
              {churchData.cta.secondaryButton}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
