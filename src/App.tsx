import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { StickyMobileCTA } from './components/layout/StickyMobileCTA';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { RouterProvider, useRouter } from './context/RouterContext';

const MainLayout: React.FC = () => {
  const { currentRoute, navigate } = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToBooking = () => {
    if (currentRoute !== '/') {
      navigate('/', { scrollTo: 'booking-section' });
    } else {
      const el = document.getElementById('booking-section');
      if (el) {
        const headerOffset = 70;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#050507] text-text-primary flex flex-col font-sans selection:bg-neon-pink selection:text-white">
      {/* 1. Fixed Header with page router support */}
      <Header onOpenBooking={scrollToBooking} onMobileMenuToggle={setIsMobileMenuOpen} />

      {/* 2. Main View Switcher */}
      <div className="flex-1 flex flex-col">
        {currentRoute === '/' && <HomePage onOpenBooking={scrollToBooking} />}
        {currentRoute === '/menu' && <MenuPage onOpenBooking={scrollToBooking} />}
        {currentRoute === '/privacy' && <PrivacyPage />}
      </div>

      {/* 3. Minimalist Brand Footer */}
      <Footer />

      {/* 4. Sticky Mobile CTA Button (Visible only in location section and below, hidden during nav) */}
      <StickyMobileCTA onOpenBooking={scrollToBooking} isNavOpen={isMobileMenuOpen} />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <RouterProvider>
      <MainLayout />
    </RouterProvider>
  );
};

export default App;
