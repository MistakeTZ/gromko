import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Phone, Calendar } from 'lucide-react';
import { NeonButton } from '../common/NeonButton';
import { VENUE_INFO } from '../../data/mockData';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'АКЦИИ', href: '#schedule' },
    { label: 'МЕНЮ', href: '#menu' },
    { label: 'БАР', href: '#bar' },
    { label: 'ФОТО', href: '#gallery' },
    { label: 'КОНТАКТЫ', href: '#contacts' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 h-20 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#050507]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="ГРОМКО Главная"
          >
            <img
              src={VENUE_INFO.logoUrl}
              alt="Лого #ГРОМКО"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-xs lg:text-sm font-semibold tracking-widest text-text-secondary hover:text-white transition-colors duration-200 uppercase relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-neon-pink to-neon-cyan transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
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
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-neon-pink transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu Drawer */}
      <div
        className={`fixed inset-0 z-30 bg-[#050507]/95 backdrop-blur-2xl transition-all duration-300 md:hidden flex flex-col justify-between pt-24 pb-8 px-6 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6">
          <div className="text-xs uppercase tracking-widest text-text-muted font-mono mb-2">
            Навигация
          </div>
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-left font-display font-bold text-2xl text-white hover:text-neon-pink transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
          <div className="text-sm text-text-secondary">
            <div className="text-white font-medium">{VENUE_INFO.fullAddress}</div>
            <div className="text-xs text-text-muted mt-0.5">{VENUE_INFO.workingHours}</div>
          </div>

          <a
            href={`tel:${VENUE_INFO.phoneRaw}`}
            className="flex items-center gap-2 text-sm text-[#08CEFD] font-semibold"
          >
            <Phone className="w-4 h-4" />
            {VENUE_INFO.phone}
          </a>

          <NeonButton
            variant="primary"
            size="lg"
            fullWidth
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
          >
            Забронировать стол
          </NeonButton>
        </div>
      </div>
    </>
  );
};
