import React from 'react';
import { Clock, Phone, Calendar, Info, CheckCircle } from 'lucide-react';
import { businessData } from '../data/restaurantData';
import '../styles/hoursLocation.css';

export default function OpeningHours({ onOpenReservation }) {
  const { hours, contact } = businessData;

  return (
    <div className="info-box-card">
      <div>
        <div className="hours-card-header">
          <div className="hours-title-wrap">
            <div className="hours-icon-box">
              <Clock size={24} />
            </div>
            <div>
              <h3>Opening Hours</h3>
              <span style={{ fontSize: '0.85rem', color: '#64748B' }}>Dine-in & Takeaway</span>
            </div>
          </div>

          <div className="status-badge-live">
            <span className="status-pulsing-dot" />
            <span>Open Today</span>
          </div>
        </div>

        <div className="hours-timeline">
          <div className="hours-row primary">
            <span className="hours-day">
              <CheckCircle size={16} color="#D97706" />
              {hours.days}
            </span>
            <span className="hours-time">{hours.timings}</span>
          </div>

          <div className="hours-row">
            <span className="hours-day">Lunch Service</span>
            <span className="hours-time" style={{ color: '#475569' }}>{hours.lunchHours}</span>
          </div>

          <div className="hours-row">
            <span className="hours-day">Dinner Service</span>
            <span className="hours-time" style={{ color: '#475569' }}>{hours.dinnerHours}</span>
          </div>
        </div>

        <div className="hours-note">
          <Info size={16} color="#D97706" />
          <span>{hours.note} • Prior table booking recommended for weekends</span>
        </div>
      </div>

      <div className="hours-cta-wrap">
        <a
          href={`tel:${contact.phoneRaw}`}
          className="btn btn-primary"
          style={{ flex: 1 }}
          id="hours-call-now-btn"
        >
          <Phone size={18} />
          <span>Call Now</span>
        </a>
        <button
          className="btn btn-outline"
          onClick={onOpenReservation}
          style={{ flex: 1 }}
        >
          <Calendar size={18} />
          <span>Book Table</span>
        </button>
      </div>
    </div>
  );
}
