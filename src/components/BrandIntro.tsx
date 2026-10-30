import React from 'react';
import { ContourPattern } from './ContourPattern';

export const BrandIntro: React.FC = () => {
  return (
    <section id="story" className="relative py-24 sm:py-32 bg-[#E9E4D8] overflow-hidden">
      {/* Organic Topographic Contour Layer */}
      <ContourPattern opacity={0.14} strokeColor="#465347" variant="subtle" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-olive" />
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-olive">
              Our Philosophy
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal tracking-tight leading-[1.12]">
            MORE THAN JUST COFFEE.
          </h2>

          <p className="mt-8 text-lg sm:text-xl text-charcoal/85 font-sans leading-relaxed">
            Every cup has its own character. Every visit has its own story. At Batamu Space, we create a comfortable space where good coffee and good moments come together.
          </p>
        </div>

        {/* Editorial Split Grid with Whitespace & Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Side: Two Artful Compositions */}
          <div className="lg:col-span-7 grid grid-cols-12 gap-4 sm:gap-6">
            <div className="col-span-7 overflow-hidden rounded-2xl shadow-lg bg-ivory">
              <img
                src="/images/space/batamu-real-pavilion-clean.jpg"
                alt="Batamu Space comfortable minimalist pavilion atmosphere"
                className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="p-4 bg-ivory-warm">
                <span className="text-[11px] font-mono uppercase tracking-widest text-sage-dark block">
                  Cibeureum · Space
                </span>
                <span className="text-sm font-serif italic text-charcoal font-semibold">
                  A place to sit, pause, and breathe.
                </span>
              </div>
            </div>

            <div className="col-span-5 flex flex-col justify-between">
              <div className="overflow-hidden rounded-2xl shadow-lg bg-ivory mb-4">
                <img
                  src="/images/drink-manual-brew.jpg"
                  alt="Specialty manual brew pourover at Batamu Space"
                  className="w-full h-44 sm:h-52 object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-4 sm:p-5 rounded-2xl bg-olive text-ivory">
                <p className="font-serif italic text-2xl font-bold">23.00</p>
                <p className="text-[11px] uppercase tracking-wider font-sans text-ivory/80 mt-1">
                  Open till late night WIB
                </p>
              </div>
            </div>
          </div>

          {/* Text Side: Three Mindful Statements */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div className="border-l-2 border-olive pl-6">
              <h3 className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-olive mb-2">
                01 / Thoughtful Roasting
              </h3>
              <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed">
                From velvety milk coffee blends like our signature Kopi Batamu to aromatic cold brew extractions like Mont Blanc and Bloody Rose, every recipe is dialed in for balance.
              </p>
            </div>

            <div className="border-l-2 border-sage pl-6">
              <h3 className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-olive mb-2">
                02 / A Space of One’s Own
              </h3>
              <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed">
                Whether you need a quiet corner with your laptop, an open-air terrace table to catch up with old friends, or quick takeaway for your journey, Batamu welcomes your rhythm.
              </p>
            </div>

            <div className="border-l-2 border-muted pl-6">
              <h3 className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-olive mb-2">
                03 / Rooted in Bogor
              </h3>
              <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed">
                Situated in Cibeureum, Kabupaten Bogor, away from relentless traffic. Enjoy the refreshing highland air with a warm cup in hand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

