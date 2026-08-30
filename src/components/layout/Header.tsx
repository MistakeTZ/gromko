import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Phone, Calendar, MapPin, Clock } from 'lucide-react';
import { NeonButton } from '../common/NeonButton';
import { VENUE_INFO } from '../../data';
import { useRouter } from '../../context/RouterContext';

interface HeaderProps {
  onOpenBooking: () => void;
  onMobileMenuToggle?: (isOpen: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onMobileMenuToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentRoute, currentTab, navigate } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and notify parent when mobile menu opens/closes
  useEffect(() => {
    onMobileMenuToggle?.(mobileMenuOpen);

    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalTouchAction = document.body.style.touchAction;
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      document.documentElement.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.touchAction = originalTouchAction;
        document.documentElement.style.overflow = '';
      };
    }
  }, [mobileMenuOpen, onMobileMenuToggle]);

  const handleNav = (action: 'home' | 'schedule' | 'kitchen' | 'bar' | 'gallery' | 'contacts') => {
    setMobileMenuOpen(false);
    switch (action) {
      case 'home':
        navigate('/');
        break;
      case 'schedule':
        navigate('/', { scrollTo: 'schedule' });
        break;
      case 'kitchen':
        navigate('/menu', { tab: 'kitchen' });
        break;
      case 'bar':
        navigate('/menu', { tab: 'bar' });
        break;
      case 'gallery':
        navigate('/', { scrollTo: 'gallery' });
        break;
      case 'contacts':
        navigate('/', { scrollTo: 'contacts' });
        break;
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 h-20 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#050507]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav('home')}
            className="group flex items-center gap-2.5 focus:outline-none cursor-pointer"
            aria-label="ГРОМКО Главная"
          >
            <img
              src={VENUE_INFO.logoUrl}
              alt="Лого #ГРОМКО"
              width="160"
              height="40"
              decoding="async"
              className="h-8 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNav('schedule')}
              className="text-xs lg:text-sm font-semibold tracking-widest text-text-secondary hover:text-white transition-colors duration-200 uppercase relative group py-1"
            >
              АКЦИИ
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-neon-pink to-neon-cyan transition-all duration-300 group-hover:w-full" />
            </button>

            <button
              onClick={() => handleNav('kitchen')}
              className={`text-xs lg:text-sm font-semibold tracking-widest transition-colors duration-200 uppercase relative group py-1 ${
                currentRoute === '/menu' && currentTab === 'kitchen'
                  ? 'text-neon-pink font-bold'
                  : 'text-text-secondary hover:text-white'
              }`}
            >
              МЕНЮ
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-neon-pink transition-all duration-300 ${
                  currentRoute === '/menu' && currentTab === 'kitchen' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </button>

            <button
              onClick={() => handleNav('bar')}
              className={`text-xs lg:text-sm font-semibold tracking-widest transition-colors duration-200 uppercase relative group py-1 ${
                currentRoute === '/menu' && currentTab === 'bar'
                  ? 'text-[#08CEFD] font-bold'
                  : 'text-text-secondary hover:text-white'
              }`}
            >
              БАР
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#08CEFD] transition-all duration-300 ${
                  currentRoute === '/menu' && currentTab === 'bar' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </button>

            <button
              onClick={() => handleNav('gallery')}
              className="text-xs lg:text-sm font-semibold tracking-widest text-text-secondary hover:text-white transition-colors duration-200 uppercase relative group py-1"
            >
              ФОТО
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-neon-pink to-neon-cyan transition-all duration-300 group-hover:w-full" />
            </button>

            <button
              onClick={() => handleNav('contacts')}
              className="text-xs lg:text-sm font-semibold tracking-widest text-text-secondary hover:text-white transition-colors duration-200 uppercase relative group py-1"
            >
              КОНТАКТЫ
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-neon-pink to-neon-cyan transition-all duration-300 group-hover:w-full" />
            </button>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <NeonButton
              variant="primary"
              size="sm"
              onClick={onOpenBooking}
              icon={<Calendar className="w-4 h-4 ml-1" />}
            >
              Забронировать
            </NeonButton>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 text-white hover:text-neon-pink transition-colors focus:outline-none cursor-pointer rounded-xl bg-white/5 border border-white/10"
              aria-label="Открыть меню"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-[#050507]/98 backdrop-blur-3xl transition-all duration-300 md:hidden flex flex-col justify-between p-6 pb-8 overflow-y-auto overscroll-contain ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ touchAction: 'pan-y' }}
      >
        {/* Mobile Drawer Top Bar with Logo & Prominent Close Button */}
        <div className="flex items-center justify-between pb-5 border-b border-white/10">
          <button
            onClick={() => handleNav('home')}
            className="flex items-center focus:outline-none cursor-pointer"
            aria-label="ГРОМКО Главная"
          >
            <img
              src={VENUE_INFO.logoUrl}
              alt="Лого #ГРОМКО"
              width="140"
              height="35"
              decoding="async"
              className="h-8 w-auto object-contain"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </button>

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2.5 text-white hover:text-neon-pink hover:bg-white/10 rounded-xl border border-white/15 transition-all focus:outline-none cursor-pointer flex items-center gap-1.5"
            aria-label="Закрыть меню"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Mobile Drawer Navigation Links */}
        <div className="flex flex-col gap-5 py-6">
          <div className="text-xs uppercase tracking-widest text-[#08CEFD] font-mono font-bold mb-1">
            Навигация
          </div>

          <button
            onClick={() => handleNav('schedule')}
            className="text-left font-display font-bold text-2xl text-white hover:text-neon-pink transition-colors py-1"
          >
            АКЦИИ
          </button>

          <button
            onClick={() => handleNav('kitchen')}
            className={`text-left font-display font-bold text-2xl transition-colors py-1 ${
              currentRoute === '/menu' && currentTab === 'kitchen' ? 'text-neon-pink' : 'text-white hover:text-neon-pink'
            }`}
          >
            МЕНЮ
          </button>

          <button
            onClick={() => handleNav('bar')}
            className={`text-left font-display font-bold text-2xl transition-colors py-1 ${
              currentRoute === '/menu' && currentTab === 'bar' ? 'text-[#08CEFD]' : 'text-white hover:text-[#08CEFD]'
            }`}
          >
            БАР
          </button>

          <button
            onClick={() => handleNav('gallery')}
            className="text-left font-display font-bold text-2xl text-white hover:text-neon-pink transition-colors py-1"
          >
            ФОТО & АТМОСФЕРА
          </button>

          <button
            onClick={() => handleNav('contacts')}
            className="text-left font-display font-bold text-2xl text-white hover:text-neon-pink transition-colors py-1"
          >
            ЛОКАЦИЯ & КОНТАКТЫ
          </button>
        </div>

        {/* Mobile Drawer Bottom Info */}
        <div className="flex flex-col gap-4 pt-5 border-t border-white/10 mt-auto">
          {/* Address & Hours Card */}
          <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2.5">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-neon-pink flex-shrink-0 mt-0.5" />
              <span className="text-white text-xs sm:text-sm font-medium leading-snug">
                {VENUE_INFO.fullAddress}
              </span>
            </div>

            <div className="flex items-start gap-2.5 pt-2 border-t border-white/5">
              <Clock className="w-4 h-4 text-[#08CEFD] flex-shrink-0 mt-0.5" />
              <div className="text-xs text-text-secondary leading-snug space-y-0.5 font-mono">
                <div>ПН–ЧТ, ВС: <strong className="text-white font-semibold">19:00 — 04:00</strong></div>
                <div>ПТ–СБ: <strong className="text-neon-cyan font-semibold">19:00 — 06:00</strong></div>
              </div>
            </div>
          </div>

          <a
            href={`tel:${VENUE_INFO.phoneRaw}`}
            className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-white/[0.06] hover:bg-white/10 border border-white/10 text-white hover:text-neon-pink font-bold font-display text-sm sm:text-base transition-colors"
          >
            <Phone className="w-4 h-4 text-neon-pink" />
            <span>{VENUE_INFO.phone}</span>
          </a>

          <NeonButton
            variant="primary"
            size="lg"
            fullWidth
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="py-3.5 text-sm sm:text-base font-black shadow-neon-gradient"
          >
            Забронировать стол
          </NeonButton>
        </div>
      </div>
    </>
  );
};
