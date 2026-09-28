import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/gallery.css';

export default function LightboxModal({ images, activeIndex, onClose, onNavigate }) {
  if (activeIndex === null || !images || !images[activeIndex]) return null;

  const currentImage = images[activeIndex];

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onNavigate((activeIndex - 1 + images.length) % images.length);
    if (e.key === 'ArrowRight') onNavigate((activeIndex + 1) % images.length);
  }, [activeIndex, images.length, onClose, onNavigate]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="lightbox-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightbox-content-box" onClick={(e) => e.stopPropagation()}>
        <button
          className="lightbox-close-btn"
          onClick={onClose}
          aria-label="Close image lightbox"
        >
          <X size={32} />
        </button>

        <div className="lightbox-img-wrapper">
          <button
            className="lightbox-nav-btn lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((activeIndex - 1 + images.length) % images.length);
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          <img
            src={currentImage.image}
            alt={currentImage.title}
            className="lightbox-img"
          />

          <button
            className="lightbox-nav-btn lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((activeIndex + 1) % images.length);
            }}
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        <div className="lightbox-caption">
          <h4>{currentImage.title}</h4>
          <p>{currentImage.caption}</p>
        </div>
      </div>
    </div>
  );
}
