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
    <section className="relative w-full overflow-hidden bg-[#0a0b0d]">
      {/* ================================================================ */}
      {/* 1. DESKTOP WIDESCREEN CINEMATIC BACKGROUND (lg screens >= 1024px) */}
      {/* ================================================================ */}
      <div className="hidden lg:block absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {slides.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={s.image}
              alt={s.titleHighlight}
              className="h-full w-full object-cover object-center brightness-[0.92] contrast-[1.05]"
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}

        {/* Clear, Minimal Ambient Gradient (Leaves the Car 100% Clear and Bright on Desktop) */}
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#0a0b0d] via-[#0a0b0d]/50 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0b0d]/85 via-[#0a0b0d]/35 to-transparent max-w-2xl pointer-events-none z-10" />

        {/* Warm Golden Ambient Spotlights */}
        <div className="absolute top-1/4 left-1/4 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-[130px] pointer-events-none z-10" />
        <div className="absolute bottom-10 right-10 h-[250px] w-[250px] rounded-full bg-yellow-400/8 blur-[120px] pointer-events-none z-10" />
      </div>

      {/* ================================================================ */}
      {/* 2. MOBILE SPLIT STAGE: TOP CAR SHOWROOM VIEW (Only on < lg screens) */}
      {/* ================================================================ */}
      <div className="lg:hidden relative w-full pt-20 sm:pt-24 z-10">
        {/* Full-bleed edge-to-edge car stage (No card box / borders) */}
        <div className="relative w-full h-[260px] xs:h-[290px] sm:h-[350px] overflow-hidden bg-gradient-to-b from-[#0a0b0d] via-[#0e0f14] to-[#0a0b0d]">
          {/* Ambient VIP Floor Spotlight Reflection */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-24 rounded-full bg-amber-400/18 blur-[45px] pointer-events-none" />

          {/* Smooth Crossfading Car Images */}
          {slides.map((s, idx) => (
            <div
              key={s.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={s.image}
                alt={s.titleHighlight}
                className="h-full w-full object-cover object-center brightness-[1.0] contrast-[1.05]"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}

          {/* Top soft shadow under navbar */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0a0b0d] to-transparent pointer-events-none z-10" />

          {/* Bottom feather fade into split divider */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0a0b0d] to-transparent pointer-events-none z-10" />
        </div>

        {/* Signature Golden Speed Accent Divider Line */}
        <div className="relative w-full h-[1px] bg-gradient-to-r from-transparent via-amber-400/80 to-transparent shadow-sm shadow-amber-400/50" />
      </div>

      {/* ================================================================ */}
      {/* 3. MAIN CONTENT / VIP CONSOLE (Unified Mobile & Desktop) */}
      {/* ================================================================ */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 flex-1 flex flex-col justify-center min-h-[460px] sm:min-h-[500px] lg:h-screen lg:max-h-[920px] pt-4 sm:pt-6 pb-12 sm:pb-16 lg:py-0">
        <div className="max-w-2xl">
          <div className="w-full">
            {/* Desktop Slide Dots (Hidden on mobile as they are on stage) */}
            <div className="hidden lg:flex items-center gap-2 mb-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/35 bg-amber-400/15 backdrop-blur-md px-3.5 py-1 text-[11px] font-black uppercase tracking-widest text-amber-300 shadow-md shadow-black/40">
                <Sparkles className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
                <span>{slide.badge}</span>
              </div>

              <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 ml-2">
                {slides.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setCurrentSlide(idx)}
                    className={`transition-all duration-300 rounded-full ${
                      idx === currentSlide
                        ? 'w-6 h-1.5 bg-gradient-to-r from-amber-400 to-yellow-300 shadow-sm shadow-amber-400/50'
                        : 'w-1.5 h-1.5 bg-zinc-600 hover:bg-zinc-400'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Mobile-Only Eyebrow Badge */}
            <div className="lg:hidden inline-flex items-center gap-2 rounded-full border border-amber-400/35 bg-amber-400/15 backdrop-blur-md px-3.5 py-1 text-[11px] font-black uppercase tracking-widest text-amber-300 mb-2.5 shadow-md shadow-black/40">
              <Sparkles className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
              <span>{slide.badge}</span>
            </div>

            {/* Main Heading with Decreased, Balanced Font Size & Clear Breathing Room */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] xl:text-5xl font-black tracking-tight text-white mb-2.5 sm:mb-3.5 leading-[1.15] transition-opacity duration-300">
              {slide.titlePart1}{' '}
              <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                {slide.titleHighlight}
              </span>{' '}
              <span className="text-zinc-100">{slide.titlePart2}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-zinc-200 font-normal max-w-xl mb-4 sm:mb-6 leading-relaxed drop-shadow-sm min-h-[44px] transition-opacity duration-300">
              {slide.subtitle}
            </p>

            {/* Call to Actions (Luxury Gold & Carbon) */}
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
                    <Phone className="h-4 w-4 text-amber-400" />
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
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-400/15 text-amber-400 border border-amber-400/25 shrink-0">
                <ShieldCheck className="h-3.5 w-3.5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">100% RTO Legal</div>
                <div className="text-[10px] text-zinc-400 font-medium">Clear Transfer & NOC</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-400/15 text-amber-400 border border-amber-400/25 shrink-0">
                <Award className="h-3.5 w-3.5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">150+ Checkpoints</div>
                <div className="text-[10px] text-zinc-400 font-medium">Diagnostic Inspection</div>
              </div>
            </div>

            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-400/15 text-amber-400 border border-amber-400/25 shrink-0">
                <Phone className="h-3.5 w-3.5" />
              </div>
              <div>
                <div className="text-xs font-black text-amber-400">9073344500</div>
                <div className="text-[10px] text-zinc-400 font-medium">Direct Helpline</div>
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
