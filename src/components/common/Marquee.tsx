import React from 'react';

interface MarqueeProps {
  className?: string;
  speed?: 'normal' | 'slow' | 'fast';
}

export const Marquee: React.FC<MarqueeProps> = ({ className }) => {
  const items = [
    { text: 'КАРАОКЕ', highlight: false },
    { text: '·', highlight: false },
    { text: '#ГРОМКО', highlight: true },
    { text: '·', highlight: false },
    { text: 'BAR & DRINKS', highlight: false },
    { text: '·', highlight: false },
    { text: 'ТУТ ПОЮТ ВСЕ', highlight: false },
    { text: '·', highlight: false },
    { text: 'NIGHT PARTY', highlight: false },
    { text: '·', highlight: false },
    { text: '19:00 — 06:00', highlight: false },
    { text: '·', highlight: false },
    { text: 'ИВАНОВО', highlight: true },
    { text: '·', highlight: false },
    { text: 'SOUND & LIGHT', highlight: false },
    { text: '·', highlight: false },
  ];

  return (
    <div className={`relative w-full overflow-hidden border-y border-white/5 bg-background-soft py-3 ${className || ''}`}>
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="mx-4 flex items-center gap-4 text-xs font-display tracking-widest uppercase font-bold"
          >
            {item.highlight ? (
              <span className="text-neon-gradient drop-shadow-[0_0_8px_rgba(255,0,172,0.4)]">
                {item.text}
              </span>
            ) : item.text === '·' ? (
              <span className="text-[#08CEFD] text-sm opacity-60">·</span>
            ) : (
              <span className="text-text-muted hover:text-white transition-colors duration-300">
                {item.text}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
