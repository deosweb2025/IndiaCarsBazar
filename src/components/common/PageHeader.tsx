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
      {/* 1. PHOTOREALISTIC BESPOKE BACKGROUND IMAGE LAYER */}
      {bgImage && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={bgImage}
            alt={title}
            className="h-full w-full object-cover object-right md:object-center brightness-[0.88] contrast-[1.05]"
            loading="eager"
          />
          {/* Subtle bottom fade to blend with lower border */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d] via-transparent to-transparent opacity-80" />
          {/* Focused left-hand reading vignette (leaves the right 55-60% clear to see the vehicle/showroom) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0b0d] via-[#0a0b0d]/75 to-transparent max-w-2xl sm:max-w-3xl" />
        </div>
      )}

      {/* 2. BESPOKE VELVET LUXURY AMBIENT LIGHTING & GOLDEN GLOW (Zero noisy grid/hex textures) */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        {/* Animated Horizontal Golden Light Sweep Beam across top boundary */}
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-amber-400/80 to-transparent"
        />

        {/* Ambient Warm Golden Sheen */}
        <div className="absolute -top-24 left-1/4 h-80 w-96 rounded-full bg-amber-500/12 blur-[100px]" />
        <div className="absolute top-1/2 right-10 h-72 w-72 rounded-full bg-yellow-400/10 blur-[90px]" />
      </div>

      {/* 3. WARM GOLDEN AMBIENT SPOTLIGHT GLOWS */}
      <div className="pointer-events-none absolute inset-0 z-[2]">
        <div className="absolute top-0 left-1/3 -translate-x-1/2 h-[350px] w-[600px] rounded-full bg-amber-500/15 blur-3xl opacity-70" />
        <div className="absolute -top-20 right-10 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
      </div>

      {/* 4. MAIN CONTENT */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Breadcrumb Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400 mb-5 flex-wrap"
          aria-label="Breadcrumb"
        >
          <Link
            to="/"
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors font-semibold"
          >
            <Home className="h-3.5 w-3.5 text-amber-400" />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="h-3.5 w-3.5 text-zinc-600" />
              {crumb.href ? (
                <Link
                  to={crumb.href}
                  className="hover:text-amber-400 transition-colors font-medium text-zinc-300"
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
              className="inline-flex items-center gap-2 rounded-full border border-amber-400/35 bg-amber-400/15 backdrop-blur-md px-3.5 py-1 text-[11px] font-black tracking-wider uppercase text-amber-300 mb-3 shadow-md"
            >
              <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              {badge}
            </motion.span>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white mb-3 leading-[1.18]"
          >
            {title}{' '}
            {highlight && (
              <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                {highlight}
              </span>
            )}
          </motion.h1>

          {/* Luxury Signature Golden Speed Bar Underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1.5 w-20 rounded-full my-3.5 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-600 shadow-sm shadow-amber-500/30 origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-sm sm:text-base md:text-lg text-zinc-200 leading-relaxed font-normal max-w-2xl drop-shadow-sm"
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
