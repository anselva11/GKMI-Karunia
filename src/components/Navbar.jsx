import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MapPin, Phone, ChevronRight } from 'lucide-react';
import { churchData } from '../data/churchData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#E8E2D8]/80 py-3 text-[#0C1222]'
            : 'bg-gradient-to-b from-[#0C1222]/80 via-[#0C1222]/40 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#home"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#C5A880] rounded-lg p-1"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white/95 p-1 shadow-sm border border-[#C5A880]/30 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={churchData.identity.logo}
                  alt="GKMI Karunia Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-xl font-serif font-bold tracking-tight transition-colors duration-200 ${
                    isScrolled ? 'text-[#0C1222]' : 'text-white'
                  }`}
                >
                  {churchData.identity.name}
                </span>
                <span
                  className={`text-[10px] tracking-widest uppercase transition-colors duration-200 ${
                    isScrolled ? 'text-[#64748B]' : 'text-white/80'
                  }`}
                >
                  Bekasi, Jawa Barat
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
              {churchData.navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group ${
                    isScrolled
                      ? 'text-[#1E293B] hover:text-[#C5A880]'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.name}
                  <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#C5A880] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </a>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#plan-visit"
                className="inline-flex items-center justify-center px-5 py-2.5 text-xs uppercase tracking-wider font-semibold rounded-full bg-[#C5A880] text-[#0C1222] hover:bg-[#DFC69D] active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Plan Your Visit
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
                className={`p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A880] ${
                  isScrolled
                    ? 'text-[#0C1222] hover:bg-[#E8E2D8]/50'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden bg-black/60 backdrop-blur-sm"
            onClick={closeMenu}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-xs bg-[#FAF8F5] shadow-2xl p-6 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E8E2D8]">
                  <div className="flex items-center gap-3">
                    <img
                      src={churchData.identity.logo}
                      alt="Logo"
                      className="w-9 h-9 object-contain rounded-full bg-white p-0.5 border border-[#C5A880]/30"
                    />
                    <span className="font-serif font-bold text-lg text-[#0C1222]">
                      {churchData.identity.name}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={closeMenu}
                    aria-label="Close menu"
                    className="p-2 text-[#64748B] hover:text-[#0C1222] rounded-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="mt-6 flex flex-col space-y-1" aria-label="Mobile Navigation">
                  {churchData.navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-[#1E293B] hover:bg-[#E8E2D8]/50 hover:text-[#C5A880] transition-colors"
                    >
                      {item.name}
                      <ChevronRight className="w-4 h-4 text-[#64748B]/60" />
                    </a>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-[#E8E2D8] space-y-4">
                <a
                  href="#plan-visit"
                  onClick={closeMenu}
                  className="w-full inline-flex items-center justify-center px-4 py-3 text-sm uppercase tracking-wider font-semibold rounded-full bg-[#C5A880] text-[#0C1222] hover:bg-[#DFC69D] active:scale-95 transition-all text-center shadow"
                >
                  Plan Your Visit
                </a>

                <div className="text-xs text-[#64748B] space-y-2 pt-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                    <span className="line-clamp-1">{churchData.identity.city}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                    <span>{churchData.identity.phone}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
