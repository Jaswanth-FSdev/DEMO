import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle2, MessageCircle, Phone } from 'lucide-react';
import { businessData } from '../data/restaurantData';
import '../styles/modal.css';

export default function ReservationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '19:30',
    guests: '2 Guests',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppBooking = () => {
    const text = `*New Table Reservation Request*\n\n` +
      `👤 *Name:* ${formData.name || 'Guest'}\n` +
      `📞 *Phone:* ${formData.phone || 'Provided upon arrival'}\n` +
      `📅 *Date:* ${formData.date}\n` +
      `🕒 *Time:* ${formData.time}\n` +
      `👥 *Guests:* ${formData.guests}\n` +
      `📝 *Special Notes:* ${formData.notes || 'None'}\n\n` +
      `Please confirm table availability. Thank you!`;

    const url = `https://wa.me/${businessData.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    onClose();
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={resetAndClose} role="dialog" aria-modal="true">
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <h3>Reserve Your Table</h3>
            <p>{businessData.brand.name} • {businessData.brand.city}</p>
          </div>
          <button className="modal-close-btn" onClick={resetAndClose} aria-label="Close reservation modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {isSubmitted ? (
            <div className="reservation-success-box">
              <div className="success-icon-wrap">
                <CheckCircle2 size={36} />
              </div>
              <h3 style={{ fontSize: '1.4rem', color: '#0F172A', marginBottom: '0.5rem' }}>
                Reservation Request Received!
              </h3>
              <p style={{ color: '#64748B', marginBottom: '1.8rem' }}>
                Thank you <strong>{formData.name}</strong>. We have received your booking request for <strong>{formData.guests}</strong> on <strong>{formData.date} at {formData.time}</strong>. Our staff will confirm your table shortly via SMS/WhatsApp.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <button
                  className="btn btn-whatsapp"
                  onClick={handleWhatsAppBooking}
                >
                  <MessageCircle size={18} />
                  <span>Send Confirmation on WhatsApp</span>
                </button>

                <button
                  className="btn btn-outline"
                  onClick={resetAndClose}
                >
                  Done / Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="res-name">Your Full Name *</label>
                  <input
                    type="text"
                    id="res-name"
                    name="name"
                    required
                    placeholder="e.g. Ramesh Varma"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="res-phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="res-phone"
                    name="phone"
                    required
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="res-date">Date *</label>
                  <input
                    type="date"
                    id="res-date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="res-time">Preferred Time *</label>
                  <select
                    id="res-time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <optgroup label="Lunch Slots">
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="12:30 PM">12:30 PM</option>
                      <option value="01:00 PM">01:00 PM</option>
                      <option value="01:30 PM">01:30 PM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="02:30 PM">02:30 PM</option>
                      <option value="03:00 PM">03:00 PM</option>
                    </optgroup>
                    <optgroup label="Dinner Slots">
                      <option value="07:00 PM">07:00 PM</option>
                      <option value="07:30 PM">07:30 PM</option>
                      <option value="08:00 PM">08:00 PM</option>
                      <option value="08:30 PM">08:30 PM</option>
                      <option value="09:00 PM">09:00 PM</option>
                      <option value="09:30 PM">09:30 PM</option>
                      <option value="10:00 PM">10:00 PM</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="res-guests">Number of Guests *</label>
                <select
                  id="res-guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="1 Guest">1 Guest</option>
                  <option value="2 Guests">2 Guests (Couple)</option>
                  <option value="3-4 Guests">3 – 4 Guests (Small Family)</option>
                  <option value="5-6 Guests">5 – 6 Guests (Family Table)</option>
                  <option value="7-10 Guests">7 – 10 Guests (Large Group)</option>
                  <option value="10+ Guests">10+ Guests (Celebration/Party)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="res-notes">Special Requests / Seating Preference</label>
                <textarea
                  id="res-notes"
                  name="notes"
                  rows="2"
                  placeholder="e.g. Window/Balcony seating, High chair for toddler, Birthday celebration..."
                  value={formData.notes}
                  onChange={handleChange}
                  className="form-textarea"
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '1.5rem' }}>
                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                  <Calendar size={18} />
                  <span>Confirm Table Reservation</span>
                </button>

                <button
                  type="button"
                  className="btn btn-whatsapp"
                  style={{ width: '100%' }}
                  onClick={handleWhatsAppBooking}
                >
                  <MessageCircle size={18} />
                  <span>Book Directly via WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
