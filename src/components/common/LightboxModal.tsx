import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import type { GalleryItem } from '../../data/siteData';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  isOpen: boolean;
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  isOpen,
  onClose,
  onSelect,
}) => {
  const currentIndex = item ? items.findIndex((i) => i.id === item.id) : -1;

  const handleNext = useCallback(() => {
    if (currentIndex >= 0 && currentIndex < items.length - 1) {
      onSelect(items[currentIndex + 1]);
    } else if (items.length > 0) {
      onSelect(items[0]);
    }
  }, [currentIndex, items, onSelect]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onSelect(items[currentIndex - 1]);
    } else if (items.length > 0) {
      onSelect(items[items.length - 1]);
    }
  }, [currentIndex, items, onSelect]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#0a0b0d]/90 backdrop-blur-xl"
        />

        {/* Modal Content Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 flex flex-col max-h-[92vh] max-w-5xl w-full overflow-hidden rounded-3xl border border-amber-400/30 bg-[#121317] shadow-2xl shadow-black/90"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Header Bar */}
          <div className="flex items-center justify-between border-b border-[#23242c] px-5 py-3.5 bg-[#0e0f13]">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-amber-400/20 px-3 py-1 text-xs font-bold text-amber-300 border border-amber-400/35">
                {item.category}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white truncate max-w-xs sm:max-w-md">
                {item.title}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-400 hidden sm:inline">
                {currentIndex + 1} of {items.length}
              </span>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg p-1.5 text-zinc-400 hover:text-white hover:bg-[#202127] transition-colors cursor-pointer"
                aria-label="Close image preview"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Main Image Frame - Clean High-End Stage */}
          <div className="relative flex flex-1 items-center justify-center bg-gradient-to-b from-white via-zinc-50 to-zinc-100 p-4 sm:p-8 overflow-hidden min-h-[320px] max-h-[70vh]">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="max-h-full max-w-full object-contain drop-shadow-md select-none"
            />

            {/* Navigation Arrows */}
            {items.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-[#18191f]/90 p-2 sm:p-3 text-zinc-200 hover:text-amber-400 hover:bg-[#23242a] border border-[#2e2f38] shadow-lg backdrop-blur-sm transition-all cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-[#18191f]/90 p-2 sm:p-3 text-zinc-200 hover:text-amber-400 hover:bg-[#23242a] border border-[#2e2f38] shadow-lg backdrop-blur-sm transition-all cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </>
            )}
          </div>

          {/* Bottom Caption & Action */}
          <div className="border-t border-[#23242c] bg-[#0e0f13] p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-2xl font-light">
              {item.caption}
            </p>
            <div className="flex items-center gap-2 self-end sm:self-center">
              <a
                href={item.imageUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-700 bg-[#1e1f26] px-3 py-1.5 text-xs font-bold text-zinc-200 hover:border-amber-400/50 hover:text-amber-300 transition-colors"
              >
                <ZoomIn className="h-3.5 w-3.5" />
                <span>Full Resolution</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
