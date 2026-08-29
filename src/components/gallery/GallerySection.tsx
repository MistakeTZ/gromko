import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { GALLERY_PHOTOS } from '../../data/mockData';
import { GalleryPhoto } from '../../types';
import { Lightbox } from './Lightbox';

export const GallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  // Group photos for collage structure
  const heroPhoto = GALLERY_PHOTOS[0] || GALLERY_PHOTOS[0];
  const sidePhoto1 = GALLERY_PHOTOS[1] || GALLERY_PHOTOS[0];
  const sidePhoto2 = GALLERY_PHOTOS[2] || GALLERY_PHOTOS[0];
  const widePhoto = GALLERY_PHOTOS[4] || GALLERY_PHOTOS[0];
  const gridPhotos = GALLERY_PHOTOS.slice(3, 9).filter((p) => p.id !== widePhoto.id);

  return (
    <section id="gallery" className="relative py-28 lg:py-40 bg-[#050507] overflow-hidden">
      {/* Subtle Ambient Stage Light */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-neon-pink/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-neon-cyan/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Minimal & Bold */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-white/10 gap-6">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#08CEFD] mb-3">
              ФОТОХРОНИКА #ГРОМКО
            </div>
            <h2
              className="font-display font-black text-white tracking-tight uppercase leading-[0.9]"
              style={{ fontSize: 'clamp(40px, 7vw, 84px)' }}
            >
              АТМОСФЕРА <br />
              <span className="text-neon-gradient">В КАДРЕ</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-text-secondary max-w-md leading-relaxed">
            Живые люди, цветной сценический свет, вокал и вечеринки до утра. Никаких постановочных стоковых фото.
          </p>
        </div>

        {/* ================= MONUMENTAL PHOTO COLLAGE ================= */}
        <div className="mt-14 space-y-6 sm:space-y-8">
          {/* Row 1: Massive 60% Hero Photo + 2 Stacked Photos */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* 60% Dominant Hero Photo */}
            <div
              onClick={() => setSelectedPhoto(heroPhoto)}
              className="lg:col-span-7 h-[420px] sm:h-[560px] rounded-3xl overflow-hidden relative group cursor-pointer border border-white/10 shadow-2xl"
            >
              <img
                src={heroPhoto.url}
                alt={heroPhoto.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              {/* Overlaid Typographic Stamp */}
              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                <div>
                  <span className="font-display font-black text-4xl sm:text-6xl text-white/90 tracking-tighter uppercase drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
                    SING.
                  </span>
                  <div className="text-xs font-mono text-white/80 mt-1 uppercase tracking-wider">
                    {heroPhoto.title}
                  </div>
                </div>

                <div className="p-3 rounded-full bg-black/60 border border-white/20 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-5 h-5 text-neon-pink" />
                </div>
              </div>
            </div>

            {/* 40% Right Side Stack: 2 Large Photos */}
            <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
              <div
                onClick={() => setSelectedPhoto(sidePhoto1)}
                className="h-[200px] sm:h-[264px] rounded-3xl overflow-hidden relative group cursor-pointer border border-white/10 shadow-2xl"
              >
                <img
                  src={sidePhoto1.url}
                  alt={sidePhoto1.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-5 left-6">
                  <span className="font-display font-black text-2xl sm:text-3xl text-white/90 tracking-tighter uppercase">
                    DANCE.
                  </span>
                </div>
              </div>

              <div
                onClick={() => setSelectedPhoto(sidePhoto2)}
                className="h-[200px] sm:h-[264px] rounded-3xl overflow-hidden relative group cursor-pointer border border-white/10 shadow-2xl"
              >
                <img
                  src={sidePhoto2.url}
                  alt={sidePhoto2.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-5 left-6">
                  <span className="font-display font-black text-2xl sm:text-3xl text-white/90 tracking-tighter uppercase">
                    VIBE.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Full Width Panoramic Photo */}
          <div
            onClick={() => setSelectedPhoto(widePhoto)}
            className="w-full h-[320px] sm:h-[460px] rounded-3xl overflow-hidden relative group cursor-pointer border border-white/10 shadow-2xl"
          >
            <img
              src={widePhoto.url}
              alt={widePhoto.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-black/80" />

            <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#08CEFD]">
                  LIVE ON STAGE
                </span>
                <span className="text-xs font-mono text-text-muted">
                  19:00 — 06:00
                </span>
              </div>

              <div>
                <span className="font-display font-black text-3xl sm:text-6xl lg:text-7xl text-white tracking-tighter uppercase leading-none drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
                  DRINK. REPEAT.
                </span>
                <div className="mt-2 text-xs sm:text-sm text-white/80 font-mono">
                  {widePhoto.title}
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Trio of Vivid Authentic Moments */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {gridPhotos.slice(0, 3).map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="h-[280px] sm:h-[340px] rounded-3xl overflow-hidden relative group cursor-pointer border border-white/10 shadow-xl"
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="text-xs font-mono text-neon-pink font-bold uppercase">
                    {photo.category}
                  </div>
                  <h4 className="font-display font-bold text-base text-white mt-0.5">
                    {photo.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <Lightbox
          photo={selectedPhoto}
          photos={GALLERY_PHOTOS}
          onSelectPhoto={setSelectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </section>
  );
};
