import React, { useState } from 'react';
import { SPECIAL_MENU_ITEMS } from '../data/menuData';
import { Sparkles, Flame, Eye, X, ArrowUpRight } from 'lucide-react';
import { ContourPattern } from './ContourPattern';

interface SpecialMenuSectionProps {
  onOpenVisitModal?: () => void;
  className?: string;
}

export const SpecialMenuSection: React.FC<SpecialMenuSectionProps> = ({
  onOpenVisitModal,
  className = '',
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <section className={`relative py-20 sm:py-28 bg-[#1D1E1B] text-[#F3F0E7] overflow-hidden ${className}`}>
      {/* Subtle Contour Texture in Sage */}
      <ContourPattern opacity={0.12} strokeColor="#657365" variant="dense" />

      {/* Atmospheric ambient lighting effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-olive/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-coffee/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-ivory/15 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ivory/10 text-ivory text-xs font-mono tracking-widest uppercase font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#D3C9B8]" />
              <span>Chef's Signature Selection</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-ivory">
              MENU SPESIAL{' '}
              <span className="block font-serif italic font-normal text-ivory/80 text-2xl sm:text-4xl mt-1">
                Batamu Space
              </span>
            </h2>

            <p className="mt-3 text-sm sm:text-base text-ivory/70 max-w-xl font-sans">
              Koleksi hidangan unggulan dengan cita rasa autentik dan presentasi istimewa khas Batamu Space, Bogor.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setSelectedPhoto('/images/menu-special-curated.jpg')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ivory/15 hover:bg-ivory/25 border border-ivory/20 text-xs font-sans font-semibold tracking-wider uppercase text-ivory transition-all shadow-sm"
              title="View full authentic plated photography"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Lihat Foto Plating Asli</span>
            </button>
          </div>
        </div>

        {/* 4 Special Menu Cards with Product Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SPECIAL_MENU_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between rounded-3xl overflow-hidden bg-[#292A27] border border-ivory/15 p-5 sm:p-6 transition-all duration-300 hover:border-ivory/40 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.4)]"
            >
              <div>
                {/* Plate Photo (Circular Ceramic Style) */}
                <div
                  className="relative aspect-square w-full rounded-2xl overflow-hidden bg-charcoal-deep mb-5 cursor-pointer shadow-inner"
                  onClick={() => setSelectedPhoto(item.image)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/60 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 text-[10px] font-sans font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-coffee text-ivory shadow-md">
                      <Flame className="w-2.5 h-2.5" />
                      <span>Spesial</span>
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 p-1.5 rounded-full bg-charcoal/70 backdrop-blur-sm text-ivory/80 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Subcategory */}
                <span className="text-[10px] font-mono tracking-widest uppercase text-ivory/60 block mb-1">
                  {item.subCategory}
                </span>

                {/* Dish Name & Price */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-serif italic text-xl font-bold text-ivory group-hover:text-[#D3C9B8] transition-colors leading-snug">
                    {item.name}
                  </h3>
                  <span className="font-mono text-base font-bold text-ivory shrink-0">
                    {item.priceShort}
                  </span>
                </div>

                {/* Description from reference */}
                <p className="mt-2 text-xs text-ivory/75 font-sans leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>

              {/* Notes Chips */}
              <div className="mt-5 pt-4 border-t border-ivory/10 flex flex-wrap gap-1.5">
                {item.notes.map((note) => (
                  <span
                    key={note}
                    className="text-[10px] font-sans px-2 py-0.5 rounded bg-ivory/10 text-ivory/80"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-olive/40 border border-ivory/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-ivory/10 flex items-center justify-center text-ivory shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="font-serif italic font-bold text-base text-ivory">
                Tersedia setiap hari di Batamu Space
              </p>
              <p className="text-xs text-ivory/70">
                Disajikan hangat dan freshly prepared di dapur kami di Cibeureum, Bogor.
              </p>
            </div>
          </div>

          {onOpenVisitModal && (
            <button
              onClick={onOpenVisitModal}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-ivory text-charcoal text-xs font-sans font-bold uppercase tracking-wider hover:bg-ivory-soft transition-all shadow-md shrink-0"
            >
              <span>Kunjungi Batamu</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Lightbox Modal for Dish Photos */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl bg-charcoal p-2 border border-ivory/20"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto}
              alt="Plating asli Menu Spesial Batamu Space"
              className="w-full h-auto max-h-[75vh] object-contain rounded-xl mx-auto"
            />
            <div className="p-3 text-center text-xs text-ivory/80 font-sans flex items-center justify-between">
              <span>* Foto plating asli dari Batamu Space, Cibeureum Bogor</span>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-1.5 rounded-lg bg-ivory/15 hover:bg-ivory/25 text-ivory"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

