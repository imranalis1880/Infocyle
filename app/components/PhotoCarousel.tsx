/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

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
    if (isPaused || totalSlides <= 1) return;

    const timer = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isPaused, autoPlayInterval, nextSlide, totalSlides]);

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
    <div
      className="w-full max-w-5xl mx-auto mt-14 relative group select-none text-left"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Carousel Container Card styled to match website theme */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
        
        {/* Slides Track */}
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              className="w-full flex-shrink-0 flex flex-col md:flex-row items-stretch"
              aria-hidden={idx !== currentIndex}
            >
              {/* Left/Top: Unobstructed Image Frame */}
              <div className="w-full md:w-1/2 p-4 sm:p-6 flex items-center justify-center bg-slate-50/80 border-b md:border-b-0 md:border-r border-slate-200/80 relative overflow-hidden">
                <div className="relative w-full h-[320px] sm:h-[400px] md:h-[450px] rounded-2xl overflow-hidden flex items-center justify-center bg-slate-100/60 shadow-inner">
                  {/* Ambient blur glow */}
                  <img
                    src={slide.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover blur-xl opacity-20 scale-125 pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Main Image with 100% full visibility */}
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="relative z-10 w-full h-full object-contain object-center rounded-xl drop-shadow-sm transition-transform duration-500 ease-out"
                    loading={idx === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              </div>

              {/* Right/Bottom: Consistent Info & Text Details Panel */}
              <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-between bg-white">
                <div className="space-y-4">
                  {/* Top Badge & Counter */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-teal-50 text-teal-700 border border-teal-100 shadow-sm">
                      <Sparkles className="w-3.5 h-3.5 text-teal-500" />
                      <span>{slide.badge}</span>
                    </div>

                    <div className="px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold tracking-wider text-slate-600 border border-slate-200">
                      <span className="text-teal-600 font-bold">0{currentIndex + 1}</span> / 0{totalSlides}
                    </div>
                  </div>

                  {/* Standardized Title (Same size across all slides) */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight leading-snug">
                    {slide.title}
                  </h3>

                  {/* Standardized Description (Same size across all slides) */}
                  <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
                    {slide.description}
                  </p>

                  {/* Standardized Highlight Cards (Same size across all slides) */}
                  {slide.highlights && slide.highlights.length > 0 && (
                    <div className="space-y-2.5 pt-2">
                      {slide.highlights.map((h, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2.5 p-3 rounded-xl bg-slate-50 hover:bg-teal-50/40 border border-slate-200/80 transition-colors"
                        >
                          <span className="text-xs font-bold text-teal-700 uppercase tracking-wider whitespace-nowrap min-w-[95px]">
                            {h.label}:
                          </span>
                          <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-snug">
                            {h.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer Controls: Prev/Next & Dots */}
                <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-100">
                  {/* Pagination Dots */}
                  <div className="flex items-center gap-2">
                    {slides.map((s, index) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                          currentIndex === index
                            ? 'w-7 sm:w-8 bg-teal-500 shadow-md shadow-teal-500/30'
                            : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={prevSlide}
                      aria-label="Previous slide"
                      className="w-10 h-10 rounded-full bg-slate-50 hover:bg-teal-50 text-slate-600 hover:text-teal-700 border border-slate-200 hover:border-teal-200 flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                      type="button"
                      onClick={nextSlide}
                      aria-label="Next slide"
                      className="w-10 h-10 rounded-full bg-slate-50 hover:bg-teal-50 text-slate-600 hover:text-teal-700 border border-slate-200 hover:border-teal-200 flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
