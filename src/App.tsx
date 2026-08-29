import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { StickyMobileCTA } from './components/layout/StickyMobileCTA';
import { HeroSection } from './components/hero/HeroSection';
import { WeeklySchedule } from './components/schedule/WeeklySchedule';
import { AtmosphereBanner } from './components/atmosphere/AtmosphereBanner';
import { GallerySection } from './components/gallery/GallerySection';
import { KitchenMenu } from './components/menu/KitchenMenu';
import { BarCard } from './components/menu/BarCard';
import { BookingSection } from './components/booking/BookingSection';
import { ContactsSection } from './components/contacts/ContactsSection';
import { Marquee } from './components/common/Marquee';
import { FullMenuModal } from './components/menu/FullMenuModal';

export const App: React.FC = () => {
  const [fullMenuModalOpen, setFullMenuModalOpen] = useState(false);
  const [menuModalInitialTab, setMenuModalInitialTab] = useState<'kitchen' | 'bar'>('kitchen');

  const scrollToBooking = () => {
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
  };

  const handleOpenFullMenu = (tab: 'kitchen' | 'bar' = 'kitchen') => {
    setMenuModalInitialTab(tab);
    setFullMenuModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050507] text-text-primary flex flex-col font-sans selection:bg-neon-pink selection:text-white">
      {/* 1. Fixed Header */}
      <Header onOpenBooking={scrollToBooking} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection onOpenBooking={scrollToBooking} />

        {/* 3. Neon Marquee Ticker */}
        <Marquee />

        {/* 4. This Week in #GROMKO (Schedule & Offers) */}
        <WeeklySchedule onOpenBooking={scrollToBooking} />

        {/* 5. Atmosphere Experience Showcase */}
        <AtmosphereBanner />

        {/* 6. Photo Gallery (Desktop Masonry / Mobile Cinematic Carousel) */}
        <GallerySection />

        {/* 7. Neon Marquee Ticker */}
        <Marquee />

        {/* 8. Kitchen Menu */}
        <KitchenMenu onOpenFullMenu={handleOpenFullMenu} />

        {/* 9. Bar Card */}
        <BarCard onOpenFullMenu={handleOpenFullMenu} />

        {/* 10. Booking Experience (Desktop Slot Picker / Mobile 4-step Wizard) */}
        <BookingSection />

        {/* 11. Contacts & Dark Map */}
        <ContactsSection />
      </main>

      {/* 12. Minimalist Brand Footer */}
      <Footer />

      {/* 13. Sticky Mobile CTA Button */}
      <StickyMobileCTA onOpenBooking={scrollToBooking} />

      {/* 14. Full Menu & Bar Modal Catalog */}
      <FullMenuModal
        isOpen={fullMenuModalOpen}
        initialTab={menuModalInitialTab}
        onClose={() => setFullMenuModalOpen(false)}
      />
    </div>
  );
};

export default App;
