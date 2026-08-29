import React, { useState } from 'react';
import { Navigation, ExternalLink, ZoomIn, ZoomOut, Layers } from 'lucide-react';
import { VENUE_INFO } from '../../data/mockData';

interface DarkMapProps {
  className?: string;
  height?: string;
}

export const DarkMap: React.FC<DarkMapProps> = ({
  className = '',
  height = 'h-[460px]',
}) => {
  const [zoom, setZoom] = useState(16);
  const [mapMode, setMapMode] = useState<'stylized' | 'interactive'>('stylized');

  const lat = VENUE_INFO.coordinates.lat;
  const lng = VENUE_INFO.coordinates.lng;

  const yandexDirectUrl = `https://yandex.ru/maps/?rtext=~${lat}%2C${lng}&rtt=auto`;
  const yandexSearchUrl = `https://yandex.ru/maps/?text=${encodeURIComponent(VENUE_INFO.fullAddress)}`;
  
  // Yandex Maps embed widget URL for Ivanovo, 10 Avgusta 43
  const yandexEmbedUrl = `https://yandex.ru/map-widget/v1/?ll=${lng}%2C${lat}&z=${zoom}&pt=${lng}%2C${lat}%2Cpm2rdm~${lng}%2C${lat}%2C#ГРОМКО`;

  return (
    <div
      className={`relative w-full ${height} rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#09090D] group ${className}`}
    >
      {/* Interactive Yandex Map Layer with Dark Neon Filter */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          title="Яндекс Карта — #ГРОМКО Иваново"
          src={yandexEmbedUrl}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          className="w-full h-full transition-all duration-700"
          style={{
            filter:
              mapMode === 'stylized'
                ? 'invert(93%) hue-rotate(180deg) brightness(85%) contrast(125%) saturate(150%)'
                : 'none',
          }}
        />

        {/* Ambient Dark Neon Glow Overlay for Stylized Mode */}
        {mapMode === 'stylized' && (
          <>
            <div className="absolute inset-0 bg-[#050507]/20 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-pink/15 rounded-full blur-[100px] pointer-events-none" />
          </>
        )}
      </div>

      {/* Center Marker Pin Badge (Custom Neon Marker) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none z-10">
        <div className="absolute w-16 h-16 rounded-full bg-neon-pink/25 animate-ping opacity-60 pointer-events-none" />

        <div className="mt-1 px-3 py-1 rounded-xl bg-black/90 border border-white/20 backdrop-blur-md text-center shadow-xl">
          <div className="font-display font-black text-xs text-white">#ГРОМКО</div>
          <div className="text-[10px] text-neon-cyan font-mono">{VENUE_INFO.address}</div>
        </div>
      </div>

      {/* Top Controls Bar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between gap-2 pointer-events-none">
        <button
          type="button"
          onClick={() => setMapMode(mapMode === 'stylized' ? 'interactive' : 'stylized')}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface/90 border border-white/15 text-xs font-bold text-white hover:bg-white/10 transition-all shadow-lg backdrop-blur-md pointer-events-auto"
          title="Переключить тему карты"
        >
          <Layers className="w-3.5 h-3.5 text-[#08CEFD]" />
          <span>{mapMode === 'stylized' ? 'Dark Neon' : 'Стандарт'}</span>
        </button>

        <a
          href={yandexDirectUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-neon-pink to-[#08CEFD] text-white text-xs font-bold hover:shadow-[0_0_20px_rgba(255,0,172,0.5)] transition-all shadow-lg pointer-events-auto"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>Маршрут</span>
          <ExternalLink className="w-3 h-3 opacity-80" />
        </a>
      </div>

      {/* Bottom Right: Zoom Controls */}
      <div className="absolute bottom-16 right-4 z-20 flex flex-col gap-1.5">
        <button
          type="button"
          onClick={() => setZoom((prev) => Math.min(prev + 1, 19))}
          className="p-2 rounded-xl bg-surface/90 border border-white/15 text-white hover:bg-white/10 transition-all shadow-lg backdrop-blur-md"
          aria-label="Приблизить"
        >
          <ZoomIn className="w-4 h-4 text-[#08CEFD]" />
        </button>
        <button
          type="button"
          onClick={() => setZoom((prev) => Math.max(prev - 1, 12))}
          className="p-2 rounded-xl bg-surface/90 border border-white/15 text-white hover:bg-white/10 transition-all shadow-lg backdrop-blur-md"
          aria-label="Отдалить"
        >
          <ZoomOut className="w-4 h-4 text-[#08CEFD]" />
        </button>
      </div>

      {/* Bottom Overlay Bar */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
        <div className="px-3.5 py-1.5 rounded-xl bg-black/85 border border-white/10 backdrop-blur-md text-[11px] text-text-secondary pointer-events-auto max-w-[70%] truncate">
          <span className="text-white font-bold truncate">{VENUE_INFO.fullAddress}</span>
        </div>
        <a
          href={yandexSearchUrl}
          target="_blank"
          rel="noreferrer"
          className="px-3 py-1.5 rounded-xl bg-black/85 border border-white/10 backdrop-blur-md text-[11px] text-neon-cyan hover:text-white pointer-events-auto transition-colors flex-shrink-0"
        >
          Яндекс.Карты ↗
        </a>
      </div>
    </div>
  );
};
