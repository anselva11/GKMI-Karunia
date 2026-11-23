import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Calendar, User, BookOpen, Clock, X, ExternalLink } from 'lucide-react';
import { churchData } from '../data/churchData';

export default function Sermons() {
  const [activeSermon, setActiveSermon] = useState(null);

  const allSermons = [churchData.sermons.featured, ...churchData.sermons.list];

  return (
    <section id="sermons" className="py-24 sm:py-32 bg-[#F4F0EA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-3"
            >
              <span className="w-6 h-px bg-[#C5A880]" />
              <span className="text-xs uppercase tracking-widest font-semibold text-[#C5A880]">
                {churchData.sermons.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#0C1222] tracking-tight"
            >
              Messages That <span className="italic font-normal text-[#A5865E]">Inspire</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed font-light max-w-xl"
            >
              {churchData.sermons.subtitle}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-0"
          >
            <a
              href="https://youtube.com/@gkmikarunia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#E8E2D8] text-xs uppercase tracking-wider font-semibold text-[#0C1222] hover:bg-[#FAF8F5] hover:border-[#C5A880] transition-all shadow-sm"
            >
              <span>Watch on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#C5A880]" />
            </a>
          </motion.div>
        </div>

        {/* Featured Sermon Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl overflow-hidden bg-[#0C1222] text-white shadow-xl mb-14 grid grid-cols-1 lg:grid-cols-12"
        >
          {/* Thumbnail / Video Preview Area */}
          <div className="relative lg:col-span-7 h-72 sm:h-96 lg:h-auto overflow-hidden group">
            <img
              src={churchData.sermons.featured.thumbnail}
              alt={churchData.sermons.featured.title}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = churchData.identity.logo;
              }}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.8]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C1222] via-transparent to-transparent lg:hidden" />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                type="button"
                onClick={() => setActiveSermon(churchData.sermons.featured)}
                aria-label={`Watch sermon ${churchData.sermons.featured.title}`}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#C5A880] text-[#0C1222] flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 ring-8 ring-white/20"
              >
                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
              </button>
            </div>

            <div className="absolute top-6 left-6">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#0C1222]/80 backdrop-blur-md text-[#DFC69D] border border-white/10">
                Latest Message
              </span>
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 text-xs text-[#DFC69D] mb-3">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {churchData.sermons.featured.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {churchData.sermons.featured.duration}
                </span>
              </div>

              <span className="text-xs uppercase tracking-widest text-white/50 font-medium">
                {churchData.sermons.featured.category}
              </span>

              <h3 className="text-3xl sm:text-4xl font-serif font-light text-white mt-2 mb-4 leading-tight">
                {churchData.sermons.featured.title}
              </h3>

              <div className="flex items-center gap-2 text-sm text-[#E8E2D8]/90 font-medium mb-4">
                <User className="w-4 h-4 text-[#C5A880]" />
                <span>{churchData.sermons.featured.speaker}</span>
                <span className="text-white/30">|</span>
                <BookOpen className="w-4 h-4 text-[#C5A880]" />
                <span>{churchData.sermons.featured.scripture}</span>
              </div>

              <p className="text-sm text-[#E8E2D8]/75 leading-relaxed font-light mb-6">
                {churchData.sermons.featured.description}
              </p>
            </div>

            <div>
              <button
                type="button"
                onClick={() => setActiveSermon(churchData.sermons.featured)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C5A880] text-[#0C1222] text-xs uppercase tracking-wider font-semibold hover:bg-[#DFC69D] active:scale-95 transition-all shadow"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Watch Sermon</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Sermon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {churchData.sermons.list.map((s, idx) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#FAF8F5] rounded-3xl overflow-hidden border border-[#E8E2D8] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden bg-black">
                  <img
                    src={s.thumbnail}
                    alt={s.title}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = churchData.identity.logo;
                    }}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-[0.88]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                  <button
                    type="button"
                    onClick={() => setActiveSermon(s)}
                    aria-label={`Play ${s.title}`}
                    className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-[#C5A880]/90 text-[#0C1222] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                  >
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </button>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white">
                    <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-sm">
                      {s.category}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm">
                      {s.duration}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-[#64748B] mb-2">
                    <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>{s.date}</span>
                  </div>

                  <h4 className="text-xl font-serif font-semibold text-[#0C1222] mb-2 leading-snug group-hover:text-[#A5865E] transition-colors">
                    {s.title}
                  </h4>

                  <div className="flex items-center gap-2 text-xs text-[#475569] mb-3">
                    <span>{s.speaker}</span>
                    <span>•</span>
                    <span className="italic">{s.scripture}</span>
                  </div>

                  <p className="text-xs text-[#64748B] line-clamp-2 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 pt-2 border-t border-[#E8E2D8]/50 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveSermon(s)}
                  className="text-xs uppercase tracking-wider font-semibold text-[#0C1222] hover:text-[#C5A880] inline-flex items-center gap-1.5 transition-colors"
                >
                  <Play className="w-3.5 h-3.5 fill-current text-[#C5A880]" />
                  Watch Sermon
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sermon Watch Modal */}
      <AnimatePresence>
        {activeSermon && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setActiveSermon(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0C1222] text-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl border border-white/10"
            >
              {/* Fake Video Player Screen */}
              <div className="relative aspect-video bg-black flex flex-col items-center justify-center p-6 text-center">
                <img
                  src={activeSermon.thumbnail}
                  alt={activeSermon.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#C5A880] text-[#0C1222] flex items-center justify-center mb-4 shadow-xl">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                  <p className="text-lg font-serif font-medium">{activeSermon.title}</p>
                  <p className="text-xs text-[#DFC69D] mt-1">{activeSermon.speaker} • {activeSermon.scripture}</p>
                  <p className="text-[11px] text-white/50 mt-3 max-w-sm">
                    Streaming recording available via GKMI Karunia Media Channel.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveSermon(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Sermon info */}
              <div className="p-6 bg-[#131C31]">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-medium text-white">{activeSermon.title}</h3>
                    <p className="text-xs text-[#E8E2D8]/70 mt-1">{activeSermon.date} • {activeSermon.category}</p>
                  </div>
                  <a
                    href="https://youtube.com/@gkmikarunia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-[#C5A880] text-[#0C1222] text-xs font-semibold hover:bg-[#DFC69D]"
                  >
                    Open in YouTube
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
