import React from 'react';
import { Award, Leaf, Flame, Heart, ArrowRight } from 'lucide-react';
import { businessData } from '../data/restaurantData';
import '../styles/about.css';

export default function About({ onOpenReservation }) {
  const { about } = businessData;

  const highlightIcons = [
    <Leaf size={20} key="leaf" />,
    <Flame size={20} key="flame" />,
    <Heart size={20} key="heart" />
  ];

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Premium Visual Card with Badge */}
          <div className="about-image-wrapper">
            <div className="about-image-card">
              <img
                src={about.image}
                alt="Coastal Spice culinary preparation & ambience"
                className="about-main-img"
                loading="lazy"
              />
            </div>
            <div className="about-floating-badge">
              <div className="badge-icon-box">
                <Award size={26} />
              </div>
              <div className="badge-text-box">
                <strong>4.9 ★ Rating</strong>
                <span>Culinary Excellence</span>
              </div>
            </div>
          </div>

          {/* Right Column: Story & 3 Highlights */}
          <div className="about-content">
            <div className="section-badge">{about.sectionSubtitle}</div>
            <h2 className="about-heading">{about.heading}</h2>

            <p className="about-lead">{about.storyParagraph1}</p>
            <p className="about-text">{about.storyParagraph2}</p>

            {/* 3 Key Highlights */}
            <div className="about-highlights">
              {about.highlights.map((item, index) => (
                <div key={item.id} className="highlight-item">
                  <div className="highlight-icon-wrap">
                    {highlightIcons[index] || <Leaf size={20} />}
                  </div>
                  <div className="highlight-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="about-actions">
              <a href="#menu" className="btn btn-primary" id="about-explore-btn">
                <span>{about.ctaText}</span>
                <ArrowRight size={18} />
              </a>
              <button
                className="btn btn-outline"
                onClick={onOpenReservation}
              >
                <span>Reserve a Table</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
