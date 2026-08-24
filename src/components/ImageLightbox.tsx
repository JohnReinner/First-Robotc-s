import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { TeamGalleryItem } from '../types';

interface ImageLightboxProps {
  isOpen: boolean;
  images: (TeamGalleryItem | { src: string; caption: string; credit: string; alt: string })[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Focus close button on open
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Lock body scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Visualizador acessível de fotografia"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center bg-[#052d6e]/40 border border-white/20 rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with counter & close button */}
        <div className="w-full flex items-center justify-between px-4 py-3 bg-[#031b46] border-b border-white/10 text-white text-sm">
          <span className="font-semibold text-xs tracking-wider uppercase">
            Foto {currentIndex + 1} de {images.length}
          </span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Fechar visualizador de fotografia (tecla Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main image container */}
        <div className="relative w-full flex-1 flex items-center justify-center bg-black/40 min-h-[300px] sm:min-h-[450px]">
          <img
            src={currentImage.src}
            alt={currentImage.alt || currentImage.caption}
            className="max-h-[60vh] max-w-full object-contain"
            loading="eager"
          />

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={onPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-[#003da5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Fotografia anterior (seta esquerda)"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={onNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-[#003da5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Próxima fotografia (seta direita)"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Caption and attribution footer */}
        <div className="w-full px-5 py-3.5 bg-[#031b46] border-t border-white/10 text-white">
          <p className="text-sm font-medium text-gray-100">{currentImage.caption}</p>
          {currentImage.credit && (
            <div className="flex items-center gap-1.5 mt-1.5 text-xs text-gray-400">
              <Info className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Crédito & Autorização: {currentImage.credit}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
