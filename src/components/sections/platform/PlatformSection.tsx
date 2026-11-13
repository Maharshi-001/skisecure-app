'use client';

import React from 'react';

interface PlatformCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const PLATFORM_CARDS: PlatformCardProps[] = [
  {
    imageSrc: '/images/platform/ai-native.png',
    imageAlt: 'AI-Native & Agentic Security Operations Dashboard',
    title: 'AI-Native & Agentic',
    description:
      'ML models and autonomous AI agents handle detection, triage, enrichment, and response orchestration — escalating to humans only when judgment is needed.',
  },
  {
    imageSrc: '/images/platform/cloud-native.png',
    imageAlt: 'Cloud-Native Containerized Infrastructure and Datacenters',
    title: 'Cloud-Native',
    description:
      'Elastic, containerized infrastructure scales with your needs. No hardware, no capacity planning. Deployed across availability zones for maximum resilience.',
  },
  {
    imageSrc: '/images/platform/open-source.png',
    imageAlt: 'Open-Source Modular Core Technologies in 3D Glass Cube',
    title: 'Open-Source',
    description:
      'Built on proven open-source technologies — no vendor lock-in, no opaque black boxes. Transparent, auditable, and evolving with the community.',
  },
  {
    imageSrc: '/images/platform/built-for-smbs.png',
    imageAlt: 'Modern Workspace Built for SMBs Security Monitoring',
    title: 'Built for SMBs',
    description:
      'Purpose-built for 50–2,000 endpoint environments. No bloated enterprise tooling — lean, fast, and priced for businesses that need protection without the overhead.',
  },
];

export default function PlatformSection({ id = 'platform' }: { id?: string }) {
  return (
    <section id={id}>
      <div className="container">
        {/* Header Content Block */}
        <div className="header">
          {/* Badge / Pill: "The Platform" */}
          <div className="badge">
            <span className="badge-text">The Platform</span>
          </div>

          {/* Headline: AI-Native & Agentic · Cloud-Native · Open-Source */}
          <h2 className="heading">
            <span>AI-Native &amp; Agentic · Cloud-Native · </span>
            <span className="heading-highlight">Open-Source</span>
          </h2>

          {/* Subheading Paragraph */}
          <p className="subheading">
            We combined AI-driven detection with a fully cloud-native, open-source foundation — giving you the power of
            a Fortune 500 SOC at a fraction of the cost and complexity.
          </p>
        </div>

        {/* Cards Row (4 cards) */}
        <div className="grid">
          {PLATFORM_CARDS.map((card, index) => (
            <div key={index} className="card">
              {/* Card Image */}
              <div className="card-image-wrapper">
                <img
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  className="card-image"
                />
              </div>

              {/* Title */}
              <h3 className="card-title">
                {card.title}
              </h3>

              {/* Description */}
              <p className="card-description">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


