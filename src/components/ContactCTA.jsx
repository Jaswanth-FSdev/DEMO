import React from 'react';
import { MessageCircle, Phone, Calendar, Clock } from 'lucide-react';
import { businessData } from '../data/restaurantData';
import '../styles/contactCTA.css';

export default function ContactCTA({ onOpenReservation }) {
  const { contact } = businessData;

  const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappPrefillText)}`;

  return (
    <section className="section contact-cta-section" id="contact">
      <div className="container">
        <div className="contact-cta-box">
          <div className="contact-cta-badge">
            <MessageCircle size={15} />
            <span>Instant Response On WhatsApp</span>
          </div>

          <h2 className="contact-cta-title">Planning Your Next Meal?</h2>

          <p className="contact-cta-text">
            Reserve your table or ask us anything on WhatsApp. We accommodate family feasts, celebrations, and special table preferences.
          </p>

          <div className="contact-cta-buttons">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
              id="cta-whatsapp-btn"
            >
              <MessageCircle size={20} />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={`tel:${contact.phoneRaw}`}
              className="btn btn-secondary btn-lg"
              id="cta-call-btn"
            >
              <Phone size={20} />
              <span>Call Us Directly</span>
            </a>

            <button
              className="btn btn-primary btn-lg"
              onClick={onOpenReservation}
              id="cta-reserve-btn"
            >
              <Calendar size={20} />
              <span>Book Table Online</span>
            </button>
          </div>

          <div className="contact-cta-note">
            <Clock size={15} />
            <span>Typical WhatsApp response time: under 5 minutes • Call: {contact.phone}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
