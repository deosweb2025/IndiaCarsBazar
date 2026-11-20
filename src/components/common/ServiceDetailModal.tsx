import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Phone,
  CheckCircle2,
  FileText,
  Sparkles,
  HelpCircle,
  Car,
  FileCheck,
  ShieldCheck,
  Banknote,
  Stamp,
  SearchCheck,
  Send
} from 'lucide-react';
import { siteData, type ServiceItem } from '../../data/siteData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'Car':
      return <Car className="h-6 w-6" />;
    case 'FileCheck':
      return <FileCheck className="h-6 w-6" />;
    case 'ShieldCheck':
      return <ShieldCheck className="h-6 w-6" />;
    case 'Banknote':
      return <Banknote className="h-6 w-6" />;
    case 'Stamp':
      return <Stamp className="h-6 w-6" />;
    case 'SearchCheck':
      return <SearchCheck className="h-6 w-6" />;
    default:
      return <Car className="h-6 w-6" />;
  }
};

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [prevServiceId, setPrevServiceId] = useState(service?.id);

  // Synchronize/reset form when active service changes (Official React state adjustment pattern)
  if (service?.id !== prevServiceId) {
    setPrevServiceId(service?.id);
    setFormData({ name: '', phone: '', notes: '' });
    setIsSubmitted(false);
  }

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
    const text = encodeURIComponent(
      `Hello Indiacarbazar! I would like to book or inquire about: ${service.title}.\nName: ${formData.name}\nPhone: ${formData.phone}\nNotes: ${formData.notes || 'Please provide details.'}`
    );
    window.open(`https://wa.me/${siteData.company.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleQuickWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Indiacarbazar! I want more details and assistance regarding: ${service.title}.`
    );
    window.open(`https://wa.me/${siteData.company.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#0a0b0d]/85 backdrop-blur-md"
        />

        {/* Box Screen / Service Details Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 320 }}
          className="relative z-10 flex flex-col max-h-[92vh] max-w-4xl w-full overflow-hidden rounded-3xl border border-amber-400/40 bg-white shadow-2xl shadow-black/80"
          onClick={(e) => e.stopPropagation()}
        >
          {/* 1. Modal Top Banner Header - Luxury Dual-Pane Showcase (Unobstructed Car View) */}
          <div className="relative w-full shrink-0 overflow-hidden bg-[#0d0e13] border-b border-amber-500/20">
            {/* Close Button at top-right (high z-index) */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-[#181a22]/90 text-zinc-300 hover:text-white hover:bg-neutral-900 border border-zinc-700/80 shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Split Showcase Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
              {/* Left Column: Service Details & Trust Badges */}
              <div className="p-6 sm:p-7 md:p-8 flex flex-col justify-center md:col-span-6 lg:col-span-5 relative z-10 order-2 md:order-1">
                {/* Badges Bar */}
                <div className="flex items-center gap-2.5 mb-3 flex-wrap">
                  <span className="rounded-full bg-amber-400/15 border border-amber-400/40 px-3 py-1 text-xs font-black uppercase tracking-wider text-amber-300 shadow-sm">
                    {service.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                    <Phone className="h-3 w-3 text-amber-400" />
                    <span>9073344500</span>
                  </div>
                </div>

                {/* Title & Icon Header */}
                <div className="flex items-start gap-3.5 mb-3">
                  <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 text-neutral-950 shadow-lg shadow-amber-500/30 shrink-0 mt-0.5">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight">
                      {service.title}
                    </h2>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400/90 block mt-1">
                      Indiacarbazar Certified Service
                    </span>
                  </div>
                </div>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                {/* Trust Mini Pills */}
                <div className="flex items-center gap-2 flex-wrap text-[11px] font-semibold text-zinc-400">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-zinc-300">
                    <Sparkles className="h-3 w-3 text-amber-400" /> 100% Legal Indemnity
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-zinc-300">
                    <ShieldCheck className="h-3 w-3 text-amber-400" /> 150+ Inspection
                  </span>
                </div>
              </div>

              {/* Right Column: Dedicated Unobstructed Vehicle Showcase Frame */}
              <div className="relative md:col-span-6 lg:col-span-7 bg-gradient-to-b from-white via-zinc-50/90 to-zinc-100 flex items-center justify-center overflow-hidden min-h-[240px] sm:min-h-[280px] md:min-h-[320px] border-b md:border-b-0 md:border-l border-zinc-200/90 p-4 sm:p-6 md:p-8 order-1 md:order-2">
                {/* Full Vehicle Image - COMPLETELY VISIBLE, NO CROPPING, ZERO ARTIFACTS */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full max-h-[260px] sm:max-h-[300px] md:max-h-[330px] object-contain transition-transform duration-700 hover:scale-105"
                />

                {/* Floating Model Badge in corner */}
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-zinc-950/85 backdrop-blur-md border border-amber-400/40 text-[11px] font-bold text-amber-300 shadow-lg">
                  Certified Fleet Vehicle
                </div>
              </div>
            </div>
          </div>

          {/* 2. Scrollable Modal Body */}
          <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-8 sm:py-8 space-y-8 bg-[#fbfbfe]">
            {/* Full Overview */}
            <div className="rounded-2xl border border-zinc-200/90 bg-white p-5 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-black text-zinc-900 mb-2.5 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-amber-500" />
                <span>Service Overview & Scope</span>
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                {service.fullDesc}
              </p>
            </div>

            {/* Key Features Grid */}
            <div className="rounded-2xl border border-zinc-200/90 bg-white p-5 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-black text-zinc-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-500" />
                <span>Key Inclusions & Highlights</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 rounded-xl border border-zinc-200/80 bg-zinc-50/80 p-3 text-xs sm:text-sm font-semibold text-zinc-800"
                  >
                    <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents Required */}
            <div className="rounded-2xl border border-zinc-200/90 bg-white p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200">
                  <FileText className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-zinc-900">
                    Documents Required Checklist
                  </h3>
                  <p className="text-[11px] text-zinc-500">
                    Keep these handy for immediate, hassle-free processing
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.documentsRequired.map((doc, dIdx) => (
                  <div
                    key={dIdx}
                    className="flex items-center gap-2.5 rounded-xl border border-zinc-200/80 bg-zinc-50/80 px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-zinc-800"
                  >
                    <span className="h-2 w-2 rounded-full bg-amber-500 shrink-0" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step-by-Step Procedure */}
            <div className="rounded-2xl border border-zinc-200/90 bg-white p-5 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-black text-zinc-900 mb-4">
                Step-by-Step Procedure
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.process.map((step, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-zinc-200 bg-zinc-50/80 p-4"
                  >
                    <span className="text-xl font-black text-amber-500 block mb-1">
                      {step.step}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-zinc-900 mb-1">
                      {step.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-zinc-600 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="rounded-2xl border border-zinc-200/90 bg-white p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2.5 mb-4">
                <HelpCircle className="h-4 w-4 text-amber-600" />
                <h3 className="text-base sm:text-lg font-black text-zinc-900">
                  Frequently Asked Questions
                </h3>
              </div>
              <div className="space-y-3">
                {service.faqs.map((faq, fIdx) => (
                  <div
                    key={fIdx}
                    className="rounded-xl border border-zinc-200 bg-zinc-50/80 p-3.5"
                  >
                    <h4 className="text-xs sm:text-sm font-bold text-amber-800 mb-1">
                      Q: {faq.question}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-zinc-600 leading-relaxed font-normal">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div className="rounded-2xl bg-[#0e0f13] text-white p-5 sm:p-6 shadow-xl border border-[#23242c]">
              <h3 className="text-base sm:text-lg font-black text-white mb-1">
                Instant Inquiry for {service.title}
              </h3>
              <p className="text-xs text-zinc-400 mb-4 font-light">
                Fill in your details and connect immediately with our senior coordinator on WhatsApp or Phone:
              </p>

              {isSubmitted ? (
                <div className="p-4 rounded-xl border border-green-500/30 bg-green-500/10 text-center">
                  <CheckCircle2 className="h-8 w-8 text-green-400 mx-auto mb-1.5" />
                  <p className="text-xs text-white font-bold">
                    WhatsApp has opened with your inquiry! Our executive is ready at 9073344500.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquiry} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-zinc-300 mb-1 uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-[#2e2f3b] bg-[#16171d] px-3.5 py-2 text-xs sm:text-sm text-white placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-zinc-300 mb-1 uppercase tracking-wider">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-[#2e2f3b] bg-[#16171d] px-3.5 py-2 text-xs sm:text-sm text-white placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-zinc-300 mb-1 uppercase tracking-wider">
                      Specific Notes / Requirements (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Car model, RTO location, loan amount needed..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full rounded-xl border border-[#2e2f3b] bg-[#16171d] px-3.5 py-2 text-xs sm:text-sm text-white placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 py-3 px-4 text-neutral-950 font-black text-xs sm:text-sm shadow-lg shadow-amber-500/20 hover:scale-[1.01] active:scale-[0.99] transition-transform cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                    <span>Submit &amp; Connect on WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* 3. Sticky Bottom Action Bar */}
          <div className="border-t border-zinc-200 bg-white px-5 py-3.5 sm:px-8 flex items-center justify-between gap-3 shrink-0 flex-wrap">
            <div className="flex items-center gap-2">
              <a
                href={`tel:${siteData.company.helpline}`}
                className="inline-flex items-center gap-2 rounded-xl bg-[#0e0f13] hover:bg-neutral-900 text-amber-400 border border-zinc-700/80 px-4 py-2 text-xs sm:text-sm font-bold shadow-sm transition-all"
              >
                <Phone className="h-4 w-4" />
                <span>Call {siteData.company.helpline}</span>
              </a>
              <button
                type="button"
                onClick={handleQuickWhatsApp}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-neutral-950 px-4 py-2 text-xs sm:text-sm font-black shadow-md shadow-amber-500/20 transition-all cursor-pointer"
              >
                <span>Instant WhatsApp</span>
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-zinc-300 hover:bg-zinc-100 text-zinc-700 px-4 py-2 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
