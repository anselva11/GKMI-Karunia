import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, ExternalLink, ChevronDown, Clock, Heart, Car, Sparkles } from 'lucide-react';
import { churchData } from '../data/churchData';

export default function PlanVisit() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="plan-visit" className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Welcoming Invitation & Address Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-[#C5A880]" />
              <span className="text-xs uppercase tracking-widest font-semibold text-[#C5A880]">
                Plan Your Visit
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#0C1222] tracking-tight leading-tight">
              {churchData.planVisit.headline}
            </h2>

            <p className="mt-4 text-xl sm:text-2xl font-serif italic text-[#A5865E]">
              {churchData.planVisit.subheadline}
            </p>

            <p className="mt-6 text-base text-[#475569] leading-relaxed font-light">
              Stepping into a new church can sometimes feel intimidating, but at GKMI Karunia, you are family from the moment you arrive. Whether you are seeking spiritual peace, fellowship, or a place for your family to grow, our doors are open wide.
            </p>

            {/* Address & Phone Card */}
            <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E2D8] shadow-sm space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D8] flex items-center justify-center text-[#C5A880] shrink-0 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#64748B]">
                    Church Location
                  </h4>
                  <p className="text-base sm:text-lg font-medium text-[#0C1222] mt-1 leading-snug">
                    {churchData.planVisit.address}
                  </p>
                  <p className="text-xs text-[#64748B] mt-1">
                    East Bekasi, Kota Bekasi, Jawa Barat
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-6 border-t border-[#E8E2D8]/60">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D8] flex items-center justify-center text-[#C5A880] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#64748B]">
                    Church Phone & Secretariat
                  </h4>
                  <p className="text-base sm:text-lg font-medium text-[#0C1222] mt-1">
                    <a href={`tel:${churchData.identity.phone}`} className="hover:text-[#A5865E] transition-colors">
                      {churchData.planVisit.phone}
                    </a>
                  </p>
                  <p className="text-xs text-[#64748B] mt-1">
                    Available during church office hours
                  </p>
                </div>
              </div>

              {/* Get Directions Button linking to Google Maps */}
              <div className="pt-2">
                <a
                  href={churchData.identity.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#0C1222] text-[#FAF8F5] text-sm uppercase tracking-wider font-semibold hover:bg-[#1E293B] active:scale-95 transition-all shadow-md group"
                >
                  <MapPin className="w-4 h-4 text-[#C5A880]" />
                  <span>{churchData.planVisit.ctaText}</span>
                  <ExternalLink className="w-4 h-4 text-[#C5A880] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: What to Expect / First-Time FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E2D8] shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#C5A880]" />
                <span className="text-xs uppercase tracking-wider font-semibold text-[#C5A880]">
                  First Time at GKMI Karunia?
                </span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-[#0C1222] mb-6">
                What to Expect
              </h3>

              <div className="space-y-4">
                {churchData.planVisit.faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="border border-[#E8E2D8] rounded-2xl overflow-hidden transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full p-5 text-left flex items-center justify-between gap-4 bg-[#FAF8F5]/50 hover:bg-[#FAF8F5] transition-colors"
                        aria-expanded={isOpen}
                      >
                        <span className="text-base font-serif font-semibold text-[#0C1222]">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-[#C5A880] shrink-0 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="p-5 pt-2 text-sm text-[#475569] leading-relaxed font-light border-t border-[#E8E2D8]/60 bg-white">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Friendly hospitality note */}
              <div className="mt-8 p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D8] flex items-center gap-3">
                <Heart className="w-5 h-5 text-[#C5A880] shrink-0" />
                <p className="text-xs text-[#475569]">
                  Our usher team is stationed at the entrance lobby to welcome you and guide you to your seat.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
