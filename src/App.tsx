import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';

// Code-split pages for high performance and lightweight bundle
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Premium loading fallback with gold pulse spinner
const PageLoader: React.FC = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center p-8">
    <div className="relative flex items-center justify-center">
      <div className="h-16 w-16 rounded-full border-2 border-amber-400/20 border-t-amber-400 animate-spin" />
      <div className="absolute h-8 w-8 rounded-full bg-amber-400/20 animate-ping" />
    </div>
    <span className="text-xs uppercase tracking-widest text-amber-400/80 font-bold mt-4">
      Loading Indiacarbazar...
    </span>
  </div>
);

export const App: React.FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<MainLayout />}>
          {/* Strictly 5 Primary Nav Routes + Service Deep Routing */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<Navigate to="/services" replace />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
