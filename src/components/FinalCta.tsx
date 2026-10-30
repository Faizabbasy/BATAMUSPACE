import React from 'react';
import { ArrowUpRight, MapPin, Sparkles } from 'lucide-react';
import { ContourPattern } from './ContourPattern';

interface FinalCtaProps {
  onFindUs: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onFindUs }) => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#E9E4D8] overflow-hidden">
      {/* Topographic Contour Texture */}
      <ContourPattern opacity={0.16} strokeColor="#465347" variant="dense" />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 text-center">
        {/* Decorative Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-olive/10 text-olive text-xs font-mono uppercase tracking-widest font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Warm Welcome in Bogor</span>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal tracking-tight leading-[1.12] mb-6">
          YOUR NEXT FAVORITE COFFEE{' '}
          <span className="block font-serif italic font-normal text-olive">
            IS WAITING.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="max-w-xl mx-auto text-base sm:text-lg text-charcoal/80 font-sans leading-relaxed mb-10">
          Come by, take a seat, and enjoy your moment at Batamu Space. Slow down, sip slowly, and let the highland breeze take over.
        </p>

        {/* Big Impactful CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onFindUs}
            className="group inline-flex items-center gap-3 px-9 py-4 rounded-full bg-olive text-ivory text-xs sm:text-sm font-sans tracking-widest uppercase font-bold hover:bg-olive-dark transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98]"
          >
            <MapPin className="w-4 h-4 text-ivory/80" />
            <span>FIND US HERE</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Closing details */}
        <p className="mt-8 text-xs font-mono text-charcoal/60 tracking-wider">
          Jl. Djarum Kp. Joglo RT 004/005, Cibeureum, Bogor · Closes 23.00 WIB
        </p>
      </div>
    </section>
  );
};

