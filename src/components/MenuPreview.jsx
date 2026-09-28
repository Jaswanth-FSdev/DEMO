import React, { useState } from 'react';
import { Sparkles, Utensils } from 'lucide-react';
import { businessData } from '../data/restaurantData';
import '../styles/menu.css';

export default function MenuPreview({ onOpenFullMenu }) {
  const [activeCategory, setActiveCategory] = useState('Starters');
  const { menuCategories, menuItems } = businessData;

  // Filter items for preview section
  const currentItems = menuItems.filter((item) => item.category === activeCategory);

  return (
    <section className="section menu-section" id="menu">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">CULINARY DELIGHTS</span>
          <h2 className="section-title">Explore Our Menu</h2>
          <p className="section-desc">
            A curated glimpse of our authentic coastal preparations, freshly ground spices, and coastal seafood specialties.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="menu-tabs-wrapper" role="tablist">
          {menuCategories.map((category) => (
            <button
              key={category}
              className={`menu-tab-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
              role="tab"
              aria-selected={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <div className="menu-items-grid">
          {currentItems.map((item) => (
            <div key={item.id} className="menu-item-card">
              <div>
                <div className="menu-item-top">
                  <div className="menu-item-title-wrap">
                    <span
                      className={`diet-badge ${item.isVeg ? 'veg' : 'non-veg'}`}
                      title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                    >
                      <span className="diet-dot" />
                    </span>
                    <h3 className="menu-item-title">{item.name}</h3>
                  </div>
                  <span className="menu-item-price">{item.price}</span>
                </div>
                <p className="menu-item-desc">{item.description}</p>
              </div>

              <div className="menu-item-meta">
                <span className="tag tag-outline">{item.category}</span>
                {item.isSpecial && (
                  <span className="tag tag-accent">
                    <Sparkles size={11} style={{ marginRight: '3px' }} /> Chef Special
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="menu-bottom-cta">
          <button
            className="btn btn-outline btn-lg"
            onClick={onOpenFullMenu}
            id="menu-view-full-btn"
          >
            <Utensils size={18} />
            <span>View Full Menu & Beverages</span>
          </button>
        </div>
      </div>
    </section>
  );
}
