import React, { useState } from 'react';
import { Calendar, Users, Clock, User, Phone, MessageSquare, Sparkles, Check } from 'lucide-react';
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
  const today = new Date();
  const tomorrow = new Date(Date.now() + 86400000);

  // Find next Friday and Saturday
  const getNextDayOfWeek = (dayOfWeek: number) => {
    const d = new Date();
    const current = d.getDay();
    const diff = (dayOfWeek - current + 7) % 7 || 7;
    d.setDate(d.getDate() + diff);
    return d;
  };

  const nextFriday = getNextDayOfWeek(5);
  const nextSaturday = getNextDayOfWeek(6);

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

  const quickDates = [
    { label: 'Сегодня', dateStr: formatDateVal(today), sub: formatDateLabel(today) },
    { label: 'Завтра', dateStr: formatDateVal(tomorrow), sub: formatDateLabel(tomorrow) },
    { label: 'Пятница', dateStr: formatDateVal(nextFriday), sub: formatDateLabel(nextFriday) },
    { label: 'Суббота', dateStr: formatDateVal(nextSaturday), sub: formatDateLabel(nextSaturday) },
  ];

  const popularTimes = ['19:00', '20:00', '21:00', '22:00', '23:00', '00:00', '01:00'];

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
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-8 rounded-3xl bg-surface/90 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden"
    >
      {/* Top subtle glow line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-pink via-[#08CEFD] to-neon-pink" />

      <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-neon-pink" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
            Бронирование стола
          </span>
        </div>
        <span className="text-[11px] font-mono text-text-muted bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
          Вход свободный
        </span>
      </div>

      <div className="space-y-5">
        {/* 1. Дата */}
        <div>
          <div className="flex items-center justify-between mb-2.5">
            <label className="text-xs font-display font-bold uppercase tracking-wider text-text-secondary flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#08CEFD]" />
              <span>Дата визита</span>
            </label>
            <input
              type="date"
              value={date}
              min={formatDateVal(today)}
              onChange={(e) => setDate(e.target.value)}
              className="text-xs bg-background-soft border border-white/10 rounded-lg px-2.5 py-1 text-white focus:border-[#08CEFD] focus:outline-none font-mono cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {quickDates.map((d) => {
              const isSelected = date === d.dateStr;
              return (
                <button
                  key={d.label}
                  type="button"
                  onClick={() => setDate(d.dateStr)}
                  className={`py-2 px-2.5 rounded-xl border text-center transition-all ${
                    isSelected
                      ? 'bg-[#FF00AC] text-white border-[#FF00AC] shadow-[0_0_12px_rgba(255,0,172,0.35)] font-bold'
                      : 'bg-background-soft border-white/5 text-text-secondary hover:text-white hover:border-white/20'
                  }`}
                >
                  <div className="text-xs font-display">{d.label}</div>
                  <div className="text-[10px] opacity-75 mt-0.5">{d.sub}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Время & Гости в одну аккуратную строку на десктопе */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Время */}
          <div>
            <label className="block text-xs font-display font-bold uppercase tracking-wider text-text-secondary mb-2 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#08CEFD]" />
              <span>Время: <strong className="text-white">{time}</strong></span>
            </label>
            <div className="flex flex-wrap gap-1.5">
              {popularTimes.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTime(t)}
                  className={`py-1.5 px-2.5 rounded-lg text-xs font-mono font-bold border transition-all ${
                    time === t
                      ? 'bg-[#08CEFD] text-black border-[#08CEFD] shadow-[0_0_10px_rgba(8,206,253,0.35)]'
                      : 'bg-background-soft border-white/5 text-text-secondary hover:text-white hover:border-white/20'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Гости */}
          <div>
            <label className="block text-xs font-display font-bold uppercase tracking-wider text-text-secondary mb-2 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#08CEFD]" />
              <span>Гостей: <strong className="text-white">{guests} чел.</strong></span>
            </label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setGuests((g) => Math.max(1, g - 1))}
                className="w-9 h-9 rounded-xl bg-background-soft border border-white/10 text-white font-bold text-base hover:border-neon-pink flex items-center justify-center transition-colors active:scale-95"
              >
                −
              </button>
              <div className="flex-1 py-1.5 px-2 rounded-xl bg-background-soft border border-white/5 text-center font-display font-black text-sm text-white">
                {guests} {guests === 1 ? 'гость' : guests < 5 ? 'гостя' : 'гостей'}
              </div>
              <button
                type="button"
                onClick={() => setGuests((g) => Math.min(30, g + 1))}
                className="w-9 h-9 rounded-xl bg-background-soft border border-white/10 text-white font-bold text-base hover:border-neon-pink flex items-center justify-center transition-colors active:scale-95"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* 3. Имя и Телефон */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div>
            <label className="block text-[11px] font-mono uppercase text-text-muted mb-1">
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
                className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-background-soft border border-white/10 text-white placeholder:text-text-muted focus:border-neon-pink focus:outline-none transition-colors text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-mono uppercase text-text-muted mb-1">
              Телефон *
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                placeholder="+7 (999) 000-00-00"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-background-soft border border-white/10 text-white placeholder:text-text-muted focus:border-[#08CEFD] focus:outline-none transition-colors text-sm font-mono"
              />
            </div>
          </div>
        </div>

        {/* 4. Пожелания */}
        <div>
          <label className="block text-[11px] font-mono uppercase text-text-muted mb-1">
            Пожелания к столику (опционально)
          </label>
          <div className="relative">
            <MessageSquare className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Ближе к сцене, день рождения, уютная зона..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-background-soft border border-white/10 text-white placeholder:text-text-muted focus:border-white/30 focus:outline-none transition-colors text-xs"
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
            className="py-3.5 text-sm sm:text-base font-black shadow-neon-gradient"
          >
            {isLoading ? 'Оформление брони...' : 'Забронировать стол'}
          </NeonButton>
          <div className="text-center mt-2.5 flex items-center justify-center gap-1.5 text-[11px] text-text-muted font-mono">
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            <span>Без депозита · Мгновенное подтверждение</span>
          </div>
        </div>
      </div>
    </form>
  );
};
