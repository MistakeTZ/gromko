import React from 'react';
import { clsx } from 'clsx';

interface NeonBadgeProps {
  children: React.ReactNode;
  variant?: 'pink' | 'cyan' | 'violet' | 'gradient' | 'muted';
  className?: string;
}

export const NeonBadge: React.FC<NeonBadgeProps> = ({
  children,
  variant = 'pink',
  className,
}) => {
  const variantStyles = {
    pink: 'bg-[#FF00AC]/10 text-[#FF00AC] border-[#FF00AC]/30 shadow-[0_0_12px_rgba(255,0,172,0.2)]',
    cyan: 'bg-[#08CEFD]/10 text-[#08CEFD] border-[#08CEFD]/30 shadow-[0_0_12px_rgba(8,206,253,0.2)]',
    violet: 'bg-[#7C3CFF]/10 text-[#7C3CFF] border-[#7C3CFF]/30 shadow-[0_0_12px_rgba(124,60,255,0.2)]',
    gradient: 'bg-gradient-to-r from-[#FF00AC]/15 to-[#08CEFD]/15 text-white border-white/20',
    muted: 'bg-white/5 text-text-secondary border-white/10',
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full border transition-all duration-300',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
