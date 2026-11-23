import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, Calendar as CalendarIcon, Tag, ArrowRight, X } from 'lucide-react';
import { churchData } from '../data/churchData';

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section id="events" className="py-24 sm:py-32 bg-[#FAF8F5] relative">
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
              {churchData.events.eyebrow}
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
            Gatherings & Upcoming <span className="italic font-normal text-[#A5865E]">Events</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-[#475569] leading-relaxed font-light"
          >
            {churchData.events.subtitle}
          </motion.p>
        </div>

        {/* Event Cards Grid */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {churchData.events.list.map((evt, idx) => (
            <motion.div
              key={evt.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E2D8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start"
            >
              {/* Premium Calendar Date Badge */}
              <div className="shrink-0 w-full sm:w-24 rounded-2xl bg-[#0C1222] text-white p-4 text-center border border-[#C5A880]/30 shadow-md">
                <span className="block text-[11px] font-semibold tracking-widest uppercase text-[#DFC69D]">
                  {evt.date.split(' ')[0]}
                </span>
                <span className="block text-3xl font-serif font-bold text-white my-0.5">
                  {evt.date.split(' ')[1]}
                </span>
                <span className="block text-[10px] text-white/50 tracking-wider">
                  {evt.year}
                </span>
              </div>

              {/* Event Information */}
              <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-[#A5865E] bg-[#FAF8F5] px-2.5 py-0.5 rounded-full border border-[#E8E2D8]">
                      <Tag className="w-3 h-3 text-[#C5A880]" />
                      {evt.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#0C1222] mb-3 leading-snug">
                    {evt.title}
                  </h3>

                  <div className="space-y-1.5 text-xs text-[#475569] mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>{evt.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>{evt.location}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed font-light line-clamp-2">
                    {evt.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8E2D8] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedEvent(evt)}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#0C1222] hover:text-[#C5A880] transition-colors group"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A880] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Learn More Event Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FAF8F5] text-[#0C1222] rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-[#C5A880]/30"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#E8E2D8]">
                <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
                  Event Details
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedEvent(null)}
                  className="p-1 text-[#64748B] hover:text-[#0C1222]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-serif font-bold text-[#0C1222] leading-tight">
                  {selectedEvent.title}
                </h3>

                <div className="mt-4 p-4 rounded-2xl bg-white border border-[#E8E2D8] space-y-2 text-xs sm:text-sm text-[#334155]">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-[#C5A880]" />
                    <span className="font-semibold">{selectedEvent.date}, {selectedEvent.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#C5A880]" />
                    <span>{selectedEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#C5A880]" />
                    <span>{selectedEvent.location}</span>
                  </div>
                </div>

                <p className="mt-4 text-sm text-[#475569] leading-relaxed">
                  {selectedEvent.description}
                </p>

                <div className="mt-6 pt-4 border-t border-[#E8E2D8] flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedEvent(null)}
                    className="px-5 py-2.5 rounded-full border border-[#E8E2D8] text-xs font-semibold text-[#475569] hover:bg-white"
                  >
                    Close
                  </button>
                  <a
                    href="#plan-visit"
                    onClick={() => setSelectedEvent(null)}
                    className="px-5 py-2.5 rounded-full bg-[#0C1222] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold hover:bg-[#1E293B]"
                  >
                    Attend Event
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
