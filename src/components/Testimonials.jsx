import React from 'react';
import { Star, CheckCircle2, Quote } from 'lucide-react';
import { businessData } from '../data/restaurantData';
import '../styles/testimonials.css';

export default function Testimonials() {
  const { testimonials } = businessData;

  return (
    <section className="section testimonials-section" id="reviews">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">GUEST EXPERIENCES</span>
          <h2 className="section-title">What Our Guests Say</h2>
          <p className="section-desc">
            Read authentic dining stories and feedback from our valued coastal food lovers.
          </p>
        </div>

        {/* Testimonials 3 Columns Grid */}
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <div key={item.id} className="testimonial-card">
              <div className="testimonial-stars" aria-label={`${item.rating} stars`}>
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>

              <blockquote className="testimonial-text">
                "{item.review}"
              </blockquote>

              <div className="testimonial-author">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="author-avatar"
                  loading="lazy"
                />
                <div className="author-details">
                  <div className="author-name-row">
                    <span className="author-name">{item.name}</span>
                    {item.verified && (
                      <span className="verified-icon" title="Verified Guest Review">
                        <CheckCircle2 size={15} />
                      </span>
                    )}
                  </div>
                  <span className="author-role">{item.role} • {item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="demo-disclaimer">
          * Fictional client demonstration data created for portfolio showcase.
        </p>
      </div>
    </section>
  );
}
