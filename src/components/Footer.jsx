import React from 'react';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { churchData } from '../data/churchData';

function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case 'Instagram':
        return <InstagramIcon className="w-5 h-5" />;
      case 'Facebook':
        return <FacebookIcon className="w-5 h-5" />;
      case 'Youtube':
        return <YoutubeIcon className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-[#0C1222] text-white pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-1 border border-[#C5A880]/30 shadow-sm shrink-0">
                <img
                  src={churchData.identity.logo}
                  alt="GKMI Karunia Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-2xl font-serif font-bold text-white tracking-tight">
                  {churchData.identity.name}
                </span>
                <p className="text-[10px] tracking-widest uppercase text-[#DFC69D]">
                  {churchData.identity.formalName}
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm text-[#E8E2D8]/80 leading-relaxed font-light max-w-sm">
              {churchData.footer.brandDescription}
            </p>

            <div className="mt-8 flex items-center gap-3">
              {churchData.footer.socialMedia.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow GKMI Karunia on ${s.name}`}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#E8E2D8] hover:text-[#0C1222] hover:bg-[#C5A880] hover:border-[#C5A880] transition-all duration-200"
                >
                  {getSocialIcon(s.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#DFC69D] mb-6">
              Navigation
            </h4>
            <ul className="space-y-3" aria-label="Footer Quick Links">
              {churchData.footer.quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-[#E8E2D8]/75 hover:text-white hover:underline transition-colors font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#DFC69D] mb-6">
              Church Address & Contact
            </h4>
            <div className="space-y-4 text-sm text-[#E8E2D8]/80 font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {churchData.identity.address}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C5A880] shrink-0" />
                <a
                  href={`tel:${churchData.identity.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {churchData.identity.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C5A880] shrink-0" />
                <a
                  href={`mailto:${churchData.identity.email}`}
                  className="hover:text-white transition-colors"
                >
                  {churchData.identity.email}
                </a>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={churchData.identity.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white text-xs uppercase tracking-wider font-semibold border border-white/15 hover:bg-white/20 transition-all"
              >
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8E2D8]/50">
          <p>{churchData.footer.copyright}</p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-2 text-white/70 hover:text-[#C5A880] transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
