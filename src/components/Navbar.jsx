import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, ChevronRight } from 'lucide-react';
import { businessData } from '../data/restaurantData';
import '../styles/navbar.css';

export default function Navbar({ onOpenReservation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active link detection
      const sections = ['home', 'about', 'dishes', 'why-us', 'menu', 'gallery', 'reviews', 'hours-location', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Dishes', href: '#dishes', id: 'dishes' },
    { name: 'Why Us', href: '#why-us', id: 'why-us' },
    { name: 'Menu', href: '#menu', id: 'menu' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
    { name: 'Location', href: '#hours-location', id: 'hours-location' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Brand Logo */}
          <a href="#home" className="nav-logo" aria-label={`${businessData.brand.name} Home`}>
            <div className="logo-symbol">CS</div>
            <div className="logo-text-group">
              <span className="logo-title">{businessData.brand.name}</span>
              <span className="logo-subtitle">{businessData.brand.category}</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="nav-menu" aria-label="Main Navigation">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="nav-actions">
            <button
              className="btn btn-primary btn-sm btn-desktop"
              onClick={onOpenReservation}
              id="nav-reserve-btn"
            >
              <Calendar size={16} />
              <span>Reserve a Table</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              className="nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`mobile-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-links">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              <span>{item.name}</span>
              <ChevronRight size={18} opacity={0.6} />
            </a>
          ))}
        </div>

        <div className="mobile-drawer-footer">
          <button
            className="btn btn-primary"
            style={{ width: '100%' }}
            onClick={() => {
              closeMobileMenu();
              onOpenReservation();
            }}
          >
            <Calendar size={18} />
            <span>Reserve a Table</span>
          </button>

          <a
            href={`tel:${businessData.contact.phoneRaw}`}
            className="btn btn-secondary"
            style={{ width: '100%' }}
          >
            <Phone size={18} />
            <span>Call {businessData.contact.phone}</span>
          </a>

          <div className="mobile-contact-info">
            <span>📍 {businessData.contact.address.area}, {businessData.contact.address.city}</span>
            <span>🕒 {businessData.hours.days}: {businessData.hours.timings}</span>
          </div>
        </div>
      </div>
    </>
  );
}
