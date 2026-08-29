import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { WEEK_SCHEDULE } from '../../data/mockData';
import { NeonButton } from '../common/NeonButton';
import { WeekDaySchedule } from '../../types';

interface WeeklyScheduleProps {
  onOpenBooking: () => void;
}

export const WeeklySchedule: React.FC<WeeklyScheduleProps> = ({ onOpenBooking }) => {
  const currentDayIndex = (new Date().getDay() + 6) % 7;
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(currentDayIndex);

  const selectedDay: WeekDaySchedule = WEEK_SCHEDULE[selectedDayIndex] || WEEK_SCHEDULE[0];

  return (
    <section id="schedule" className="relative py-28 lg:py-36 bg-[#050507] overflow-hidden border-t border-white/5">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-neon-pink/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#08CEFD]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Bold and Minimal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-white/10 gap-6">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#08CEFD] mb-3">
              ГРАФИК & АКЦИИ
            </div>
            <h2
              className="font-display font-black text-white tracking-tight leading-[0.9] uppercase select-none"
              style={{ fontSize: 'clamp(38px, 6vw, 76px)' }}
            >
              ЭТОЙ НЕДЕЛЕЙ <br />
              <span className="text-neon-gradient">В #ГРОМКО</span>
            </h2>
          </div>

          <div className="text-sm text-text-secondary font-mono">
            <div>ПН–ЧТ, ВС: <span className="text-white font-bold">19:00 — 04:00</span></div>
            <div className="mt-1">ПТ–СБ: <span className="text-neon-pink font-bold">19:00 — 06:00</span></div>
          </div>
        </div>

        {/* Minimalist Day Strip (ПН — ВС) */}
        <div className="mt-10 grid grid-cols-7 gap-2 sm:gap-3">
          {WEEK_SCHEDULE.map((day, idx) => {
            const isSelected = selectedDayIndex === idx;
            const isToday = currentDayIndex === idx;

            return (
              <button
                key={day.id}
                onClick={() => setSelectedDayIndex(idx)}
                className={`py-4 px-2 sm:px-4 rounded-xl text-center transition-all duration-300 relative cursor-pointer border ${
                  isSelected
                    ? 'bg-white/10 border-[#FF00AC] text-white shadow-[0_0_20px_rgba(255,0,172,0.25)]'
                    : 'bg-transparent border-white/5 hover:border-white/20 text-text-secondary hover:text-white'
                }`}
              >
                <div className="font-display font-black text-lg sm:text-2xl tracking-tight">
                  {day.shortName}
                </div>

                <div className="text-[10px] sm:text-xs font-mono text-text-muted mt-1">
                  {day.workingHours.split(' — ')[1]}
                </div>

                {/* Promo Dot Indicator */}
                {day.hasPromo && (
                  <div className="mt-2 flex justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-pink" />
                  </div>
                )}

                {isToday && (
                  <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#08CEFD] animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* Focused Day Presentation (Consistent Height & Structure) */}
        <div className="mt-10 p-6 sm:p-10 rounded-3xl bg-surface/50 border border-white/10 backdrop-blur-md min-h-[440px] sm:min-h-[460px] lg:min-h-[420px] flex flex-col justify-center transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Promo / Day Visual Image */}
            <div className="lg:col-span-5 h-64 sm:h-80 lg:h-auto min-h-[260px] sm:min-h-[320px] rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl group">
              <img
                src={selectedDay.image}
                alt={selectedDay.tagline || selectedDay.fullName}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
                <span
                  className={`text-xs font-mono font-bold uppercase px-2.5 py-1 rounded border backdrop-blur-md ${
                    selectedDay.isSpecial || selectedDay.hasPromo
                      ? 'text-neon-pink bg-black/80 border-neon-pink/40'
                      : 'text-[#08CEFD] bg-black/80 border-[#08CEFD]/40'
                  }`}
                >
                  {selectedDay.badge || 'ПРОГРАММА'}
                </span>
                <span className="text-[11px] font-mono text-white/80 bg-black/60 px-2 py-0.5 rounded border border-white/10">
                  {selectedDay.workingHours}
                </span>
              </div>
            </div>

            {/* Day Info & Offer Details */}
            <div className="lg:col-span-7 flex flex-col justify-between min-h-[280px] sm:min-h-[320px]">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold font-display uppercase tracking-widest text-[#08CEFD]">
                    {selectedDay.fullName}
                  </span>
                  <span className="text-xs font-mono text-text-muted">
                    {selectedDay.workingHours}
                  </span>
                  {currentDayIndex === selectedDayIndex && (
                    <span className="text-[10px] font-bold text-white bg-neon-pink px-2 py-0.5 rounded">
                      СЕГОДНЯ
                    </span>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-white uppercase leading-tight tracking-tight min-h-[2.4em] flex items-center">
                  {selectedDay.tagline || 'КАРАОКЕ, БАР И ОТДЫХ'}
                </h3>

                {selectedDay.details && selectedDay.details.length > 0 ? (
                  <div className="mt-4 space-y-2.5">
                    {selectedDay.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-text-secondary">
                        <Sparkles
                          className={`w-4 h-4 flex-shrink-0 mt-1 ${
                            selectedDay.hasPromo ? 'text-neon-pink' : 'text-[#08CEFD]'
                          }`}
                        />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="mt-4 text-sm sm:text-base text-text-secondary leading-relaxed max-w-xl">
                    Исполнение любимых треков без очередей, авторские коктейли, дымные кальяны и полноценная кухня до самого утра.
                  </p>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center gap-4">
                <NeonButton
                  variant="primary"
                  size="md"
                  onClick={onOpenBooking}
                  icon={<ArrowRight className="w-4 h-4 ml-1" />}
                >
                  Забронировать на {selectedDay.shortName}
                </NeonButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
