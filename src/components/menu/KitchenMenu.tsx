import React from 'react';
import { ArrowRight } from 'lucide-react';
import { MENU_ITEMS } from '../../data';

interface KitchenMenuProps {
  onOpenFullMenu: (tab?: 'kitchen' | 'bar') => void;
}

export const KitchenMenu: React.FC<KitchenMenuProps> = ({ onOpenFullMenu }) => {
  const featuredKitchenItems = MENU_ITEMS.filter((item) => item.isHit).slice(0, 4);

  return (
    <section id="menu" className="relative py-28 lg:py-40 bg-[#050507] border-t border-white/5 overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-neon-pink/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Authentic Food Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group cursor-pointer" onClick={() => onOpenFullMenu('kitchen')}>
              <img
                src="/images/kitchen-hero.webp"
                alt="Кухня и гастрономия #ГРОМКО"
                width="900"
                height="600"
                loading="lazy"
                decoding="async"
                className="w-full h-[460px] sm:h-[580px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-xs font-mono uppercase text-neon-pink font-bold tracking-widest">
                  КУХНЯ ДО 06:00
                </span>
                <div className="text-2xl sm:text-3xl font-display font-black text-white mt-1 uppercase">
                  Гастрономия & Сеты
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Typography & Dish List */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#08CEFD] mb-3">
                ГАСТРОНОМИЯ
              </div>

              <h2
                className="font-display font-black text-white tracking-tight uppercase leading-[0.92]"
                style={{ fontSize: 'clamp(30px, 5vw, 64px)' }}
              >
                ХИТЫ КУХНИ
              </h2>

              <p className="mt-4 text-sm sm:text-base text-text-secondary max-w-lg leading-relaxed">
                Полноценные горячие блюда, сочные бургеры из мраморной говядины, гриль-сеты на компанию и авторские закуски.
              </p>

              {/* Clean Typography List (No Heavy Card Boxes) */}
              <div className="mt-8 space-y-6">
                {featuredKitchenItems.map((item) => (
                  <div
                    key={item.id}
                    className="pb-5 border-b border-white/5 flex items-baseline justify-between gap-4 group cursor-pointer"
                    onClick={() => onOpenFullMenu('kitchen')}
                  >
                    <div className="pr-4">
                      <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-neon-pink transition-colors">
                        {item.name}
                      </h3>
                      {item.description && (
                        <p className="text-xs sm:text-sm text-text-muted mt-1 leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      )}
                      {item.weight && (
                        <span className="text-[10px] text-text-muted/60 font-mono mt-1 inline-block">
                          {item.weight}
                        </span>
                      )}
                    </div>

                    <div className="font-display font-black text-lg sm:text-xl text-white group-hover:text-neon-pink transition-colors flex-shrink-0">
                      {item.price} ₽
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Simple Text Link */}
            <div className="mt-8">
              <button
                onClick={() => onOpenFullMenu('kitchen')}
                className="inline-flex items-center gap-2 text-sm font-display font-bold uppercase tracking-wider text-[#08CEFD] hover:text-white transition-colors group"
              >
                <span>Смотреть всё меню ({MENU_ITEMS.length})</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-neon-pink" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
