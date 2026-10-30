import React, { useState } from 'react';
import { SPACE_EXPERIENCES } from '../data/businessData';
import { ContourPattern } from './ContourPattern';
import { Laptop, Trees, Coffee, Users, Heart, ShoppingBag, Maximize2 } from 'lucide-react';

export const TheSpace: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const highlights = [
    { icon: Trees, label: 'Outdoor Garden Seating', desc: 'Fresh mountain breeze beneath the open sky' },
    { icon: Coffee, label: 'Comfortable Dine-In', desc: 'Intimate ambiance with earthy textures and warm lighting' },
    { icon: Laptop, label: 'Work & Laptop Friendly', desc: 'Quiet corners, reliable power outlets & focused calm' },
    { icon: Users, label: 'Meet Friends', desc: 'Spacious communal tables for meaningful gatherings' },
    { icon: ShoppingBag, label: 'Takeaway Coffee', desc: 'Quick service for morning rides and daily commutes' },
    { icon: Heart, label: 'A Cozy Sanctuary', desc: 'A peaceful pause from the city rush' },
  ];

  return (
    <section id="space" className="relative py-24 sm:py-32 bg-[#E9E4D8] overflow-hidden">
      {/* Subtle Contour Background */}
      <ContourPattern opacity={0.12} strokeColor="#465347" variant="gentle" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-olive" />
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-olive">
              The Venue
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal tracking-tight leading-[1.1]">
            YOUR SPACE, YOUR MOMENT.
          </h2>

          <p className="mt-6 text-base sm:text-xl text-charcoal/80 font-sans leading-relaxed">
            Nestled in Cibeureum, Bogor, Batamu Space is thoughtfully designed to give you room to breathe. Whether you're sinking into an afternoon book, collaborating over laptops, or sharing laughter over iced coffees.
          </p>
        </div>

        {/* Experience Pills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-16">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="p-4 rounded-xl bg-ivory/80 backdrop-blur-sm border border-olive/10 flex flex-col justify-between hover:border-olive/30 hover:bg-ivory transition-all shadow-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-olive/10 text-olive flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-charcoal leading-snug">{item.label}</h4>
                  <p className="text-[11px] text-charcoal/65 mt-1 leading-tight hidden sm:block">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Varied Proportion Architectural Gallery */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6">
          {SPACE_EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className={`${exp.span} group relative overflow-hidden rounded-2xl bg-ivory shadow-md transition-all duration-500 hover:shadow-xl`}
            >
              <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-75 group-hover:opacity-85 transition-opacity" />

                {/* Corner Expand Button */}
                <button
                  onClick={() => setSelectedImage(exp.image)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-ivory/80 backdrop-blur-md text-olive opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="View photo enlarged"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Floating Content */}
                <div className="absolute bottom-6 left-6 right-6 text-ivory">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-ivory/80 block mb-1">
                    {exp.tagline}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-sans tracking-tight">
                    {exp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ivory/85 mt-2 line-clamp-2 max-w-lg">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Atmosphere Real Venue Badge */}
        <div className="mt-8 text-center text-xs text-charcoal/70 font-sans flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-olive animate-pulse" />
          <span>Foto asli suasana fisik Batamu Space · Jl. Djarum Kp. Joglo RT 004/005, Cibeureum, Bogor.</span>
        </div>
      </div>

      {/* Lightbox for Gallery Photos */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={selectedImage}
              alt="Batamu Space atmosphere view"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

