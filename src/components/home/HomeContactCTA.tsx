import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Clock
} from 'lucide-react';
import { siteData } from '../../data/siteData';
import { Button } from '../common/Button';

export const HomeContactCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Used Car Sale/Purchase',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
    // Open WhatsApp with pre-filled enquiry for immediate response
    const text = encodeURIComponent(
      `Hello Indiacarbazar! My name is ${formData.name}. I am inquiring about: ${formData.service}. Phone: ${formData.phone}. Notes: ${formData.message || 'Please provide details.'}`
    );
    window.open(`https://wa.me/${siteData.company.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="py-24 md:py-32 relative bg-gradient-to-b from-[#faf6ee] via-[#f4eee2] to-[#faf8f4] border-b border-amber-200/50 overflow-hidden">
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
        {/* 2. SECTION HEADER (Clean, Luxurious & Crisp)             */}
        {/* ======================================================== */}
        <div className="relative text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-400/20 backdrop-blur-md border border-amber-400/50 text-amber-900 font-black text-xs uppercase tracking-widest shadow-xs mb-4"
          >
            <Sparkles className="h-4 w-4 text-amber-600 animate-pulse" />
            <span>Direct Contact &amp; Helpline</span>
            <ShieldCheck className="h-4 w-4 text-emerald-600 ml-0.5" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-zinc-950 mb-3"
          >
            Ready to Buy, Sell or{' '}
            <span className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent drop-shadow-sm">
              Process RTO Works?
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
            Call our dedicated helpline at 9073344500 or submit your vehicle requirements below. Our automotive specialists respond within minutes.
          </motion.p>
        </div>

        {/* ======================================================== */}
        {/* 3. DUAL EXECUTIVE SHOWCASE CARDS (Helpline & Inquiry)    */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-14">

          {/* Left Column: Direct Helpline Desk in Obsidian Carbon with Golden Beam */}
          <div className="lg:col-span-5 flex">
            <div className="group relative flex flex-col justify-between w-full rounded-[2.25rem] p-[2px] transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-amber-500/25">
              {/* Static Subtle Border */}
              <div className="absolute inset-0 rounded-[2.25rem] bg-gradient-to-b from-amber-400/40 via-zinc-800 to-amber-400/40 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />

              {/* Animated Orbiting Golden Light Beam */}
              <div className="absolute -inset-[100%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_270deg,#f59e0b_315deg,#fef08a_340deg,#fbbf24_360deg)] animate-border-rotate opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Inner Carbon Card Surface */}
              <div className="relative flex flex-col justify-between w-full h-full rounded-[calc(2.25rem-2px)] bg-gradient-to-b from-[#14151b] via-[#101115] to-[#0c0d11] p-8 sm:p-10 text-white overflow-hidden">
                {/* Ambient Top-Right Golden Spotlight Glow */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 h-56 w-56 rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />

                <div>
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 rounded-full bg-zinc-900/90 border border-amber-400/40 px-3.5 py-1.5 text-xs font-bold text-amber-300 uppercase tracking-wider mb-6 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Official Helpline Desk</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight">
                    Call Us Directly for Immediate Assistance
                  </h3>

                  <p className="text-sm text-zinc-300 leading-relaxed mb-8 font-normal">
                    Whether you need a fair market valuation for your car, urgent motor insurance renewal, or hassle-free RTO paperwork, our executive team is at your service 7 days a week.
                  </p>

                  {/* Primary Helpline Banner with Gold Sheen */}
                  <a
                    href={`tel:${siteData.company.helpline}`}
                    className="flex items-center gap-4 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 p-5 text-neutral-950 shadow-xl shadow-amber-500/25 hover:scale-[1.02] transition-transform duration-300 group mb-6"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-950 text-amber-400 shadow-md group-hover:rotate-12 transition-transform">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase font-bold tracking-wider text-neutral-900/80">
                        Direct Helpline Number
                      </div>
                      <div className="text-2xl font-black text-neutral-950">
                        {siteData.company.helpline}
                      </div>
                    </div>
                  </a>

                  {/* Contact Meta Details */}
                  <div className="space-y-4 pt-4 border-t border-zinc-800/80 text-sm">
                    <div className="flex items-start gap-3 text-zinc-300">
                      <MapPin className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="font-medium text-xs sm:text-sm">
                        {siteData.company.address.street}, {siteData.company.address.city}, {siteData.company.address.state} - {siteData.company.address.pincode}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-zinc-300">
                      <Mail className="h-5 w-5 text-amber-400 shrink-0" />
                      <span className="font-medium text-xs sm:text-sm">{siteData.company.email}</span>
                    </div>

                    <div className="flex items-center gap-3 text-zinc-300">
                      <Clock className="h-5 w-5 text-emerald-400 shrink-0" />
                      <span className="text-xs font-semibold text-emerald-300">
                        {siteData.company.timings}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Portal Link */}
                <div className="mt-8 pt-6 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                  <span>Official Website:</span>
                  <a
                    href={siteData.company.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-amber-400 font-bold hover:underline"
                  >
                    {siteData.company.domain}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Crisp White Executive Inquiry Form with Golden Beam */}
          <div className="lg:col-span-7 flex">
            <div className="group relative flex flex-col justify-center w-full rounded-[2.25rem] p-[2px] transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-amber-500/20">
              {/* Static Subtle Border */}
              <div className="absolute inset-0 rounded-[2.25rem] bg-gradient-to-b from-amber-200/50 via-zinc-200/70 to-amber-200/50 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />

              {/* Animated Orbiting Golden Light Beam */}
              <div className="absolute -inset-[100%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_270deg,#f59e0b_315deg,#fef08a_340deg,#fbbf24_360deg)] animate-border-rotate opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Inner White Surface */}
              <div className="relative flex flex-col justify-center w-full h-full rounded-[calc(2.25rem-2px)] bg-white p-8 sm:p-10 shadow-xl overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight">
                    Instant Vehicle Inquiry &amp; Quote Request
                  </h3>
                  <span className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                    <Sparkles className="h-3 w-3" /> Quick Response
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 mb-6 font-normal">
                  Fill in your details below. We will calculate estimated car valuations or RTO timeline and connect directly.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-8 text-center"
                  >
                    <CheckCircle2 className="h-12 w-12 text-emerald-600 mx-auto mb-3" />
                    <h4 className="text-lg font-bold text-zinc-900 mb-1">
                      Inquiry Sent Successfully!
                    </h4>
                    <p className="text-xs text-zinc-600 mb-4">
                      WhatsApp will open to instantly connect with our executive at 9073344500.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      size="sm"
                    >
                      Send Another Inquiry
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-zinc-700 mb-1.5 uppercase tracking-wider">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-xl border border-zinc-200 bg-zinc-50/70 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-amber-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-all font-medium"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-zinc-700 mb-1.5 uppercase tracking-wider">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 98XXXXXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-xl border border-zinc-200 bg-zinc-50/70 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-amber-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-all font-medium"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-700 mb-1.5 uppercase tracking-wider">
                        Service Required *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-xl border border-zinc-200 bg-zinc-50/70 px-4 py-3 text-sm text-zinc-900 focus:border-amber-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-all cursor-pointer font-medium"
                      >
                        <option value="Buy Certified Used Car">Buy Certified Used Car</option>
                        <option value="Sell Used Car (Instant Valuation)">Sell Used Car (Instant Valuation)</option>
                        <option value="Car Registration & RTO Works">Car Registration & RTO Works</option>
                        <option value="Car Insurance & Instant Renewal">Car Insurance & Instant Renewal</option>
                        <option value="Car Loan & Easy Finance">Car Loan & Easy Finance</option>
                        <option value="Ownership Transfer & State NOC">Ownership Transfer & State NOC</option>
                        <option value="150+ Point Vehicle Inspection">150+ Point Vehicle Inspection</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-700 mb-1.5 uppercase tracking-wider">
                        Vehicle Details or Message (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Enter car make, model, manufacturing year, or specific requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-xl border border-zinc-200 bg-zinc-50/70 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-amber-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-all resize-none font-medium"
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full"
                        icon={<Send className="h-4 w-4" />}
                      >
                        Submit &amp; Connect on WhatsApp
                      </Button>
                    </div>

                    <p className="text-[11px] text-center text-zinc-500 pt-1 font-normal flex items-center justify-center gap-1.5">
                      <span>🔒</span>
                      <span>Zero spam guarantee. Your contact details remain confidential.</span>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 4. LIVE SERVICE GUARANTEE BADGES BAR                     */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-2xl bg-white/80 backdrop-blur-md border border-amber-300/40 shadow-sm text-xs font-bold text-zinc-800">
            <span className="text-amber-500">⚡</span>
            <span>10-Minute Average Response Time</span>
          </div>

          <div className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-2xl bg-white/80 backdrop-blur-md border border-amber-300/40 shadow-sm text-xs font-bold text-zinc-800">
            <span className="text-emerald-500">🛡️</span>
            <span>100% Verified Legal RTO Transfer</span>
          </div>

          <div className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-2xl bg-white/80 backdrop-blur-md border border-amber-300/40 shadow-sm text-xs font-bold text-zinc-800">
            <span className="text-amber-500">📞</span>
            <span>Direct Helpline: 9073344500</span>
          </div>
        </div>
      </div>
    </section>
  );
};
