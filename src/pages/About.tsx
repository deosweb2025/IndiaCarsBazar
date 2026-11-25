import React from 'react';
import { SEO } from '../components/common/SEO';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  FileText,
  BadgeCheck,
  Phone,
  ArrowRight,
  Sparkles,
  Star
} from 'lucide-react';
import { siteData } from '../data/siteData';
import { PageHeader } from '../components/common/PageHeader';
import { Button } from '../components/common/Button';

export const About: React.FC = () => {
  return (
    <div className="w-full">
      {/* Search Engine Optimization */}
      <SEO
        title="About Us | Trusted Pre-Owned Car Dealer in Kolkata"
        description="Learn about Indiacarbazar, Kolkata's trusted automotive hub for certified 2nd hand cars, transparent vehicle inspections, and seamless RTO paperwork since 2012."
      />

      {/* Page Header in Neutral Carbon with Gold Highlights */}
      <PageHeader
        badge="About Indiacarbazar"
        title="Your Trusted Partner In The"
        highlight="Pre-Owned Car Market"
        description="Established with a commitment to bring transparency, accountability, and seamless documentation to the second-hand vehicle industry."
        breadcrumbs={[{ label: 'About Us' }]}
        bgImage="/images/header-about.jpg"
        texture="carbon"
        borderStyle="curve"
        canvasBg="#fbf9f5"
      />

      {/* Main Story & Multi-Brand Fleet (Luxury Alabaster Silk Canvas) */}
      <section className="py-24 md:py-32 relative bg-gradient-to-b from-[#fbf9f5] via-[#f5efe3] to-[#faf7f2] border-b border-amber-200/50 overflow-hidden">
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
          
          {/* Main Story & Showcase Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
            
            {/* Left Column: Story & Commitments */}
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 backdrop-blur-md border border-amber-400/50 text-amber-900 font-black text-xs uppercase tracking-widest shadow-xs mb-4"
              >
                <Sparkles className="h-4 w-4 text-amber-600 animate-pulse" />
                <span>Our Foundation &amp; Vision</span>
                <ShieldCheck className="h-4 w-4 text-emerald-600 ml-0.5" />
              </motion.div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 mb-3 leading-tight tracking-tight">
                "The Best Way for Selling &amp;{' '}
                <span className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                  Buying an Used Car"
                </span>
              </h2>

              {/* Speed Bar Underline */}
              <div className="h-1.5 w-20 rounded-full my-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-600 shadow-sm shadow-amber-500/20" />

              <p className="text-sm sm:text-base text-zinc-700 leading-relaxed mb-4 font-normal">
                For years, buying or selling a pre-owned car in India meant navigating unverified middlemen, uncertain odometer readings, undisclosed accidental histories, and nightmarish visits to Regional Transport Offices (RTO).
              </p>

              <p className="text-sm sm:text-base text-zinc-700 leading-relaxed mb-6 font-normal">
                <strong className="text-zinc-950 font-bold">Indiacarbazar (IndiaCarBazar.com)</strong> was created to solve every single one of those problems. We bring corporate integrity, state-of-the-art 150+ point electronic diagnostics, instant transparent market valuations, and end-to-end RTO handling under one unified roof.
              </p>

              {/* Core Commitments Checklist */}
              <div className="space-y-3 mb-8 bg-white/70 backdrop-blur-md p-5 rounded-2xl border border-amber-200/50 shadow-sm">
                {[
                  "Zero Odometer Tampering Guarantee — Checked with OBD scanner",
                  "Non-Accidental & Non-Flood Damaged Structural Certification",
                  "Immediate Spot Payment with Clear Legal Sale Indemnity",
                  "Complete RTO Ownership Transfer, NOC & Hypothecation Clearance",
                  "Dedicated Customer Helpline: 9073344500"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-zinc-800">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-400/20 text-amber-600 shrink-0 mt-0.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-amber-600" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  to="/services"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  Explore Our Services
                </Button>
                <Button
                  to="/contact"
                  variant="secondary"
                  size="lg"
                >
                  Contact Our Team
                </Button>
              </div>
            </div>

            {/* Right Column: Luxury Showroom Showcase Card */}
            <div className="lg:col-span-6 relative">
              <div className="group relative flex flex-col w-full rounded-[2.25rem] p-[2px] transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-2xl hover:shadow-amber-500/20">
                {/* Static Subtle Border */}
                <div className="absolute inset-0 rounded-[2.25rem] bg-gradient-to-b from-amber-200/60 via-zinc-200/80 to-amber-200/60 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />

                {/* Animated Orbiting Golden Light Beam */}
                <div className="absolute -inset-[100%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_270deg,#f59e0b_315deg,#fef08a_340deg,#fbbf24_360deg)] animate-border-rotate opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Inner Card Surface */}
                <div className="relative flex flex-col w-full h-full rounded-[calc(2.25rem-2px)] bg-white p-6 sm:p-8 overflow-hidden">
                  <div className="flex items-center justify-between pb-5 border-b border-zinc-100">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-amber-600 flex items-center gap-1.5">
                        <Sparkles className="h-3 w-3 text-amber-500" />
                        <span>Verified Multi-Brand Hub</span>
                      </span>
                      <h3 className="text-xl font-black text-zinc-950 mt-0.5 tracking-tight">
                        Official Dealership Floor
                      </h3>
                    </div>
                    <span className="rounded-full bg-white/95 backdrop-blur-md border border-amber-300 px-3.5 py-1 text-xs font-bold text-amber-900 flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Kolkata Floor</span>
                    </span>
                  </div>

                  {/* Showroom Showcase Image */}
                  <div className="my-6 rounded-2xl overflow-hidden border border-zinc-200/80 shadow-lg group relative">
                    <img
                      src="/images/about-showcase-1.jpg"
                      alt="Indiacarbazar Certified Pre-Owned Multi-Brand Fleet"
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-2.5 inset-x-2.5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-amber-200/80 flex items-center justify-between text-zinc-900 text-[11px] font-medium shadow-md">
                      <span className="text-zinc-700 flex items-center gap-1.5">
                        <ShieldCheck className="h-3.5 w-3.5 text-amber-600" />
                        <span>100% Physical Floor Inspection</span>
                      </span>
                      <span className="text-amber-700 font-bold">Verified Fleet</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-500/5 rounded-xl p-4 border border-amber-400/30 shadow-sm">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-900 mb-1">
                      <BadgeCheck className="h-4 w-4 text-amber-600" />
                      <span>Our Quality Assurance:</span>
                    </div>
                    <p className="text-xs text-zinc-700 leading-relaxed font-normal">
                      "We arrange all Car related works like Car Registration, Car Insurance, Car loan &amp; all motor vehicle related jobs. Helpline no: 9073344500."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar in Obsidian Carbon with Golden Framing */}
          <div className="relative rounded-[2.5rem] p-[2px] mb-24 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-amber-400/40 via-yellow-400/20 to-amber-400/40 pointer-events-none" />
            
            <div className="relative rounded-[calc(2.5rem-2px)] bg-gradient-to-r from-[#14151b] via-[#0f1015] to-[#14151b] p-8 sm:p-11 text-white overflow-hidden">
              <div className="absolute top-0 right-1/4 h-48 w-48 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
                {siteData.keyStats.map((st, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent mb-1.5 drop-shadow-sm">
                      {st.value}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white mb-0.5">
                      {st.label}
                    </div>
                    <div className="text-[11px] text-amber-400/80 font-medium">
                      {st.suffix}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4 Core Operating Pillars */}
          <div className="mb-24">
            <div className="relative text-center max-w-3xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-400/20 backdrop-blur-md border border-amber-400/50 text-amber-900 font-black text-xs uppercase tracking-widest shadow-xs mb-4"
              >
                <Sparkles className="h-4 w-4 text-amber-600 animate-pulse" />
                <span>Our Operating Standards</span>
                <ShieldCheck className="h-4 w-4 text-emerald-600 ml-0.5" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-zinc-950 mb-3"
              >
                The 4 Pillars of{' '}
                <span className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent drop-shadow-sm">
                  Indiacarbazar
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
                Every single vehicle and service handled by our team adheres to strict operational standards.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
              {[
                {
                  title: "150+ Inspection Points",
                  desc: "Comprehensive diagnostic scanning of chassis, powertrain, suspension, and electronics before listing.",
                  icon: <Award className="h-6 w-6" />,
                  tag: "Diagnostic Certified"
                },
                {
                  title: "100% RTO Legality",
                  desc: "Full legal protection with clean ownership transfer, police NOC verification, and Form 29/30 filing.",
                  icon: <FileText className="h-6 w-6" />,
                  tag: "Govt. Smart RC"
                },
                {
                  title: "Transparent Valuation",
                  desc: "Scientific pricing derived from authentic market demand, vehicle condition, and documented service records.",
                  icon: <ShieldCheck className="h-6 w-6" />,
                  tag: "0% Brokerage"
                },
                {
                  title: "Direct Specialist Helpline",
                  desc: "Direct support from experienced automotive advisors at 9073344500 without automated IVR delays.",
                  icon: <Phone className="h-6 w-6" />,
                  tag: "Direct Support"
                }
              ].map((pillar, pIdx) => (
                <div
                  key={pIdx}
                  className="group relative flex flex-col w-full rounded-[2rem] p-[2px] transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-amber-500/20"
                >
                  {/* Static Border Ring */}
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-amber-200/50 via-zinc-200/70 to-amber-200/50 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />

                  {/* Animated Orbiting Golden Light Beam */}
                  <div className="absolute -inset-[100%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_270deg,#f59e0b_315deg,#fef08a_340deg,#fbbf24_360deg)] animate-border-rotate opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Inner Surface */}
                  <div className="relative flex flex-col w-full h-full rounded-[calc(2rem-2px)] bg-white p-6 sm:p-7 overflow-hidden">
                    {/* Top Row: Icon Seal + Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 text-neutral-950 font-black shadow-md shadow-amber-500/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        {pillar.icon}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/70">
                        {pillar.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-zinc-950 group-hover:text-amber-600 transition-colors mb-2 tracking-tight">
                      {pillar.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal flex-1 mb-4">
                      {pillar.desc}
                    </p>

                    <div className="mt-auto pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-amber-700">
                      <span>Standard Verified</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action Bar in Obsidian Carbon with Golden Halo */}
          <div className="relative rounded-[2.5rem] p-[2px] max-w-4xl mx-auto overflow-hidden shadow-2xl">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-amber-400/40 via-yellow-400/20 to-amber-400/40 pointer-events-none" />

            <div className="relative rounded-[calc(2.5rem-2px)] bg-gradient-to-r from-[#171821] via-[#121319] to-[#171821] p-8 sm:p-12 text-center text-white overflow-hidden">
              <div className="absolute top-0 right-1/4 h-56 w-56 rounded-full bg-amber-500/12 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-1/4 h-56 w-56 rounded-full bg-yellow-500/10 blur-3xl pointer-events-none" />

              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold mb-4">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                <span>Executive Automotive Guidance • Direct Helpline</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Have Questions About Selling or Buying a Car?
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 mb-8 max-w-xl mx-auto font-normal leading-relaxed">
                Talk directly with our senior automotive consultant. Call our helpline or visit our showroom for honest, transparent guidance.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  href={`tel:${siteData.company.helpline}`}
                  variant="primary"
                  size="lg"
                  icon={<Phone className="h-4 w-4" />}
                  iconPosition="left"
                >
                  Call {siteData.company.helpline}
                </Button>
                <Button
                  to="/contact"
                  variant="secondary"
                  size="lg"
                >
                  Visit Showroom &amp; Office
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
