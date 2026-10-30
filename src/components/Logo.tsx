import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  withTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  className = '',
  withTagline = false,
}) => {
  const textColor = variant === 'light' ? 'text-ivory' : 'text-olive-deep';
  const subColor = variant === 'light' ? 'text-ivory/70' : 'text-sage-dark';

  const sizeClasses = {
    sm: {
      title: 'text-xl sm:text-2xl',
      space: 'text-[9px] tracking-[0.35em]',
    },
    md: {
      title: 'text-2xl sm:text-3xl',
      space: 'text-[10px] sm:text-[11px] tracking-[0.38em]',
    },
    lg: {
      title: 'text-4xl sm:text-5xl',
      space: 'text-xs sm:text-sm tracking-[0.4em]',
    },
  }[size];

  return (
    <div className={`inline-flex flex-col select-none leading-none ${className}`}>
      <div className="flex items-baseline gap-1">
        <span
          className={`font-serif italic font-bold tracking-tight ${sizeClasses.title} ${textColor} transition-colors`}
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          Batamu.
        </span>
      </div>
      <span
        className={`font-sans font-semibold uppercase ${sizeClasses.space} ${subColor} mt-0.5 pl-0.5`}
      >
        SPACE
      </span>
      {withTagline && (
        <span className={`text-[10px] tracking-wider font-sans opacity-70 mt-1 ${subColor}`}>
          BOGOR · INDONESIA
        </span>
      )}
    </div>
  );
};

