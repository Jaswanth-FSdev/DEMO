import React, { useState, useEffect } from 'react';
import { MessageCircle, Calendar } from 'lucide-react';
import { businessData } from '../data/restaurantData';
import '../styles/floatingActions.css';

export default function FloatingActions({ onOpenReservation }) {
  const [isVisible, setIsVisible] = useState(false);
  const { contact } = businessData;

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappPrefillText)}`;

  return (
    <div className="floating-actions-container animate-fade-in">
      <button
        className="floating-btn floating-reserve"
        onClick={onOpenReservation}
        aria-label="Book a table"
      >
        <Calendar size={18} />
        <span>Book Table</span>
      </button>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-whatsapp"
        aria-label="Chat with Coastal Spice on WhatsApp"
        style={{ position: 'relative' }}
      >
        <span className="pulse-bubble" />
        <MessageCircle size={20} />
        <span>Chat on WhatsApp</span>
      </a>
    </div>
  );
}
