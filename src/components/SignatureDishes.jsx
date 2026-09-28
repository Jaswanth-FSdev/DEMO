import React from 'react';
import { Flame, ArrowUpRight } from 'lucide-react';
import { businessData } from '../data/restaurantData';
import '../styles/dishes.css';

export default function SignatureDishes({ onOpenReservation }) {
  const { signatureDishes } = businessData;

  return (
    <section className="section dishes-section" id="dishes">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">CHEF SPECIAL SELECTION</span>
          <h2 className="section-title">Our Signature Dishes</h2>
          <p className="section-desc">
            Handcrafted with freshly sourced coastal seafood, heirloom spices, and time-honoured culinary mastery.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="dishes-grid">
          {signatureDishes.map((dish) => (
            <article key={dish.id} className="dish-card">
              <div className="dish-image-wrapper">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="dish-img"
                  loading="lazy"
                />
                {dish.badge && <span className="dish-badge">{dish.badge}</span>}
                <span className="dish-spice-badge" title={`Spice Level: ${dish.spicyLevel}/5`}>
                  <Flame size={13} fill="#DC2626" />
                  <span>{'🌶️'.repeat(Math.min(dish.spicyLevel, 3))}</span>
                </span>
              </div>

              <div className="dish-body">
                <div className="dish-meta">
                  <span className="dish-category">{dish.category}</span>
                </div>

                <h3 className="dish-title">{dish.name}</h3>
                <p className="dish-desc">{dish.description}</p>

                <div className="dish-footer">
                  <span className="dish-price">{dish.price}</span>
                  <button
                    className="dish-action-btn"
                    onClick={onOpenReservation}
                    aria-label={`Reserve table to try ${dish.name}`}
                  >
                    <span>Reserve Table</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
