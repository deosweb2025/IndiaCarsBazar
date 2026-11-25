import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Award,
  ShieldCheck,
  Sparkles,
  Phone,
  Banknote,
  SearchCheck,
  FileCheck
} from 'lucide-react';
import { Button } from '../common/Button';

export const HomeAboutGlimpse: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative bg-gradient-to-b from-white via-[#faf8f5] to-white border-b border-zinc-200/80 overflow-hidden">
      {/* 1. ANIMATED AMBIENT BACKGROUND GLOW EFFECTS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated Golden Light Sweep Beam across top boundary */}
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent"
        />

        {/* Floating Ambient Orb 1 (Top-Left Golden Spotlight) */}
        <motion.div
          animate={{
            x: [0, 45, 0],
            y: [0, -35, 0],
            scale: [1, 1.2, 1],
            opacity: [0.35, 0.65, 0.35]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-amber-400/22 via-yellow-300/14 to-transparent blur-[100px]"
        />

        {/* Floating Ambient Orb 2 (Center-Right Warm Sunlight) */}
        <motion.div
          animate={{
            x: [0, -45, 0],
            y: [0, 45, 0],
            scale: [1, 1.25, 1],
            opacity: [0.25, 0.55, 0.25]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5
          }}
          className="absolute top-1/4 -right-28 w-[520px] h-[520px] rounded-full bg-gradient-to-bl from-yellow-500/18 via-amber-400/12 to-transparent blur-[110px]"
        />

        {/* Floating Ambient Orb 3 (Bottom-Center Amber Pulse) */}
        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -25, 0],
            scale: [0.95, 1.15, 0.95],
            opacity: [0.2, 0.45, 0.2]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3
          }}
          className="absolute -bottom-20 left-1/3 w-[420px] h-[420px] rounded-full bg-amber-400/16 blur-[90px]"
        />

        {/* Subtle Luxury Geometric Grid Overlay with Soft Radial Fade */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(rgba(180, 83, 9, 0.85) 1.2px, transparent 1.2px)',
            backgroundSize: '28px 28px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN: BESPOKE TWO-IMAGE COMPOSED LUXURY SHOWCASE */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-6 relative pb-10 sm:pb-12"
          >
            {/* CARD 1: PRIMARY SHOWROOM & CERTIFIED VEHICLE SHOWCASE */}
            <div className="relative w-[88%] sm:w-[84%] rounded-[2.25rem] p-3 sm:p-3.5 bg-gradient-to-br from-amber-400/40 via-amber-200/25 to-yellow-500/35 border border-amber-300/60 shadow-[0_25px_65px_-15px_rgba(217,119,6,0.22)]">
              <div className="relative rounded-[1.75rem] overflow-hidden aspect-[4/3] bg-white group shadow-inner">
                <img
                  src="/images/about-showcase-1.jpg"
                  alt="Indiacarbazar Certified Luxury Showroom & Multi-Brand Fleet"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-[1.0] contrast-[1.02]"
                  loading="lazy"
                />

                {/* Subtle Daylight Ambient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-950/10 via-transparent to-transparent pointer-events-none" />

                {/* Floating Glassmorphic Pill: Certified Multi-Brand Fleet */}
                <motion.div
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-amber-300 text-amber-900 text-xs font-black shadow-md"
                >
                  <Sparkles className="h-3.5 w-3.5 text-amber-600 animate-pulse" />
                  <span>Certified Multi-Brand Fleet</span>
                </motion.div>

                {/* Embedded Showroom Bar at Bottom */}
                <div className="absolute bottom-3 left-3 right-3 p-3 sm:p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-amber-200/80 flex items-center justify-between text-zinc-900 shadow-xl">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-700 block mb-0.5">
                      Showroom Floor • Kolkata
                    </span>
                    <div className="text-xs sm:text-sm font-extrabold text-zinc-950 tracking-tight">
                      Indiacarbazar Motors & Services
                    </div>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-yellow-500 text-neutral-950 font-black shadow-md shadow-amber-500/30 shrink-0">
                    <Award className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2: SECONDARY OVERLAPPING DETAIL IMAGE (DIAGNOSTIC & TECHNICAL QUALITY) */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 right-0 sm:bottom-0 sm:right-2 w-[58%] sm:w-[54%] rounded-[1.75rem] p-2.5 sm:p-3 bg-gradient-to-tl from-amber-400/40 via-white to-amber-300/40 border border-amber-300 shadow-[0_20px_50px_rgba(217,119,6,0.18)] z-20"
            >
              <div className="relative rounded-[1.25rem] overflow-hidden aspect-[4/3] bg-white group shadow-inner">
                <img
                  src="/images/about-showcase-2.jpg"
                  alt="Indiacarbazar 150+ Point Vehicle Diagnostic Inspection & Certified Fleet"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-[1.0] contrast-[1.02]"
                  loading="lazy"
                />

                {/* Soft Daylight Ambient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-950/10 via-transparent to-transparent pointer-events-none" />

                {/* Overlapping Badge: 150+ Inspected Fleet */}
                <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-amber-300 text-[10px] font-black text-amber-900 shadow-sm">
                  <SearchCheck className="h-3 w-3 text-amber-600" />
                  <span>150+ Inspected Fleet</span>
                </div>

                {/* Bottom Assurance Strip */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 rounded-lg bg-white/95 backdrop-blur-md border border-amber-200/80 flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-amber-100 text-amber-800 shrink-0">
                    <ShieldCheck className="h-3.5 w-3.5" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] font-black text-zinc-950 leading-tight">100% RTO Assured</div>
                    <div className="text-[9px] text-zinc-600 truncate">Legal Transfer & NOC</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FLOATING LUXURY AWARD SEAL (Top-Right Floating Accent) */}
            <motion.div
              animate={{ y: [-4, 4, -4], rotate: [-1, 1, -1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-3 right-4 sm:-top-5 sm:right-12 z-30 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-neutral-950 font-black text-xs shadow-xl shadow-amber-500/30"
            >
              <Award className="h-4 w-4" />
              <span>12+ Years Trust</span>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: REFINED EDITORIAL & VALUE GRID */}
          <div className="lg:col-span-6 flex flex-col items-start pt-6 lg:pt-0">

            {/* Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-amber-500/35 bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-amber-500/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-amber-800 mb-4 shadow-sm"
            >
              <Sparkles className="h-3.5 w-3.5 text-amber-600 animate-pulse" />
              <span>ABOUT INDIACARBAZAR</span>
            </motion.div>

            {/* Main Title with Champagne Gold Gradient Highlight */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-950 mb-3 leading-[1.18]"
            >
              Redefining the Second-Hand{' '}
              <span className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 bg-clip-text text-transparent">
                Car Market in India
              </span>
            </motion.h2>

            {/* Sleek Gold Accent Speedline */}
            <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 mb-5 shadow-sm shadow-amber-500/30" />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-base sm:text-lg text-zinc-800 font-semibold leading-relaxed mb-4"
            >
              We bridge the gap between automobile aspirations and transparent reality with certified multi-brand vehicles, verified paperwork, and zero hidden costs.
            </motion.p>

            {/* Body Copy */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-8 font-normal"
            >
              Born from a decade-long commitment to bring genuine trust and accountability to pre-owned automobile transactions,{' '}
              <strong className="text-zinc-950 font-bold">Indiacarbazar</strong> has grown into eastern India's premier certified automotive hub. From strict 150+ point diagnostic inspections to complete government RTO ownership transfer, we safeguard every customer with comprehensive mechanical and legal indemnity.
            </motion.p>

            {/* 6 High-Impact Interactive Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-8">
              {[
                {
                  title: '150+ Checkpoint Inspection',
                  desc: 'OBD diagnostics, engine, suspension & chassis',
                  icon: <SearchCheck className="h-4 w-4 text-amber-600" />
                },
                {
                  title: '100% Genuine RTO Transfer',
                  desc: 'Legal smart RC transfer & official NOC clearance',
                  icon: <FileCheck className="h-4 w-4 text-amber-600" />
                },
                {
                  title: 'Instant Spot Payout',
                  desc: 'Fair market valuation with immediate funds transfer',
                  icon: <Banknote className="h-4 w-4 text-amber-600" />
                },
                {
                  title: 'Non-Accidental Guarantee',
                  desc: 'Zero flood damage, verified original body pedigree',
                  icon: <ShieldCheck className="h-4 w-4 text-amber-600" />
                },
                {
                  title: 'Lowest EMI Car Loans',
                  desc: 'Partnered with SBI, HDFC, ICICI & leading NBFCs',
                  icon: <CheckCircle2 className="h-4 w-4 text-amber-600" />
                },
                {
                  title: 'Direct Helpline: 9073344500',
                  desc: 'Expert automotive advice & door-step documentation',
                  icon: <Phone className="h-4 w-4 text-amber-600" />
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * idx + 0.2 }}
                  className="flex items-start gap-3 p-3 rounded-xl border border-zinc-200/90 bg-white/80 hover:bg-white hover:border-amber-400/50 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-400/25 group-hover:bg-amber-500/20 group-hover:scale-105 transition-all shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-zinc-900 group-hover:text-amber-800 transition-colors">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-zinc-500 font-medium leading-tight mt-0.5">
                      {item.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                to="/about"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Discover Our Heritage
              </Button>
              <Button
                to="/services"
                variant="secondary"
                size="lg"
              >
                Explore Services Hub
              </Button>
            </div>
          </div>
        </div>

        {/* 5. BOTTOM LUXURY PERFORMANCE METRICS STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 sm:mt-20 pt-10 border-t border-zinc-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
        >
          {[
            { metric: '12+ Years', label: 'Automotive Heritage', detail: 'Serving Kolkata & Eastern India' },
            { metric: '5,000+', label: 'Verified Cars Delivered', detail: 'Clean paperwork & smart RC' },
            { metric: '150+', label: 'Diagnostic Checkpoints', detail: 'Rigorous technical evaluation' },
            { metric: '100%', label: 'Legal Transfer Indemnity', detail: 'Protected against all liabilities' }
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/60 border border-zinc-200/60 shadow-sm hover:shadow-md hover:border-amber-400/40 transition-all">
              <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600 bg-clip-text text-transparent mb-1">
                {stat.metric}
              </div>
              <div className="text-xs sm:text-sm font-extrabold text-zinc-900">
                {stat.label}
              </div>
              <div className="text-[11px] text-zinc-500 font-medium mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
