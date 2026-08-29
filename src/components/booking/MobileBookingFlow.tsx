import React, { useState } from 'react';
import { ArrowLeft, Check, ArrowRight } from 'lucide-react';
import { TIME_SLOTS } from '../../data/mockData';
import { NeonButton } from '../common/NeonButton';
import { BookingFormData } from '../../types';

interface MobileBookingFlowProps {
  onSubmitBooking: (formData: BookingFormData) => Promise<void>;
  onClose?: () => void;
  isLoading?: boolean;
}

export const MobileBookingFlow: React.FC<MobileBookingFlowProps> = ({
  onSubmitBooking,
  onClose,
  isLoading = false,
}) => {
  const [step, setStep] = useState<number>(1);

  // Form State
  const today = new Date();
  const tomorrow = new Date(Date.now() + 86400000);
  const formatDateVal = (d: Date) => d.toISOString().split('T')[0];

  const [date, setDate] = useState<string>(formatDateVal(today));
  const [dateType, setDateType] = useState<'today' | 'tomorrow' | 'custom'>('today');
  const [time, setTime] = useState<string>('21:00');
  const [guests, setGuests] = useState<number>(4);
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleDateTypeSelect = (type: 'today' | 'tomorrow' | 'custom') => {
    setDateType(type);
    if (type === 'today') setDate(formatDateVal(today));
    if (type === 'tomorrow') setDate(formatDateVal(tomorrow));
  };

  const handleNext = () => {
    setError(null);
    if (step === 1 && !date) {
      setError('Выберите дату');
      return;
    }
    if (step === 2 && !time) {
      setError('Выберите время');
      return;
    }
    if (step === 4) {
      if (!name.trim()) {
        setError('Введите ваше имя');
        return;
      }
      if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
        setError('Введите корректный телефон');
        return;
      }
      onSubmitBooking({ date, time, guests, name, phone, comment });
      return;
    }
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setError(null);
    if (step === 1) {
      if (onClose) onClose();
    } else {
      setStep((prev) => Math.max(prev - 1, 1));
    }
  };

  return (
    <div className="w-full bg-surface border border-white/10 rounded-3xl p-6 shadow-2xl relative">
      {/* Top Wizard Header: Back + Title + Step Counter */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
        <button
          type="button"
          onClick={handleBack}
          className="flex items-center gap-1.5 text-xs font-bold text-text-secondary hover:text-white uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{step === 1 ? 'Закрыть' : 'Назад'}</span>
        </button>

        <div className="font-display font-black text-sm uppercase text-white tracking-wider">
          БРОНЬ СТОЛА
        </div>

        <div className="font-mono text-xs font-bold text-[#08CEFD] bg-[#08CEFD]/10 px-2.5 py-1 rounded-full border border-[#08CEFD]/30">
          {step} / 4
        </div>
      </div>

      {/* Wizard Steps */}
      <div className="min-h-[280px] flex flex-col justify-between">
        {/* STEP 1: КОГДА? */}
        {step === 1 && (
          <div className="space-y-4 animate-fadeIn">
            <div>
              <span className="text-xs font-mono text-[#08CEFD] uppercase tracking-widest">
                ШАГ 1
              </span>
              <h3 className="text-2xl font-display font-black text-white mt-1 uppercase">
                КОГДА?
              </h3>
            </div>

            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={() => handleDateTypeSelect('today')}
                className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                  dateType === 'today'
                    ? 'bg-gradient-to-r from-neon-pink to-neon-cyan text-white border-transparent shadow-[0_0_20px_rgba(255,0,172,0.4)]'
                    : 'bg-background-soft border-white/10 text-text-secondary'
                }`}
              >
                <div>
                  <div className="font-display font-bold text-base">СЕГОДНЯ</div>
                  <div className="text-xs opacity-80 mt-0.5">
                    {today.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', weekday: 'short' })}
                  </div>
                </div>
                {dateType === 'today' && <Check className="w-5 h-5" />}
              </button>

              <button
                type="button"
                onClick={() => handleDateTypeSelect('tomorrow')}
                className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                  dateType === 'tomorrow'
                    ? 'bg-gradient-to-r from-neon-pink to-neon-cyan text-white border-transparent shadow-[0_0_20px_rgba(255,0,172,0.4)]'
                    : 'bg-background-soft border-white/10 text-text-secondary'
                }`}
              >
                <div>
                  <div className="font-display font-bold text-base">ЗАВТРА</div>
                  <div className="text-xs opacity-80 mt-0.5">
                    {tomorrow.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', weekday: 'short' })}
                  </div>
                </div>
                {dateType === 'tomorrow' && <Check className="w-5 h-5" />}
              </button>

              <button
                type="button"
                onClick={() => handleDateTypeSelect('custom')}
                className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                  dateType === 'custom'
                    ? 'bg-surface-hover border-neon-pink text-white'
                    : 'bg-background-soft border-white/10 text-text-secondary'
                }`}
              >
                <div className="w-full">
                  <div className="font-display font-bold text-sm">ДРУГАЯ ДАТА</div>
                  <input
                    type="date"
                    value={date}
                    min={formatDateVal(today)}
                    onChange={(e) => {
                      setDate(e.target.value);
                      setDateType('custom');
                    }}
                    className="w-full mt-2 p-2 rounded-xl bg-surface border border-white/10 text-xs text-white focus:outline-none"
                  />
                </div>
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: ВО СКОЛЬКО? */}
        {step === 2 && (
          <div className="space-y-4 animate-fadeIn">
            <div>
              <span className="text-xs font-mono text-[#08CEFD] uppercase tracking-widest">
                ШАГ 2
              </span>
              <h3 className="text-2xl font-display font-black text-white mt-1 uppercase">
                ВО СКОЛЬКО?
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-2.5 pt-2 max-h-60 overflow-y-auto pr-1">
              {TIME_SLOTS.map((slot) => {
                const isSelected = time === slot.time;
                const isAvailable = slot.available;

                return (
                  <button
                    key={slot.time}
                    type="button"
                    disabled={!isAvailable}
                    onClick={() => setTime(slot.time)}
                    className={`py-3 px-2 rounded-xl font-mono text-sm font-bold border transition-all ${
                      isSelected
                        ? 'bg-gradient-to-r from-neon-pink to-neon-cyan text-white border-transparent shadow-[0_0_15px_rgba(8,206,253,0.5)] scale-105'
                        : isAvailable
                        ? 'bg-background-soft text-text-secondary border-white/10 hover:text-white'
                        : 'bg-white/[0.02] text-text-muted/30 border-transparent cursor-not-allowed line-through'
                    }`}
                  >
                    {slot.time}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 3: СКОЛЬКО ВАС? */}
        {step === 3 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <span className="text-xs font-mono text-[#08CEFD] uppercase tracking-widest">
                ШАГ 3
              </span>
              <h3 className="text-2xl font-display font-black text-white mt-1 uppercase">
                СКОЛЬКО ВАС?
              </h3>
            </div>

            <div className="flex items-center justify-center gap-6 py-8 bg-background-soft rounded-2xl border border-white/5">
              <button
                type="button"
                onClick={() => setGuests((prev) => Math.max(1, prev - 1))}
                className="w-14 h-14 rounded-2xl bg-surface border border-white/10 text-2xl font-display font-black text-white hover:border-neon-pink transition-colors active:scale-95"
              >
                −
              </button>

              <div className="text-center">
                <span className="font-display font-black text-5xl text-white">
                  {guests}
                </span>
                <span className="block text-xs uppercase font-mono text-text-muted mt-1">
                  {guests === 1 ? 'гость' : guests < 5 ? 'гостя' : 'гостей'}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setGuests((prev) => Math.min(30, prev + 1))}
                className="w-14 h-14 rounded-2xl bg-surface border border-white/10 text-2xl font-display font-black text-white hover:border-neon-pink transition-colors active:scale-95"
              >
                +
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: ИМЯ И ТЕЛЕФОН */}
        {step === 4 && (
          <div className="space-y-4 animate-fadeIn">
            <div>
              <span className="text-xs font-mono text-[#08CEFD] uppercase tracking-widest">
                ШАГ 4
              </span>
              <h3 className="text-2xl font-display font-black text-white mt-1 uppercase">
                КОНТАКТЫ
              </h3>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-[10px] uppercase font-mono text-text-muted mb-1">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  placeholder="Иван"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-background-soft border border-white/10 text-white placeholder:text-text-muted text-sm focus:border-neon-pink focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-mono text-text-muted mb-1">
                  Телефон для подтверждения *
                </label>
                <input
                  type="tel"
                  placeholder="+7 (999) 000-00-00"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-background-soft border border-white/10 text-white placeholder:text-text-muted text-sm font-mono focus:border-[#08CEFD] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-mono text-text-muted mb-1">
                  Комментарий (необязательно)
                </label>
                <input
                  type="text"
                  placeholder="Пожелания к столику"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full p-3 rounded-xl bg-background-soft border border-white/10 text-white placeholder:text-text-muted text-xs focus:border-white/20 focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* Error message */}
        {error && (
          <div className="mt-3 p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
            {error}
          </div>
        )}

        {/* Bottom Step Actions */}
        <div className="pt-6 border-t border-white/10 mt-6">
          <NeonButton
            variant="primary"
            size="lg"
            fullWidth
            onClick={handleNext}
            disabled={isLoading}
            icon={step === 4 ? <Check className="w-5 h-5 ml-1" /> : <ArrowRight className="w-5 h-5 ml-1" />}
          >
            {isLoading
              ? 'Бронирование...'
              : step === 4
              ? 'Подтвердить бронь'
              : 'Продолжить →'}
          </NeonButton>
        </div>
      </div>
    </div>
  );
};
