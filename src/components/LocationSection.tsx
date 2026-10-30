import React, { useState } from 'react';
import { BUSINESS_INFO, FACILITIES } from '../data/businessData';
import { ContourPattern } from './ContourPattern';
import {
  MapPin,
  Navigation,
  Clock,
  Wallet,
  Copy,
  Check,
  ExternalLink,
  Car,
  Trees,
  Coffee,
  ShoppingBag,
  Sparkles,
  CalendarCheck,
  ShieldCheck,
} from 'lucide-react';

interface LocationSectionProps {
  onOpenVisitModal: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenVisitModal }) => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedPlusCode, setCopiedPlusCode] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const handleCopyPlusCode = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.plusCode);
    setCopiedPlusCode(true);
    setTimeout(() => setCopiedPlusCode(false), 2500);
  };

  const facilityIcons: Record<string, React.ElementType> = {
    outdoor: Trees,
    'dine-in': Coffee,
    takeaway: ShoppingBag,
    'free-parking-lot': Car,
    'street-parking': Navigation,
    'paid-parking': ShieldCheck,
    toilet: Sparkles,
    reservations: CalendarCheck,
  };

  return (
    <section id="location" className="relative py-24 sm:py-32 bg-[#F3F0E7] overflow-hidden">
      {/* Topographic Contour Texture */}
      <ContourPattern opacity={0.14} strokeColor="#465347" variant="subtle" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-olive" />
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-olive">
              Visit Us
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal tracking-tight">
            COME FIND YOUR SPACE.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-charcoal/75 font-sans">
            Batamu Space is located in Cibeureum, Bogor Regency. Follow the road into the highlands and join us for a fresh cup.
          </p>
        </div>

        {/* Main Grid: Details Card & Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Business Information Details */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Primary Details Box */}
            <div className="p-8 rounded-3xl bg-ivory-soft border border-olive/20 shadow-md">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-olive block mb-2">
                Location & Details
              </span>
              <h3 className="font-serif italic text-3xl font-bold text-charcoal mb-4">
                {BUSINESS_INFO.name}
              </h3>

              {/* Address with copy button */}
              <div className="pb-6 border-b border-charcoal/10">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-olive shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-sans uppercase tracking-wider text-sage-dark font-bold mb-1">
                      Physical Address
                    </p>
                    <p className="text-sm font-sans text-charcoal leading-relaxed font-medium">
                      {BUSINESS_INFO.address}
                    </p>
                    <button
                      onClick={handleCopyAddress}
                      className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-olive hover:text-olive-dark transition-colors"
                    >
                      {copiedAddress ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-sage" />
                          <span className="text-sage">Address copied to clipboard</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Plus Code */}
              <div className="py-5 border-b border-charcoal/10 flex items-center justify-between">
                <div>
                  <p className="text-xs font-sans uppercase tracking-wider text-sage-dark font-bold">
                    Google Maps Plus Code
                  </p>
                  <p className="font-mono text-xs text-charcoal mt-0.5">
                    {BUSINESS_INFO.plusCode}
                  </p>
                </div>
                <button
                  onClick={handleCopyPlusCode}
                  className="p-2 rounded-lg bg-ivory border border-sage/20 text-olive hover:bg-sage-100 transition-colors"
                  title="Copy Plus Code"
                >
                  {copiedPlusCode ? <Check className="w-4 h-4 text-sage" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Price Range & Category */}
              <div className="py-5 border-b border-charcoal/10 grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-sans uppercase tracking-wider text-sage-dark font-bold">
                    <Wallet className="w-3.5 h-3.5 text-olive" />
                    <span>Price Range</span>
                  </div>
                  <p className="text-sm font-semibold text-charcoal mt-1">
                    {BUSINESS_INFO.priceRange}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-sans uppercase tracking-wider text-sage-dark font-bold">
                    <Clock className="w-3.5 h-3.5 text-olive" />
                    <span>Operating</span>
                  </div>
                  <p className="text-sm font-semibold text-charcoal mt-1">
                    {BUSINESS_INFO.operatingHours.closingNotice}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={BUSINESS_INFO.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-olive text-ivory text-xs font-sans tracking-wider uppercase font-semibold hover:bg-olive-dark transition-all duration-300 shadow-md active:scale-[0.98]"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <button
                  onClick={onOpenVisitModal}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-transparent border border-olive text-olive text-xs font-sans tracking-wider uppercase font-semibold hover:bg-sage-100 transition-all duration-300 active:scale-[0.98]"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Visit Info</span>
                </button>
              </div>
            </div>

            {/* Facilities List */}
            <div className="p-6 rounded-3xl bg-ivory-soft border border-olive/15">
              <h4 className="text-xs uppercase font-sans font-bold tracking-widest text-olive mb-4">
                Available Facilities
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {FACILITIES.map((facility) => {
                  const Icon = facilityIcons[facility.id] || Coffee;
                  return (
                    <div
                      key={facility.id}
                      className="flex items-center gap-2.5 p-2 rounded-xl bg-ivory border border-sage/15 text-xs font-medium text-charcoal"
                    >
                      <Icon className="w-3.5 h-3.5 text-olive shrink-0" />
                      <span>{facility.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed & Interactive Card */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative w-full rounded-3xl overflow-hidden shadow-xl border border-olive/20 bg-ivory-soft aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/11]">
              {/* Embedded Google Maps Frame */}
              <iframe
                title="Batamu Space Location Map"
                src="https://maps.google.com/maps?q=Batamu%20Space%20Jl.%20Djarum%20Kp.%20Joglo%20Cibeureum%20Bogor&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter contrast-[1.02] saturate-[0.95]"
              />

              {/* Floating Pin Overlay Card */}
              <div className="absolute top-4 left-4 p-3 rounded-2xl bg-[#F3F0E7]/95 backdrop-blur-md border border-olive/20 shadow-lg text-charcoal max-w-xs hidden sm:block">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-olive animate-pulse" />
                  <span className="font-serif italic font-bold text-sm">Batamu Space</span>
                </div>
                <p className="text-[11px] text-charcoal/70 mt-1 leading-tight">
                  Cibeureum, Bogor Regency, West Java
                </p>
                <div className="mt-2 pt-2 border-t border-olive/15 flex items-center justify-between text-[10px] font-mono text-olive font-semibold">
                  <span>Open until 23.00 WIB</span>
                  <a
                    href={BUSINESS_INFO.mapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center gap-1"
                  >
                    <span>View Map</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick directions helper caption */}
            <div className="flex flex-wrap items-center justify-between text-xs text-charcoal/70 px-2 py-1">
              <span>* Free parking on site and street parking available for cars and motorcycles.</span>
              <a
                href={BUSINESS_INFO.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-olive font-semibold underline underline-offset-2 hover:text-olive-dark"
              >
                Open directly in Google Maps App →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

