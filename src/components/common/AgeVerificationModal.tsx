import React, { useEffect } from 'react';
import { ShieldAlert, Wine, ArrowLeft, Check } from 'lucide-react';
import { NeonButton } from './NeonButton';

interface AgeVerificationModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onDecline: () => void;
}

export const AgeVerificationModal: React.FC<AgeVerificationModalProps> = ({
  isOpen,
  onConfirm,
  onDecline,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Blurred Backdrop */}
      <div
        className="fixed inset-0 bg-[#050507]/92 backdrop-blur-2xl transition-opacity duration-300 animate-fadeIn"
      />

      {/* Modal Card */}
      <div
        className="relative w-full max-w-lg my-auto z-10 bg-surface/95 border border-white/15 rounded-3xl p-6 sm:p-9 shadow-2xl overflow-hidden text-center"
        style={{
          boxShadow: '0 0 60px rgba(0, 0, 0, 0.9), 0 0 40px rgba(255, 0, 172, 0.15)',
        }}
      >
        {/* Top subtle neon glow line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-pink via-[#08CEFD] to-neon-pink" />

        {/* Ambient Stage Lights inside modal */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-neon-pink/15 rounded-full blur-[70px] pointer-events-none" />

        {/* 18+ Icon Badge */}
        <div className="relative mx-auto w-20 h-20 sm:w-24 sm:h-24 mb-6 rounded-2xl bg-white/[0.04] border border-white/15 flex items-center justify-center shadow-[0_0_30px_rgba(255,0,172,0.25)]">
          <div className="text-3xl sm:text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-neon-pink">
            18+
          </div>
          <div className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-[#08CEFD] text-black shadow-[0_0_12px_rgba(8,206,253,0.6)]">
            <Wine className="w-4 h-4" />
          </div>
        </div>

        {/* Title */}
        <div className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#08CEFD] mb-2">
          ВОЗРАСТНОЕ ОГРАНИЧЕНИЕ
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight leading-tight mb-3">
          Вам уже исполнилось <br />
          <span className="text-neon-gradient">18 лет?</span>
        </h2>

        {/* Legal and Friendly Notice */}
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-md mx-auto mb-8">
          Барная карта караоке-бара <strong className="text-white font-semibold">#ГРОМКО</strong> содержит информацию об алкогольной продукции. Согласно законодательству РФ, просмотр каталога алкоголя разрешен только совершеннолетним.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <NeonButton
            variant="primary"
            size="lg"
            fullWidth
            onClick={onConfirm}
            icon={<Check className="w-4 h-4 ml-1" />}
            className="py-3.5 text-sm sm:text-base font-black shadow-neon-gradient"
          >
            Да, мне есть 18 лет
          </NeonButton>

          <button
            type="button"
            onClick={onDecline}
            className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-text-secondary hover:text-white text-xs sm:text-sm font-display font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Мне меньше 18</span>
          </button>
        </div>

        {/* Warning Footer */}
        <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-center gap-2 text-[10px] sm:text-[11px] font-mono text-text-muted">
          <ShieldAlert className="w-3.5 h-3.5 text-neon-pink flex-shrink-0" />
          <span>Чрезмерное употребление алкоголя вредит вашему здоровью</span>
        </div>
      </div>
    </div>
  );
};
