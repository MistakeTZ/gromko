import React from 'react';

export const AtmosphereBanner: React.FC = () => {
  return (
    <section className="relative py-32 lg:py-48 bg-[#050507] overflow-hidden flex items-center justify-center">
      {/* Background with Ambient Dark Stage Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-pink/10 rounded-full blur-[160px]" />
        <div className="absolute top-1/2 right-1/3 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-cyan/10 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Minimal Category Tag */}
        <div className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-[#08CEFD] mb-8 select-none">
          АТМОСФЕРА #ГРОМКО
        </div>

        {/* Monumental Emotional Statement */}
        <h2
          className="font-display font-black text-white tracking-tight uppercase leading-[0.92] select-none"
          style={{ fontSize: 'clamp(30px, 7.5vw, 100px)' }}
        >
          НЕ ПРОСТО <br />
          КАРАОКЕ. <br />
          <span className="text-neon-gradient">ЭТО ТВОЯ</span> <br />
          <span className="text-neon-gradient">НОЧНАЯ СЦЕНА.</span>
        </h2>

        {/* Narrative Essence Line */}
        <div className="mt-8 sm:mt-12 text-xs sm:text-sm md:text-base font-mono font-bold tracking-[0.12em] sm:tracking-[0.25em] text-text-secondary uppercase">
          МУЗЫКА · СВЕТ · ЛЮДИ · АЛКОГОЛЬ · ЕДА · ПЕНИЕ
        </div>
      </div>
    </section>
  );
};
