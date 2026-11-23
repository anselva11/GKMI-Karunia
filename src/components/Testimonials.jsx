import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { churchData } from '../data/churchData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = churchData.testimonials.list;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="w-6 h-px bg-[#C5A880]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#C5A880]">
              {churchData.testimonials.eyebrow}
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
            Voices of Our <span className="italic font-normal text-[#A5865E]">Community</span>
          </motion.h2>
        </div>

        {/* Minimal Luxury Carousel Card */}
        <div className="relative bg-white rounded-3xl p-8 sm:p-14 lg:p-16 border border-[#E8E2D8] shadow-sm">
          <Quote className="w-16 h-16 text-[#C5A880]/20 absolute top-8 left-8 sm:top-12 sm:left-12 pointer-events-none" />

          <div className="relative min-h-[220px] sm:min-h-[180px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#0C1222] font-light leading-relaxed max-w-3xl mx-auto">
                  "{current.quote}"
                </p>

                <div className="mt-8 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#C5A880] mb-3 shadow">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-serif font-semibold text-base sm:text-lg text-[#0C1222]">
                    {current.name}
                  </h4>
                  <p className="text-xs uppercase tracking-wider text-[#64748B] mt-0.5">
                    {current.role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Navigation Controls */}
          <div className="mt-8 pt-6 border-t border-[#E8E2D8]/60 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-8 bg-[#C5A880]'
                      : 'w-2 bg-[#E8E2D8] hover:bg-[#C5A880]/50'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-[#E8E2D8] flex items-center justify-center text-[#0C1222] hover:bg-[#FAF8F5] hover:border-[#C5A880] transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-[#E8E2D8] flex items-center justify-center text-[#0C1222] hover:bg-[#FAF8F5] hover:border-[#C5A880] transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
