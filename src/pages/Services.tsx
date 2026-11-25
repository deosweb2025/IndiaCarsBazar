import React, { useState } from 'react';
import { SEO } from '../components/common/SEO';
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
  Phone,
  CheckCircle2,
  Star
} from 'lucide-react';
import { siteData, type ServiceItem } from '../data/siteData';
import { PageHeader } from '../components/common/PageHeader';
import { Button } from '../components/common/Button';
import { ServiceDetailModal } from '../components/common/ServiceDetailModal';

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

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <div className="w-full">
      {/* Search Engine Optimization */}
      <SEO
        title="Automotive Services | RTO Ownership Transfer, Car Loan & Insurance"
        description="Complete motor vehicle solutions in Kolkata: certified used car sale & purchase, RTO registration, ownership transfer, instant car insurance renewal, and low-EMI car finance."
      />

      {/* Page Header with Lab Background Image */}
      <PageHeader
        badge="Complete Automotive Hub"
        title="Comprehensive Motor Vehicle"
        highlight="Services & Solutions"
        description="From verified second-hand car buying & selling to RTO Car Registration, Car Insurance, Car Loans, and all vehicle paperwork under one roof."
        breadcrumbs={[{ label: 'Services' }]}
        bgImage="/images/header-services.jpg"
        texture="matrix"
        borderStyle="slant"
        canvasBg="#fbf9f5"
      />

      {/* Services Grid with Instant Box Screen Details (Luxury Champagne Silk Canvas) */}
      <section className="py-24 md:py-32 relative bg-gradient-to-b from-[#fbf9f5] via-[#f4eee2] to-[#faf8f4] border-b border-amber-200/50 overflow-hidden">
        {/* ======================================================== */}
        {/* 1. BESPOKE LUXURY VELVET-SMOOTH AMBIENT LIGHTING         */}
        {/* ======================================================== */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {/* Animated Horizontal Golden Light Sweep Beam across top boundary */}
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-amber-400/70 to-transparent"
          />

          {/* Ambient Glowing Orb 1 (Top-Right Amber Spotlight) */}
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
            className="absolute -top-32 -right-32 w-[580px] h-[580px] rounded-full bg-gradient-to-bl from-amber-400/22 via-yellow-300/12 to-transparent blur-[120px]"
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
            className="absolute top-1/3 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-yellow-500/18 via-amber-400/10 to-transparent blur-[130px]"
          />

          {/* Ambient Glowing Orb 3 (Bottom-Center Warm Radiance) */}
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
          {/* 2. SECTION HEADER (Executive Luxury & Crisp Typography)  */}
          {/* ======================================================== */}
          <div className="relative text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-400/20 backdrop-blur-md border border-amber-400/50 text-amber-900 font-black text-xs uppercase tracking-widest shadow-xs mb-4"
            >
              <Sparkles className="h-4 w-4 text-amber-600 animate-pulse" />
              <span>Tailored Solutions</span>
              <ShieldCheck className="h-4 w-4 text-emerald-600 ml-0.5" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-zinc-950 mb-3"
            >
              Explore Our Core{' '}
              <span className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent drop-shadow-sm">
                Service Offerings
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
              Click on any service card below to view detailed requirements, step-by-step procedures, and required documents in an instant box screen.
            </motion.p>
          </div>

          {/* ======================================================== */}
          {/* 3. 6 SERVICE OFFERING CARDS WITH ORBITING BORDER BEAMS    */}
          {/* ======================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8 mb-24">
            {siteData.services.map((service: ServiceItem, index: number) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex"
              >
                {/* Interactive Card opening Box Screen Modal with Orbiting Border Beam */}
                <div
                  onClick={() => setSelectedService(service)}
                  className="group relative flex flex-col w-full rounded-[2.25rem] p-[2px] transition-all duration-500 hover:-translate-y-2.5 cursor-pointer overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-amber-500/25"
                >
                  {/* Static Subtle Border Ring */}
                  <div className="absolute inset-0 rounded-[2.25rem] bg-gradient-to-b from-amber-200/50 via-zinc-200/70 to-amber-200/50 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />

                  {/* Animated Orbiting Golden Light Beam */}
                  <div className="absolute -inset-[100%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_270deg,#f59e0b_315deg,#fef08a_340deg,#fbbf24_360deg)] animate-border-rotate opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Inner Card Content Surface */}
                  <div className="relative flex flex-col w-full h-full rounded-[calc(2.25rem-2px)] bg-white p-4 sm:p-5 overflow-hidden">
                    {/* Hero Image Stage */}
                    <div className="relative h-56 w-full rounded-2xl overflow-hidden mb-5 bg-gradient-to-b from-zinc-50 via-zinc-100/90 to-zinc-200/70 border border-zinc-200/80 flex items-center justify-center p-3">
                      {/* Floating Service Icon Seal (Top-Left) */}
                      <div className="absolute top-3.5 left-3.5 z-20 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 text-neutral-950 font-black shadow-lg shadow-amber-500/35 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        {getServiceIcon(service.iconName)}
                      </div>

                      {/* Floating Badge (Top-Right) */}
                      <div className="absolute top-3.5 right-3.5 z-20 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-amber-300 text-xs font-bold text-amber-900 shadow-md flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                        {service.badge}
                      </div>

                      {/* Image */}
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-110 drop-shadow-md"
                      />

                      {/* Bottom Instant Box Screen Trigger Pill */}
                      <div className="absolute bottom-2.5 inset-x-2.5 px-3.5 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-amber-200/80 flex items-center justify-between text-zinc-900 shadow-md z-20">
                        <span className="text-[11px] font-semibold text-zinc-700 flex items-center gap-1.5">
                          <span className="text-amber-600">⚡</span> Instant Box Screen
                        </span>
                        <span className="text-amber-700 text-xs font-black group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
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

                    {/* Action Bar */}
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
            ))}
          </div>

          {/* ======================================================== */}
          {/* 4. RTO & MOTOR VEHICLE COMMAND MATRIX                    */}
          {/* ======================================================== */}
          <div className="relative rounded-[2.5rem] p-[2px] mb-20 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-amber-400/40 via-yellow-400/20 to-amber-400/40 pointer-events-none" />

            <div className="relative rounded-[calc(2.5rem-2px)] bg-gradient-to-b from-[#14151b] via-[#0f1015] to-[#14151b] p-8 sm:p-12 text-white overflow-hidden">
              <div className="absolute top-0 right-1/4 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-1/4 h-56 w-56 rounded-full bg-yellow-500/8 blur-3xl pointer-events-none" />

              <div className="text-center max-w-2xl mx-auto mb-10 relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/15 border border-amber-400/30 px-3.5 py-1 text-xs font-bold text-amber-300 uppercase tracking-wider mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Official RTO Solutions</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mt-1 tracking-tight">
                  Motor Vehicle Tasks We Arrange
                </h3>
                
                <div className="h-1 w-16 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto my-3" />

                <p className="text-xs sm:text-sm text-zinc-400 mt-2 font-normal leading-relaxed">
                  As stated on our official dealership card, we arrange all motor vehicle related jobs without bureaucratic delay.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 relative z-10">
                {[
                  { title: "RC Name & Ownership Transfer", desc: "Form 29 & 30 preparation, seller indemnity & smart card issuance." },
                  { title: "State NOC Procurement", desc: "Form 28 clearance for moving vehicles to another state without road tax issues." },
                  { title: "Hypothecation Removal (HP)", desc: "Bank loan closure update and Form 35 cancellation in RTO records." },
                  { title: "Car Insurance Renewal", desc: "Instant quote comparison, comprehensive/zero-dep covers & claims support." },
                  { title: "Used Car Finance & Loans", desc: "Up to 90% vehicle funding, fast disbursal & competitive interest rates." },
                  { title: "Fitness & Re-registration", desc: "Fitness certificates for commercial vehicles and 15-year old vehicle renewals." },
                  { title: "Duplicate RC Generation", desc: "Assistance in filing loss report and procuring replacement smart card RC." },
                  { title: "HSRP Plate Booking & Fitment", desc: "Govt-approved High Security Registration Plate booking & tracking." },
                  { title: "Road Tax Clearance", desc: "Lifetime and periodic commercial road tax payment with valid treasury receipts." }
                ].map((task, idx) => (
                  <div
                    key={idx}
                    className="group relative rounded-2xl border border-zinc-800/90 bg-[#161720]/80 p-5 backdrop-blur-md hover:border-amber-400/50 hover:bg-[#1a1b24] transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-amber-500/10 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-400/15 text-amber-400 group-hover:bg-amber-400 group-hover:text-neutral-950 transition-colors">
                        <Sparkles className="h-4 w-4" />
                      </div>
                      <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                        {task.title}
                      </h4>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                      {task.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* 5. QUICK HELPLINE CONSULTATION CARD                      */}
          {/* ======================================================== */}
          <div className="relative rounded-[2.5rem] p-[2px] max-w-4xl mx-auto overflow-hidden shadow-2xl">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-amber-400/40 via-yellow-400/20 to-amber-400/40 pointer-events-none" />

            <div className="relative rounded-[calc(2.5rem-2px)] bg-gradient-to-r from-[#171821] via-[#121319] to-[#171821] p-8 sm:p-12 text-center text-white overflow-hidden">
              <div className="absolute top-0 right-1/4 h-56 w-56 rounded-full bg-amber-500/12 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-1/4 h-56 w-56 rounded-full bg-yellow-500/10 blur-3xl pointer-events-none" />

              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold mb-4">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                <span>Executive Automotive Guidance • 7 Days Open</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 tracking-tight">
                Need Custom Assistance for Your Vehicle?
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 mb-8 max-w-xl mx-auto font-normal leading-relaxed">
                Our direct automotive helpline is open 7 days a week. Speak directly with our lead specialist at 9073344500.
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
                  Submit Online Inquiry
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Box Screen Modal */}
      <ServiceDetailModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
};

export default Services;
