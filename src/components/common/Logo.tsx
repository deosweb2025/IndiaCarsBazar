import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', variant = 'dark' }) => {
  const isLarge = size === 'lg';
  const isSmall = size === 'sm';
  const isLightText = variant === 'dark';

  return (
    <Link to="/" className={`group inline-flex items-center gap-3 transition-transform hover:scale-[1.02] ${className}`}>
      {/* Aerodynamic Sports Coupe Badge in Luxury Metallic Gold */}
      <div
        className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 shadow-lg shadow-amber-500/25 p-2 transition-all duration-300 group-hover:shadow-amber-400/40 ${isLarge ? 'h-13 w-13' : isSmall ? 'h-9 w-9' : 'h-11 w-11'
          }`}
      >
        <svg
          viewBox="0 0 100 100"
          className="h-full w-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Sports coupe silhouette */}
          <path
            d="M12 62 C20 61, 26 59, 34 57 C39 49, 47 38, 62 37 C73 36, 83 42, 88 53 C92 55, 95 58, 95 62 C96 66, 88 68, 82 67 C79 61, 74 57, 68 57 C62 57, 57 61, 55 67 C47 67, 43 67, 35 67 C33 61, 28 57, 22 57 C16 57, 11 61, 9 67 C6 67, 7 64, 12 62 Z"
            fill="#0c0d10"
          />
          {/* Glass windshield & cabin */}
          <path
            d="M42 52 C45 44, 52 40, 61 39 C68 39, 75 42, 79 50 C71 51, 58 51, 42 52 Z"
            fill="#facc15"
            opacity="0.95"
          />
          {/* Headlights */}
          <circle cx="89" cy="55" r="2.5" fill="#ffffff" />
          {/* Wheels */}
          <circle cx="22" cy="65" r="7" fill="#0c0d10" stroke="#fef08a" strokeWidth="2.5" />
          <circle cx="22" cy="65" r="2.5" fill="#facc15" />
          <circle cx="68" cy="65" r="7" fill="#0c0d10" stroke="#fef08a" strokeWidth="2.5" />
          <circle cx="68" cy="65" r="2.5" fill="#facc15" />
        </svg>

        {/* Ambient gold glow */}
        <span className="absolute -inset-1 rounded-xl bg-amber-400/25 blur-sm -z-10 group-hover:bg-amber-400/40 transition-all" />
      </div>

      {/* Brand Text */}
      <span
        className={`font-black tracking-tight transition-colors ${isLightText ? 'text-white' : 'text-[#0f1012]'
          } ${isLarge ? 'text-2xl sm:text-3xl' : isSmall ? 'text-lg' : 'text-xl sm:text-2xl'}`}
      >
        India<span className="text-amber-400">car</span>bazar
      </span>
    </Link>
  );
};
