import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryPhoto } from '../../types';

interface LightboxProps {
  photo: GalleryPhoto | null;
  photos: GalleryPhoto[];
  onClose: () => void;
  onSelectPhoto: (photo: GalleryPhoto) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  photo,
  photos,
  onClose,
  onSelectPhoto,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!photo) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    if (photo) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [photo, photos]);

  if (!photo) return null;

  const currentIndex = photos.findIndex((p) => p.id === photo.id);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    onSelectPhoto(photos[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % photos.length;
    onSelectPhoto(photos[nextIndex]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8 select-none">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Закрыть"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 sm:left-8 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Предыдущее фото"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      {/* Next button */}
      <button
        onClick={handleNext}
        className="absolute right-4 sm:right-8 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Следующее фото"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      {/* Image Container */}
      <div className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center">
        <img
          src={photo.fullUrl || photo.url}
          alt={photo.alt}
          decoding="async"
          className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.9),0_0_30px_rgba(255,0,172,0.2)]"
        />

        {/* Caption & Counter */}
        <div className="mt-4 text-center">
          <div className="text-xs font-mono uppercase tracking-widest text-[#08CEFD]">
            {photo.category} · {currentIndex + 1} / {photos.length}
          </div>
          <div className="text-base sm:text-lg font-display font-bold text-white mt-1">
            {photo.title}
          </div>
        </div>
      </div>
    </div>
  );
};
