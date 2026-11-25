import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ExternalLink, ShieldCheck, ArrowRight, Sparkles, Clock } from 'lucide-react';
import { siteData } from '../../data/siteData';
import { Logo } from '../common/Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-stone-50 via-white to-amber-50/50 text-zinc-700 border-t-2 border-amber-300 pt-20 pb-12 overflow-hidden">
      {/* ======================================================== */}
      {/* 1. BESPOKE LUXURY VELVET-SMOOTH AMBIENT LIGHTING         */}
      {/* ======================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Animated Horizontal Golden Light Sweep Beam across top boundary */}
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-amber-400/80 to-transparent"
        />

        {/* Ambient Glowing Orb 1 (Top-Center Golden Spotlight) */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.35, 0.15]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-b from-amber-400/15 via-yellow-400/8 to-transparent blur-[140px]"
        />

        {/* Ambient Glowing Orb 2 (Bottom-Left Soft Amber Glow) */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -25, 0],
            scale: [0.95, 1.15, 0.95],
            opacity: [0.12, 0.28, 0.12]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5
          }}
          className="absolute -bottom-24 -left-24 w-[480px] h-[480px] rounded-full bg-amber-400/12 blur-[130px]"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-amber-200/70">
          
          {/* Column 1: Brand & Slogan (4 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Logo size="lg" variant="light" />
            
            <p className="text-sm text-zinc-600 leading-relaxed mt-1 font-normal max-w-sm">
              The premier destination for certified pre-owned automobiles. We provide verified used car sale &amp; purchase along with complete RTO car registration, vehicle insurance, and instant car finance.
            </p>

            {/* Dealership Trust Capsule */}
            <div className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-amber-400/20 via-yellow-400/15 to-amber-400/10 border border-amber-400/50 px-4 py-2 text-xs font-bold text-amber-900 w-fit shadow-xs">
              <ShieldCheck className="h-4 w-4 text-amber-700 shrink-0" />
              <span>100% Certified Pre-Owned Dealership</span>
              <Sparkles className="h-3.5 w-3.5 text-amber-600 ml-0.5 animate-pulse" />
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols on lg) */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-xs sm:text-sm font-black uppercase tracking-widest text-zinc-950 mb-2">
              Explore Pages
            </h4>
            {/* Speed Bar Underline */}
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-600 mb-5 shadow-xs shadow-amber-500/30" />
            
            <ul className="space-y-3 text-sm font-medium">
              {siteData.navigation.map((nav) => (
                <li key={nav.href}>
                  <Link
                    to={nav.href}
                    className="group inline-flex items-center gap-2 text-zinc-600 hover:text-amber-700 transition-colors"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-amber-600 group-hover:text-amber-700 group-hover:translate-x-1 transition-all" />
                    <span>{nav.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Services (3 cols on lg) */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-xs sm:text-sm font-black uppercase tracking-widest text-zinc-950 mb-2">
              Our Key Services
            </h4>
            {/* Speed Bar Underline */}
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-600 mb-5 shadow-xs shadow-amber-500/30" />
            
            <ul className="space-y-3 text-sm font-medium">
              {siteData.services.slice(0, 5).map((srv) => (
                <li key={srv.slug}>
                  <Link
                    to={`/services/${srv.slug}`}
                    className="group inline-flex items-center gap-2 text-zinc-600 hover:text-amber-700 transition-colors"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-amber-600 group-hover:text-amber-700 group-hover:translate-x-1 transition-all shrink-0" />
                    <span className="truncate">{srv.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Helpline & Contact (3 cols on lg) */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-xs sm:text-sm font-black uppercase tracking-widest text-zinc-950 mb-2">
              Official Helpline
            </h4>
            {/* Speed Bar Underline */}
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-600 mb-5 shadow-xs shadow-amber-500/30" />

            <div className="flex flex-col gap-3.5 text-sm">
              {/* Luxury Helpline Card with Golden Frame */}
              <a
                href={`tel:${siteData.company.helpline}`}
                className="group relative rounded-2xl p-[1.5px] bg-gradient-to-r from-amber-400/60 via-yellow-400/40 to-amber-400/60 hover:from-amber-400 hover:to-yellow-400 transition-all duration-300 shadow-md shadow-amber-500/10"
              >
                <div className="rounded-[calc(1rem-1.5px)] bg-white p-4 flex items-center gap-3.5 border border-amber-200/80">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 text-neutral-950 font-black shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-black tracking-widest text-amber-800">
                      Direct Helpline
                    </div>
                    <div className="text-lg font-black text-zinc-950 group-hover:text-amber-700 transition-colors tracking-tight">
                      {siteData.company.helpline}
                    </div>
                  </div>
                </div>
              </a>

              {/* Email Link */}
              <a
                href={`mailto:${siteData.company.email}`}
                className="flex items-center gap-2.5 text-xs text-zinc-600 hover:text-amber-700 transition-colors pt-1"
              >
                <Mail className="h-4 w-4 text-amber-600 shrink-0" />
                <span className="font-medium truncate">{siteData.company.email}</span>
              </a>

              {/* Location */}
              <div className="flex items-start gap-2.5 text-xs text-zinc-600">
                <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                <span className="font-normal leading-relaxed">
                  {siteData.company.address.street}, {siteData.company.address.city}, {siteData.company.address.state}
                </span>
              </div>

              {/* Working Hours with Live Status Indicator */}
              <div className="flex items-center gap-2.5 text-xs text-emerald-700 pt-0.5">
                <Clock className="h-4 w-4 text-emerald-600 shrink-0" />
                <span className="font-semibold text-emerald-800">{siteData.company.timings}</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ATTRIBUTION SECTION: Centered agency company hyperlink and strictly NO copyright */}
        <div className="pt-8 text-center flex flex-col items-center justify-center">
          <a
            href="https://www.teamdeoskolkata.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-zinc-700 hover:text-zinc-950 transition-colors py-2 px-5 rounded-full bg-white border border-amber-200/80 hover:border-amber-400 hover:bg-amber-50/50 shadow-xs"
          >
            <span>Designed &amp; Developed by</span>
            <span className="text-amber-700 font-extrabold underline underline-offset-4 decoration-amber-500/60 group-hover:text-amber-800 transition-colors">
              Digital Exposure Online Service
            </span>
            <ExternalLink className="h-3.5 w-3.5 text-amber-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
