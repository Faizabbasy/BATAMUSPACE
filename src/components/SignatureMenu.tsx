import React, { useState } from 'react';
import { COFFEE_MILK_ITEMS, BARISTA_RECOMMENDATION_ITEMS, MANUAL_BREW_INFO } from '../data/menuData';
import { ContourPattern } from './ContourPattern';
import { Sparkles, Eye, Coffee, Filter, Flame, ArrowRight, UtensilsCrossed } from 'lucide-react';
import type { MenuItem } from '../types';

interface SignatureMenuProps {
  onOpenOriginalMenu: (cardIndex?: number) => void;
  onNavigateToFullMenu: () => void;
}

export const SignatureMenu: React.FC<SignatureMenuProps> = ({
  onOpenOriginalMenu,
  onNavigateToFullMenu,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'milk' | 'barista'>('all');
  const [useShortPrice, setUseShortPrice] = useState(false);

  const renderMenuItem = (item: MenuItem, index: number) => {
    return (
      <div
        key={item.id}
        className="group relative pb-6 border-b border-olive/15 transition-all duration-300 hover:border-olive"
      >
        <div className="flex items-baseline justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-sage-dark select-none">
              {(index + 1).toString().padStart(2, '0')}.
            </span>
            <h4 className="text-lg sm:text-xl font-bold font-sans text-charcoal group-hover:text-olive transition-colors">
              {item.name}
            </h4>
            {item.isSignature && (
              <span className="inline-flex items-center gap-1 text-[10px] font-sans font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-olive/10 text-olive">
                <Sparkles className="w-2.5 h-2.5" />
                <span>Signature</span>
              </span>
            )}
            {item.isBestSeller && (
              <span className="inline-flex items-center gap-1 text-[10px] font-sans font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-coffee/10 text-coffee">
                <Flame className="w-2.5 h-2.5" />
                <span>Best Seller</span>
              </span>
            )}
          </div>

          <div className="text-right">
            <span className="text-base sm:text-lg font-mono font-bold text-olive">
              {useShortPrice ? item.priceShort : item.priceFormatted}
            </span>
          </div>
        </div>

        <p className="mt-1.5 text-sm text-charcoal/75 font-sans leading-relaxed">
          {item.description}
        </p>

        {/* Tasting notes tags */}
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {item.notes.map((note) => (
            <span
              key={note}
              className="text-[11px] font-sans px-2 py-0.5 rounded bg-ivory-soft text-charcoal/70 border border-charcoal/5"
            >
              {note}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="menu" className="relative py-24 sm:py-32 bg-[#F3F0E7] overflow-hidden">
      {/* Topographic Contour Texture */}
      <ContourPattern opacity={0.15} strokeColor="#465347" variant="dense" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-olive/20 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-olive" />
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-olive">
                Menu Reference
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal tracking-tight">
              CRAFTED TO YOUR TASTE.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-charcoal/75 font-sans">
              Discover your next favorite cup. All prices in IDR.
            </p>
          </div>

          {/* Interactive controls */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Direct button to dedicated menu page */}
            <button
              onClick={onNavigateToFullMenu}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-olive text-ivory text-xs font-sans font-bold tracking-wider uppercase hover:bg-olive-dark transition-all shadow-md active:scale-95"
            >
              <UtensilsCrossed className="w-3.5 h-3.5" />
              <span>Dedicated Full Menu</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* View authentic menu scan */}
            <button
              onClick={() => onOpenOriginalMenu(0)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ivory border border-olive/30 text-xs font-sans font-semibold tracking-wider uppercase text-olive hover:bg-olive hover:text-ivory transition-all shadow-sm"
              title="Inspect the authentic Batamu Space printed menu card"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Physical Menu Cards (10)</span>
            </button>

            {/* Price format switch */}
            <button
              onClick={() => setUseShortPrice(!useShortPrice)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-sage-50 text-[11px] font-sans font-medium text-olive border border-sage/20 hover:bg-sage-100 transition-colors"
            >
              <span>Format:</span>
              <span className="font-mono font-bold">{useShortPrice ? '27k' : 'Rp27.000'}</span>
            </button>
          </div>
        </div>

        {/* Dedicated Menu Discovery Banner */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-ivory-soft border border-olive/25 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-olive/10 text-olive flex items-center justify-center shrink-0 mt-0.5">
              <UtensilsCrossed className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded bg-olive/15 text-olive font-bold">
                  New Feature
                </span>
                <span className="text-xs text-charcoal/60">60+ Culinary Items</span>
              </div>
              <h3 className="text-lg sm:text-xl font-serif italic font-bold text-charcoal mt-1">
                Explore Main Course, Savory Dishes, Appetizers & Matcha
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/70 mt-1 max-w-xl">
                Looking for Nasi Lada Garam, Spaghetti Carbonara, Chicken Cordon Bleu, Churros, or Strawberry Matcha? Visit our dedicated menu page.
              </p>
            </div>
          </div>

          <button
            onClick={onNavigateToFullMenu}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-olive text-ivory text-xs font-sans font-bold tracking-wider uppercase hover:bg-olive-dark transition-all shadow-md shrink-0 self-stretch md:self-auto justify-center"
          >
            <span>Open Dedicated Menu Page</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 mb-12 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2 rounded-full text-xs font-sans tracking-wider uppercase font-semibold transition-all ${
              activeTab === 'all'
                ? 'bg-olive text-ivory shadow-sm'
                : 'bg-ivory-soft text-charcoal/70 hover:text-charcoal hover:bg-sage-100'
            }`}
          >
            Coffee Selection ({COFFEE_MILK_ITEMS.length + BARISTA_RECOMMENDATION_ITEMS.length})
          </button>
          <button
            onClick={() => setActiveTab('milk')}
            className={`px-5 py-2 rounded-full text-xs font-sans tracking-wider uppercase font-semibold transition-all ${
              activeTab === 'milk'
                ? 'bg-olive text-ivory shadow-sm'
                : 'bg-ivory-soft text-charcoal/70 hover:text-charcoal hover:bg-sage-100'
            }`}
          >
            Coffee Milk Flavour ({COFFEE_MILK_ITEMS.length})
          </button>
          <button
            onClick={() => setActiveTab('barista')}
            className={`px-5 py-2 rounded-full text-xs font-sans tracking-wider uppercase font-semibold transition-all ${
              activeTab === 'barista'
                ? 'bg-olive text-ivory shadow-sm'
                : 'bg-ivory-soft text-charcoal/70 hover:text-charcoal hover:bg-sage-100'
            }`}
          >
            Barista Recommendation ({BARISTA_RECOMMENDATION_ITEMS.length})
          </button>
        </div>

        {/* Asymmetric Menu Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* CATEGORY A: COFFEE MILK FLAVOUR */}
          {(activeTab === 'all' || activeTab === 'milk') && (
            <div className={`${activeTab === 'all' ? 'lg:col-span-6' : 'lg:col-span-12'}`}>
              <div className="mb-8 pb-4 border-b-2 border-charcoal/10 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold tracking-widest uppercase text-sage-dark block">
                    Category A
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight mt-0.5">
                    COFFEE MILK FLAVOUR
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-olive/10 flex items-center justify-center text-olive">
                  <Coffee className="w-5 h-5" />
                </div>
              </div>

              {/* Menu items list */}
              <div className="space-y-6">
                {COFFEE_MILK_ITEMS.map((item, idx) => renderMenuItem(item, idx))}
              </div>
            </div>
          )}

          {/* CATEGORY B: BARISTA RECOMMENDATION */}
          {(activeTab === 'all' || activeTab === 'barista') && (
            <div className={`${activeTab === 'all' ? 'lg:col-span-6' : 'lg:col-span-12'}`}>
              <div className="mb-8 pb-4 border-b-2 border-charcoal/10 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold tracking-widest uppercase text-sage-dark block">
                    Category B
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight mt-0.5">
                    BARISTA RECOMMENDATION
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-olive/10 flex items-center justify-center text-olive">
                  <Flame className="w-5 h-5" />
                </div>
              </div>

              {/* Menu items list */}
              <div className="space-y-6">
                {BARISTA_RECOMMENDATION_ITEMS.map((item, idx) => renderMenuItem(item, idx))}
              </div>
            </div>
          )}
        </div>

        {/* MANUAL BREW SECTION */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-olive text-ivory relative overflow-hidden shadow-xl">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ivory/10 border border-ivory/20 text-[11px] font-mono tracking-widest uppercase mb-3">
                <Filter className="w-3 h-3 text-sage-light" />
                <span>Single Origin Filter</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                MANUAL BREW{' '}
                <span className="font-serif italic font-normal text-ivory/80 text-xl sm:text-2xl">
                  (Ask our Barista)
                </span>
              </h3>
              <p className="mt-3 text-sm sm:text-base text-ivory/80 leading-relaxed">
                {MANUAL_BREW_INFO.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {MANUAL_BREW_INFO.methods.map((method) => (
                  <span
                    key={method}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-ivory/15 text-ivory border border-ivory/10"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex md:flex-col items-start md:items-end gap-3 shrink-0">
              <span className="text-xs font-mono tracking-wider uppercase text-ivory/70">
                Ethical Micro-Lots
              </span>
              <button
                onClick={onNavigateToFullMenu}
                className="px-5 py-2.5 rounded-full bg-ivory text-olive text-xs font-sans uppercase font-bold tracking-wider hover:bg-ivory-warm transition-all"
              >
                View Full Selection
              </button>
            </div>
          </div>
        </div>

        {/* Barista Recommendation Notice Callout */}
        <div className="mt-12 text-center text-xs sm:text-sm font-sans text-charcoal/70 flex items-center justify-center gap-2 italic">
          <Sparkles className="w-4 h-4 text-olive shrink-0" />
          <span>Ask our barista for today’s recommendations and seasonal micro-lot bean selections.</span>
        </div>
      </div>
    </section>
  );
};
