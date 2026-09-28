import React from 'react';
import { Star, Utensils, Calendar, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { businessData } from '../data/restaurantData';
import '../styles/hero.css';

export default function Hero({ onOpenReservation }) {
  const { hero, brand, contact, hours } = businessData;

  return (
    <section className="hero-section" id="home">
      {/* Background Image with Dark Culinary Ocean Overlay */}
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${hero.bgImage})` }}
        role="img"
        aria-label="Coastal Spice Restaurant Background"
      />
      <div className="hero-overlay" />

      {/* Main Hero Content */}
      <div className="container">
        <div className="hero-content-wrapper">
          {/* Label Badge */}
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span>{hero.badge}</span>
          </div>

          {/* Headline */}
          <h1 className="hero-title">
            Taste the Coast. <br />
            <span className="hero-title-highlight">Experience the Difference.</span>
          </h1>

          {/* Subheading */}
          <p className="hero-subtitle">{hero.subheadline}</p>

          {/* CTAs */}
          <div className="hero-cta-group">
            <a href="#menu" className="btn btn-primary btn-lg" id="hero-explore-menu-btn">
              <Utensils size={18} />
              <span>Explore Menu</span>
            </a>
            <button
              className="btn btn-secondary btn-lg"
              onClick={onOpenReservation}
              id="hero-reserve-btn"
            >
              <Calendar size={18} />
              <span>Reserve a Table</span>
            </button>
          </div>

          {/* Trust Badge */}
          <div className="hero-trust-badge">
            <div className="hero-stars" aria-label="5 star rating">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
              ))}
            </div>
            <span className="hero-trust-text">{hero.trustBadge}</span>
          </div>
        </div>
      </div>

      {/* Hero Quick Highlights Bar */}
      <div className="hero-quick-bar">
        <div className="container">
          <div className="hero-quick-grid">
            <div className="hero-quick-item">
              <div className="hero-quick-icon">
                <MapPin size={18} />
              </div>
              <span>{contact.address.area}, {contact.address.city}</span>
            </div>
            <div className="hero-quick-item">
              <div className="hero-quick-icon">
                <Clock size={18} />
              </div>
              <span>{hours.days} • {hours.timings}</span>
            </div>
            <div className="hero-quick-item">
              <div className="hero-quick-icon">
                <ShieldCheck size={18} />
              </div>
              <span>100% Fresh Daily Catch & Authentic Spices</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
