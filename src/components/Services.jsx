import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, Calendar, CheckCircle2, X, ChevronRight, Info } from 'lucide-react';
import { churchData } from '../data/churchData';

export default function Services() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#0C1222] text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <span className="text-xs uppercase tracking-widest font-semibold text-[#DFC69D]">
              {churchData.services.eyebrow}
            </span>
            <span className="w-6 h-px bg-[#C5A880]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white tracking-tight"
          >
            {churchData.services.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-[#E8E2D8]/80 leading-relaxed font-light"
          >
            {churchData.services.subtitle}
          </motion.p>
        </div>

        {/* Modern Schedule Cards */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {churchData.services.schedule.map((svc, idx) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className={`relative rounded-3xl p-8 sm:p-9 border transition-all duration-300 flex flex-col justify-between ${
                svc.recommended
                  ? 'bg-gradient-to-b from-[#131C31] to-[#0F172A] border-[#C5A880]/60 shadow-xl shadow-[#C5A880]/10 ring-1 ring-[#C5A880]/30'
                  : 'bg-[#131C31]/70 border-white/10 hover:border-white/20'
              }`}
            >
              {/* Badge */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider ${
                      svc.recommended
                        ? 'bg-[#C5A880] text-[#0C1222]'
                        : 'bg-white/10 text-[#DFC69D] border border-white/10'
                    }`}
                  >
                    {svc.badge}
                  </span>
                  <span className="text-xs text-white/50">{svc.language}</span>
                </div>

                <h3 className="text-2xl font-serif font-medium text-white mb-4">
                  {svc.name}
                </h3>

                {/* Time & Location Pill Boxes */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-white/90">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#C5A880] shrink-0 border border-white/10">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-white/50">Time</p>
                      <p className="text-base font-semibold text-white">{svc.time}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-white/90">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#C5A880] shrink-0 border border-white/10">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-white/50">Location</p>
                      <p className="text-sm font-medium text-[#E8E2D8]">{svc.location}</p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[#E8E2D8]/70 leading-relaxed font-light">
                  {svc.description}
                </p>
              </div>

              {/* Card Footer Link */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <a
                  href="#plan-visit"
                  className="text-xs font-semibold uppercase tracking-wider text-[#C5A880] hover:text-[#DFC69D] inline-flex items-center gap-1 group"
                >
                  Join This Service
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Schedule Notice & Action */}
        <div className="mt-14 text-center">
          <p className="text-xs text-white/50 mb-6 italic max-w-xl mx-auto">
            {churchData.services.notice}
          </p>

          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs uppercase tracking-widest font-semibold transition-all active:scale-95 shadow-sm"
          >
            <Info className="w-4 h-4 text-[#C5A880]" />
            {churchData.services.ctaText}
          </button>
        </div>
      </div>

      {/* Service Schedule Guide Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FAF8F5] text-[#0C1222] rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-[#C5A880]/30"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#E8E2D8]">
                <h3 className="text-xl font-serif font-bold text-[#0C1222]">
                  GKMI Karunia Service Guide
                </h3>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="p-1 rounded-lg text-[#64748B] hover:text-[#0C1222]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 space-y-4">
                {churchData.services.schedule.map((svc) => (
                  <div key={svc.id} className="p-4 rounded-xl bg-white border border-[#E8E2D8]">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif font-semibold text-[#0C1222]">{svc.name}</h4>
                      <span className="text-xs font-bold text-[#C5A880]">{svc.time}</span>
                    </div>
                    <p className="text-xs text-[#64748B] mt-1">{svc.location} • {svc.language}</p>
                    <p className="text-xs text-[#334155] mt-2">{svc.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8E2D8] flex items-center justify-between">
                <span className="text-xs text-[#64748B]">Need assistance? Contact our secretariat</span>
                <a
                  href="#contact"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded-full bg-[#0C1222] text-[#FAF8F5] text-xs font-semibold hover:bg-[#1E293B]"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
