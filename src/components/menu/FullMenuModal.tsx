import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { MENU_ITEMS, BAR_ITEMS } from '../../data/mockData';
import { Utensils, Wine, Sparkles } from 'lucide-react';
import { FoodCategory, BarCategory } from '../../types';

interface FullMenuModalProps {
  isOpen: boolean;
  initialTab?: 'kitchen' | 'bar';
  onClose: () => void;
}

export const FullMenuModal: React.FC<FullMenuModalProps> = ({
  isOpen,
  initialTab = 'kitchen',
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'kitchen' | 'bar'>(initialTab);
  const [kitchenCategory, setKitchenCategory] = useState<FoodCategory>('all');
  const [barCategory, setBarCategory] = useState<BarCategory>('all');

  const filteredMenuItems = MENU_ITEMS.filter(
    (item) => kitchenCategory === 'all' || item.category === kitchenCategory
  );

  const filteredBarItems = BAR_ITEMS.filter(
    (item) => barCategory === 'all' || item.category === barCategory
  );

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

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="#ГРОМКО КАТАЛОГ"
      subtitle="Официальное меню кухни и барная карта караоке-бара"
      maxWidth="4xl"
    >
      {/* Main Tab Switcher */}
      <div className="flex items-center justify-center gap-3 pb-6 border-b border-white/10">
        <button
          onClick={() => setActiveTab('bar')}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-display font-bold text-sm tracking-wider uppercase transition-all ${
            activeTab === 'bar'
              ? 'bg-[#08CEFD] text-black shadow-[0_0_20px_rgba(8,206,253,0.4)]'
              : 'bg-surface border border-white/10 text-text-secondary hover:text-white'
          }`}
        >
          <Wine className="w-4 h-4" />
          <span>Барная Карта</span>
        </button>

        <button
          onClick={() => setActiveTab('kitchen')}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-display font-bold text-sm tracking-wider uppercase transition-all ${
            activeTab === 'kitchen'
              ? 'bg-[#FF00AC] text-white shadow-[0_0_20px_rgba(255,0,172,0.4)]'
              : 'bg-surface border border-white/10 text-text-secondary hover:text-white'
          }`}
        >
          <Utensils className="w-4 h-4" />
          <span>Меню Кухни</span>
        </button>
      </div>

      {/* Content Area */}
      <div className="py-4">
        {activeTab === 'kitchen' ? (
          <div>
            {/* Kitchen Categories Pills */}
            <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
              {foodCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setKitchenCategory(cat.id)}
                  className={`flex-shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider border transition-colors ${
                    kitchenCategory === cat.id
                      ? 'bg-white/15 text-white border-neon-pink'
                      : 'bg-surface/60 text-text-muted border-white/5 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              {filteredMenuItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 rounded-2xl bg-surface/60 border border-white/5 hover:border-white/15 transition-all"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-display font-bold text-sm text-white leading-snug">
                            {item.name}
                          </h4>
                          {item.isHit && (
                            <span className="text-[9px] uppercase font-bold text-neon-pink bg-neon-pink/15 px-1.5 py-0.5 rounded">
                              ХИТ
                            </span>
                          )}
                        </div>
                        <span className="font-display font-black text-sm text-neon-pink flex-shrink-0">
                          {item.price} ₽
                        </span>
                      </div>
                      {item.description && (
                        <p className="text-xs text-text-muted mt-1 line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                    {item.weight && (
                      <div className="text-[10px] text-text-muted font-mono mt-2">
                        {item.weight}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            {/* Bar Categories Pills */}
            <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
              {barCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setBarCategory(cat.id)}
                  className={`flex-shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider border transition-colors ${
                    barCategory === cat.id
                      ? 'bg-white/15 text-[#08CEFD] border-[#08CEFD]'
                      : 'bg-surface/60 text-text-muted border-white/5 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Bar Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              {filteredBarItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 rounded-2xl bg-surface/60 border border-white/5 hover:border-white/15 transition-all"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                    />
                  )}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-display font-bold text-sm text-white leading-snug">
                            {item.name}
                          </h4>
                          {item.isSignature && (
                            <Sparkles className="w-3.5 h-3.5 text-[#08CEFD] flex-shrink-0" />
                          )}
                        </div>
                        <div className="text-right flex-shrink-0">
                          <span className="font-display font-black text-sm text-[#08CEFD]">
                            {item.price} ₽
                          </span>
                          {item.priceFull && (
                            <span className="block text-[10px] text-text-muted font-mono">
                              бут. {item.priceFull} ₽
                            </span>
                          )}
                        </div>
                      </div>
                      {item.description && (
                        <p className="text-xs text-text-muted mt-1 line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-text-muted font-mono mt-2">
                      <span>{item.volume}</span>
                      {item.country && <span>{item.country}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};
