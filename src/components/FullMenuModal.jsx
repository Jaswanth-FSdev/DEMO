import React, { useState } from 'react';
import { X, Search, Sparkles } from 'lucide-react';
import { businessData } from '../data/restaurantData';
import '../styles/modal.css';
import '../styles/menu.css';

export default function FullMenuModal({ isOpen, onClose, onOpenReservation }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const categories = ['All', ...businessData.menuCategories];

  const filteredItems = businessData.menuItems.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog modal-large" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <h3>Full Dining Menu</h3>
            <p>Authentic Coastal Delicacies & Beverages</p>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close menu modal">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          {/* Controls: Search & Category Chips */}
          <div className="modal-controls">
            <div style={{ position: 'relative', flex: 1, minWidth: '220px' }}>
              <input
                type="text"
                placeholder="Search dishes (e.g., Prawns, Biryani, Fry)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="modal-search-input"
                style={{ width: '100%', paddingLeft: '2.5rem' }}
              />
              <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
            </div>
          </div>

          <div className="menu-tabs-wrapper" style={{ marginBottom: '1.5rem', justifyContent: 'flex-start' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`menu-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
                style={{ padding: '0.45rem 1rem', fontSize: '0.875rem' }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Item List */}
          <div className="menu-items-grid" style={{ marginBottom: '1.5rem' }}>
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <div key={item.id} className="menu-item-card">
                  <div>
                    <div className="menu-item-top">
                      <div className="menu-item-title-wrap">
                        <span className={`diet-badge ${item.isVeg ? 'veg' : 'non-veg'}`} title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}>
                          <span className="diet-dot" />
                        </span>
                        <span className="menu-item-title">{item.name}</span>
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
              ))
            ) : (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem 1rem', color: '#64748B' }}>
                <p>No dishes found matching "{searchQuery}".</p>
              </div>
            )}
          </div>

          {/* Action */}
          <div style={{ textAlign: 'center', paddingTop: '1rem', borderTop: '1px solid var(--color-border-light)' }}>
            <button
              className="btn btn-primary"
              onClick={() => {
                onClose();
                onOpenReservation();
              }}
            >
              Reserve a Table to Taste Our Dishes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
