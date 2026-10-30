import React from 'react';
import { Logo } from './Logo';
import { ArrowUp, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

const CURRENT_YEAR = 2026;

interface FooterProps {
  onNavigateToMenu?: () => void;
  onNavigateToHome?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToMenu, onNavigateToHome }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#292A27] text-[#F3F0E7] pt-20 pb-12 border-t border-charcoal-light">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-ivory/10">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Logo variant="light" size="md" />
              <p className="mt-5 text-sm text-ivory/70 font-sans leading-relaxed max-w-sm">
                A specialty coffee sanctuary in Cibeureum, Bogor. Designed for slow sips, deep focus, and unhurried conversations in the cool mountain breeze.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href={BUSINESS_INFO.instagramSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-ivory/80 hover:text-ivory transition-colors px-3 py-1.5 rounded-full bg-ivory/10 hover:bg-ivory/15"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                <span>Follow on Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-ivory/50 mb-4">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm font-sans">
              <li>
                <button
                  onClick={onNavigateToHome}
                  className="text-ivory/80 hover:text-ivory transition-colors editorial-link text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <a href="#story" className="text-ivory/80 hover:text-ivory transition-colors editorial-link">
                  Our Story
                </a>
              </li>
              <li>
                <button
                  onClick={onNavigateToMenu}
                  className="text-ivory/80 hover:text-ivory transition-colors editorial-link text-left flex items-center gap-1.5"
                >
                  <span>Dedicated Full Menu</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-olive text-ivory">60+</span>
                </button>
              </li>
              <li>
                <a href="#space" className="text-ivory/80 hover:text-ivory transition-colors editorial-link">
                  The Space & Atmosphere
                </a>
              </li>
              <li>
                <a href="#location" className="text-ivory/80 hover:text-ivory transition-colors editorial-link">
                  Location & Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Business & Location Info */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-ivory/50 mb-4">
              Location & Hours
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-ivory/75 font-sans leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sage mt-0.5 shrink-0" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-sage shrink-0" />
                <span>Open daily · {BUSINESS_INFO.operatingHours.closingNotice}</span>
              </div>
              <p className="font-mono text-xs text-ivory/60 pt-2">
                Price range: {BUSINESS_INFO.priceRange}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-ivory/50">
          <p>© {CURRENT_YEAR} BATAMU SPACE. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="font-mono text-[11px] text-ivory/40">Cibeureum, Bogor Regency</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-ivory/10 hover:bg-ivory/20 text-ivory transition-colors"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
