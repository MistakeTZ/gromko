import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { NeonButton } from "../common/NeonButton";
import { VENUE_INFO } from '../../data';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const daysOfWeek = [
    "ВОСКРЕСЕНЬЕ",
    "ПОНЕДЕЛЬНИК",
    "ВТОРНИК",
    "СРЕДА",
    "ЧЕТВЕРГ",
    "ПЯТНИЦА",
    "СУББОТА",
  ];
  const todayDayIndex = new Date().getDay();
  const todayName = daysOfWeek[todayDayIndex];
  const isWeekend = todayDayIndex === 5 || todayDayIndex === 6;
  const todayHours = isWeekend ? "19:00 — 06:00" : "19:00 — 04:00";
  const closeHour = isWeekend ? "06:00" : "04:00";

  const handleScrollToGallery = () => {
    const el = document.getElementById("gallery");
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen min-h-[700px] flex flex-col justify-between overflow-hidden bg-[#050507]">
      {/* Background Cinematic Nightlife Photo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.webp"
          alt="Караоке и ночная жизнь в ГРОМКО"
          width="1400"
          height="933"
          loading="eager"
          // @ts-expect-error fetchPriority attribute
          fetchpriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-45 scale-105"
        />

        {/* Ambient Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050507]/80 via-transparent to-[#050507]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050507]/90 via-[#050507]/40 to-transparent" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#050507]/50 to-[#050507]" />

        {/* Subtle Ambient Light Glows */}
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-neon-pink/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-neon-cyan/15 rounded-full blur-[160px] pointer-events-none" />
      </div>

      {/* Main Content Hero Canvas */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl">
          {/* Subtle Live Badge */}
          <div className="inline-flex items-start sm:items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#08CEFD] animate-neon-pulse flex-shrink-0 mt-1 sm:mt-0" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-text-secondary uppercase">
              <span className="whitespace-nowrap">{VENUE_INFO.city} ·</span>{" "}
              <span className="whitespace-nowrap">{VENUE_INFO.address} ·</span>{" "}
              <span className="whitespace-nowrap">СЕГОДНЯ ДО {closeHour}</span>
            </span>
          </div>

          {/* Monumental Hero Headline */}
          <h1
            className="font-display font-black text-white tracking-[-0.04em] leading-[0.9] select-none break-words"
            style={{ fontSize: "clamp(36px, 11vw, 140px)" }}
          >
            <span className="text-neon-pink drop-shadow-[0_0_35px_rgba(255,0,172,0.6)]">
              #
            </span>
            ГРОМКО
          </h1>

          {/* Subtitle & Concept */}
          <div className="mt-4 sm:mt-6 text-sm sm:text-2xl font-display font-bold tracking-widest text-neon-cyan uppercase">
            {VENUE_INFO.subtitle}
          </div>

          {/* Emotional Statement */}
          <p className="mt-4 text-base sm:text-2xl text-white/80 font-medium italic border-l-2 border-neon-pink pl-4">
            {VENUE_INFO.tagline}
          </p>

          {/* Primary Action Button (The single dominant neon gradient button) */}
          <div className="mt-8 sm:mt-12 flex flex-wrap items-center gap-4 sm:gap-6">
            <NeonButton
              variant="primary"
              size="lg"
              onClick={onOpenBooking}
              icon={<ArrowRight className="w-5 h-5 ml-1" />}
              className="px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-display font-bold uppercase shadow-neon-gradient"
            >
              Забронировать стол
            </NeonButton>

            <button
              onClick={handleScrollToGallery}
              className="text-xs sm:text-sm font-display font-semibold uppercase tracking-wider text-text-secondary hover:text-white transition-colors flex items-center gap-2 group py-2"
            >
              <span>Смотреть атмосферу</span>
              <ChevronDown className="w-4 h-4 text-neon-cyan group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Minimalist Bar */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-8 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs text-text-muted">
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 font-mono tracking-wider">
          <span className="text-white font-semibold">● {todayName}</span>
          <span className="text-white/20">/</span>
          <span>{todayHours}</span>
        </div>
      </div>
    </section>
  );
};
