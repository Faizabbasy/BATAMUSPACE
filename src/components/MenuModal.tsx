import React, { useState } from 'react';
import { X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { MENU_CARD_REFERENCES } from '../data/menuData';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCardIndex?: number;
}

export const MenuModal: React.FC<MenuModalProps> = ({
  isOpen,
  onClose,
  initialCardIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialCardIndex);

  if (!isOpen) return null;

  const currentCard = MENU_CARD_REFERENCES[currentIndex] || MENU_CARD_REFERENCES[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % MENU_CARD_REFERENCES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + MENU_CARD_REFERENCES.length) % MENU_CARD_REFERENCES.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-charcoal/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-[#F3F0E7] rounded-3xl overflow-hidden shadow-2xl border border-sage/30 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar styled like Batamu olive bar */}
        <div className="bg-olive px-6 py-4 flex items-center justify-between text-ivory">
          <div className="flex items-center gap-3">
            <span className="font-serif italic text-xl font-bold">Batamu.</span>
            <span className="text-[10px] uppercase font-sans tracking-[0.3em] opacity-80 hidden sm:inline">
              SPACE · PHYSICAL MENU ARCHIVE
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={currentCard.image}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg hover:bg-olive-light/50 transition-colors text-ivory/80 hover:text-ivory"
              title="Open full size in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-olive-light/50 transition-colors text-ivory/80 hover:text-ivory"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Card Tabs Bar */}
        <div className="bg-ivory-soft border-b border-sage/20 px-4 py-2.5 flex items-center gap-2 overflow-x-auto">
          {MENU_CARD_REFERENCES.map((card, idx) => (
            <button
              key={card.id}
              onClick={() => setCurrentIndex(idx)}
              className={`px-3 py-1.5 rounded-full text-xs font-sans tracking-wide whitespace-nowrap transition-all ${
                currentIndex === idx
                  ? 'bg-olive text-ivory font-semibold shadow-sm'
                  : 'bg-ivory text-charcoal/70 hover:bg-sage-100 hover:text-charcoal'
              }`}
            >
              {card.title.split(':')[0]} ({idx + 1}/{MENU_CARD_REFERENCES.length})
            </button>
          ))}
        </div>

        {/* Main Image View Area */}
        <div className="relative flex-1 overflow-y-auto p-4 sm:p-6 flex items-center justify-center bg-[#E9E4D8]/60">
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-ivory/90 shadow-md text-olive hover:bg-olive hover:text-ivory transition-all z-10"
            aria-label="Previous menu card"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="max-w-md w-full flex flex-col items-center">
            <img
              src={currentCard.image}
              alt={currentCard.title}
              className="w-full h-auto rounded-xl shadow-lg border border-charcoal/10"
            />
            <div className="mt-3 text-center">
              <p className="font-serif italic font-bold text-base text-charcoal">
                {currentCard.title}
              </p>
              <p className="text-xs text-charcoal/70">{currentCard.subtitle}</p>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-ivory/90 shadow-md text-olive hover:bg-olive hover:text-ivory transition-all z-10"
            aria-label="Next menu card"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-[#F3F0E7] border-t border-sage/20 flex flex-wrap items-center justify-between text-xs text-charcoal/70">
          <span>* All Prices in IDR · Actual printed menu card at Batamu Space</span>
          <span className="font-mono text-[11px] text-olive font-semibold">
            Card {currentIndex + 1} of {MENU_CARD_REFERENCES.length}
          </span>
        </div>
      </div>
    </div>
  );
};
