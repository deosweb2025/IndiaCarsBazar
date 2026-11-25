import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { siteData } from '../../data/siteData';
import { Logo } from '../common/Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [prevPath, setPrevPath] = useState(location.pathname);

  // Close mobile menu on route change without cascading effects
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setIsMobileMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md py-3 shadow-md shadow-amber-950/5 border-b border-amber-200/70'
          : 'bg-white/90 backdrop-blur-md py-4 border-b border-amber-100/60 shadow-xs'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Brand Logo in Light Header */}
          <Logo variant="light" />

          {/* STRICTLY 5 NAV LINKS FOR DESKTOP */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 rounded-full border border-amber-200/70 bg-stone-50/90 backdrop-blur-md p-1.5 shadow-xs">
            {siteData.navigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === '/'}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-bold rounded-full transition-all duration-300 ${
                    isActive
                      ? 'text-neutral-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 font-black shadow-md shadow-amber-500/25'
                      : 'text-zinc-700 hover:text-amber-700 hover:bg-amber-100/60'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Header CTA - Call Helpline in Luxury Gold */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteData.company.helpline}`}
              className="group flex items-center gap-2.5 rounded-xl border border-amber-400/40 bg-amber-400/15 px-4 py-2 text-xs font-bold text-amber-950 hover:bg-amber-400 hover:text-neutral-950 transition-all shadow-xs"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-400 text-neutral-950 shadow-sm transition-transform group-hover:scale-110">
                <Phone className="h-3.5 w-3.5" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] uppercase font-black tracking-wider text-amber-800">
                  Helpline No.
                </span>
                <span className="text-sm font-black tracking-tight text-zinc-950">
                  {siteData.company.helpline}
                </span>
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`tel:${siteData.company.helpline}`}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-400 text-neutral-950 shadow-sm"
              aria-label="Call Helpline"
            >
              <Phone className="h-4 w-4" />
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-lg p-2 text-zinc-800 hover:text-amber-700 hover:bg-amber-100/60 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-amber-600" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-amber-200/70 bg-white/98 overflow-hidden shadow-2xl"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
              <span className="text-[11px] font-black tracking-widest text-zinc-500 uppercase px-3">
                Main Navigation
              </span>

              {siteData.navigation.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.href === '/'}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-amber-400 to-yellow-400 text-neutral-950 font-black shadow-md shadow-amber-500/25'
                        : 'text-zinc-700 hover:bg-amber-50 hover:text-amber-700'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.name}</span>
                      <ArrowUpRight
                        className={`h-4 w-4 ${
                          isActive ? 'text-neutral-950' : 'text-zinc-400'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}

              {/* Mobile Quick Action Details */}
              <div className="mt-4 pt-4 border-t border-amber-100 flex flex-col gap-3">
                <a
                  href={`tel:${siteData.company.helpline}`}
                  className="flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 py-3 text-sm font-black text-neutral-950 shadow-md shadow-amber-500/20"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call Helpline: {siteData.company.helpline}</span>
                </a>

                <div className="text-center text-xs text-zinc-500 py-1">
                  Official Portal:{' '}
                  <span className="text-amber-600 font-bold">
                    {siteData.company.domain}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
