import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Car,
  FileCheck,
  ShieldCheck,
  Banknote,
  Stamp,
  SearchCheck,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Phone
} from 'lucide-react';
import { siteData, type ServiceItem } from '../../data/siteData';
import { Button } from '../common/Button';
import { ServiceDetailModal } from '../common/ServiceDetailModal';

// Icon mapper helper
const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'Car':
      return <Car className="h-5 w-5" />;
    case 'FileCheck':
      return <FileCheck className="h-5 w-5" />;
    case 'ShieldCheck':
      return <ShieldCheck className="h-5 w-5" />;
    case 'Banknote':
      return <Banknote className="h-5 w-5" />;
    case 'Stamp':
      return <Stamp className="h-5 w-5" />;
    case 'SearchCheck':
      return <SearchCheck className="h-5 w-5" />;
    default:
      return <Car className="h-5 w-5" />;
  }
};

// Studio cutout detector
const isStudioCutout = (url: string) => {
  return /service-(rto|loan|transfer)\.jpg/i.test(url) || /fleet-(innova|dzire|swift|wagonr|ertiga)\.jpg/i.test(url);
};

export const HomeServicesGlimpse: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section className="py-24 md:py-32 relative bg-gradient-to-b from-[#fbf9f5] via-[#f3ecdd] to-[#f8f4ea] border-b border-amber-200/50 overflow-hidden">
      {/* ======================================================== */}
      {/* 1. BESPOKE LUXURY VELVET-SMOOTH GRADIENT & AMBIENT LIGHT */}
      {/* ======================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Animated Horizontal Golden Light Sweep Beam across top border */}
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"
        />

        {/* Ambient Glowing Orb 1 (Top-Right Golden Bloom) */}
        <motion.div
          animate={{
            x: [0, -45, 0],
            y: [0, 40, 0],
            scale: [1, 1.25, 1],
            opacity: [0.35, 0.65, 0.35]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute -top-32 -right-32 w-[580px] h-[580px] rounded-full bg-gradient-to-bl from-amber-400/22 via-yellow-300/14 to-transparent blur-[120px]"
        />

        {/* Ambient Glowing Orb 2 (Center-Left Champagne Warmth) */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.55, 0.25]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5
          }}
          className="absolute top-1/3 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-yellow-500/18 via-amber-400/12 to-transparent blur-[130px]"
        />

        {/* Ambient Glowing Orb 3 (Bottom-Center Soft Sunbeam) */}
        <motion.div
          animate={{
            x: [0, -35, 0],
            y: [0, 30, 0],
            scale: [0.95, 1.15, 0.95],
            opacity: [0.2, 0.45, 0.2]
          }}
          transition={{
            duration: 9.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3
          }}
          className="absolute -bottom-24 left-1/3 w-[480px] h-[480px] rounded-full bg-gradient-to-t from-amber-300/16 via-yellow-200/10 to-transparent blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* ======================================================== */}
        {/* 2. SECTION HEADER (Clean, Luxurious & Crisp)             */}
        {/* ======================================================== */}
        <div className="relative text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-zinc-950/90 backdrop-blur-md border border-amber-400/40 text-amber-300 font-black text-xs uppercase tracking-widest shadow-lg shadow-black/5 mb-4"
          >
            <Sparkles className="h-4 w-4 text-amber-400 animate-pulse" />
            <span>Complete Motor Vehicle Solutions</span>
            <ShieldCheck className="h-4 w-4 text-emerald-400 ml-0.5" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-zinc-950 mb-3"
          >
            Full Spectrum{' '}
            <span className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent drop-shadow-sm">
              Automotive Services
            </span>
          </motion.h2>

          {/* Luxury Speed Bar Underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1.5 w-24 rounded-full my-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-600 mx-auto shadow-sm shadow-amber-500/20"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-sm sm:text-base md:text-lg text-zinc-700 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            From certified pre-owned car transactions to complete RTO paperwork, comprehensive motor insurance and low-EMI financing, click any service card to view complete specifications in an instant box screen popup.
          </motion.p>
        </div>

        {/* ======================================================== */}
        {/* 3. LUXURY SERVICES GRID (6 Floating Glassmorphic Cards)   */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8 mb-16">
          {siteData.services.map((service: ServiceItem, index: number) => {
            const isCutout = isStudioCutout(service.image);

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex"
              >
                {/* Luxury Service Card with Orbiting Border Beam Animation */}
                <div
                  onClick={() => setSelectedService(service)}
                  className="group relative flex flex-col w-full rounded-[2.25rem] p-[2px] transition-all duration-500 hover:-translate-y-2.5 cursor-pointer overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-amber-500/25"
                >
                  {/* Static Subtle Border Ring */}
                  <div className="absolute inset-0 rounded-[2.25rem] bg-gradient-to-b from-zinc-200/90 via-zinc-200/60 to-zinc-200/90 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />

                  {/* Animated Orbiting Golden Light Beam */}
                  <div className="absolute -inset-[100%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_270deg,#f59e0b_315deg,#fef08a_340deg,#fbbf24_360deg)] animate-border-rotate opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Card Content Surface */}
                  <div className="relative flex flex-col w-full h-full rounded-[calc(2.25rem-2px)] bg-white p-4 sm:p-5 overflow-hidden">
                    {/* Hero Showcase Container */}
                    <div className="relative h-56 w-full rounded-2xl overflow-hidden mb-5 bg-gradient-to-b from-zinc-50 via-zinc-100/90 to-zinc-200/70 border border-zinc-200/80 flex items-center justify-center p-3">
                      {/* Floating Service Icon Seal (Top-Left) */}
                      <div className="absolute top-3.5 left-3.5 z-20 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 text-neutral-950 font-black shadow-lg shadow-amber-500/35 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        {getServiceIcon(service.iconName)}
                      </div>

                      {/* Floating Badge (Top-Right) */}
                      <div className="absolute top-3.5 right-3.5 z-20 px-3 py-1 rounded-full bg-zinc-950/85 backdrop-blur-md border border-amber-400/35 text-xs font-bold text-amber-300 shadow-md flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        {service.badge}
                      </div>

                      {/* Vehicle/Service Image */}
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className={`w-full h-full transition-transform duration-700 ease-out group-hover:scale-108 ${
                          isCutout
                            ? 'object-contain p-2 scale-105 group-hover:scale-112 drop-shadow-[0_16px_26px_rgba(0,0,0,0.20)]'
                            : 'object-cover'
                        }`}
                      />

                      {/* Bottom Instant Box Screen Trigger Pill */}
                      <div className="absolute bottom-2.5 inset-x-2.5 px-3.5 py-1.5 rounded-xl bg-zinc-950/85 backdrop-blur-md border border-amber-400/30 flex items-center justify-between text-white shadow-lg">
                        <span className="text-[11px] font-semibold text-zinc-300 flex items-center gap-1.5">
                          <span className="text-amber-400">⚡</span> Instant Box Screen
                        </span>
                        <span className="text-amber-400 text-xs font-black group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                          View Details ↗
                        </span>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <h3 className="text-xl sm:text-2xl font-black text-zinc-950 group-hover:text-amber-600 transition-colors mb-2 tracking-tight line-clamp-1">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4 flex-1 line-clamp-2 font-normal">
                      {service.shortDesc}
                    </p>

                    {/* Key Feature Checkpoints */}
                    <div className="space-y-2 mb-5 pt-3.5 border-t border-zinc-100 text-xs text-zinc-700 font-medium">
                      {service.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2">
                          <div className="flex h-4 w-4 items-center justify-center rounded-full bg-amber-400/20 text-amber-600 shrink-0">
                            <CheckCircle2 className="h-3 w-3" />
                          </div>
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Card Action Button Bar */}
                    <div className="mt-auto w-full flex items-center justify-between px-4 py-3 rounded-xl bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-500/5 border border-amber-400/30 group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:via-yellow-400 group-hover:to-amber-500 group-hover:border-amber-400 transition-all duration-300 shadow-sm">
                      <span className="text-xs font-black text-amber-900 group-hover:text-neutral-950 transition-colors uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="h-3.5 w-3.5 text-amber-600 group-hover:text-neutral-950" />
                        <span>Instant Specifications</span>
                      </span>
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-400 text-neutral-950 group-hover:bg-neutral-950 group-hover:text-amber-400 group-hover:translate-x-1 transition-all shadow-md">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* 4. LIVE SERVICE ASSURANCE TRUST RIBBON                   */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 p-6 sm:p-7 rounded-[2rem] bg-white/95 backdrop-blur-xl border border-amber-400/40 shadow-xl shadow-amber-900/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div className="flex flex-col items-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 text-neutral-950 shadow-md shadow-amber-500/25 mb-2.5">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="text-xs sm:text-sm font-black text-zinc-950">100% Legal Indemnity</div>
            <div className="text-[11px] text-zinc-500 font-medium">Full RTO &amp; NOC Protection</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 text-neutral-950 shadow-md shadow-amber-500/25 mb-2.5">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div className="text-xs sm:text-sm font-black text-zinc-950">150+ Checkpoints</div>
            <div className="text-[11px] text-zinc-500 font-medium">Diagnostic Certified Inspection</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 text-neutral-950 shadow-md shadow-amber-500/25 mb-2.5">
              <Banknote className="h-5 w-5" />
            </div>
            <div className="text-xs sm:text-sm font-black text-zinc-950">Up to 90% Valuation</div>
            <div className="text-[11px] text-zinc-500 font-medium">Lowest EMI Car Financing</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 text-neutral-950 shadow-md shadow-amber-500/25 mb-2.5">
              <Phone className="h-5 w-5" />
            </div>
            <div className="text-xs sm:text-sm font-black text-amber-600">9073344500</div>
            <div className="text-[11px] text-zinc-500 font-medium">Direct Advisory Helpline</div>
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* 5. BOTTOM CTA TO VIEW ALL SERVICES                       */}
        {/* ======================================================== */}
        <div className="text-center">
          <Button
            to="/services"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="h-4 w-4" />}
          >
            Explore All 6 Services &amp; RTO Solutions
          </Button>
        </div>
      </div>

      {/* Service Details Box Screen Modal */}
      <ServiceDetailModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};