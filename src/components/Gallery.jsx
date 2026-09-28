import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { businessData } from '../data/restaurantData';
import LightboxModal from './LightboxModal';
import '../styles/gallery.css';

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const { gallery } = businessData;
  const categories = ['All', 'Dishes', 'Ambience', 'Kitchen', 'Beverages'];

  const filteredImages = gallery.filter((item) =>
    selectedFilter === 'All' ? true : item.category === selectedFilter
  );

  const handleOpenLightbox = (index) => {
    setActiveLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveLightboxIndex(null);
  };

  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">VISUAL MOMENTS</span>
          <h2 className="section-title">A Glimpse into Coastal Spice</h2>
          <p className="section-desc">
            Explore our seaside dining ambience, fresh preparations, and authentic culinary artistry.
          </p>
        </div>

        {/* Category Filters */}
        <div className="gallery-filter-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`gallery-filter-btn ${selectedFilter === cat ? 'active' : ''}`}
              onClick={() => setSelectedFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Gallery Grid */}
        <div className="gallery-grid">
          {filteredImages.map((item, index) => {
            // Apply featured styling to specific indexes for masonry feel
            const isFeatured = index === 0 || index === 5;

            return (
              <div
                key={item.id}
                className={`gallery-item ${isFeatured ? 'featured' : ''}`}
                onClick={() => handleOpenLightbox(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleOpenLightbox(index)}
                aria-label={`View full image: ${item.title}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-img"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <span className="gallery-category-badge">{item.category}</span>
                  <h3 className="gallery-title">{item.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        images={filteredImages}
        activeIndex={activeLightboxIndex}
        onClose={handleCloseLightbox}
        onNavigate={(newIdx) => setActiveLightboxIndex(newIdx)}
      />
    </section>
  );
}
