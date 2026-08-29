import React from 'react';
import { HeroSection } from '../components/hero/HeroSection';
import { WeeklySchedule } from '../components/schedule/WeeklySchedule';
import { AtmosphereBanner } from '../components/atmosphere/AtmosphereBanner';
import { GallerySection } from '../components/gallery/GallerySection';
import { KitchenMenu } from '../components/menu/KitchenMenu';
import { BarCard } from '../components/menu/BarCard';
import { BookingSection } from '../components/booking/BookingSection';
import { ContactsSection } from '../components/contacts/ContactsSection';
import { Marquee } from '../components/common/Marquee';
import { useRouter } from '../context/RouterContext';

interface HomePageProps {
  onOpenBooking: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking }) => {
  const { navigate } = useRouter();

  const handleOpenMenu = (tab: 'kitchen' | 'bar' = 'kitchen') => {
    navigate('/menu', { tab });
  };

  return (
    <main className="flex-1">
      {/* 1. Hero Section */}
      <HeroSection onOpenBooking={onOpenBooking} />

      {/* 2. Neon Marquee Ticker */}
      <Marquee />

      {/* 3. This Week in #GROMKO (Schedule & Offers) */}
      <WeeklySchedule onOpenBooking={onOpenBooking} />

      {/* 4. Atmosphere Experience Showcase */}
      <AtmosphereBanner />

      {/* 5. Photo Gallery */}
      <GallerySection />

      {/* 6. Neon Marquee Ticker */}
      <Marquee />

      {/* 7. Kitchen Menu Section with Link to Menu Page */}
      <KitchenMenu onOpenFullMenu={handleOpenMenu} />

      {/* 8. Bar Card Section with Link to Menu Page */}
      <BarCard onOpenFullMenu={handleOpenMenu} />

      {/* 9. Booking Experience */}
      <BookingSection />

      {/* 10. Location & Contacts Section */}
      <ContactsSection />
    </main>
  );
};
