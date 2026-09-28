import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SignatureDishes from './components/SignatureDishes';
import WhyChooseUs from './components/WhyChooseUs';
import MenuPreview from './components/MenuPreview';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import LocationSection from './components/LocationSection';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import FullMenuModal from './components/FullMenuModal';
import ReservationModal from './components/ReservationModal';
import FloatingActions from './components/FloatingActions';

import './styles/global.css';

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);

  const handleOpenReservation = () => {
    setIsReservationOpen(true);
  };

  const handleCloseReservation = () => {
    setIsReservationOpen(false);
  };

  const handleOpenFullMenu = () => {
    setIsFullMenuOpen(true);
  };

  const handleCloseFullMenu = () => {
    setIsFullMenuOpen(false);
  };

  return (
    <div className="app-layout">
      {/* 1. Navbar */}
      <Navbar onOpenReservation={handleOpenReservation} />

      <main id="main-content">
        {/* 2. Hero Section */}
        <Hero onOpenReservation={handleOpenReservation} />

        {/* 3. About Section */}
        <About onOpenReservation={handleOpenReservation} />

        {/* 4. Signature Dishes */}
        <SignatureDishes onOpenReservation={handleOpenReservation} />

        {/* 5. Why Choose Us */}
        <WhyChooseUs />

        {/* 6. Menu Preview */}
        <MenuPreview onOpenFullMenu={handleOpenFullMenu} />

        {/* 7. Gallery with Lightbox */}
        <Gallery />

        {/* 8. Testimonials */}
        <Testimonials />

        {/* 9 & 10. Opening Hours & Location */}
        <LocationSection onOpenReservation={handleOpenReservation} />

        {/* 11. Contact / WhatsApp CTA */}
        <ContactCTA onOpenReservation={handleOpenReservation} />
      </main>

      {/* 12. Footer */}
      <Footer onOpenReservation={handleOpenReservation} />

      {/* Interactive Modals */}
      <FullMenuModal
        isOpen={isFullMenuOpen}
        onClose={handleCloseFullMenu}
        onOpenReservation={handleOpenReservation}
      />

      <ReservationModal
        isOpen={isReservationOpen}
        onClose={handleCloseReservation}
      />

      {/* Floating Action Buttons */}
      <FloatingActions onOpenReservation={handleOpenReservation} />
    </div>
  );
}
