import React from 'react';
import { Phone, Navigation } from 'lucide-react';
import { VENUE_INFO } from '../../data';
import { DarkMap } from './DarkMap';

export const ContactsSection: React.FC = () => {
  const yandexMapsUrl = `https://yandex.ru/maps/?rtext=~${VENUE_INFO.coordinates.lat}%2C${VENUE_INFO.coordinates.lng}&rtt=auto`;

  return (
    <section id="contacts" className="relative py-28 lg:py-40 bg-[#050507] border-t border-white/5 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#08CEFD]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Direct, Bold Typography */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#08CEFD] mb-3">
                ЛОКАЦИЯ
              </div>

              <h2
                className="font-display font-black text-white tracking-tight uppercase leading-[0.9]"
                style={{ fontSize: 'clamp(36px, 7vw, 90px)' }}
              >
                НАЙДИ <br />
                <span className="text-neon-gradient">НАС</span>
              </h2>

              <div className="mt-8 space-y-6">
                <div>
                  <div className="text-xs font-mono text-text-muted uppercase tracking-wider">Адрес:</div>
                  <div className="text-xl sm:text-2xl font-display font-black text-white mt-1">
                    {VENUE_INFO.city}, {VENUE_INFO.address}
                  </div>
                  <div className="text-xs text-text-secondary mt-0.5">
                    Центр города · Вход со стороны улицы
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono text-text-muted uppercase tracking-wider">График работы:</div>
                  <div className="mt-2 space-y-1.5 font-mono text-sm sm:text-base">
                    <div className="flex items-center gap-3">
                      <span className="text-text-muted text-xs sm:text-sm w-24">ПН–ЧТ, ВС:</span>
                      <span className="text-white font-bold">19:00 — 04:00</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-text-muted text-xs sm:text-sm w-24">ПТ–СБ:</span>
                      <span className="text-neon-cyan font-bold">19:00 — 06:00</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono text-text-muted uppercase tracking-wider">Телефон:</div>
                  <a
                    href={`tel:${VENUE_INFO.phoneRaw}`}
                    className="text-2xl sm:text-3xl font-display font-black text-white hover:text-neon-pink transition-colors mt-1 block"
                  >
                    {VENUE_INFO.phone}
                  </a>
                </div>

                <div>
                  <div className="text-xs font-mono text-text-muted uppercase tracking-wider">Соцсети:</div>
                  <div className="flex flex-wrap gap-2.5 mt-2">
                    <a
                      href={VENUE_INFO.vkUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-[#08CEFD] border border-[#08CEFD]/30 hover:border-[#08CEFD] transition-all uppercase tracking-wider"
                    >
                      VKontakte
                    </a>
                    <a
                      href={VENUE_INFO.tgUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-neon-pink border border-neon-pink/30 hover:border-neon-pink transition-all uppercase tracking-wider"
                    >
                      Telegram
                    </a>
                    <a
                      href={VENUE_INFO.instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-white/80 hover:text-white border border-white/15 hover:border-white/40 transition-all uppercase tracking-wider"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>

              {/* Two Clean Action Buttons */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${VENUE_INFO.phoneRaw}`}
                  className="px-6 py-3.5 rounded-xl bg-neon-pink text-white font-display font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:shadow-[0_0_20px_rgba(255,0,172,0.5)] transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Позвонить</span>
                </a>

                <a
                  href={yandexMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-white/10 text-white font-display font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-white/20 transition-all border border-white/10"
                >
                  <Navigation className="w-4 h-4 text-[#08CEFD]" />
                  <span>Маршрут</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Massive Dark Stylized Map */}
          <div className="lg:col-span-7">
            <DarkMap height="h-[460px] sm:h-[540px]" />
          </div>
        </div>
      </div>
    </section>
  );
};
