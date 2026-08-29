import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { NeonButton } from '../common/NeonButton';
import { useRouter } from '../../context/RouterContext';

interface StickyMobileCTAProps {
  onOpenBooking: () => void;
  isBookingOpen?: boolean;
  isNavOpen?: boolean;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({
  onOpenBooking,
  isBookingOpen = false,
  isNavOpen = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const { currentRoute } = useRouter();

  useEffect(() => {
    // Only active on home page
    if (currentRoute !== '/') {
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      // Show sticky button only when reached Location/Contacts section and below
      const contactsEl = document.getElementById('contacts');
      if (!contactsEl) {
        setIsVisible(false);
        return;
      }

      const rect = contactsEl.getBoundingClientRect();
      // When contacts section enters the viewport (top <= viewport height) and below
      const isAtOrBelowLocation = rect.top <= window.innerHeight * 0.85;

      setIsVisible(isAtOrBelowLocation && !isBookingOpen && !isNavOpen);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentRoute, isBookingOpen, isNavOpen]);

  if (!isVisible || isBookingOpen || isNavOpen || currentRoute !== '/') return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-30 md:hidden transition-all duration-300 transform translate-y-0 animate-fade-in">
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
