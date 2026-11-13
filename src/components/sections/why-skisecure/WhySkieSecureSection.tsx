'use client';

import React from 'react';
import { Check } from 'lucide-react';

interface MetricItem {
  value: string;
  label: string;
}

const METRIC_CARDS: MetricItem[] = [
  {
    value: '< 10 days',
    label: 'Average deployment time across all modules',
  },
  {
    value: '93%',
    label: 'Alert noise reduction with AI investigation',
  },
  {
    value: '100%',
    label: 'Open-source infrastructure foundation',
  },
  {
    value: '24/7/365',
    label: 'Continuous security operations monitoring',
  },
];

const BULLETS: string[] = [
  'No six-figure SIEM licenses — SIEM, FIM, SOAR all included from $10/endpoint',
  'Operational in days, not months of professional services',
  'AI handles the toil — your analysts handle the decisions',
  'Open-source foundation — no vendor lock-in, full transparency',
  'Compliance-ready for SOC 2, ISO 27001, ISO 42001, HIPAA, PCI',
];

export default function WhySkieSecureSection({ id = 'why-skisecure' }: { id?: string }) {
  return (
    <section id={id}>
      {/* 1920 Outer Container */}
      <div className="why-section-container">
        {/* 2-Column Split Layout */}
        <div className="two-column-layout">
          {/* LEFT COLUMN: Badge, Headline, Paragraph, 5 Checkmark Bullets */}
          <div className="left-info-column">
            {/* Pill Badge */}
            <div className="category-pill-badge">
              <span className="category-badge-title">
                WHY SKIESECURE
              </span>
            </div>

            {/* Headline */}
            <h2 className="main-heading-text">
              Security Operations<br className="heading-line-break" /> Without the Overhead
            </h2>

            {/* Subtitle Paragraph */}
            <p className="intro-description-paragraph">
              Most security platforms are designed for enterprises with 50-person SOC teams and seven-figure budgets.
              SkieSecure was built from the ground up for small and mid-sized businesses — AI-native, lean, and priced honestly.
            </p>

            {/* 5 Bullet Points */}
            <div className="feature-bullets-container">
              {BULLETS.map((bullet, idx) => (
                <div key={idx} className="feature-bullet-row">
                  {/* Round checkmark icon with circle */}
                  <div className="checkmark-circle-icon">
                    <Check size={12} color="#FFFFFF" strokeWidth={2.8} />
                  </div>

                  {/* Bullet Text */}
                  <span className="feature-bullet-text">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* VERTICAL DIVIDER LINE */}
          <div className="vertical-divider-line" />

          {/* RIGHT COLUMN: 2x2 Grid of Stat Metric Cards */}
          <div className="right-stats-cards-grid">
            {METRIC_CARDS.map((card, idx) => (
              <div key={idx} className="stat-box-card">
                {/* Metric Big Value */}
                <div className="stat-big-number">
                  {card.value}
                </div>

                {/* Metric Label */}
                <div className="stat-description-label">
                  {card.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
