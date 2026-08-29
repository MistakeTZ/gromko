import React from 'react';
import { clsx } from 'clsx';

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'cyan' | 'pink' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const NeonButton: React.FC<NeonButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  icon,
  className,
  disabled,
  ...props
}) => {
  const sizeStyles = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm tracking-wider',
    lg: 'px-8 py-4 text-base font-semibold tracking-wider',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-[#FF00AC] to-[#08CEFD] text-white font-bold hover:shadow-[0_0_30px_rgba(255,0,172,0.4),0_0_30px_rgba(8,206,253,0.4)] hover:scale-[1.02] active:scale-[0.98]',
    pink:
      'bg-[#FF00AC] text-white font-bold hover:bg-[#ff1db4] hover:shadow-[0_0_25px_rgba(255,0,172,0.5)] hover:scale-[1.02] active:scale-[0.98]',
    cyan:
      'bg-transparent border-2 border-[#08CEFD] text-[#08CEFD] font-bold hover:bg-[#08CEFD] hover:text-black hover:shadow-[0_0_25px_rgba(8,206,253,0.5)] hover:scale-[1.02] active:scale-[0.98]',
    ghost:
      'bg-surface/80 border border-white/10 text-white font-medium hover:border-white/30 hover:bg-surface-hover active:scale-[0.98]',
    glass:
      'bg-white/5 backdrop-blur-md border border-white/10 text-white font-medium hover:bg-white/10 hover:border-white/20 active:scale-[0.98]',
  };

  return (
    <button
      disabled={disabled}
      className={clsx(
        'relative inline-flex items-center justify-center gap-2 rounded-xl uppercase font-sans transition-all duration-300 select-none cursor-pointer',
        sizeStyles[size],
        variantStyles[variant],
        fullWidth && 'w-full',
        disabled && 'opacity-40 cursor-not-allowed hover:scale-100 hover:shadow-none',
        className
      )}
      {...props}
    >
      {children}
      {icon && <span className="inline-flex items-center">{icon}</span>}
    </button>
  );
};
