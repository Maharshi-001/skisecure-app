'use client';

import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface PricingFeature {
  text: string;
}

const PRICING_FEATURES: PricingFeature[] = [
  { text: 'SIEM — full log ingestion, correlation & search' },
  { text: 'FIM — file integrity monitoring across all endpoints' },
  { text: 'SOAR — automated playbooks & orchestrated response' },
  { text: 'AI-powered threat detection (1,200+ rules)' },
  { text: 'Human-in-the-loop remediation & hand-holding' },
  { text: '24/7 monitoring by real security analysts' },
  { text: 'Case management with full audit trails' },
  { text: 'Compliance reporting (SOC 2, ISO 27001, ISO 42001, HIPAA, PCI)' },
  { text: 'Slack, email & webhook alerting' },
  { text: 'Executive security posture dashboards' },
  { text: 'Dedicated account manager' },
  { text: 'Onboarding & ongoing tuning included' },
];

interface PricingSectionProps {
  id?: string;
  onOpenModal?: (title?: string, interest?: string) => void;
}

export default function PricingSection({ id = 'pricing', onOpenModal }: PricingSectionProps) {
  return (
    <section id={id}>
      <div className="container">
        {/* SECTION HEADER */}
        <div className="header">
          {/* Pill Badge */}
          <div className="badge">
            <span className="badge-text">
              PRICING
            </span>
          </div>

          {/* Heading */}
          <h2 className="heading">
            <span className="heading-dark">One Plan. Everything Included.</span>
            <span className="heading-red">Starting at $10/endpoint.</span>
          </h2>
        </div>

        {/* MAIN SPLIT LAYOUT */}
        <div className="split-layout">
          {/* LEFT SIDE: 3 Tier Cards + Bottom Fine Print */}
          <div className="left-side">
            {/* 3 Tier Cards Row */}
            <div className="cards-grid">
              {/* CARD 1: STARTER */}
              <div className="card">
                <div>
                  <div className="card-category">
                    STARTER
                  </div>

                  <div className="price-wrapper">
                    <span className="price-number">
                      $10
                    </span>
                    <span className="price-period">
                      /mo
                    </span>
                  </div>

                  <p className="card-desc">
                    Perfect for trying things out <em>(50 - 250 endpoints)</em>
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenModal?.('Get Early Access — Starter Plan', 'Starter ($10/mo)')}
                  className="outline-button"
                >
                  Get Early Access
                </button>
              </div>

              {/* CARD 2: GROWTH */}
              <div className="card-growth">
                <div>
                  <div className="growth-badge">
                    <span className="growth-badge-text">
                      Professionals
                    </span>
                  </div>

                  <div className="card-category-growth">
                    GROWTH
                  </div>

                  <div className="price-wrapper">
                    <span className="price-number">
                      $8
                    </span>
                    <span className="price-period">
                      /mo
                    </span>
                  </div>

                  <p className="card-desc">
                    For small businesses scaling up <em>(251 - 1,000 endpoints)</em>
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenModal?.('Join the Waitlist — Growth Plan', 'Growth ($8/mo)')}
                  className="primary-button"
                >
                  <span>Join the Waitlist</span>
                  <ArrowRight size={16} strokeWidth={2.4} />
                </button>
              </div>

              {/* CARD 3: ENTERPRISE */}
              <div className="card">
                <div>
                  <div className="card-category-enterprise">
                    Enterprise
                  </div>

                  <div className="custom-price-wrapper">
                    <span className="custom-price-text">
                      Custom
                    </span>
                  </div>

                  <p className="card-desc">
                    For established businesses (1000+ endpoints)
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenModal?.('Enterprise Inquiries — Custom Plan', 'Enterprise (Custom)')}
                  className="outline-button"
                >
                  Get Early Access
                </button>
              </div>
            </div>

            {/* Bottom Fine Print */}
            <div className="fine-print">
              *Minimum 50 endpoints. Volume discounts as you grow.<br />
              No contracts. Month-to-month.<br />
              Cancel anytime.
            </div>
          </div>

          {/* RIGHT SIDE: Comprehensive Feature List & Value Highlights */}
          <div className="right-side">
            <p className="feature-intro">
              All-in-one, volume-based pricing. SIEM, FIM, SOAR, human analysts
              everything your security program needs in a single per-endpoint rate. No modules to unlock.
            </p>

            {/* 12 Checklist Items */}
            <div className="feature-list">
              {PRICING_FEATURES.map((item, idx) => (
                <div key={idx} className="feature-item">
                  <div className="check-circle">
                    <Check size={12} color="#EE343F" strokeWidth={2.8} />
                  </div>

                  <span className="feature-text">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


