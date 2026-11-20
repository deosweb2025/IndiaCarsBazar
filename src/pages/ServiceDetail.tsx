import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Phone,
  CheckCircle2,
  FileText,
  Send,
  HelpCircle,
  ArrowLeft,
  Sparkles
} from 'lucide-react';
import { siteData } from '../data/siteData';
import { PageHeader } from '../components/common/PageHeader';
import { Button } from '../components/common/Button';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = siteData.services.find((s) => s.slug === slug);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
    const text = encodeURIComponent(
      `Hello Indiacarbazar! I would like to book or inquire about: ${service.title}.\nName: ${formData.name}\nPhone: ${formData.phone}\nNotes: ${formData.notes || 'Please provide details.'}`
    );
    window.open(`https://wa.me/${siteData.company.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <PageHeader
        badge={service.badge}
        title={service.title}
        description={service.shortDesc}
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: service.title }
        ]}
        bgImage={service.image || "/images/header-services.jpg"}
        texture="carbon"
        borderStyle="slant"
        canvasBg="#f7f7fa"
      />

      <section className="py-16 md:py-24 relative bg-[#f7f7fa] border-b border-zinc-200 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Back link */}
          <div className="mb-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-amber-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to All Services</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Main Content (8 cols) */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              {/* Featured Image */}
              <div className="relative rounded-3xl overflow-hidden border border-zinc-200 shadow-xl aspect-[16/9] group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d]/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                  <span className="rounded-full bg-[#121317]/90 backdrop-blur-md border border-[#272832] px-3.5 py-1 text-xs font-bold text-white">
                    {service.badge}
                  </span>
                  <span className="text-xs font-bold text-zinc-200 bg-[#121317]/80 backdrop-blur-md px-3 py-1 rounded-md">
                    Helpline: {siteData.company.helpline}
                  </span>
                </div>
              </div>

              {/* Service Full Overview */}
              <div className="rounded-3xl border border-zinc-200/90 bg-white p-8 sm:p-10 shadow-sm">
                <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 mb-4">
                  Overview & Scope of Service
                </h2>
                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-6 font-normal">
                  {service.fullDesc}
                </p>

                <div className="h-px w-full bg-zinc-100 my-6" />

                {/* Key Features List */}
                <h3 className="text-lg font-bold text-zinc-900 mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-amber-500" />
                  <span>Key Features & Quality Inclusions</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-xs sm:text-sm font-semibold text-zinc-800"
                    >
                      <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step-by-Step Procedure */}
              <div className="rounded-3xl border border-zinc-200/90 bg-white p-8 sm:p-10 shadow-sm">
                <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 mb-6">
                  How the Process Works
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.process.map((step, idx) => (
                    <div
                      key={idx}
                      className="relative rounded-2xl border border-zinc-200 bg-zinc-50 p-6 flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-3xl font-black text-amber-500 block mb-2">
                          {step.step}
                        </span>
                        <h3 className="text-base font-bold text-zinc-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documents Required Checklist */}
              <div className="rounded-3xl border border-zinc-200/90 bg-white p-8 sm:p-10 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-zinc-900">
                      Documents Required
                    </h2>
                    <p className="text-xs text-zinc-500">
                      Keep these ready for fast-track processing
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {service.documentsRequired.map((doc, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-xs sm:text-sm font-semibold text-zinc-800"
                    >
                      <span className="h-2 w-2 rounded-full bg-amber-500" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div className="rounded-3xl border border-zinc-200/90 bg-white p-8 sm:p-10 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200">
                    <HelpCircle className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-zinc-900">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-4">
                  {service.faqs.map((faq, fIdx) => (
                    <div
                      key={fIdx}
                      className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-amber-700 mb-2">
                        Q: {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar: Direct Booking & Helpline Card (4 cols) */}
            <div className="lg:col-span-4 sticky top-28 space-y-6">
              {/* Direct Call Card in Neutral Carbon (#0e0f13) */}
              <div className="rounded-3xl bg-[#0e0f13] text-white p-6 sm:p-8 shadow-2xl text-center relative overflow-hidden border border-[#23242c]">
                <span className="inline-block text-[10px] font-black uppercase tracking-widest text-amber-400 mb-2">
                  Need Immediate Help?
                </span>
                <h3 className="text-xl font-extrabold text-white mb-2">
                  Speak Directly With Our Lead Advisor
                </h3>
                <p className="text-xs text-zinc-300 mb-6 font-light">
                  Get real-time guidance on {service.title} right now.
                </p>

                <a
                  href={`tel:${siteData.company.helpline}`}
                  className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 py-3.5 px-4 text-neutral-950 font-black text-lg shadow-xl shadow-amber-500/25 hover:scale-[1.02] transition-transform duration-300"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call {siteData.company.helpline}</span>
                </a>
              </div>

              {/* Inquiry Form */}
              <div className="rounded-3xl border border-zinc-200/90 bg-white p-6 sm:p-8 shadow-sm">
                <h3 className="text-lg font-black text-zinc-900 mb-2">
                  Apply or Book {service.title}
                </h3>
                <p className="text-xs text-zinc-500 mb-6 font-normal">
                  Submit your details and we will connect via WhatsApp or Phone within minutes.
                </p>

                {isSubmitted ? (
                  <div className="p-4 rounded-xl border border-green-200 bg-green-50 text-center">
                    <CheckCircle2 className="h-10 w-10 text-green-600 mx-auto mb-2" />
                    <p className="text-xs text-zinc-800 font-semibold">
                      Your inquiry has been initiated on WhatsApp!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleInquiry} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 mb-1 uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ankit Roy"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-zinc-300 bg-zinc-50 px-3.5 py-2.5 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:border-amber-500 focus:bg-white focus:outline-none font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-700 mb-1 uppercase tracking-wider">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98XXXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-zinc-300 bg-zinc-50 px-3.5 py-2.5 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:border-amber-500 focus:bg-white focus:outline-none font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-700 mb-1 uppercase tracking-wider">
                        Vehicle Details / Specific Notes
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Car brand, model, registration year, or specific inquiry..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full rounded-xl border border-zinc-300 bg-zinc-50 px-3.5 py-2.5 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:border-amber-500 focus:bg-white focus:outline-none resize-none font-medium"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      className="w-full"
                      icon={<Send className="h-4 w-4" />}
                    >
                      Submit Booking Request
                    </Button>
                  </form>
                )}
              </div>

              {/* Other Services Navigation */}
              <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                <h4 className="text-xs font-black uppercase tracking-wider text-zinc-400 mb-3">
                  Other Services
                </h4>
                <div className="space-y-2">
                  {siteData.services
                    .filter((s) => s.slug !== service.slug)
                    .map((other) => (
                      <Link
                        key={other.slug}
                        to={`/services/${other.slug}`}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-zinc-50 text-xs font-bold text-zinc-700 hover:text-amber-600 transition-colors"
                      >
                        <span className="truncate">{other.title}</span>
                        <span className="text-amber-500 font-bold shrink-0">→</span>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
