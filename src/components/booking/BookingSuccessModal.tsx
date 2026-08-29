import React from 'react';
import { Modal } from '../common/Modal';
import { CheckCircle2, Calendar, Clock, Users, MapPin } from 'lucide-react';
import { NeonButton } from '../common/NeonButton';
import { VENUE_INFO } from '../../data/mockData';

interface BookingSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingData: {
    bookingId?: string;
    date: string;
    time: string;
    guests: number;
    name: string;
    phone: string;
  } | null;
}

export const BookingSuccessModal: React.FC<BookingSuccessModalProps> = ({
  isOpen,
  onClose,
  bookingData,
}) => {
  if (!bookingData) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="СТОЛ ЗАБРОНИРОВАН!"
      subtitle="Ждем вас в караоке-баре #ГРОМКО"
      maxWidth="md"
    >
      <div className="text-center py-4">
        {/* Success Icon */}
        <div className="w-16 h-16 rounded-full bg-[#08CEFD]/15 border border-[#08CEFD] text-[#08CEFD] flex items-center justify-center mx-auto mb-4 shadow-[0_0_25px_rgba(8,206,253,0.4)]">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <p className="text-sm text-text-secondary">
          Спасибо, <span className="text-white font-bold">{bookingData.name}</span>! Мы зафиксировали вашу бронь. Администратор может связаться по номеру <span className="text-white font-mono">{bookingData.phone}</span> для подтверждения.
        </p>

        {/* Booking Details Card */}
        <div className="mt-6 p-4 rounded-2xl bg-surface border border-white/10 text-left space-y-2.5">
          {bookingData.bookingId && (
            <div className="flex items-center justify-between text-xs pb-2 border-b border-white/5">
              <span className="text-text-muted">Номер брони:</span>
              <span className="font-mono font-bold text-neon-pink">{bookingData.bookingId}</span>
            </div>
          )}

          <div className="flex items-center gap-3 text-xs sm:text-sm text-text-secondary">
            <Calendar className="w-4 h-4 text-[#08CEFD]" />
            <span>Дата: <strong className="text-white">{bookingData.date}</strong></span>
          </div>

          <div className="flex items-center gap-3 text-xs sm:text-sm text-text-secondary">
            <Clock className="w-4 h-4 text-[#08CEFD]" />
            <span>Время: <strong className="text-white">{bookingData.time}</strong></span>
          </div>

          <div className="flex items-center gap-3 text-xs sm:text-sm text-text-secondary">
            <Users className="w-4 h-4 text-[#08CEFD]" />
            <span>Количество гостей: <strong className="text-white">{bookingData.guests} чел.</strong></span>
          </div>

          <div className="flex items-center gap-3 text-xs sm:text-sm text-text-secondary pt-2 border-t border-white/5">
            <MapPin className="w-4 h-4 text-neon-pink" />
            <span>{VENUE_INFO.fullAddress}</span>
          </div>
        </div>

        <div className="mt-6">
          <NeonButton variant="primary" size="lg" fullWidth onClick={onClose}>
            Отлично, до встречи!
          </NeonButton>
        </div>
      </div>
    </Modal>
  );
};
