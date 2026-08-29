import React, { useState } from 'react';
import { Calendar, Users, Clock, User, Phone, MessageSquare } from 'lucide-react';
import { TIME_SLOTS } from '../../data/mockData';
import { NeonButton } from '../common/NeonButton';
import { BookingFormData } from '../../types';

interface DesktopBookingFormProps {
  onSubmitBooking: (formData: BookingFormData) => Promise<void>;
  isLoading?: boolean;
}

export const DesktopBookingForm: React.FC<DesktopBookingFormProps> = ({
  onSubmitBooking,
  isLoading = false,
}) => {
  // Quick dates: Today, Tomorrow, Day After Tomorrow
  const today = new Date();
  const tomorrow = new Date(Date.now() + 86400000);
  const dayAfter = new Date(Date.now() + 86400000 * 2);

  const formatDateVal = (d: Date) => d.toISOString().split('T')[0];
  const formatDateLabel = (d: Date) =>
    d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });

  const [date, setDate] = useState<string>(formatDateVal(today));
  const [time, setTime] = useState<string>('21:00');
  const [guests, setGuests] = useState<number>(4);
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Пожалуйста, укажите ваше имя');
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
      setError('Пожалуйста, укажите корректный номер телефона');
      return;
    }
    setError(null);
    await onSubmitBooking({ date, time, guests, name, phone, comment });
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 sm:p-10 rounded-3xl bg-surface/90 border border-white/10 backdrop-blur-xl shadow-2xl relative">
      {/* Top subtle glow line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-pink via-[#08CEFD] to-neon-pink" />

      <div className="space-y-6">
        {/* 1. Date Selection */}
        <div>
          <label className="block text-xs font-display font-bold uppercase tracking-wider text-text-secondary mb-3 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#08CEFD]" />
            <span>1. Выберите дату</span>
          </label>

          <div className="grid grid-cols-4 gap-2">
            {[
              { label: 'Сегодня', dateStr: formatDateVal(today), sub: formatDateLabel(today) },
              { label: 'Завтра', dateStr: formatDateVal(tomorrow), sub: formatDateLabel(tomorrow) },
              { label: 'Послезавтра', dateStr: formatDateVal(dayAfter), sub: formatDateLabel(dayAfter) },
            ].map((d) => (
              <button
                key={d.dateStr}
                type="button"
                onClick={() => setDate(d.dateStr)}
                className={`p-2.5 rounded-xl border text-center transition-all ${
                  date === d.dateStr
                    ? 'bg-gradient-to-r from-neon-pink to-neon-cyan text-white border-transparent shadow-[0_0_15px_rgba(255,0,172,0.3)] font-bold'
                    : 'bg-background-soft border-white/5 text-text-secondary hover:text-white hover:border-white/20'
                }`}
              >
                <div className="text-xs font-display">{d.label}</div>
                <div className="text-[10px] opacity-80 mt-0.5">{d.sub}</div>
              </button>
            ))}

            {/* Custom Date Input */}
            <div className="relative">
              <input
                type="date"
                value={date}
                min={formatDateVal(today)}
                onChange={(e) => setDate(e.target.value)}
                className="w-full h-full p-2.5 rounded-xl bg-background-soft border border-white/5 text-xs text-text-secondary focus:border-[#08CEFD] focus:outline-none font-mono"
              />
            </div>
          </div>
        </div>

        {/* 2. Interactive Time Slot Picker (Section #13 UX) */}
        <div>
          <label className="block text-xs font-display font-bold uppercase tracking-wider text-text-secondary mb-3 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#08CEFD]" />
              <span>2. Доступное время</span>
            </span>
            <span className="text-[10px] text-text-muted">
              {time ? `Выбрано: ${time}` : 'Выберите слот'}
            </span>
          </label>

          <div className="grid grid-cols-5 sm:grid-cols-8 gap-2">
            {TIME_SLOTS.map((slot) => {
              const isSelected = time === slot.time;
              const isAvailable = slot.available;

              return (
                <button
                  key={slot.time}
                  type="button"
                  disabled={!isAvailable}
                  onClick={() => setTime(slot.time)}
                  className={`py-2 px-1 rounded-lg text-xs font-mono font-bold transition-all ${
                    isSelected
                      ? 'bg-gradient-to-r from-neon-pink to-neon-cyan text-white shadow-[0_0_15px_rgba(8,206,253,0.5)] scale-105 z-10'
                      : isAvailable
                      ? 'bg-background-soft text-text-secondary border border-white/5 hover:border-[#08CEFD]/40 hover:text-white'
                      : 'bg-white/[0.02] text-text-muted/30 border border-transparent cursor-not-allowed line-through'
                  }`}
                  title={isAvailable ? 'Свободно' : 'Занято'}
                >
                  {slot.time}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-4 mt-2 text-[10px] text-text-muted">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-neon-pink to-neon-cyan" />
              Выбрано
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-background-soft border border-white/20" />
              Свободно
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-white/10 opacity-30" />
              Занято
            </span>
          </div>
        </div>

        {/* 3. Guests Counter */}
        <div>
          <label className="block text-xs font-display font-bold uppercase tracking-wider text-text-secondary mb-3 flex items-center gap-2">
            <Users className="w-4 h-4 text-[#08CEFD]" />
            <span>3. Количество гостей: <strong className="text-white">{guests} чел.</strong></span>
          </label>

          <div className="flex items-center gap-2">
            {[2, 4, 6, 8, 10, 12].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => setGuests(num)}
                className={`flex-1 py-2 rounded-xl text-xs font-display font-bold border transition-all ${
                  guests === num
                    ? 'bg-[#FF00AC] text-white border-[#FF00AC] shadow-[0_0_12px_rgba(255,0,172,0.4)]'
                    : 'bg-background-soft border-white/5 text-text-secondary hover:text-white hover:border-white/20'
                }`}
              >
                {num} {num >= 10 ? '+' : ''}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Contact Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div>
            <label className="block text-xs font-mono uppercase text-text-muted mb-1.5">
              Ваше имя *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Иван"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-background-soft border border-white/10 text-white placeholder:text-text-muted focus:border-neon-pink focus:outline-none transition-colors text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-text-muted mb-1.5">
              Номер телефона *
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                placeholder="+7 (999) 000-00-00"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-background-soft border border-white/10 text-white placeholder:text-text-muted focus:border-[#08CEFD] focus:outline-none transition-colors text-sm font-mono"
              />
            </div>
          </div>
        </div>

        {/* Optional Comment */}
        <div>
          <label className="block text-xs font-mono uppercase text-text-muted mb-1.5">
            Пожелания к столику (опционально)
          </label>
          <div className="relative">
            <MessageSquare className="w-4 h-4 text-text-muted absolute left-3.5 top-3" />
            <textarea
              rows={2}
              placeholder="День рождения, ближе к сцене, тихая зона..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-background-soft border border-white/10 text-white placeholder:text-text-muted focus:border-white/30 focus:outline-none transition-colors text-sm resize-none"
            />
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
            {error}
          </div>
        )}

        {/* Submit CTA */}
        <div className="pt-2">
          <NeonButton
            variant="primary"
            size="lg"
            fullWidth
            disabled={isLoading}
            className="py-4 text-base font-black shadow-neon-gradient"
          >
            {isLoading ? 'Оформление брони...' : 'Забронировать стол'}
          </NeonButton>
        </div>
      </div>
    </form>
  );
};
