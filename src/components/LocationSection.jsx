import React from 'react';
import { MapPin, Phone, Mail, Navigation, ExternalLink } from 'lucide-react';
import { businessData } from '../data/restaurantData';
import OpeningHours from './OpeningHours';
import '../styles/hoursLocation.css';

export default function LocationSection({ onOpenReservation }) {
  const { brand, contact } = businessData;

  return (
    <section className="section hours-location-section" id="hours-location">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">VISIT & TIMINGS</span>
          <h2 className="section-title">Hours & Location</h2>
          <p className="section-desc">
            Conveniently located near the beach promenade in Visakhapatnam with dedicated valet parking.
          </p>
        </div>

        {/* 2 Box Grid */}
        <div className="hours-location-grid">
          {/* Box 1: Opening Hours */}
          <OpeningHours onOpenReservation={onOpenReservation} />

          {/* Box 2: Location & Contact */}
          <div className="info-box-card">
            <div>
              <div className="location-card-header">
                <div className="location-icon-box">
                  <MapPin size={24} />
                </div>
                <div className="location-title-wrap">
                  <h3>{brand.name}</h3>
                  <span style={{ fontSize: '0.85rem', color: '#64748B' }}>
                    {brand.city}, {brand.state}
                  </span>
                </div>
              </div>

              {/* Map Preview Graphic */}
              <div className="map-preview-box">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=700&q=80"
                  alt="Visakhapatnam Beach Road Location Map"
                  className="map-bg-img"
                  loading="lazy"
                />
                <div className="map-pin-overlay">
                  <MapPin size={18} className="map-pin-icon" fill="#EF4444" />
                  <span>{brand.name} • Rushikonda Beach</span>
                </div>
              </div>

              {/* Contact Meta */}
              <div className="location-meta-list">
                <div className="location-meta-item">
                  <MapPin size={18} className="location-meta-icon" />
                  <div>
                    <strong>Address:</strong>
                    <span>
                      {contact.address.line1}, {contact.address.line2}, {contact.address.area}, {contact.address.city}, {contact.address.state} - {contact.address.pincode}
                    </span>
                  </div>
                </div>

                <div className="location-meta-item">
                  <Phone size={18} className="location-meta-icon" />
                  <div>
                    <strong>Phone / Reservation:</strong>
                    <a href={`tel:${contact.phoneRaw}`} style={{ color: 'var(--color-primary-dark)', fontWeight: 600 }}>
                      {contact.phone}
                    </a>
                  </div>
                </div>

                <div className="location-meta-item">
                  <Mail size={18} className="location-meta-icon" />
                  <div>
                    <strong>Email:</strong>
                    <span>{contact.email}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Location CTA Buttons */}
            <div className="location-cta-group">
              <a
                href={contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                id="maps-link-btn"
              >
                <ExternalLink size={16} />
                <span>Google Maps</span>
              </a>
              <a
                href={contact.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                id="directions-btn"
              >
                <Navigation size={16} />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
