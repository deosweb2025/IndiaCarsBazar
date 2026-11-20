import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  theme?: 'light' | 'dark';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlight,
  subtitle,
  centered = true,
  className = '',
  theme = 'light',
}) => {
  const isDark = theme === 'dark';

  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black tracking-widest uppercase mb-4 shadow-sm ${
            isDark
              ? 'border border-amber-500/30 bg-amber-500/15 text-amber-400'
              : 'border border-amber-300 bg-amber-50/80 text-amber-700'
          }`}
        >
          <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
          {badge}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.18] ${
          isDark ? 'text-white' : 'text-[#0f1012]'
        }`}
      >
        {title}{' '}
        {highlight && (
          <span className="relative whitespace-nowrap bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </motion.h2>

      {/* Decorative luxury speed bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`h-1.5 w-24 rounded-full my-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-600 ${
          centered ? 'mx-auto' : ''
        }`}
      />

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-base sm:text-lg leading-relaxed font-normal ${
            isDark ? 'text-zinc-300' : 'text-zinc-600'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
