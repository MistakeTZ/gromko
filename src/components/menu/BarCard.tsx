import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BAR_ITEMS } from '../../data/mockData';

interface BarCardProps {
  onOpenFullMenu: (tab?: 'kitchen' | 'bar') => void;
}

export const BarCard: React.FC<BarCardProps> = ({ onOpenFullMenu }) => {
  return (
    <section id="bar" className="relative py-28 lg:py-40 bg-[#050507] border-t border-white/5 overflow-hidden">
      {/* Ambient Blue Stage Glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#08CEFD]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Big Typographic Statement */}
          <div className="lg:col-span-6 flex flex-col justify-between order-2 lg:order-1">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-neon-pink mb-3">
                БАР #ГРОМКО
              </div>

              <h2
                className="font-display font-black text-white tracking-tight uppercase leading-[0.92]"
                style={{ fontSize: 'clamp(36px, 5.5vw, 70px)' }}
              >
                ПОСЛЕ ПЕРВОГО <br />
                КОКТЕЙЛЯ <br />
                <span className="text-neon-gradient">СТАНОВИТСЯ</span> <br />
                <span className="text-neon-gradient">ГРОМЧЕ.</span>
              </h2>

              <p className="mt-6 text-sm sm:text-base text-text-secondary max-w-md leading-relaxed">
                64 позиции в барной карте: авторские настойки, шоты, классический крепкий алкоголь, винная карта и согревающий чай.
              </p>

              {/* Minimal Category Line */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono font-semibold tracking-wider text-text-muted uppercase">
                <span className="text-white">КОКТЕЙЛИ</span>
                <span className="text-neon-pink">/</span>
                <span className="text-white">НАСТОЙКИ</span>
                <span className="text-neon-cyan">/</span>
                <span className="text-white">SHOTS</span>
                <span className="text-neon-pink">/</span>
                <span className="text-white">ВИНА</span>
                <span className="text-neon-cyan">/</span>
                <span className="text-white">ВИСКИ</span>
              </div>
            </div>

            {/* Simple Text Link */}
            <div className="mt-10">
              <button
                onClick={() => onOpenFullMenu('bar')}
                className="inline-flex items-center gap-2 text-sm font-display font-bold uppercase tracking-wider text-neon-pink hover:text-white transition-colors group"
              >
                <span>Смотреть барную карту ({BAR_ITEMS.length})</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#08CEFD]" />
              </button>
            </div>
          </div>

          {/* Right Column: Dark Mood Cocktail Photo */}
          <div className="lg:col-span-6 relative order-1 lg:order-2">
            <div
              onClick={() => onOpenFullMenu('bar')}
              className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80"
                alt="Бар и коктейли #ГРОМКО"
                className="w-full h-[460px] sm:h-[580px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-xs font-mono uppercase text-[#08CEFD] font-bold tracking-widest">
                  БАРНАЯ КАРТА
                </span>
                <div className="text-2xl sm:text-3xl font-display font-black text-white mt-1 uppercase">
                  Авторский бар & Настойки
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
