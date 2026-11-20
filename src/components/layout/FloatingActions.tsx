import React from 'react';
import { Phone } from 'lucide-react';
import { siteData } from '../../data/siteData';

export const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3.5 select-none pointer-events-auto">
      {/* FLOATING WHATSAPP BUTTON - Authentic WhatsApp Brand Icon, NOT a generic message icon */}
      <a
        href={siteData.company.socialLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Indiacarbazar on WhatsApp"
        className="group relative flex items-center justify-center h-13 w-13 sm:h-14 sm:w-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-green-500/30 hover:shadow-green-500/50 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Glow & pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 blur-sm animate-ping opacity-60 pointer-events-none" />

        {/* Official WhatsApp SVG Icon */}
        <svg
          viewBox="0 0 32 32"
          className="h-7 w-7 sm:h-8 sm:w-8 fill-current relative z-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 2C8.28 2 2 8.28 2 16C2 18.72 2.78 21.26 4.14 23.42L2.5 29.5L8.74 27.88C10.84 29.14 13.32 29.86 16 29.86C23.72 29.86 30 23.58 30 15.86C30 8.14 23.72 2 16 2ZM22.42 21.14C22.14 21.94 20.88 22.62 20.08 22.78C19.54 22.88 18.84 22.96 16.48 21.98C13.46 20.72 11.52 17.66 11.36 17.46C11.22 17.26 10.12 15.8 10.12 14.3C10.12 12.8 10.88 12.06 11.18 11.76C11.44 11.5 11.82 11.38 12.18 11.38C12.3 11.38 12.42 11.38 12.52 11.38C12.82 11.4 12.98 11.42 13.18 11.9C13.42 12.48 14 13.9 14.08 14.04C14.16 14.18 14.22 14.36 14.12 14.54C14.02 14.72 13.96 14.82 13.82 14.98C13.68 15.14 13.52 15.34 13.4 15.48C13.24 15.64 13.08 15.82 13.26 16.14C13.44 16.44 14.08 17.48 15.02 18.32C16.24 19.4 17.24 19.76 17.58 19.9C17.88 20.02 18.06 20 18.24 19.8C18.46 19.54 19.12 18.78 19.34 18.44C19.56 18.1 19.78 18.16 20.08 18.26C20.38 18.36 22.02 19.18 22.36 19.34C22.7 19.5 22.92 19.62 23.02 19.78C23.1 19.94 23.1 20.64 22.42 21.14Z" />
        </svg>

        {/* Hover Label for desktop */}
        <span className="hidden sm:inline-block absolute right-full mr-3.5 px-3 py-1.5 rounded-lg bg-[#0e0f12]/95 text-xs font-bold text-white border border-[#272832] shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 whitespace-nowrap pointer-events-none">
          WhatsApp Us
        </span>
      </a>

      {/* FLOATING CALL BUTTON with Luxury Champagne Gold Styling */}
      <a
        href={`tel:${siteData.company.helpline}`}
        aria-label="Call Indiacarbazar Helpline"
        className="group relative flex items-center justify-center h-13 w-13 sm:h-14 sm:w-14 rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-400 text-neutral-950 shadow-xl shadow-amber-500/35 hover:shadow-amber-500/60 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Glow ring */}
        <span className="absolute -inset-1 rounded-full bg-amber-400/30 blur-sm animate-pulse opacity-75 pointer-events-none" />

        {/* Phone Icon */}
        <Phone className="h-6 w-6 sm:h-7 sm:w-7 relative z-10 text-neutral-950 transition-transform group-hover:rotate-12" />

        {/* Hover Label with Helpline number */}
        <span className="hidden sm:inline-block absolute right-full mr-3.5 px-3 py-1.5 rounded-lg bg-[#0e0f12]/95 text-xs font-bold text-white border border-[#272832] shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 whitespace-nowrap pointer-events-none">
          Call {siteData.company.helpline}
        </span>
      </a>
    </div>
  );
};
