import React, { useState, useMemo } from 'react';
import { MENU_ITEMS, BAR_ITEMS } from '../data/mockData';
import { FoodCategory, BarCategory } from '../types';
import { useRouter } from '../context/RouterContext';
import { Utensils, Wine, Sparkles, Search, ArrowLeft, Calendar } from 'lucide-react';
import { NeonButton } from '../components/common/NeonButton';

interface MenuPageProps {
  onOpenBooking: () => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onOpenBooking }) => {
  const { currentTab, setMenuTab, navigate } = useRouter();
  const [kitchenCategory, setKitchenCategory] = useState<FoodCategory>('all');
  const [barCategory, setBarCategory] = useState<BarCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const foodCategories: { id: FoodCategory; label: string }[] = [
    { id: 'all', label: 'Все блюда' },
    { id: 'snacks', label: 'Закуски' },
    { id: 'salads', label: 'Салаты' },
    { id: 'hot', label: 'Горячие блюда' },
    { id: 'pastas', label: 'Пасты' },
    { id: 'company', label: 'На компанию' },
    { id: 'sides', label: 'Гарниры' },
    { id: 'desserts', label: 'Десерты' },
  ];

  const barCategories: { id: BarCategory; label: string }[] = [
    { id: 'all', label: 'Все напитки' },
    { id: 'whiskey', label: 'Виски' },
    { id: 'spirits', label: 'Крепкий алкоголь' },
    { id: 'liqueurs', label: 'Ликеры & Вермуты' },
    { id: 'wines', label: 'Вина & Игристое' },
    { id: 'beer', label: 'Пиво' },
    { id: 'tea_coffee', label: 'Чай & Кофе' },
    { id: 'soft_drinks', label: 'Безалкогольные' },
  ];

  const filteredMenuItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = kitchenCategory === 'all' || item.category === kitchenCategory;
      const matchesSearch =
        !searchQuery.trim() ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [kitchenCategory, searchQuery]);

  const filteredBarItems = useMemo(() => {
    return BAR_ITEMS.filter((item) => {
      const matchesCategory = barCategory === 'all' || item.category === barCategory;
      const matchesSearch =
        !searchQuery.trim() ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.country && item.country.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [barCategory, searchQuery]);

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#050507]">
      {/* Background Neon Ambient Glows */}
      <div className="fixed top-24 left-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="fixed bottom-24 right-1/4 w-96 h-96 bg-[#08CEFD]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Breadcrumb / Back */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-text-muted hover:text-[#08CEFD] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>На главную</span>
          </button>

          <div className="text-xs font-mono text-neon-pink uppercase tracking-widest font-bold">
            КУХНЯ ДО 06:00 · БАР
          </div>
        </div>

        {/* Page Hero Header */}
        <div className="mb-10 text-center sm:text-left">
          <div className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#08CEFD] mb-2">
            КАТАЛОГ #ГРОМКО
          </div>
          <h1
            className="font-display font-black text-white tracking-tight uppercase leading-[0.92]"
            style={{ fontSize: 'clamp(36px, 6vw, 68px)' }}
          >
            МЕНЮ & <span className="text-neon-gradient">БАРНАЯ КАРТА</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-text-secondary max-w-2xl leading-relaxed">
            Авторская гастрономия европейской и паназиатской кухни, сочные бургеры, сеты на компанию и богатая барная карта с коктейлями, винами и премиальным алкоголем.
          </p>
        </div>

        {/* Main Tab Switcher */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-2 rounded-2xl bg-surface/80 border border-white/10 backdrop-blur-xl mb-8">
          <div className="grid grid-cols-2 gap-2 flex-1 max-w-xl">
            <button
              onClick={() => {
                setMenuTab('bar');
                setSearchQuery('');
              }}
              className={`flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-display font-bold text-xs sm:text-sm tracking-wider uppercase transition-all ${
                currentTab === 'bar'
                  ? 'bg-[#08CEFD] text-black shadow-[0_0_25px_rgba(8,206,253,0.4)]'
                  : 'bg-white/5 text-text-secondary hover:text-white hover:bg-white/10'
              }`}
            >
              <Wine className="hidden md:inline w-4 h-4" />
              <span>Барная Карта ({BAR_ITEMS.length})</span>
            </button>

            <button
              onClick={() => {
                setMenuTab('kitchen');
                setSearchQuery('');
              }}
              className={`flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-display font-bold text-xs sm:text-sm tracking-wider uppercase transition-all ${
                currentTab === 'kitchen'
                  ? 'bg-[#FF00AC] text-white shadow-[0_0_25px_rgba(255,0,172,0.4)]'
                  : 'bg-white/5 text-text-secondary hover:text-white hover:bg-white/10'
              }`}
            >
              <Utensils className="hidden md:inline w-4 h-4" />
              <span>Основное Меню ({MENU_ITEMS.length})</span>
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative flex-1 max-w-xs">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={currentTab === 'kitchen' ? 'Поиск блюда...' : 'Поиск напитка...'}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-text-muted/60 focus:outline-none focus:border-neon-cyan transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-text-muted hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Tab Content: BAR */}
        {currentTab === 'bar' && (
          <div>
            {/* Bar Categories */}
            <div className="flex gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
              {barCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setBarCategory(cat.id)}
                  className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider border transition-all ${
                    barCategory === cat.id
                      ? 'bg-[#08CEFD]/15 text-[#08CEFD] border-[#08CEFD] shadow-[0_0_15px_rgba(8,206,253,0.25)]'
                      : 'bg-surface/60 text-text-muted border-white/5 hover:text-white hover:border-white/20'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Bar Grid with Photos */}
            {filteredBarItems.length === 0 ? (
              <div className="text-center py-16 bg-surface/30 rounded-2xl border border-white/5">
                <p className="text-text-muted text-sm">Ничего не найдено по запросу «{searchQuery}»</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setBarCategory('all');
                  }}
                  className="mt-3 text-xs text-[#08CEFD] font-mono underline cursor-pointer"
                >
                  Сбросить фильтры
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredBarItems.map((item) => {
                  const fallbackImg =
                    item.category === 'whiskey'
                      ? 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=800&q=80'
                      : item.category === 'wines'
                      ? 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80'
                      : item.category === 'beer'
                      ? 'https://images.unsplash.com/photo-1608270546103-97749ff66cd0?auto=format&fit=crop&w=800&q=80'
                      : item.category === 'tea_coffee'
                      ? 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80'
                      : 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80';

                  const imgSrc = item.image || fallbackImg;

                  return (
                    <div
                      key={item.id}
                      className="rounded-2xl bg-surface/50 border border-white/5 hover:border-[#08CEFD]/40 overflow-hidden flex flex-col justify-between transition-all group hover:shadow-[0_0_20px_rgba(8,206,253,0.15)]"
                    >
                      {/* Photo banner */}
                      <div className="relative aspect-[4/3] overflow-hidden bg-black/50">
                        <img
                          src={imgSrc}
                          alt={item.name}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = fallbackImg;
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-70" />

                        {item.isSignature && (
                          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-[#08CEFD] text-black shadow-[0_0_10px_rgba(8,206,253,0.5)] flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            TOP
                          </span>
                        )}

                        {item.country && (
                          <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded text-[10px] font-mono text-white/90 bg-black/60 backdrop-blur-sm border border-white/10">
                            {item.country}
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2 mb-1.5">
                            <h3 className="font-display font-bold text-base text-white group-hover:text-[#08CEFD] transition-colors leading-snug">
                              {item.name}
                            </h3>
                          </div>

                          {item.description && (
                            <p className="text-xs text-text-secondary leading-relaxed line-clamp-3 mb-3">
                              {item.description}
                            </p>
                          )}
                        </div>

                        <div className="pt-3 border-t border-white/5 flex items-center justify-between mt-2 text-xs">
                          <span className="font-mono text-text-muted font-medium">{item.volume}</span>
                          <div className="text-right">
                            <span className="font-display font-black text-lg text-white group-hover:text-[#08CEFD] transition-colors">
                              {item.price} ₽
                            </span>
                            {item.priceFull && (
                              <span className="text-[11px] font-mono text-text-muted ml-1.5 block sm:inline">
                                / {item.priceFull} ₽ (бут.)
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Tab Content: KITCHEN */}
        {currentTab === 'kitchen' && (
          <div>
            {/* Kitchen Categories */}
            <div className="flex gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
              {foodCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setKitchenCategory(cat.id)}
                  className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider border transition-all ${
                    kitchenCategory === cat.id
                      ? 'bg-neon-pink/15 text-neon-pink border-neon-pink shadow-[0_0_15px_rgba(255,0,172,0.25)]'
                      : 'bg-surface/60 text-text-muted border-white/5 hover:text-white hover:border-white/20'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Kitchen Grid */}
            {filteredMenuItems.length === 0 ? (
              <div className="text-center py-16 bg-surface/30 rounded-2xl border border-white/5">
                <p className="text-text-muted text-sm">Ничего не найдено по запросу «{searchQuery}»</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setKitchenCategory('all');
                  }}
                  className="mt-3 text-xs text-neon-pink font-mono underline"
                >
                  Сбросить фильтры
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredMenuItems.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl bg-surface/50 border border-white/5 hover:border-neon-pink/30 overflow-hidden flex flex-col justify-between transition-all group"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-black/50">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                      {item.isHit && (
                        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-neon-pink text-white shadow-[0_0_10px_rgba(255,0,172,0.5)]">
                          ХИТ
                        </span>
                      )}
                      {item.isNew && (
                        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-[#08CEFD] text-black shadow-[0_0_10px_rgba(8,206,253,0.5)]">
                          NEW
                        </span>
                      )}
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-baseline justify-between gap-2 mb-1.5">
                          <h3 className="font-display font-bold text-base text-white group-hover:text-neon-pink transition-colors">
                            {item.name}
                          </h3>
                        </div>

                        {item.description && (
                          <p className="text-xs text-text-secondary leading-relaxed line-clamp-3 mb-3">
                            {item.description}
                          </p>
                        )}
                      </div>

                      <div className="pt-3 border-t border-white/5 flex items-center justify-between mt-2">
                        {item.weight ? (
                          <span className="text-[11px] font-mono text-text-muted">{item.weight}</span>
                        ) : (
                          <span />
                        )}
                        <span className="font-display font-black text-xl text-white group-hover:text-neon-pink transition-colors">
                          {item.price} ₽
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Bottom Booking Banner */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-neon-pink/10 via-surface to-[#08CEFD]/10 border border-white/10 text-center flex flex-col items-center">
          <div className="text-xs font-mono font-bold text-neon-pink uppercase tracking-widest mb-2">
            ПРОВЕДИТЕ ВЕЧЕР В #ГРОМКО
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-3">
            Хотите забронировать столик?
          </h2>
          <p className="text-sm text-text-secondary max-w-md mb-6">
            Караоке с премиальным звуком, авторское меню и коктейли ждут вас каждый вечер с 19:00.
          </p>
          <NeonButton
            variant="primary"
            size="lg"
            onClick={onOpenBooking}
            icon={<Calendar className="w-5 h-5 ml-1" />}
          >
            Забронировать стол
          </NeonButton>
        </div>
      </div>
    </div>
  );
};
