import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';

export type HeaderTexture = 'carbon' | 'hex' | 'matrix' | 'lines';
export type HeaderBorderStyle = 'curve' | 'slant' | 'notch' | 'arch';

interface PageHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  description: string;
  breadcrumbs?: { label: string; href?: string }[];
  bgImage?: string;
  texture?: HeaderTexture;
  borderStyle?: HeaderBorderStyle;
  canvasBg?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  highlight,
  description,
  breadcrumbs = [],
  bgImage,
  texture: _texture = 'carbon',
  borderStyle = 'curve',
  canvasBg = '#f7f7fa',
}) => {
  void _texture;
  return (
    <div className="relative overflow-hidden pt-28 pb-24 md:pt-36 md:pb-32 bg-[#0a0b0d]">
      {/* 1. CRYSTAL CLEAR FULL PHOTOREALISTIC BACKGROUND IMAGE - ZERO SHADES */}
      {bgImage && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={bgImage}
            alt={title}
            className="h-full w-full object-cover object-center brightness-100 contrast-100"
            loading="eager"
          />
        </div>
      )}

      {/* 2. MAIN CONTENT (With Self-Contained High-Contrast Text Shadows - No Shading Over Image) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Breadcrumb Navigation - Compact Glass Pill */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 text-xs sm:text-sm text-zinc-100 mb-5 flex-wrap rounded-full bg-black/45 backdrop-blur-md px-3.5 py-1.5 border border-white/15 shadow-lg"
          aria-label="Breadcrumb"
        >
          <Link
            to="/"
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors font-semibold text-zinc-200"
          >
            <Home className="h-3.5 w-3.5 text-amber-400" />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="h-3.5 w-3.5 text-zinc-400" />
              {crumb.href ? (
                <Link
                  to={crumb.href}
                  className="hover:text-amber-400 transition-colors font-medium text-zinc-200"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-amber-400 font-bold">
                  {crumb.label}
                </span>
              )}
            </React.Fragment>
          ))}
        </motion.nav>

        {/* Header Content */}
        <div className="max-w-3xl">
          {badge && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-black/45 backdrop-blur-md px-3.5 py-1 text-[11px] font-black tracking-wider uppercase text-amber-300 mb-3 shadow-lg"
            >
              <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              {badge}
            </motion.span>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white mb-3 leading-[1.18] drop-shadow-[0_2px_16px_rgba(0,0,0,0.95)] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]"
          >
            {title}{' '}
            {highlight && (
              <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(0,0,0,0.95)] drop-shadow-[0_2px_20px_rgba(245,158,11,0.6)]">
                {highlight}
              </span>
            )}
          </motion.h1>

          {/* Luxury Signature Golden Speed Bar Underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1.5 w-20 rounded-full my-3.5 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-600 shadow-md shadow-black/60 origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]"
          >
            {description}
          </motion.p>
        </div>
      </div>

      {/* 5. STYLIZED AERODYNAMIC LOWER BORDER (Replaces flat straight cut) */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-20 pointer-events-none -mb-[1px]">
        <svg
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-12 md:h-16 lg:h-20 block translate-y-[1px]"
        >
          <defs>
            <linearGradient id="goldHeaderLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#b45309" />
              <stop offset="20%" stopColor="#f59e0b" />
              <stop offset="50%" stopColor="#fef08a" />
              <stop offset="80%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
            <filter id="goldGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#f59e0b" floodOpacity="0.8" />
            </filter>
          </defs>

          {/* Aerodynamic Lower Contour Shape bridging seamlessly into page canvas */}
          {borderStyle === 'curve' && (
            <>
              {/* Canvas Fill Shape */}
              <path
                d="M0,25 Q600,75 1200,25 L1200,80 L0,80 Z"
                fill={canvasBg}
              />
              {/* Metallic Champagne Gold Speed Contour Line */}
              <path
                d="M0,25 Q600,75 1200,25"
                fill="none"
                stroke="url(#goldHeaderLineGradient)"
                strokeWidth="4"
                filter="url(#goldGlow)"
              />
            </>
          )}

          {borderStyle === 'slant' && (
            <>
              {/* Canvas Fill Shape */}
              <path
                d="M0,65 L1200,18 L1200,80 L0,80 Z"
                fill={canvasBg}
              />
              {/* Metallic Champagne Gold Speed Contour Line */}
              <path
                d="M0,65 L1200,18"
                fill="none"
                stroke="url(#goldHeaderLineGradient)"
                strokeWidth="4"
                filter="url(#goldGlow)"
              />
            </>
          )}

          {borderStyle === 'notch' && (
            <>
              {/* Canvas Fill Shape */}
              <path
                d="M0,25 L430,25 L475,65 L725,65 L770,25 L1200,25 L1200,80 L0,80 Z"
                fill={canvasBg}
              />
              {/* Metallic Champagne Gold Speed Contour Line */}
              <path
                d="M0,25 L430,25 L475,65 L725,65 L770,25 L1200,25"
                fill="none"
                stroke="url(#goldHeaderLineGradient)"
                strokeWidth="4"
                filter="url(#goldGlow)"
              />
            </>
          )}

          {borderStyle === 'arch' && (
            <>
              {/* Canvas Fill Shape */}
              <path
                d="M0,35 C300,75 500,15 600,45 C700,75 900,15 1200,35 L1200,80 L0,80 Z"
                fill={canvasBg}
              />
              {/* Metallic Champagne Gold Speed Contour Line */}
              <path
                d="M0,35 C300,75 500,15 600,45 C700,75 900,15 1200,35"
                fill="none"
                stroke="url(#goldHeaderLineGradient)"
                strokeWidth="4"
                filter="url(#goldGlow)"
              />
            </>
          )}
        </svg>
      </div>
    </div>
  );
};
