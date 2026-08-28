/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, ZoomIn, X } from 'lucide-react';

export interface SlideHighlight {
  label: string;
  value: string;
}

export interface CarouselSlide {
  id: string;
  image: string;
  badge: string;
  title: string;
  description: string;
  highlights?: SlideHighlight[];
}

export const defaultSlides: CarouselSlide[] = [
  {
    id: '1',
    image: '/images/infocyle-logo-launch.jpg',
    badge: 'Official Launch • Milestone',
    title: 'Infocyle Logo Launch & Unveiling',
    description: 'Unveiling our new identity and shared vision to build intelligent, scalable systems and architect tomorrow.',
    highlights: [
      { label: 'Launched By', value: "Shri. Manoj Moothedan — Hon'ble MLA, Perumbavoor" },
      { label: 'Presided By', value: 'Haji KM Pareeeth — Chairman, IGGIS' },
    ],
  },
  {
    id: '2',
    image: '/images/infocyle-launch.jpg',
    badge: 'Founding Team • Leadership',
    title: 'Leadership Driving Infocyle',
    description: 'The core leadership team at the official launch ceremony, leading with vision and building the future of systems.',
    highlights: [
      { label: 'Imran Ali S', value: 'Chief Executive Officer (CEO)' },
      { label: 'Sreerag PP', value: 'Chief Technology Officer (CTO)' },
      { label: 'Farhan A', value: 'Chief Operating Officer (COO)' },
    ],
  },
];

interface PhotoCarouselProps {
  slides?: CarouselSlide[];
  autoPlayInterval?: number;
}

export default function PhotoCarousel({
  slides = defaultSlides,
  autoPlayInterval = 6000,
}: PhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isEnlarged, setIsEnlarged] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPaused || isEnlarged || totalSlides <= 1) return;

    const timer = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isPaused, isEnlarged, autoPlayInterval, nextSlide, totalSlides]);

  // Keyboard navigation & escape to close lightbox
  useEffect(() => {
    if (!isEnlarged) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsEnlarged(false);
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isEnlarged, nextSlide, prevSlide]);

  // Touch swipe handling for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <>
      <div
        className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto mt-8 sm:mt-10 relative group select-none text-left"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Compact Carousel Container Card */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
          
          {/* Slides Track */}
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, idx) => (
              <div
                key={slide.id}
                className="w-full flex-shrink-0 flex flex-col"
                aria-hidden={idx !== currentIndex}
              >
                {/* Compact Image Frame with Click to Enlarge */}
                <div
                  onClick={() => setIsEnlarged(true)}
                  className="relative w-full h-[250px] sm:h-[290px] md:h-[330px] bg-slate-950 overflow-hidden flex items-center justify-center cursor-zoom-in group/image"
                  title="Click to enlarge photo"
                >
                  {/* Ambient background glow */}
                  <img
                    src={slide.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover blur-xl opacity-25 scale-110 pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Main Full-Visibility Image */}
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="relative z-10 w-full h-full object-contain object-center drop-shadow-sm transition-transform duration-500 ease-out group-hover/image:scale-[1.02] p-1"
                    loading={idx === 0 ? 'eager' : 'lazy'}
                  />

                  {/* Click to Enlarge Badge */}
                  <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white text-[11px] font-semibold backdrop-blur-md transition-all shadow-md border border-white/10 group-hover/image:scale-105">
                    <ZoomIn className="w-3.5 h-3.5 text-teal-400" />
                    <span className="hidden xs:inline">Click to enlarge</span>
                    <span className="xs:hidden">Enlarge</span>
                  </div>
                </div>

                {/* Compact Text & Details Section */}
                <div className="p-4 sm:p-5 bg-white space-y-3 border-t border-slate-100">
                  {/* Top Badge & Counter */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-teal-50 text-teal-700 border border-teal-100 shadow-sm">
                      <Sparkles className="w-3 h-3 text-teal-500" />
                      <span>{slide.badge}</span>
                    </div>

                    <div className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[11px] font-semibold tracking-wider text-slate-600 border border-slate-200">
                      <span className="text-teal-600 font-bold">0{currentIndex + 1}</span> / 0{totalSlides}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#0f172a] tracking-tight leading-snug">
                    {slide.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
                    {slide.description}
                  </p>

                  {/* Highlights */}
                  {slide.highlights && slide.highlights.length > 0 && (
                    <div className="space-y-1.5 pt-0.5">
                      {slide.highlights.map((h, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 p-2 sm:p-2.5 rounded-xl bg-slate-50 hover:bg-teal-50/40 border border-slate-200/80 transition-colors"
                        >
                          <span className="text-[11px] sm:text-xs font-bold text-teal-700 uppercase tracking-wider whitespace-normal sm:whitespace-nowrap min-w-[85px]">
                            {h.label}:
                          </span>
                          <span className="text-xs font-semibold text-slate-700 leading-snug">
                            {h.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Floating Prev Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            aria-label="Previous slide"
            className="absolute left-2.5 sm:left-3.5 top-[28%] sm:top-[30%] -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-teal-50 text-slate-700 hover:text-teal-700 border border-slate-200 hover:border-teal-300 shadow-lg backdrop-blur-md flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer z-20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Floating Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            aria-label="Next slide"
            className="absolute right-2.5 sm:right-3.5 top-[28%] sm:top-[30%] -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-teal-50 text-slate-700 hover:text-teal-700 border border-slate-200 hover:border-teal-300 shadow-lg backdrop-blur-md flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer z-20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Bottom Pagination Dots */}
          <div className="flex items-center justify-center gap-1.5 py-3 bg-slate-50/80 border-t border-slate-100">
            {slides.map((s, index) => (
              <button
                key={s.id}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === index
                    ? 'w-6 bg-teal-500 shadow-sm shadow-teal-500/50'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* Lightbox / Fullscreen Magnified Modal */}
      {isEnlarged && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-between p-3 sm:p-6 animate-in fade-in duration-200 overflow-y-auto"
          onClick={() => setIsEnlarged(false)}
        >
          {/* Top Header Bar with Prominent Close Button */}
          <div className="w-full max-w-4xl flex items-center justify-between z-50 text-white pt-1 sm:pt-2 px-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 sm:px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                {slides[currentIndex].badge}
              </span>
              <span className="text-slate-400 text-xs font-semibold">
                0{currentIndex + 1} / 0{totalSlides}
              </span>
            </div>

            {/* Top Close Button (Visible on all screen sizes) */}
            <button
              type="button"
              onClick={() => setIsEnlarged(false)}
              aria-label="Close enlarged view"
              className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/15 hover:bg-white/25 active:bg-white/30 text-white transition-all duration-150 border border-white/25 shadow-xl cursor-pointer flex items-center gap-1.5 text-xs sm:text-sm font-bold"
            >
              <X className="w-4 h-4 text-white" />
              <span>Close</span>
            </button>
          </div>

          {/* Centered Image with Floating Navigation */}
          <div
            className="relative flex-1 w-full max-w-3xl flex items-center justify-center my-2 sm:my-3"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Prev Button */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/70 hover:bg-black/90 active:scale-95 text-white border border-white/20 flex items-center justify-center transition-all duration-200 z-30 cursor-pointer shadow-2xl"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Enlarged Image */}
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="max-h-[65vh] sm:max-h-[75vh] max-w-full object-contain rounded-xl sm:rounded-2xl shadow-2xl drop-shadow-2xl select-none"
            />

            {/* Modal Next Button */}
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/70 hover:bg-black/90 active:scale-95 text-white border border-white/20 flex items-center justify-center transition-all duration-200 z-30 cursor-pointer shadow-2xl"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption Bar with Extra Mobile Close Button */}
          <div
            className="w-full max-w-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md rounded-2xl p-3 sm:p-4 text-center text-white z-50 space-y-2 shadow-2xl mb-1 sm:mb-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h4 className="font-bold text-xs sm:text-sm md:text-base text-slate-100">
                {slides[currentIndex].title}
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-300 line-clamp-2 mt-0.5">
                {slides[currentIndex].description}
              </p>
            </div>

            {/* Dedicated Easy-Tap Close Button on Mobile / Desktop */}
            <div className="pt-1">
              <button
                type="button"
                onClick={() => setIsEnlarged(false)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2 px-6 rounded-full bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-slate-200 hover:text-white border border-slate-700 text-xs font-bold transition-all shadow-md cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                <span>✕ Close Preview</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
