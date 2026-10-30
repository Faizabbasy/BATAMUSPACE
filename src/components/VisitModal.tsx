import React, { useState } from 'react';
import { X, MapPin, Navigation, Clock, Check, Copy, ExternalLink, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface VisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VisitModal: React.FC<VisitModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-[#F3F0E7] rounded-3xl overflow-hidden shadow-2xl border border-sage/30 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-olive px-6 py-5 flex items-center justify-between text-ivory">
          <div>
            <span className="text-[10px] font-mono tracking-widest uppercase opacity-80 block">
              Plan Your Visit
            </span>
            <h3 className="font-serif italic text-2xl font-bold">Batamu Space</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-olive-light/50 transition-colors text-ivory/80 hover:text-ivory"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Address */}
          <div className="p-4 rounded-2xl bg-ivory-soft border border-olive/15">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-olive shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-sage-dark">
                  Location
                </p>
                <p className="text-sm font-sans text-charcoal font-medium mt-1 leading-relaxed">
                  {BUSINESS_INFO.address}
                </p>
                <p className="text-xs font-mono text-olive/80 mt-1">
                  Plus Code: {BUSINESS_INFO.plusCode}
                </p>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-ivory border border-sage/20 text-xs font-semibold text-olive hover:bg-sage-100 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-sage" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Address'}</span>
              </button>
            </div>
          </div>

          {/* Hours & Price */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl bg-ivory-soft border border-olive/15">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-olive uppercase">
                <Clock className="w-3.5 h-3.5" />
                <span>Hours</span>
              </div>
              <p className="text-sm font-semibold text-charcoal mt-1">
                {BUSINESS_INFO.operatingHours.closingNotice}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-ivory-soft border border-olive/15">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-olive uppercase">
                <Calendar className="w-3.5 h-3.5" />
                <span>Reservations</span>
              </div>
              <p className="text-sm font-semibold text-charcoal mt-1">
                Accepted on-site
              </p>
            </div>
          </div>

          {/* Quick Tips */}
          <div className="space-y-2">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-sage-dark">
              Helpful Visitor Notes
            </p>
            <ul className="text-xs text-charcoal/80 space-y-2 leading-relaxed">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-olive shrink-0" />
                <span>Free parking lot and street parking available for cars and bikes.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-olive shrink-0" />
                <span>Both outdoor garden seating and air-conditioned/quiet laptop seating available.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-olive shrink-0" />
                <span>Average price per person is Rp25.000 – Rp50.000.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="p-5 bg-ivory-soft border-t border-sage/20 flex gap-3">
          <a
            href={BUSINESS_INFO.mapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-olive text-ivory text-xs font-sans tracking-wider uppercase font-semibold hover:bg-olive-dark transition-all shadow-md"
          >
            <Navigation className="w-4 h-4" />
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
