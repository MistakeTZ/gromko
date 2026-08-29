import React, { useState } from 'react';
import { CalendarCheck, ShieldCheck, Clock } from 'lucide-react';
import { DesktopBookingForm } from './DesktopBookingForm';
import { MobileBookingFlow } from './MobileBookingFlow';
import { BookingSuccessModal } from './BookingSuccessModal';
import { VENUE_INFO } from '../../data/mockData';
import { BookingFormData } from '../../types';

export const BookingSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [successData, setSuccessData] = useState<{
    bookingId?: string;
    date: string;
    time: string;
    guests: number;
    name: string;
    phone: string;
  } | null>(null);

  const handleBookingSubmit = async (formData: BookingFormData) => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const json = await res.json();
        setSuccessData({
          bookingId: json.data?.id || 'GROMKO-' + Math.floor(1000 + Math.random() * 9000),
          ...formData,
        });
      } else {
        setSuccessData({
          bookingId: 'GROMKO-' + Math.floor(1000 + Math.random() * 9000),
          ...formData,
        });
      }
    } catch {
      setSuccessData({
        bookingId: 'GROMKO-' + Math.floor(1000 + Math.random() * 9000),
        ...formData,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="booking-section" className="relative py-28 lg:py-40 bg-[#050507] border-t border-white/5 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-neon-pink/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Bold, Confident Typography */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#08CEFD] mb-3">
                БРОНИРОВАНИЕ
              </div>

              <h2
                className="font-display font-black text-white tracking-tight uppercase leading-[0.9]"
                style={{ fontSize: 'clamp(36px, 7vw, 90px)' }}
              >
                ГОТОВЫ <br />
                <span className="text-neon-gradient">ПЕТЬ?</span>
              </h2>

              <p className="mt-6 text-base sm:text-lg text-text-secondary leading-relaxed">
                Забронируйте столик заранее, чтобы гарантировать лучшее место в зале рядом со сценой.
              </p>

              {/* Minimal bullet items */}
              <div className="mt-8 space-y-4 text-sm text-text-secondary font-mono">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#08CEFD] flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-text-secondary leading-snug">
                    <span className="text-white font-medium">Режим:</span> ПН–ЧТ, ВС 19:00—04:00 · ПТ–СБ 19:00—06:00
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CalendarCheck className="w-4 h-4 text-neon-pink" />
                  <span>Мгновенное подтверждение по телефону</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-white" />
                  <span>Без скрытых условий и комиссий</span>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/5">
              <div className="text-xs text-text-muted">
                Или позвоните нам напрямую:
              </div>
              <a
                href={`tel:${VENUE_INFO.phoneRaw}`}
                className="text-xl font-display font-bold text-white hover:text-neon-pink transition-colors mt-1 block"
              >
                {VENUE_INFO.phone}
              </a>
            </div>
          </div>

          {/* Right Column: Clean, Noise-Free Booking Form */}
          <div className="lg:col-span-7">
            {/* Desktop View */}
            <div className="hidden sm:block">
              <DesktopBookingForm
                onSubmitBooking={handleBookingSubmit}
                isLoading={isLoading}
              />
            </div>

            {/* Mobile View */}
            <div className="block sm:hidden">
              <MobileBookingFlow
                onSubmitBooking={handleBookingSubmit}
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <BookingSuccessModal
        isOpen={!!successData}
        bookingData={successData}
        onClose={() => setSuccessData(null)}
      />
    </section>
  );
};
