import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';
import { WEEK_SCHEDULE, MENU_ITEMS, BAR_ITEMS, GALLERY_PHOTOS, TIME_SLOTS, VENUE_INFO } from '../src/data/mockData.ts';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// In-memory bookings store
interface BookingRecord {
  id: string;
  createdAt: string;
  date: string;
  time: string;
  guests: number;
  name: string;
  phone: string;
  comment?: string;
  status: 'confirmed' | 'pending';
}

const bookings: BookingRecord[] = [];

// API Endpoints
app.get('/api/info', (_req: Request, res: Response) => {
  res.json({ success: true, data: VENUE_INFO });
});

app.get('/api/promotions', (_req: Request, res: Response) => {
  res.json({ success: true, data: WEEK_SCHEDULE });
});

app.get('/api/menu', (_req: Request, res: Response) => {
  res.json({ success: true, data: MENU_ITEMS });
});

app.get('/api/bar', (_req: Request, res: Response) => {
  res.json({ success: true, data: BAR_ITEMS });
});

app.get('/api/gallery', (_req: Request, res: Response) => {
  res.json({ success: true, data: GALLERY_PHOTOS });
});

app.get('/api/slots', (req: Request, res: Response) => {
  const { date } = req.query;
  // Simulating slightly different availability for different dates
  const dateStr = typeof date === 'string' ? date : new Date().toISOString().split('T')[0];
  const dayHash = dateStr.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);

  const slotsWithDynamicStatus = TIME_SLOTS.map((slot, index) => {
    // dynamically make 1-2 slots booked based on date hash
    const isBooked = (dayHash + index) % 6 === 0;
    return {
      ...slot,
      available: slot.available && !isBooked,
    };
  });

  res.json({ success: true, date: dateStr, data: slotsWithDynamicStatus });
});

app.post('/api/booking', (req: Request, res: Response) => {
  const { date, time, guests, name, phone, comment } = req.body;

  if (!date || !time || !name || !phone) {
    return res.status(400).json({
      success: false,
      message: 'Пожалуйста, заполните все обязательные поля (дата, время, имя, телефон).',
    });
  }

  const newBooking: BookingRecord = {
    id: 'GROMKO-' + Math.random().toString(36).substring(2, 8).toUpperCase(),
    createdAt: new Date().toISOString(),
    date,
    time,
    guests: Number(guests) || 2,
    name,
    phone,
    comment,
    status: 'confirmed',
  };

  bookings.push(newBooking);
  console.log('🎉 Новая бронь получена:', newBooking);

  return res.status(201).json({
    success: true,
    message: 'Бронирование успешно подтверждено!',
    data: newBooking,
  });
});

app.listen(PORT, () => {
  console.log(`⚡ #ГРОМКО API Server is running on http://localhost:${PORT}`);
});
