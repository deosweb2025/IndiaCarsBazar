import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingActions } from './FloatingActions';
import { ScrollToTop } from '../common/ScrollToTop';

export const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fb] text-neutral-900 selection:bg-amber-400 selection:text-neutral-950 relative overflow-x-hidden">
      <ScrollToTop />
      {/* Shared Header Navigation */}
      <Navbar />

      {/* Dynamic Page Outlet */}
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingActions />

      {/* Shared Footer */}
      <Footer />
    </div>
  );
};
