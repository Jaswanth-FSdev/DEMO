import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { businessData } from '../data/restaurantData';
import '../styles/footer.css';

// Crisp inline SVGs for social media icons
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
    <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
  </svg>
);

export default function Footer({ onOpenReservation }) {
  const { brand, contact, hours, socials, navLinks } = businessData;

  const renderSocialIcon = (name) => {
    switch (name) {
      case 'Instagram':
        return <InstagramIcon />;
      case 'Facebook':
        return <FacebookIcon />;
      case 'YouTube':
      case 'Youtube':
        return <YoutubeIcon />;
      default:
        return <InstagramIcon />;
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand info */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <div className="logo-symbol">CS</div>
              <div className="logo-text-group">
                <span className="logo-title">{brand.name}</span>
                <span className="logo-subtitle">{brand.category}</span>
              </div>
            </a>
            <p className="footer-desc">
              Experience the finest authentic coastal flavours, fresh ocean seafood, and warm hospitality in the heart of Visakhapatnam.
            </p>
            <div className="footer-social-links">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label={`Visit our ${social.name} page`}
                >
                  {renderSocialIcon(social.name)}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column">
            <h4>Quick Navigation</h4>
            <ul className="footer-links-list">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Explore */}
          <div className="footer-column">
            <h4>Explore</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#gallery" className="footer-link">Food Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="footer-link">Customer Reviews</a>
              </li>
              <li>
                <a href="#hours-location" className="footer-link">Directions & Map</a>
              </li>
              <li>
                <button
                  onClick={onOpenReservation}
                  className="footer-link"
                  style={{ textAlign: 'left', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                >
                  Book Table
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="footer-column">
            <h4>Reach Us</h4>
            <div className="footer-contact-item">
              <MapPin size={18} color="#F59E0B" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Location:</strong>
                <span>{contact.address.area}, {contact.address.city}, {contact.address.state}</span>
              </div>
            </div>

            <div className="footer-contact-item">
              <Phone size={18} color="#F59E0B" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Reservations:</strong>
                <a href={`tel:${contact.phoneRaw}`} style={{ color: '#E2E8F0' }}>
                  {contact.phone}
                </a>
              </div>
            </div>

            <div className="footer-contact-item">
              <Clock size={18} color="#F59E0B" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Timings:</strong>
                <span>{hours.days} • {hours.timings}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="footer-bottom">
          <div>
            © 2026 {brand.name}. Demo Website. Designed as a high-converting local business portfolio template.
          </div>
          <div className="footer-bottom-links">
            <a href="#home">Back to Top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
