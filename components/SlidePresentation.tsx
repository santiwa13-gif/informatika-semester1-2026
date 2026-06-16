'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface SlidePresentationProps {
  title: string;
  slides: React.ReactNode[];
}

export default function SlidePresentation({ title, slides }: SlidePresentationProps) {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const nextSlide = useCallback(() => {
    setCurrent((prev) => Math.min(total - 1, prev + 1));
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => Math.max(0, prev - 1));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const toggleFullscreen = () => {
    const el = document.getElementById('slide-container');
    if (!document.fullscreenElement) {
      el?.requestFullscreen().catch(err => {
        console.error("Error attempting to enable fullscreen:", err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  // Add event listener to detect fullscreen change and force re-render if needed (optional)
  useEffect(() => {
    const handleFullscreenChange = () => {
      // Optional: Handle style changes when in fullscreen
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <div id="slide-container" className="flex flex-col flex-1 h-full w-full bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden font-sans min-h-0">
      
      {/* Header bar */}
      <div className="bg-slate-50 border-b border-gray-200 px-6 py-4 flex items-center justify-between shrink-0">
        <h2 className="font-bold text-gray-800 tracking-tight text-lg truncate pr-4">{title}</h2>
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold text-slate-400 bg-slate-200 px-2 py-1 rounded-md">
            {current + 1} / {total}
          </span>
          <button 
            onClick={toggleFullscreen} 
            className="text-slate-500 hover:text-slate-800 transition-colors tooltip relative group hidden sm:block"
            title="Layar Penuh"
          >
            <Maximize2 size={18} />
          </button>
        </div>
      </div>

      {/* Slide Content Area */}
      <div className="flex-1 relative overflow-hidden bg-white group">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute inset-0 p-6 md:p-12 overflow-y-auto overflow-x-hidden flex flex-col"
          >
            {slides[current]}
          </motion.div>
        </AnimatePresence>

        {/* Hover Navigation Areas for desktop */}
        <div 
          onClick={prevSlide}
          className="absolute left-0 top-0 bottom-0 w-16 cursor-pointer opacity-0 hover:opacity-100 flex items-center justify-center bg-gradient-to-r from-black/5 to-transparent transition-opacity hidden md:flex"
        >
          {current > 0 && <ChevronLeft className="text-black/50" size={32} />}
        </div>
        <div 
          onClick={nextSlide}
          className="absolute right-0 top-0 bottom-0 w-16 cursor-pointer opacity-0 hover:opacity-100 flex items-center justify-center bg-gradient-to-l from-black/5 to-transparent transition-opacity hidden md:flex"
        >
          {current < total - 1 && <ChevronRight className="text-black/50" size={32} />}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1.5 w-full bg-slate-100 shrink-0">
        <div 
          className="h-full bg-blue-600 transition-all duration-300 ease-out"
          style={{ width: `${((current + 1) / total) * 100}%` }}
        />
      </div>

      {/* Control Footer */}
      <div className="bg-white border-t border-gray-100 p-4 shrink-0 flex items-center justify-between">
        <button 
          onClick={prevSlide}
          disabled={current === 0}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm bg-slate-100 text-slate-700 hover:bg-slate-200 disabled:opacity-50 disabled:hover:bg-slate-100 transition-colors"
        >
          <ChevronLeft size={18} />
          <span className="hidden sm:inline">Sebelumnya</span>
        </button>

        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-blue-600 scale-125' : 'bg-slate-200 hover:bg-slate-400'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button 
          onClick={nextSlide}
          disabled={current === total - 1}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600 transition-colors shadow-sm shadow-blue-600/20"
        >
          <span className="hidden sm:inline">Selanjutnya</span>
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
