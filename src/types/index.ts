export interface WeekDaySchedule {
  id: string;
  dayIndex: number;
  shortName: string;
  fullName: string;
  workingHours: string;
  tagline?: string;
  details?: string[];
  badge?: string;
  isSpecial?: boolean;
  image?: string;
  hasPromo: boolean;
}

export type FoodCategory =
  | 'all'
  | 'snacks'
  | 'salads'
  | 'hot'
  | 'pastas'
  | 'company'
  | 'sides'
  | 'desserts';

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  weight?: string;
  category: 'snacks' | 'salads' | 'hot' | 'pastas' | 'company' | 'sides' | 'desserts';
  image: string;
  isHit?: boolean;
  isNew?: boolean;
}

export type BarCategory =
  | 'all'
  | 'whiskey'
  | 'spirits'
  | 'liqueurs'
  | 'wines'
  | 'beer'
  | 'tea_coffee'
  | 'soft_drinks';

export interface BarItem {
  id: string;
  name: string;
  description?: string;
  price: number; // primary price (e.g. shot or glass or full)
  priceFull?: number; // bottle / 1L price if applicable
  volume: string; // e.g. "40 мл" or "700 / 40 мл"
  category: 'whiskey' | 'spirits' | 'liqueurs' | 'wines' | 'beer' | 'tea_coffee' | 'soft_drinks';
  isSignature?: boolean;
  image?: string;
  country?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  url: string;
  alt: string;
  span?: 'col-span-2 row-span-2' | 'col-span-1 row-span-2' | 'col-span-1 row-span-1' | 'col-span-2 row-span-1';
}

export interface BookingFormData {
  date: string;
  time: string;
  guests: number;
  name: string;
  phone: string;
  comment?: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
  isPopular?: boolean;
}
