import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { NeonButton } from '../common/NeonButton';

interface StickyMobileCTAProps {
  onOpenBooking: () => void;
  isBookingOpen?: boolean;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({
  onOpenBooking,
  isBookingOpen = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky button only after scrolling past hero top part (e.g. > 200px)
      // and hide when near bottom or when booking is open
      const scrollY = window.scrollY;
      const isNearBookingSection = isElementInViewport('booking-section');
      setIsVisible(scrollY > 220 && !isNearBookingSection && !isBookingOpen);
    };

    const isElementInViewport = (id: string) => {
      const el = document.getElementById(id);
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.7 &&
        rect.bottom >= 0
      );
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isBookingOpen]);

  if (!isVisible || isBookingOpen) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-30 md:hidden transition-all duration-300 transform translate-y-0">
      <div className="p-1 rounded-2xl bg-gradient-to-r from-neon-pink/40 to-neon-cyan/40 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(255,0,172,0.35)]">
        <NeonButton
          variant="primary"
          size="lg"
          fullWidth
          onClick={onOpenBooking}
          icon={<Calendar className="w-5 h-5 ml-1.5" />}
          className="shadow-none py-3.5 text-sm font-black"
        >
          Забронировать стол
        </NeonButton>
      </div>
    </div>
  );
};
