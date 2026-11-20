import React, { useState } from 'react';
import { SEO } from '../components/common/SEO';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { siteData } from '../data/siteData';
import { PageHeader } from '../components/common/PageHeader';
import { Button } from '../components/common/Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Used Car Sale/Purchase',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
    const text = encodeURIComponent(
      `Hello Indiacarbazar! My name is ${formData.name}.\nPhone: ${formData.phone}\nEmail: ${formData.email || 'N/A'}\nService: ${formData.service}\nDetails: ${formData.message || 'I would like to inquire about your automotive services.'}`
    );
    window.open(`https://wa.me/${siteData.company.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full">
      {/* Search Engine Optimization */}
      <SEO
        title="Contact Indiacarbazar | Used Car Dealership & RTO Helpline Kolkata"
        description="Get in touch with Indiacarbazar. Call our dedicated automotive helpline at 9073344500 or visit our Eastern Bypass showroom for buying, selling, and RTO paperwork."
      />

      {/* Page Header in Luxury Velvet Obsidian with Gold Highlight */}
      <PageHeader
        badge="Contact & Helpline Desk"
        title="Get in Touch With"
        highlight="Indiacarbazar"
        description="Whether you wish to sell your vehicle, buy a certified used car, renew car insurance, or expedite RTO registration, our automotive desk is here to assist you."
        breadcrumbs={[{ label: 'Contact Us' }]}
        bgImage="/images/header-contact.jpg"
        borderStyle="notch"
        canvasBg="#faf6ee"
      />

      {/* Main Contact Section (Luxury Warm Champagne Silk Canvas) */}
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

          {/* Section Header */}
          <div className="relative text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-zinc-950/90 backdrop-blur-md border border-amber-400/40 text-amber-300 font-black text-xs uppercase tracking-widest shadow-lg shadow-black/5 mb-4"
            >
              <Sparkles className="h-4 w-4 text-amber-400 animate-pulse" />
              <span>Direct Concierge Desk</span>
              <ShieldCheck className="h-4 w-4 text-emerald-400 ml-0.5" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-zinc-950 mb-3"
            >
              Connect Directly with{' '}
              <span className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent drop-shadow-sm">
                Indiacarbazar Specialists
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
              Whether you want to sell your car for instant payment, buy a certified used vehicle, or process government RTO paperwork, our senior automotive desk is at your service.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-20">

            {/* Left Column: Direct Helpline & Contact Info (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">

              {/* PRIMARY HELPLINE CALL CARD (9073344500) */}
              <div className="group relative flex flex-col w-full rounded-[2.25rem] p-[2px] transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-2xl hover:shadow-amber-500/25">
                {/* Static Subtle Border */}
                <div className="absolute inset-0 rounded-[2.25rem] bg-gradient-to-b from-amber-400/40 via-zinc-800 to-amber-400/40 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />

                {/* Animated Orbiting Golden Light Beam */}
                <div className="absolute -inset-[100%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_270deg,#f59e0b_315deg,#fef08a_340deg,#fbbf24_360deg)] animate-border-rotate opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Inner Card Surface */}
                <div className="relative flex flex-col w-full h-full rounded-[calc(2.25rem-2px)] bg-gradient-to-b from-[#14151b] via-[#101115] to-[#0c0d11] p-7 sm:p-9 text-white overflow-hidden">
                  <div className="absolute top-0 right-0 -mr-16 -mt-16 h-48 w-48 rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />

                  <div className="inline-flex items-center gap-2 rounded-full bg-zinc-900/90 border border-amber-400/40 px-3.5 py-1 text-xs font-bold text-amber-300 uppercase tracking-wider mb-4 shadow-md w-fit">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Official Helpline Desk</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white mb-2 tracking-tight">
                    Call for Immediate Assistance
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 mb-6 font-normal leading-relaxed">
                    Direct connection with our senior multi-brand automotive advisors across eastern India.
                  </p>

                  <a
                    href={`tel:${siteData.company.helpline}`}
                    className="flex items-center gap-4 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 p-4 sm:p-5 text-neutral-950 shadow-xl shadow-amber-500/25 hover:scale-[1.02] transition-transform duration-300 group mb-2"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-950 text-amber-400 shadow-md group-hover:rotate-12 transition-transform shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-neutral-900/80">
                        Direct Helpline Number
                      </div>
                      <div className="text-2xl font-black text-neutral-950">
                        {siteData.company.helpline}
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* WHATSAPP INSTANT CHAT CARD */}
              <a
                href={siteData.company.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-3xl p-[2px] transition-all duration-300 hover:-translate-y-1 block shadow-md hover:shadow-xl hover:shadow-emerald-500/20"
              >
                <div className="rounded-[calc(1.5rem-2px)] border border-emerald-300/40 bg-white p-5 sm:p-6 flex items-center justify-between transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-lg shadow-green-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all shrink-0">
                      <svg viewBox="0 0 32 32" className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 2C8.28 2 2 8.28 2 16C2 18.72 2.78 21.26 4.14 23.42L2.5 29.5L8.74 27.88C10.84 29.14 13.32 29.86 16 29.86C23.72 29.86 30 23.58 30 15.86C30 8.14 23.72 2 16 2ZM22.42 21.14C22.14 21.94 20.88 22.62 20.08 22.78C19.54 22.88 18.84 22.96 16.48 21.98C13.46 20.72 11.52 17.66 11.36 17.46C11.22 17.26 10.12 15.8 10.12 14.3C10.12 12.8 10.88 12.06 11.18 11.76C11.44 11.5 11.82 11.38 12.18 11.38C12.3 11.38 12.42 11.38 12.52 11.38C12.82 11.4 12.98 11.42 13.18 11.9C13.42 12.48 14 13.9 14.08 14.04C14.16 14.18 14.22 14.36 14.12 14.54C14.02 14.72 13.96 14.82 13.82 14.98C13.68 15.14 13.52 15.34 13.4 15.48C13.24 15.64 13.08 15.82 13.26 16.14C13.44 16.44 14.08 17.48 15.02 18.32C16.24 19.4 17.24 19.76 17.58 19.9C17.88 20.02 18.06 20 18.24 19.8C18.46 19.54 19.12 18.78 19.34 18.44C19.56 18.1 19.78 18.16 20.08 18.26C20.38 18.36 22.02 19.18 22.36 19.34C22.7 19.5 22.92 19.62 23.02 19.78C23.1 19.94 23.1 20.64 22.42 21.14Z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-black text-zinc-950 group-hover:text-emerald-700 transition-colors">
                        Chat on Official WhatsApp
                      </div>
                      <div className="text-xs text-zinc-500 font-normal">
                        Instant valuation &amp; high-res vehicle photo sharing
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>

              {/* Showroom Address & Timings */}
              <div className="rounded-[2rem] border border-amber-200/60 bg-white p-6 sm:p-7 shadow-md space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400/20 text-amber-600 shrink-0 mt-0.5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-zinc-950 uppercase tracking-wider mb-1">
                      Showroom Address
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                      {siteData.company.address.street}, {siteData.company.address.city}, {siteData.company.address.state} - {siteData.company.address.pincode}
                    </p>
                    <span className="text-[11px] text-amber-700 font-bold block mt-1">
                      📍 {siteData.company.address.landmark}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3.5 border-t border-zinc-100">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/20 text-emerald-600 shrink-0 mt-0.5">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-zinc-950 uppercase tracking-wider mb-1">
                      Working Hours
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-700 font-normal">
                      {siteData.company.timings}
                    </p>
                    <span className="text-[11px] text-emerald-700 font-bold flex items-center gap-1.5 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Open 7 Days a Week</span>
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3.5 border-t border-zinc-100">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400/20 text-amber-600 shrink-0 mt-0.5">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-zinc-950 uppercase tracking-wider mb-1">
                      Official Email
                    </h4>
                    <a
                      href={`mailto:${siteData.company.email}`}
                      className="text-xs sm:text-sm text-zinc-700 hover:text-amber-700 transition-colors font-medium"
                    >
                      {siteData.company.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Complete Inquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="group relative flex flex-col w-full rounded-[2.25rem] p-[2px] transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-2xl hover:shadow-amber-500/20">
                {/* Static Subtle Border */}
                <div className="absolute inset-0 rounded-[2.25rem] bg-gradient-to-b from-amber-200/50 via-zinc-200/70 to-amber-200/50 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />

                {/* Animated Orbiting Golden Light Beam */}
                <div className="absolute -inset-[100%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_270deg,#f59e0b_315deg,#fef08a_340deg,#fbbf24_360deg)] animate-border-rotate opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Inner White Surface */}
                <div className="relative flex flex-col w-full h-full rounded-[calc(2.25rem-2px)] bg-white p-8 sm:p-10 shadow-xl overflow-hidden">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-600 flex items-center gap-1.5">
                      <Sparkles className="h-3 w-3 text-amber-500" />
                      <span>Send Direct Message</span>
                    </span>
                    <span className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/70">
                      ⚡ Quick Response Desk
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-zinc-950 mb-2 tracking-tight">
                    Automotive Inquiry &amp; Booking Form
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 mb-6 font-normal">
                    Provide your vehicle details or requirements. We will analyze your query and connect instantly via WhatsApp or phone call.
                  </p>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-8 text-center"
                    >
                      <CheckCircle2 className="h-12 w-12 text-emerald-600 mx-auto mb-3" />
                      <h4 className="text-lg font-bold text-zinc-900 mb-1">
                        Inquiry Initiated Successfully!
                      </h4>
                      <p className="text-xs text-zinc-600 mb-4">
                        WhatsApp has opened in a new tab with your pre-filled inquiry. Our executive at 9073344500 is ready to assist.
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        size="sm"
                      >
                        Submit Another Inquiry
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
                            placeholder="e.g. Suman Sen"
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

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-zinc-700 mb-1.5 uppercase tracking-wider">
                            Email Address (Optional)
                          </label>
                          <input
                            type="email"
                            placeholder="e.g. suman@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full rounded-xl border border-zinc-200 bg-zinc-50/70 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-amber-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-all font-medium"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-zinc-700 mb-1.5 uppercase tracking-wider">
                            Select Automotive Service *
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
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-zinc-700 mb-1.5 uppercase tracking-wider">
                          Car Make, Model, Year or Requirements
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Please specify car registration number, model, budget, or RTO requirements..."
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
                        <span>Your details are completely confidential. We never share customer data.</span>
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Location & Directions Preview (Framed Executive Map Suite) */}
          <div className="relative rounded-[2.5rem] p-[2px] overflow-hidden shadow-2xl">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-amber-400/40 via-yellow-400/20 to-amber-400/40 pointer-events-none" />

            <div className="relative rounded-[calc(2.5rem-2px)] bg-white p-7 sm:p-10 overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 border border-amber-400/30 px-3.5 py-1 text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">
                    <Sparkles className="h-3 w-3 text-amber-500" />
                    <span>Location &amp; Directions</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight">
                    Visit Indiacarbazar Showroom &amp; Head Office
                  </h3>
                </div>

                <a
                  href="https://maps.google.com/?q=Kolkata+West+Bengal+India"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-zinc-950 text-white px-5 py-2.5 text-xs font-bold hover:bg-zinc-800 transition-colors shadow-md"
                >
                  <ExternalLink className="h-3.5 w-3.5 text-amber-400" />
                  <span>Open in Google Maps</span>
                </a>
              </div>

              {/* Map Frame */}
              <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-amber-200/60 shadow-lg relative bg-zinc-100">
                <iframe
                  title="Indiacarbazar Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.21689658742!2d88.26495147814498!3d22.53556493699026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Floating Glassmorphic Badge */}
                <div className="absolute bottom-4 left-4 rounded-xl bg-zinc-950/95 backdrop-blur-md border border-amber-400/40 p-3.5 shadow-2xl text-white">
                  <div className="text-xs font-black text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Indiacarbazar Hub Floor</span>
                  </div>
                  <div className="text-[11px] text-amber-400 font-extrabold mt-0.5">
                    Helpline: 9073344500
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
