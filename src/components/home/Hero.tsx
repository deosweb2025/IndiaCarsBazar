import React, { useState, useEffect } from 'react';
import {
  Phone,
  ShieldCheck,
  ArrowRight,
  Award,
  Sparkles
} from 'lucide-react';
import { siteData, type HeroSlide } from '../../data/siteData';
import { Button } from '../common/Button';

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = siteData.heroSlides;

  // Automated 3-image carousel rotation (every 6 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide: HeroSlide = slides[currentSlide];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-amber-50/60 via-stone-50 to-amber-50/30">
      {/* ================================================================ */}
      {/* 1. DESKTOP WIDESCREEN CINEMATIC BACKGROUND (lg screens >= 1024px) */}
      {/* ================================================================ */}
      <div className="hidden lg:block absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {slides.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
          >
            <img
              src={s.image}
              alt={s.titleHighlight}
              className="h-full w-full object-cover object-center brightness-[1.0] contrast-[1.02]"
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}

        {/* Soft Left Ambient Vignette for Flawless Text Legibility Without Dimming the Car */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-2/3 lg:w-1/2 bg-gradient-to-r from-black/40 via-black/15 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/25 to-transparent pointer-events-none z-10" />
      </div>

      {/* ================================================================ */}
      {/* 2. MOBILE SPLIT STAGE: TOP CAR SHOWROOM VIEW (Only on < lg screens) */}
      {/* ================================================================ */}
      <div className="lg:hidden relative w-full pt-20 sm:pt-24 z-10">
        {/* Full-bleed edge-to-edge car stage (Crystal Clear Car Showcase) */}
        <div className="relative w-full h-[260px] xs:h-[290px] sm:h-[350px] overflow-hidden bg-stone-100">
          {/* Smooth Crossfading Car Images */}
          {slides.map((s, idx) => (
            <div
              key={s.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
            >
              <img
                src={s.image}
                alt={s.titleHighlight}
                className="h-full w-full object-cover object-center brightness-[1.0] contrast-[1.02]"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>

        {/* Signature Golden Speed Accent Divider Line */}
        <div className="relative w-full h-[2px] bg-gradient-to-r from-transparent via-amber-400/80 to-transparent shadow-xs shadow-amber-400/50" />
      </div>

      {/* ================================================================ */}
      {/* 3. MAIN CONTENT / VIP CONSOLE (Unified Mobile & Desktop) */}
      {/* ================================================================ */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 flex-1 flex flex-col justify-center min-h-[460px] sm:min-h-[500px] lg:h-screen lg:max-h-[920px] pt-4 sm:pt-6 pb-12 sm:pb-16 lg:py-0">
        <div className="max-w-2xl">
          <div className="w-full">
            {/* Eyebrow Badge with Clean High-Contrast Emblem */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/60 bg-white/95 backdrop-blur-md px-3.5 py-1 text-[11px] font-black uppercase tracking-widest text-amber-900 mb-2.5 sm:mb-3 shadow-md">
              <Sparkles className="h-3.5 w-3.5 text-amber-600 animate-pulse" />
              <span>{slide.badge}</span>
            </div>

            {/* Main Heading with High-Contrast White & Radiant Gold in Desktop Car View */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] xl:text-5xl font-black tracking-tight text-zinc-950 lg:text-white mb-2.5 sm:mb-3.5 leading-[1.15] transition-opacity duration-300 lg:drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
              {slide.titlePart1}{' '}
              <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent lg:drop-shadow-[0_2px_15px_rgba(245,158,11,0.6)]">
                {slide.titleHighlight}
              </span>{' '}
              <span className="text-zinc-900 lg:text-white">{slide.titlePart2}</span>
            </h1>

            {/* Subtitle with High-Contrast Legibility */}
            <p className="text-xs sm:text-sm md:text-base text-zinc-700 lg:text-white font-medium max-w-xl mb-4 sm:mb-6 leading-relaxed min-h-[44px] transition-opacity duration-300 lg:drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              {slide.subtitle}
            </p>

            {/* Call to Actions (Luxury Gold & Clean White) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-5 sm:mb-7">
              <Button
                to={slide.primaryCtaLink}
                variant="primary"
                size="md"
                className="w-full sm:w-auto justify-center"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                {slide.primaryCtaText}
              </Button>

              <Button
                to={
                  slide.secondaryCtaLink.startsWith('http') || slide.secondaryCtaLink.startsWith('tel:')
                    ? undefined
                    : slide.secondaryCtaLink
                }
                href={
                  slide.secondaryCtaLink.startsWith('http') || slide.secondaryCtaLink.startsWith('tel:')
                    ? slide.secondaryCtaLink
                    : undefined
                }
                variant="secondary"
                size="md"
                className="w-full sm:w-auto justify-center"
                icon={
                  slide.secondaryCtaLink.startsWith('tel:') ? (
                    <Phone className="h-4 w-4 text-amber-600" />
                  ) : undefined
                }
                iconPosition="left"
              >
                {slide.secondaryCtaText}
              </Button>
            </div>
          </div>

          {/* Quick Trust Badges Under Hero */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-2 w-full max-w-xl">
            <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-white/95 border border-amber-200/80 shadow-xs backdrop-blur-sm">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-400/20 text-amber-700 border border-amber-400/30 shrink-0">
                <ShieldCheck className="h-3.5 w-3.5" />
              </div>
              <div>
                <div className="text-xs font-bold text-zinc-950">100% RTO Legal</div>
                <div className="text-[10px] text-zinc-600 font-medium">Clear Transfer & NOC</div>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-white/95 border border-amber-200/80 shadow-xs backdrop-blur-sm">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-400/20 text-amber-700 border border-amber-400/30 shrink-0">
                <Award className="h-3.5 w-3.5" />
              </div>
              <div>
                <div className="text-xs font-bold text-zinc-950">150+ Checkpoints</div>
                <div className="text-[10px] text-zinc-600 font-medium">Diagnostic Inspection</div>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-white/95 border border-amber-200/80 shadow-xs backdrop-blur-sm col-span-2 sm:col-span-1">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-400/20 text-amber-700 border border-amber-400/30 shrink-0">
                <Phone className="h-3.5 w-3.5" />
              </div>
              <div>
                <div className="text-xs font-black text-amber-700">9073344500</div>
                <div className="text-[10px] text-zinc-600 font-medium">Direct Helpline</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* 4. SIGNATURE HORIZON ARCH LOWER BORDER */}
      {/* ================================================================ */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-20 pointer-events-none -mb-[1px]">
        <svg
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-12 md:h-16 lg:h-20 block translate-y-[1px]"
        >
          <defs>
            <linearGradient id="heroGoldBladeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#92400e" />
              <stop offset="15%" stopColor="#d97706" />
              <stop offset="35%" stopColor="#f59e0b" />
              <stop offset="50%" stopColor="#fef08a" />
              <stop offset="65%" stopColor="#f59e0b" />
              <stop offset="85%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#92400e" />
            </linearGradient>
            <filter id="heroGoldGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#f59e0b" floodOpacity="0.75" />
            </filter>
          </defs>

          {/* White Canvas Bridge Shape with Continuous Smooth Horizon Arch */}
          <path
            d="M0,52 Q600,16 1200,52 L1200,80 L0,80 Z"
            fill="#ffffff"
          />

          {/* Ambient Golden Under-Glow Stroke */}
          <path
            d="M0,52 Q600,16 1200,52"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="5"
            opacity="0.25"
            filter="url(#heroGoldGlow)"
          />

          {/* Precision Champagne Gold Speed Contour Blade */}
          <path
            d="M0,52 Q600,16 1200,52"
            fill="none"
            stroke="url(#heroGoldBladeGradient)"
            strokeWidth="3"
            filter="url(#heroGoldGlow)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
