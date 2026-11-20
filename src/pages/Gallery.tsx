import React, { useState } from 'react';
import { SEO } from '../components/common/SEO';
import { motion } from 'framer-motion';
import {
  ZoomIn,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Award,
  Phone,
  Car,
  Star
} from 'lucide-react';
import { siteData, type GalleryItem } from '../data/siteData';
import { PageHeader } from '../components/common/PageHeader';
import { LightboxModal } from '../components/common/LightboxModal';
import { Button } from '../components/common/Button';

export const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenLightbox = (item: GalleryItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  // Helper to detect studio cutout images with pure white backgrounds
  const isStudioCutout = (url: string) => {
    return /fleet-(innova|dzire|swift|wagonr|ertiga)\.jpg/i.test(url);
  };

  return (
    <div className="w-full">
      {/* Search Engine Optimization */}
      <SEO
        title="Automobile Gallery & Certified Fleet Showcase Kolkata"
        description="Explore our multi-brand certified pre-owned car fleet, customer delivery moments, and 150+ point diagnostic inspections at Indiacarbazar Eastern Bypass showroom."
      />

      {/* Page Header */}
      <PageHeader
        badge="Certified Vehicles & Showroom"
        title="Automobile Gallery &"
        highlight="Official Showcase"
        description="Browse through our certified pre-owned fleet, customer key deliveries, 150+ point diagnostic inspections, and contemporary multi-brand showroom."
        breadcrumbs={[{ label: 'Gallery' }]}
        bgImage="/images/header-gallery.jpg"
        texture="lines"
        borderStyle="arch"
        canvasBg="#f4f7fb"
      />

      <section className="py-24 md:py-32 relative bg-gradient-to-b from-[#f4f7fb] via-[#e5ecf5] to-[#ecf1f7] border-b border-slate-300/80 overflow-hidden">
        {/* ======================================================== */}
        {/* 1. BESPOKE LUXURY VELVET-SMOOTH AMBIENT LIGHTING         */}
        {/* ======================================================== */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {/* Animated Horizontal Golden Light Sweep Beam across top boundary */}
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"
          />

          {/* Animated Ambient Orb 1 (Top-Left Gold Glow) */}
          <motion.div
            animate={{
              x: [0, 45, 0],
              y: [0, -35, 0],
              scale: [1, 1.25, 1],
              opacity: [0.35, 0.65, 0.35]
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-amber-400/22 via-yellow-300/12 to-transparent blur-[110px]"
          />

          {/* Animated Ambient Orb 2 (Center-Right Warm Amber Bloom) */}
          <motion.div
            animate={{
              x: [0, -50, 0],
              y: [0, 40, 0],
              scale: [1, 1.2, 1],
              opacity: [0.25, 0.55, 0.25]
            }}
            transition={{
              duration: 13,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1.5
            }}
            className="absolute top-1/3 -right-32 w-[580px] h-[580px] rounded-full bg-gradient-to-bl from-yellow-500/18 via-amber-400/10 to-transparent blur-[120px]"
          />

          {/* Animated Ambient Orb 3 (Bottom-Left Gold Pulse) */}
          <motion.div
            animate={{
              x: [0, 35, 0],
              y: [0, -25, 0],
              scale: [0.95, 1.15, 0.95],
              opacity: [0.2, 0.45, 0.2]
            }}
            transition={{
              duration: 9.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 3
            }}
            className="absolute -bottom-24 left-1/4 w-[460px] h-[460px] rounded-full bg-amber-400/16 blur-[95px]"
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
              <span>Verified Automotive Portfolio</span>
              <ShieldCheck className="h-4 w-4 text-emerald-400 ml-0.5" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-zinc-950 mb-3"
            >
              Certified Pre-Owned{' '}
              <span className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent drop-shadow-sm">
                Fleet &amp; Showroom
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
              Explore our verified luxury and executive vehicle portfolio, customer key deliveries, 150+ point diagnostic inspections, and contemporary showroom.
            </motion.p>
          </div>

          {/* ======================================================== */}
          {/* 3. HEROIC VEHICLE SHOWCASE GRID (All 15 Vehicles)        */}
          {/* ======================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8 mb-16">
            {siteData.gallery.map((item, idx) => {
              const isCutout = isStudioCutout(item.imageUrl);

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx % 6) * 0.06 }}
                  className="flex"
                >
                  {/* Vehicle Card with Orbiting Golden Border Beam Animation */}
                  <div
                    onClick={() => handleOpenLightbox(item)}
                    className="group relative flex flex-col w-full rounded-[2.25rem] p-[2px] transition-all duration-500 hover:-translate-y-2.5 cursor-pointer overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-amber-500/25"
                  >
                    {/* Static Subtle Border Ring */}
                    <div className="absolute inset-0 rounded-[2.25rem] bg-gradient-to-b from-slate-200/90 via-slate-300/60 to-slate-200/90 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />

                    {/* Animated Orbiting Golden Light Beam */}
                    <div className="absolute -inset-[100%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_270deg,#f59e0b_315deg,#fef08a_340deg,#fbbf24_360deg)] animate-border-rotate opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Inner Card Content Surface */}
                    <div className="relative flex flex-col w-full h-full rounded-[calc(2.25rem-2px)] bg-white p-4 sm:p-5 overflow-hidden">
                      {/* Hero Image Showcase Stage */}
                      <div className="relative h-60 sm:h-64 w-full rounded-2xl overflow-hidden mb-5 bg-gradient-to-b from-zinc-50 via-zinc-100/90 to-zinc-200/70 border border-zinc-200/80 flex items-center justify-center">
                        {/* Top-Left Category Badge */}
                        <div className="absolute top-3.5 left-3.5 z-20">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-950/85 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-amber-300 border border-amber-400/30 shadow-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                            {item.category}
                          </span>
                        </div>

                        {/* Top-Right Quick Zoom Button */}
                        <div className="absolute top-3.5 right-3.5 z-20">
                          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 text-neutral-950 flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 font-black">
                            <ZoomIn className="h-4 w-4" />
                          </div>
                        </div>

                        {/* Bottom Quick Lightbox Bar */}
                        <div className="absolute bottom-2.5 inset-x-2.5 px-3.5 py-1.5 rounded-xl bg-zinc-950/85 backdrop-blur-md border border-amber-400/30 flex items-center justify-between text-white shadow-lg z-20">
                          <span className="text-[11px] font-semibold text-zinc-300 flex items-center gap-1.5">
                            <span className="text-amber-400">⚡</span> Instant Box Screen
                          </span>
                          <span className="text-amber-400 text-xs font-black group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                            Inspect Full Screen ↗
                          </span>
                        </div>

                        {/* Vehicle Image */}
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          loading="lazy"
                          className={`w-full h-full transition-transform duration-700 ease-out group-hover:scale-108 ${
                            isCutout
                              ? 'object-contain p-2 sm:p-3 scale-105 group-hover:scale-112 drop-shadow-[0_16px_28px_rgba(0,0,0,0.20)]'
                              : 'object-cover'
                          }`}
                        />
                      </div>

                      {/* Card Content Body */}
                      <h3 className="text-xl sm:text-2xl font-black text-zinc-950 group-hover:text-amber-600 transition-colors mb-2.5 tracking-tight line-clamp-1">
                        {item.title}
                      </h3>

                      {/* Feature Verification Badges */}
                      <div className="flex flex-wrap items-center gap-1.5 mb-3">
                        <span className="text-[11px] font-bold text-zinc-800 bg-zinc-100 px-2.5 py-0.5 rounded-md border border-zinc-200 flex items-center gap-1">
                          <Car className="h-3 w-3 text-amber-600" />
                          Certified Pre-Owned
                        </span>
                        <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200/80 flex items-center gap-1">
                          <ShieldCheck className="h-3 w-3 text-emerald-600" />
                          RC Assured
                        </span>
                        <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200/80 flex items-center gap-1">
                          <Award className="h-3 w-3 text-amber-600" />
                          0% Brokerage
                        </span>
                      </div>

                      {/* Caption */}
                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4 flex-1 line-clamp-2 font-normal">
                        {item.caption}
                      </p>

                      {/* Card Action Button Bar */}
                      <div className="mt-auto w-full flex items-center justify-between px-4 py-3 rounded-xl bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-500/5 border border-amber-400/30 group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:via-yellow-400 group-hover:to-amber-500 group-hover:border-amber-400 transition-all duration-300 shadow-sm">
                        <span className="text-xs font-black text-amber-900 group-hover:text-neutral-950 transition-colors uppercase tracking-wider flex items-center gap-1.5">
                          <Sparkles className="h-3.5 w-3.5 text-amber-600 group-hover:text-neutral-950" />
                          <span>High-Res Lightbox View</span>
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
          {/* 4. LIVE SHOWROOM ASSURANCE TRUST RIBBON                  */}
          {/* ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 p-6 sm:p-7 rounded-[2rem] bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl shadow-slate-900/5 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          >
            <div className="flex flex-col items-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 text-neutral-950 shadow-md shadow-amber-500/25 mb-2.5">
                <Car className="h-5 w-5" />
              </div>
              <div className="text-xs sm:text-sm font-black text-zinc-950">Certified Multi-Brand</div>
              <div className="text-[11px] text-zinc-500 font-medium">100% Genuine Physical Fleet</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 text-neutral-950 shadow-md shadow-amber-500/25 mb-2.5">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div className="text-xs sm:text-sm font-black text-zinc-950">150+ Inspection Points</div>
              <div className="text-[11px] text-zinc-500 font-medium">Complete Mechanical Clearance</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 text-neutral-950 shadow-md shadow-amber-500/25 mb-2.5">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="text-xs sm:text-sm font-black text-zinc-950">Instant RC Guarantee</div>
              <div className="text-[11px] text-zinc-500 font-medium">Zero Accidental / Legal Shield</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 text-neutral-950 shadow-md shadow-amber-500/25 mb-2.5">
                <Phone className="h-5 w-5" />
              </div>
              <div className="text-xs sm:text-sm font-black text-amber-600">9073344500</div>
              <div className="text-[11px] text-zinc-500 font-medium">Direct Showroom Helpline</div>
            </div>
          </motion.div>

          {/* ======================================================== */}
          {/* 5. EXECUTIVE SHOWROOM INSPECTION VIP CARD                */}
          {/* ======================================================== */}
          <div className="relative rounded-[2.5rem] p-[2px] max-w-4xl mx-auto overflow-hidden shadow-2xl">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-amber-400/40 via-yellow-400/20 to-amber-400/40 pointer-events-none" />

            <div className="relative rounded-[calc(2.5rem-2px)] bg-gradient-to-r from-[#171821] via-[#121319] to-[#171821] p-8 sm:p-12 text-center text-white overflow-hidden">
              <div className="absolute top-0 right-1/4 h-56 w-56 rounded-full bg-amber-500/12 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-1/4 h-56 w-56 rounded-full bg-yellow-500/10 blur-3xl pointer-events-none" />

              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold mb-4">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                <span>Showroom &amp; On-Spot Test Drives • Open 7 Days</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 tracking-tight">
                Want to inspect a specific car in person?
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 mb-8 max-w-xl mx-auto font-normal leading-relaxed">
                Our multi-brand showroom is open 7 days a week in Kolkata. Bring your mechanic or test drive any certified vehicle on the spot.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  href={`tel:${siteData.company.helpline}`}
                  variant="primary"
                  size="lg"
                  icon={<Phone className="h-4 w-4" />}
                  iconPosition="left"
                >
                  Call Helpline: {siteData.company.helpline}
                </Button>
                <Button
                  to="/contact"
                  variant="secondary"
                  size="lg"
                >
                  Book Inspection Slot
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal Box Screen */}
      <LightboxModal
        isOpen={isModalOpen}
        item={selectedItem}
        items={siteData.gallery}
        onClose={handleCloseLightbox}
        onSelect={(item) => setSelectedItem(item)}
      />
    </div>
  );
};

export default Gallery;
