import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ShieldCheck,
  Award,
  Banknote,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
  Star,
  Phone
} from 'lucide-react';
import { siteData } from '../../data/siteData';
import { Button } from '../common/Button';

const getIcon = (icon: string) => {
  switch (icon) {
    case 'Sparkles':
      return <Sparkles className="h-6 w-6 text-amber-400" />;
    case 'ShieldCheck':
      return <ShieldCheck className="h-6 w-6 text-amber-400" />;
    case 'Award':
      return <Award className="h-6 w-6 text-amber-400" />;
    case 'Banknote':
      return <Banknote className="h-6 w-6 text-amber-400" />;
    case 'CheckCircle':
      return <CheckCircle2 className="h-6 w-6 text-amber-400" />;
    case 'PhoneCall':
      return <PhoneCall className="h-6 w-6 text-amber-400" />;
    default:
      return <Sparkles className="h-6 w-6 text-amber-400" />;
  }
};

const pillarHighlights = [
  'Verified Fair Market Value',
  '100% Legal RTO Indemnity',
  'Zero-Dep Cashless Network',
  'Up to 90% Quick Funding',
  '150+ Physical Checkpoints',
  'Direct Spot Helpline 24/7'
];

export const HomeWhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative bg-gradient-to-b from-[#090a0d] via-[#101217] to-[#090a0d] text-white border-b border-[#23242c] overflow-hidden">
      {/* ======================================================== */}
      {/* 1. BESPOKE LUXURY VELVET-SMOOTH AMBIENT LIGHTING         */}
      {/* ======================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Animated Horizontal Golden Light Sweep Beam across top boundary */}
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-amber-400/80 to-transparent"
        />

        {/* Ambient Glowing Orb 1 (Top-Right Amber Spotlight) */}
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
            scale: [1, 1.25, 1],
            opacity: [0.25, 0.55, 0.25]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-amber-500/18 via-yellow-400/8 to-transparent blur-[140px]"
        />

        {/* Ambient Glowing Orb 2 (Center-Left Golden Radiance) */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.45, 0.2]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5
          }}
          className="absolute top-1/3 -left-32 w-[620px] h-[620px] rounded-full bg-gradient-to-br from-amber-600/14 via-yellow-500/8 to-transparent blur-[150px]"
        />

        {/* Ambient Glowing Orb 3 (Bottom-Center Warm Pulse) */}
        <motion.div
          animate={{
            x: [0, -35, 0],
            y: [0, 30, 0],
            scale: [0.95, 1.15, 0.95],
            opacity: [0.15, 0.35, 0.15]
          }}
          transition={{
            duration: 9.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3
          }}
          className="absolute -bottom-24 left-1/3 w-[500px] h-[500px] rounded-full bg-amber-400/12 blur-[110px]"
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
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-zinc-900/90 backdrop-blur-md border border-amber-400/40 text-amber-300 font-black text-xs uppercase tracking-widest shadow-lg shadow-black/50 mb-4"
          >
            <Sparkles className="h-4 w-4 text-amber-400 animate-pulse" />
            <span>The Indiacarbazar Advantage</span>
            <ShieldCheck className="h-4 w-4 text-emerald-400 ml-0.5" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-3"
          >
            Why We Are The Best Option In{' '}
            <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-md">
              2nd Hand Market
            </span>
          </motion.h2>

          {/* Luxury Speed Bar Underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1.5 w-24 rounded-full my-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-600 mx-auto shadow-md shadow-amber-500/30"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-sm sm:text-base md:text-lg text-zinc-300 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            We eliminate the risks of the unorganized used car market with certified vehicles, guaranteed paperwork, and transparent dealings.
          </motion.p>
        </div>

        {/* ======================================================== */}
        {/* 3. 6 FEATURE PILLARS GRID WITH ORBITING BORDER BEAMS     */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8 mb-16">
          {siteData.whyChooseUs.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex"
            >
              {/* Pillar Card with Luxury Orbiting Border Beam Animation */}
              <div className="group relative flex flex-col w-full rounded-[2.25rem] p-[2px] transition-all duration-500 hover:-translate-y-2.5 cursor-pointer overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-amber-500/20">
                {/* Static Subtle Border Ring */}
                <div className="absolute inset-0 rounded-[2.25rem] bg-gradient-to-b from-zinc-800/80 via-zinc-800/40 to-zinc-800/80 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />

                {/* Animated Orbiting Golden Light Beam */}
                <div className="absolute -inset-[100%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_270deg,#f59e0b_315deg,#fef08a_340deg,#fbbf24_360deg)] animate-border-rotate opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Inner Card Surface */}
                <div className="relative flex flex-col w-full h-full rounded-[calc(2.25rem-2px)] bg-gradient-to-b from-[#15161c] via-[#111217] to-[#0d0e12] p-6 sm:p-7 overflow-hidden">
                  {/* Subtle Top-Right Ambient Glow Bloom on Hover */}
                  <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-amber-400/5 group-hover:bg-amber-400/15 blur-2xl transition-all duration-500 pointer-events-none" />

                  {/* Top Row: Icon Seal + Pillar Counter */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400/20 via-yellow-400/10 to-transparent border border-amber-400/30 text-amber-400 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-amber-400/60 group-hover:shadow-lg group-hover:shadow-amber-500/25">
                      {getIcon(item.icon)}
                    </div>
                    <span className="text-xs font-black text-amber-400/40 font-mono tracking-widest group-hover:text-amber-400 transition-colors uppercase">
                      0{idx + 1} / Advantage
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-black text-white group-hover:text-amber-300 transition-colors mb-2.5 tracking-tight line-clamp-1">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal mb-5 flex-1 line-clamp-3">
                    {item.desc}
                  </p>

                  {/* Bottom Verification Checkpoint Bar */}
                  <div className="mt-auto pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-semibold text-zinc-400 group-hover:text-zinc-200 transition-colors">
                    <span className="flex items-center gap-1.5 text-amber-400/90 group-hover:text-amber-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-amber-400" />
                      <span>{pillarHighlights[idx]}</span>
                    </span>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-800/60 text-zinc-400 group-hover:bg-amber-400 group-hover:text-neutral-950 group-hover:translate-x-1 transition-all">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ======================================================== */}
        {/* 4. EXECUTIVE VIP CLIENT EXPERIENCE SHOWCASE CARD        */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2.5rem] border border-amber-400/35 bg-gradient-to-r from-[#171821]/95 via-[#13141a]/95 to-[#171821]/95 p-8 sm:p-11 backdrop-blur-2xl relative overflow-hidden shadow-2xl shadow-black/80"
        >
          {/* Ambient Corner Golden Spotlights */}
          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-amber-500/12 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-yellow-500/10 blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            <div className="max-w-2xl text-center lg:text-left">
              {/* Star Rating Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold mb-4">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
                  ))}
                </div>
                <span>Verified Customer Satisfaction • Kolkata</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-1 mb-3 tracking-tight">
                "Best experience selling my car without RTO stress!"
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed mb-4">
                "They inspected my car in 45 minutes, paid on the spot, and transferred the RC smoothly. Real professionals in the eastern India pre-owned automotive segment."
              </p>

              <div className="text-xs sm:text-sm text-amber-400 font-black flex items-center justify-center lg:justify-start gap-2">
                <span>— Rajesh Mukherjee</span>
                <span className="text-zinc-600">•</span>
                <span className="text-zinc-400 font-medium">Salt Lake, Kolkata (Verified Seller)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Get Free Car Valuation
              </Button>
              <Button
                href={`tel:${siteData.company.helpline}`}
                variant="secondary"
                size="lg"
                icon={<Phone className="h-4 w-4 text-amber-400" />}
              >
                Direct: {siteData.company.helpline}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
