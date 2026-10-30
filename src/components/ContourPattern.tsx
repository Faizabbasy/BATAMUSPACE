import React from 'react';

interface ContourPatternProps {
  className?: string;
  opacity?: number;
  strokeColor?: string;
  variant?: 'subtle' | 'dense' | 'gentle';
}

export const ContourPattern: React.FC<ContourPatternProps> = ({
  className = '',
  opacity = 0.12,
  strokeColor = '#465347',
  variant = 'gentle',
}) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none absolute inset-0 overflow-hidden ${className}`}
      style={{ opacity }}
    >
      <svg
        className="w-full h-full object-cover"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Organic elevation contours inspired by Bogor topography and Batamu reference */}
        <g stroke={strokeColor} strokeWidth="1" strokeLinecap="round">
          {/* Top-right elevation ridge */}
          <path d="M980 -50 C 1040 120, 1260 140, 1480 80" />
          <path d="M920 -50 C 1000 160, 1280 200, 1500 130" />
          <path d="M860 -50 C 960 210, 1300 260, 1520 180" />
          <path d="M800 -50 C 920 260, 1320 320, 1540 230" />
          <path d="M740 -50 C 880 310, 1340 380, 1560 280" />
          <path d="M680 -50 C 840 360, 1360 440, 1580 330" />

          {/* Central organic flowing swale */}
          <path d="M-60 180 C 180 220, 320 120, 560 240 C 780 340, 960 300, 1240 420 C 1380 480, 1460 450, 1520 460" />
          <path d="M-60 240 C 200 280, 360 190, 600 300 C 820 400, 1000 360, 1260 480 C 1390 540, 1480 510, 1520 520" />
          <path d="M-60 300 C 220 340, 400 260, 640 360 C 860 460, 1040 420, 1280 540 C 1400 600, 1500 570, 1520 580" />
          <path d="M-60 360 C 240 400, 440 330, 680 420 C 900 520, 1080 480, 1300 600 C 1410 660, 1510 630, 1520 640" />

          {/* Bottom-left hill summit loops */}
          <path d="M-80 520 C 80 480, 260 560, 380 680 C 460 760, 480 880, 420 960" />
          <path d="M-80 580 C 100 550, 280 620, 400 730 C 490 820, 510 930, 460 980" />
          <path d="M-80 640 C 120 620, 300 680, 420 780 C 520 880, 530 960, 500 1000" />
          <path d="M-80 700 C 140 690, 320 740, 440 830 C 540 930, 550 990, 530 1020" />

          {/* Enclosed peak rings in bottom left */}
          <ellipse cx="160" cy="740" rx="90" ry="50" transform="rotate(-15 160 740)" />
          <ellipse cx="160" cy="740" rx="60" ry="34" transform="rotate(-15 160 740)" />
          <ellipse cx="160" cy="740" rx="30" ry="18" transform="rotate(-15 160 740)" />

          {/* Enclosed peak rings in top right */}
          <ellipse cx="1280" cy="140" rx="110" ry="60" transform="rotate(10 1280 140)" />
          <ellipse cx="1280" cy="140" rx="75" ry="40" transform="rotate(10 1280 140)" />
          <ellipse cx="1280" cy="140" rx="40" ry="22" transform="rotate(10 1280 140)" />

          {variant === 'dense' && (
            <>
              <path d="M-60 420 C 260 460, 480 400, 720 480 C 940 580, 1120 540, 1320 660" />
              <path d="M-60 480 C 280 520, 520 470, 760 540 C 980 640, 1160 600, 1340 720" />
              <path d="M600 950 C 760 840, 1020 860, 1280 800" />
              <path d="M640 1000 C 800 890, 1060 910, 1320 850" />
            </>
          )}
        </g>
      </svg>
    </div>
  );
};

