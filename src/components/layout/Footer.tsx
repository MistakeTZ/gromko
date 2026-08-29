import React from 'react';
import { VENUE_INFO } from '../../data/mockData';
import { useRouter } from '../../context/RouterContext';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <footer className="relative bg-[#050507] border-t border-white/5 pt-16 pb-24 md:pb-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-neon-pink/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Big Brand Title */}
          <button
            onClick={() => navigate('/')}
            className="font-display font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter text-white select-none cursor-pointer focus:outline-none hover:opacity-90 transition-opacity"
            aria-label="ГРОМКО Главная"
          >
            <span className="text-neon-pink drop-shadow-[0_0_20px_rgba(255,0,172,0.4)]">#</span>
            ГРОМКО
          </button>

          {/* Subtitle & Address */}
          <div className="mt-4 text-sm sm:text-base font-semibold tracking-widest text-text-secondary uppercase">
            {VENUE_INFO.subtitle} · КУХНЯ
          </div>
          <div className="mt-1 text-xs sm:text-sm text-text-muted">
            {VENUE_INFO.fullAddress} · {VENUE_INFO.workingHours}
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center justify-center gap-6 text-sm font-semibold tracking-wider">
            <a
              href={VENUE_INFO.vkUrl}
              target="_blank"
              rel="noreferrer"
              className="text-text-secondary hover:text-[#08CEFD] transition-colors py-2 px-4 rounded-lg bg-surface/50 border border-white/5 hover:border-[#08CEFD]/30"
            >
              VKONTAKTE
            </a>
            <a
              href={VENUE_INFO.tgUrl}
              target="_blank"
              rel="noreferrer"
              className="text-text-secondary hover:text-neon-pink transition-colors py-2 px-4 rounded-lg bg-surface/50 border border-white/5 hover:border-neon-pink/30"
            >
              TELEGRAM
            </a>
            <a
              href={VENUE_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="text-text-secondary hover:text-white transition-colors py-2 px-4 rounded-lg bg-surface/50 border border-white/5 hover:border-white/20"
            >
              INSTAGRAM
            </a>
          </div>

          {/* Bottom copyright & privacy */}
          <div className="mt-12 pt-8 w-full border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
            <div>© {new Date().getFullYear()} #ГРОМКО Караоке-бар. Все права защищены.</div>
            <button
              onClick={() => navigate('/privacy')}
              className="hover:text-text-secondary transition-colors underline underline-offset-4 cursor-pointer"
            >
              Политика конфиденциальности
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
