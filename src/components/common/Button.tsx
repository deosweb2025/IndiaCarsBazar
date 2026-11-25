import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'glow' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  iconPosition = 'right',
  target,
  rel,
  type = 'button',
  disabled = false,
}) => {
  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs font-bold gap-1.5 rounded-lg',
    md: 'px-5 py-2.5 text-sm font-extrabold gap-2 rounded-xl',
    lg: 'px-7 py-3.5 text-base font-black gap-2.5 rounded-xl',
  };

  const variantClasses = {
    // Luxury Champagne Gold & Amber Primary
    primary:
      'bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-yellow-300 hover:via-amber-400 hover:to-amber-500 text-neutral-950 font-black shadow-lg shadow-amber-500/25 border border-yellow-300/40 active:scale-[0.98]',
    // Crisp White & Neutral Secondary with Subtle Amber Accent
    secondary:
      'bg-white hover:bg-amber-50/70 text-zinc-900 border border-zinc-200 hover:border-amber-400 font-bold shadow-xs active:scale-[0.98]',
    outline:
      'bg-transparent hover:bg-amber-500/10 text-amber-500 border-2 border-amber-500 hover:border-amber-400 active:scale-[0.98]',
    glow:
      'relative bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-neutral-950 font-black shadow-[0_0_25px_rgba(245,158,11,0.45)] hover:shadow-[0_0_35px_rgba(245,158,11,0.7)] hover:scale-[1.02] border border-yellow-300/50 active:scale-[0.98]',
    danger:
      'bg-[#22232a] hover:bg-[#2d2e37] text-white shadow-lg active:scale-[0.98]',
  };

  const baseClasses = `inline-flex items-center justify-center transition-all duration-300 select-none cursor-pointer tracking-wide disabled:opacity-60 disabled:cursor-not-allowed ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${baseClasses}`}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={`group ${baseClasses}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`group ${baseClasses}`}>
      {content}
    </button>
  );
};
