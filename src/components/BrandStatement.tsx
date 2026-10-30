import React from 'react';
import { ContourPattern } from './ContourPattern';

export const BrandStatement: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#465347] text-[#F3F0E7] overflow-hidden">
      {/* Subtle Contour Pattern in Sage */}
      <ContourPattern opacity={0.18} strokeColor="#657365" variant="dense" />

      {/* Atmospheric Background Photo with Subtle Dark Blend */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img
          src="/images/experience-mood.jpg"
          alt="Coffee moment mood at Batamu Space"
          className="w-full h-full object-cover mix-blend-luminosity"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center">
        {/* Subtle Brand Tag */}
        <div className="inline-flex items-center gap-3 mb-8">
          <span className="w-8 h-[1px] bg-ivory/40" />
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-ivory/70">
            Batamu Philosophy
          </span>
          <span className="w-8 h-[1px] bg-ivory/40" />
        </div>

        {/* Main Statement */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-ivory mb-8">
          TAKE A MOMENT.{' '}
          <span className="block font-serif italic font-normal text-ivory-soft mt-2">
            MAKE IT YOURS.
          </span>
        </h2>

        {/* Supporting Text */}
        <p className="max-w-2xl mx-auto text-base sm:text-xl font-sans text-ivory/80 leading-relaxed font-light">
          From the first sip to the last conversation, find a little space for yourself at Batamu Space.
        </p>

        {/* Decorative Signature Details */}
        <div className="mt-14 flex items-center justify-center gap-8 text-xs font-mono tracking-widest uppercase text-ivory/60">
          <span>Bogor Highland Air</span>
          <span className="w-1.5 h-1.5 rounded-full bg-ivory/30" />
          <span>Thoughtful Roasts</span>
          <span className="w-1.5 h-1.5 rounded-full bg-ivory/30" />
          <span>Mindful Space</span>
        </div>
      </div>
    </section>
  );
};

