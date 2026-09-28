import React from 'react';
import { Waves, Flame, HeartHandshake, Sparkles } from 'lucide-react';
import { businessData } from '../data/restaurantData';
import '../styles/whyChooseUs.css';

export default function WhyChooseUs() {
  const { whyChooseUs } = businessData;

  const iconMap = {
    Fish: <Waves size={28} />,
    Flame: <Flame size={28} />,
    HeartHandshake: <HeartHandshake size={28} />,
    Sparkles: <Sparkles size={28} />,
  };

  return (
    <section className="section section-dark why-us-section" id="why-us">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">THE COASTAL PROMISE</span>
          <h2 className="section-title">Why Guests Keep Coming Back</h2>
          <p className="section-desc">
            We believe dining out should be more than a meal—it should be a rich sensory journey rooted in quality and care.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="why-us-grid">
          {whyChooseUs.map((feature) => (
            <div key={feature.id} className="why-us-card">
              <div className="why-us-icon-wrapper">
                {iconMap[feature.icon] || <Sparkles size={28} />}
              </div>
              <h3 className="why-us-title">{feature.title}</h3>
              <p className="why-us-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
