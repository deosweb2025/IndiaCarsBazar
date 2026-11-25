import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const isLarge = size === 'lg';
  const isSmall = size === 'sm';

  return (
    <Link
      to="/"
      className={`group inline-flex items-center transition-transform duration-300 hover:scale-[1.03] ${className}`}
      aria-label="India Car Bazaar - Home"
    >
      {/* Luxury Gold-Accented Pill Emblem with Official India Car Bazaar Brand Logo */}
      <div
        className={`relative flex items-center justify-center rounded-xl bg-white px-2.5 sm:px-3 py-1 shadow-sm border border-amber-300/70 transition-all duration-300 group-hover:border-amber-400 group-hover:shadow-md group-hover:shadow-amber-500/20 ${isLarge ? 'h-13 sm:h-15' : isSmall ? 'h-9 sm:h-10' : 'h-10 sm:h-12'
          }`}
      >
        <img
          src="/images/logo-official.png"
          alt="India Car Bazaar"
          className="h-full w-auto object-contain max-h-full drop-shadow-xs"
          loading="eager"
        />
        {/* Subtle Ambient Golden Glow */}
        <span className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-amber-400/25 via-yellow-400/20 to-amber-500/25 -z-10 blur-[2px] opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>
    </Link>
  );
};

export default Logo;
