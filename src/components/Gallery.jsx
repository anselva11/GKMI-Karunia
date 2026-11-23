import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { churchData } from '../data/churchData';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = churchData.gallery.categories;
  const allItems = churchData.gallery.items;

  const filteredItems =
    activeCategory === 'All'
      ? allItems
      : allItems.filter((item) => item.category === activeCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      }
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#F4F0EA] relative">
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
              {churchData.gallery.eyebrow}
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
            Moments of <span className="italic font-normal text-[#A5865E]">Fellowship</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-[#475569] leading-relaxed font-light"
          >
            {churchData.gallery.subtitle}
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#0C1222] text-[#FAF8F5] shadow-sm'
                  : 'bg-white text-[#475569] hover:bg-[#FAF8F5] border border-[#E8E2D8]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetric / Masonry Grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`relative rounded-3xl overflow-hidden cursor-pointer group bg-[#0C1222] shadow-sm hover:shadow-2xl transition-all duration-300 ${
                  idx === 0 || idx === 3 ? 'sm:row-span-1 h-80' : 'h-80'
                }`}
                onClick={() => setLightboxIndex(idx)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = churchData.identity.logo;
                  }}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.9]"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1222]/90 via-[#0C1222]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

                {/* Hover Details */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#DFC69D] font-semibold mb-1">
                    <Sparkles className="w-3 h-3 text-[#C5A880]" />
                    {item.category}
                  </span>
                  <h4 className="font-serif text-xl font-medium text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#E8E2D8]/80 line-clamp-1 mt-1">
                    {item.caption}
                  </p>
                </div>

                {/* Zoom Icon Pill */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close Lightbox"
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
              }}
              aria-label="Previous Image"
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
              }}
              aria-label="Next Image"
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Image Container */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl"
              />
              <div className="mt-4 text-center text-white">
                <span className="text-xs uppercase tracking-widest text-[#DFC69D]">
                  {filteredItems[lightboxIndex].category}
                </span>
                <h4 className="font-serif text-2xl font-medium mt-1">
                  {filteredItems[lightboxIndex].title}
                </h4>
                <p className="text-sm text-[#E8E2D8]/80 mt-1 max-w-xl">
                  {filteredItems[lightboxIndex].caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
