import React from 'react';
import { ArrowDownRight, Compass, Sparkles } from 'lucide-react';
import { ContourPattern } from './ContourPattern';

interface HeroProps {
  onExploreMenu: () => void;
  onFindSpace: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onFindSpace }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen pt-28 sm:pt-32 pb-16 lg:pb-24 flex items-center overflow-hidden bg-[#F3F0E7]"
    >
      {/* Subtle topographic contour background */}
      <ContourPattern opacity={0.16} strokeColor="#465347" variant="dense" />

      {/* Editorial top accent bar resembling the printed menu header */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-olive" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full">
        {/* Asymmetric Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Typography & Brand Narrative */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center">
            {/* Meta header tag */}
            <div className="inline-flex items-center gap-3 mb-6 sm:mb-8">
              <span className="w-8 h-[1px] bg-sage" />
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-olive">
                Specialty Coffee · Cibeureum, Bogor
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-[4.25rem] font-extrabold tracking-tight text-charcoal leading-[1.08] mb-6 sm:mb-8">
              GOOD COFFEE.{' '}
              <span className="block font-serif italic font-normal text-olive">
                BETTER MOMENTS.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-charcoal/80 font-sans leading-relaxed max-w-xl mb-10">
              Your space to slow down, enjoy thoughtfully crafted coffee, and make every moment count. Nestled in the cool breeze of Cibeureum, Bogor.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-12">
              <button
                onClick={onExploreMenu}
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-olive text-ivory text-xs sm:text-sm font-sans tracking-wider uppercase font-semibold hover:bg-olive-dark transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <span>Explore Our Menu</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={onFindSpace}
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-transparent border border-olive/30 text-olive text-xs sm:text-sm font-sans tracking-wider uppercase font-semibold hover:bg-sage-100/60 hover:border-olive transition-all duration-300 active:scale-[0.98]"
              >
                <Compass className="w-4 h-4 text-sage" />
                <span>Find Our Space</span>
              </button>
            </div>

            {/* Brand Proof / Context Strip */}
            <div className="pt-8 border-t border-olive/15 grid grid-cols-3 gap-4 max-w-md">
              <div>
                <p className="text-xs font-sans tracking-widest uppercase text-sage-dark font-medium">Category</p>
                <p className="text-sm font-semibold text-charcoal mt-0.5">Specialty Cafe</p>
              </div>
              <div>
                <p className="text-xs font-sans tracking-widest uppercase text-sage-dark font-medium">Atmosphere</p>
                <p className="text-sm font-semibold text-charcoal mt-0.5">Calm & Open</p>
              </div>
              <div>
                <p className="text-xs font-sans tracking-widest uppercase text-sage-dark font-medium">Daily Close</p>
                <p className="text-sm font-semibold text-charcoal mt-0.5">23.00 WIB</p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Photography Composition */}
          <div className="lg:col-span-5 xl:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Backing decorative frame with sage border */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-sage/40 rounded-2xl -z-10 hidden sm:block" />

              {/* Primary Large Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(70,83,71,0.15)] bg-ivory-soft aspect-[4/5] sm:aspect-[3/4]">
                <img
                  src="/images/hero-coffee.jpg"
                  alt="Batamu Space specialty iced coffee preparation"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-80" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-ivory/90 backdrop-blur-md border border-ivory/40 text-charcoal shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-[11px] font-sans font-semibold uppercase tracking-widest text-olive">
                        <Sparkles className="w-3 h-3 text-coffee" />
                        <span>Featured Creation</span>
                      </div>
                      <p className="text-sm font-serif italic font-bold text-charcoal mt-0.5">
                        Kopi Batamu & Dirty Latte
                      </p>
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-olive/10 text-olive">
                      From Rp27k
                    </span>
                  </div>
                </div>
              </div>

              {/* Offset Secondary Image / Stamp */}
              <div className="absolute -bottom-8 -left-6 w-36 sm:w-44 aspect-square rounded-xl overflow-hidden shadow-xl border-4 border-[#F3F0E7] hidden sm:block">
                <img
                  src="/images/space-barista.jpg"
                  alt="Barista at Batamu Space"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Coordinates Badge */}
              <div className="absolute -top-3 left-6 px-3.5 py-1.5 rounded-full bg-olive text-ivory text-[10px] tracking-widest font-mono uppercase shadow-md">
                7WVV+P9 Cibeureum
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

