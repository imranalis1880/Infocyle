'use client';

import React, { useState, useEffect } from 'react';

export interface EventPhoto {
  src: string;
  alt?: string;
  caption?: string;
  fit?: 'cover' | 'contain';
}

interface EventPhotoSwitcherProps {
  photos: EventPhoto[];
  intervalMs?: number;
}

export default function EventPhotoSwitcher({
  photos,
  intervalMs = 4500,
}: EventPhotoSwitcherProps) {
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    if (photos.length <= 1) return;
    const timer = setInterval(() => {
      setPhotoIndex((prev) => (prev + 1) % photos.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [photos.length, intervalMs]);

  if (photos.length === 0) return null;

  if (photos.length === 1) {
    const photo = photos[0];
    return (
      <div className="border-2 border-[#070d18] bg-black shadow-[4px_4px_0px_0px_#070d18] overflow-hidden group">
        <img
          src={photo.src}
          alt={photo.alt || 'Event Photo'}
          className="w-full h-64 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    );
  }

  return (
    <div>
      <div className="relative h-[340px] sm:h-[400px] bg-[#070d18] border-2 border-[#070d18] shadow-[4px_4px_0px_0px_#070d18] overflow-hidden group">
        {photos.map((photo, idx) => (
          <div
            key={photo.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              photoIndex === idx
                ? 'opacity-100 z-10 pointer-events-auto'
                : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={photo.src}
              alt={photo.alt || `Photo ${idx + 1}`}
              className={`w-full h-full ${
                photo.fit === 'contain'
                  ? 'object-contain object-center bg-[#070d18]'
                  : 'object-cover object-center'
              }`}
            />
          </div>
        ))}

        {/* Bottom Caption Overlay */}
        <div className="absolute bottom-0 inset-x-0 z-20 bg-gradient-to-t from-[#070d18] via-[#070d18]/90 to-transparent p-4 sm:p-5 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white border-t border-white/10">
          <div className="max-w-xs sm:max-w-sm">
            <p className="text-[11px] font-mono text-[#00f0ff] font-bold uppercase tracking-wider mb-1">
              Archived Photo 0{photoIndex + 1} / 0{photos.length}
            </p>
            {photos[photoIndex]?.caption && (
              <p className="text-xs sm:text-sm font-medium leading-snug text-slate-200">
                {photos[photoIndex].caption}
              </p>
            )}
          </div>

          {/* Interactive Switch Controls */}
          <div className="flex items-center gap-1.5 shrink-0">
            {photos.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setPhotoIndex(idx)}
                className={`w-7 h-7 text-[11px] font-mono font-bold border flex items-center justify-center transition-all ${
                  photoIndex === idx
                    ? 'bg-[#00f0ff] text-[#070d18] border-[#00f0ff]'
                    : 'bg-black/60 text-white/70 border-white/30 hover:bg-white/20'
                }`}
                aria-label={`View photo 0${idx + 1}`}
              >
                0{idx + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Subtext info under the photo */}
      <div className="mt-2.5 flex items-center justify-between text-xs font-mono font-bold text-[#475569]">
        <span>Gradually switching photos</span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping"></span>
          Verified Photographic Archive
        </span>
      </div>
    </div>
  );
}
