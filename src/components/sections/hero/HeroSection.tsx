'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { scrollToSection } from '@/utils';

interface HeroSectionProps {
  onOpenModal: (title?: string, interest?: string) => void;
}

export default function HeroSection({ onOpenModal }: HeroSectionProps) {
  // Parallax mouse position state (normalized -1 to 1)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const animFrameRef = useRef<number | null>(null);

  // Handle mouse movement across the hero section
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Smooth lerp loop for 60fps buttery parallax animation
  useEffect(() => {
    let currentX = 0;
    let currentY = 0;

    const animate = () => {
      currentX += (mousePos.x - currentX) * 0.08;
      currentY += (mousePos.y - currentY) * 0.08;
      setSmoothPos({ x: currentX, y: currentY });
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [mousePos]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="hero-container"
    >
      {/* Background Constellation Web & Soft Radial / Linear Gradient with Parallax */}
      <div
        className="mesh-bg hero-mesh-bg"
        style={{
          transform: `translate3d(${smoothPos.x * -6}px, ${smoothPos.y * -4}px, 0px)`,
        }}
      >
        <div className="mesh-overlay hero-mesh-overlay" />
      </div>

      {/* Hero Headline & CTA Box */}
      <div className="content-container">
        <h1 className="title">
          Enterprise Security,
          <span className="title-red">Built for SMBs</span>
        </h1>

        <p className="subtitle">
          Agentic AI-powered threat detection, real-time monitoring, and expert incident response - built on open-source, cloud-native infrastructure. Enterprise-grade protection without the enterprise price tag.
        </p>

        {/* CTA Buttons */}
        <div className="cta-group">
          <button
            type="button"
            onClick={() => onOpenModal('Join the Waitlist & Get Early Access', 'Growth ($8/mo)')}
            className="waitlist-btn"
          >
            <span>Join the Waitlist</span>
            <ArrowRight size={18} strokeWidth={2.2} />
          </button>

          <button
            type="button"
            onClick={() => scrollToSection('platform')}
            className="how-it-works-btn"
          >
            How It Works
          </button>
        </div>
      </div>

      {/* DASHED CONNECTING LINES SVG */}
      <svg
        className="dashed-lines-svg"
        viewBox="0 0 1920 1063"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <marker
            id="arrowhead-blue"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 1 2 L 8 5 L 1 8 Z" fill="#EE343F" />
          </marker>
        </defs>

        <path
          d="M 607 570 C 545 565, 481 530, 481 489"
          stroke="#EE343F"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          strokeLinecap="round"
          markerEnd="url(#arrowhead-blue)"
        />
        <path
          d="M 607 740 C 570 755, 519 720, 519 675"
          stroke="#EE343F"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          strokeLinecap="round"
          markerEnd="url(#arrowhead-blue)"
        />
        <path
          d="M 1313 570 C 1365 565, 1413 530, 1413 498"
          stroke="#EE343F"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          strokeLinecap="round"
          markerEnd="url(#arrowhead-blue)"
        />
        <path
          d="M 1313 725 C 1375 735, 1436 675, 1436 625"
          stroke="#EE343F"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          strokeLinecap="round"
          markerEnd="url(#arrowhead-blue)"
        />
      </svg>

      {/* FLOATING BADGES: Mobile 2x2 Grid */}
      <div className="mobile-badges-grid">
        <div className="mobile-badge-card">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EE343F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
            <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04" />
            <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04" />
          </svg>
          <span className="mobile-badge-text">AI-Native</span>
        </div>

        <div className="mobile-badge-card">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EE343F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          </svg>
          <span className="mobile-badge-text">Cloud-Native</span>
        </div>

        <div className="mobile-badge-card">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EE343F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
            <line x1="14" y1="4" x2="10" y2="20" />
          </svg>
          <span className="mobile-badge-text">Open-Source</span>
        </div>

        <div className="mobile-badge-card">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EE343F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
            <rect x="6" y="2" width="12" height="20" rx="2" />
            <line x1="10" y1="7" x2="14" y2="7" />
            <line x1="10" y1="12" x2="14" y2="12" />
            <line x1="10" y1="17" x2="14" y2="17" />
            <path d="M2 22h20" />
          </svg>
          <span className="mobile-badge-text">Built for SMBs</span>
        </div>
      </div>

      {/* Desktop Absolute Badges */}
      <div className="desktop-badge-ai hero-badge-pos-ai">
        <div className="hero-floating-badge">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EE343F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
            <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04" />
            <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04" />
          </svg>
          <span className="hero-floating-badge-label">AI-Native &amp; Agentic</span>
        </div>
      </div>

      <div className="desktop-badge-cloud hero-badge-pos-cloud">
        <div className="hero-floating-badge">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EE343F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          </svg>
          <span className="hero-floating-badge-label">Cloud-Native</span>
        </div>
      </div>

      <div className="desktop-badge-open-source hero-badge-pos-opensource">
        <div className="hero-floating-badge">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EE343F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
            <line x1="14" y1="4" x2="10" y2="20" />
          </svg>
          <span className="hero-floating-badge-label">Open-Source</span>
        </div>
      </div>

      <div className="desktop-badge-smb hero-badge-pos-smb">
        <div className="hero-floating-badge">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EE343F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
            <rect x="6" y="2" width="12" height="20" rx="2" />
            <line x1="10" y1="7" x2="14" y2="7" />
            <line x1="10" y1="12" x2="14" y2="12" />
            <line x1="10" y1="17" x2="14" y2="17" />
            <path d="M2 22h20" />
          </svg>
          <span className="hero-floating-badge-label">Built for SMBs</span>
        </div>
      </div>

      {/* SOC Dashboard 3D Card */}
      <div className="dashboard-card-wrap dashboard-card-ratio">
        <img
          src="/detections-card-clean.png"
          alt="SkieSecure Detections Dashboard"
          className="dashboard-card-img"
        />
        <div
          className="dashboard-sheen"
          style={{
            background: `radial-gradient(circle at ${50 + smoothPos.x * 35}% ${50 + smoothPos.y * 35}%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0) 65%)`,
          }}
        />
      </div>

      {/* Curved Horizon Band */}
      <div className="horizon-wrapper horizon-band-wrapper">
        <svg
          className="w-full h-full"
          viewBox="0 0 1920 377"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="rose-above-curve-glow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFF5F5" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FEE2E2" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <path
            d="M 0 0 L 1920 0 C 1340 162, 580 162, 0 0 Z"
            fill="url(#rose-above-curve-glow)"
          />
          <path
            d="M 0 0 C 580 162, 1340 162, 1920 0 L 1920 377 L 0 377 Z"
            fill="#FFFFFF"
          />
          <path
            d="M 0 0 C 580 162, 1340 162, 1920 0"
            stroke="#FECDD3"
            strokeWidth="10"
            strokeLinecap="round"
            className="horizon-curve-stroke"
          />
        </svg>
      </div>

      {/* 3 Stat Columns */}
      <div className="stats-container">
        <div className="stats-grid">
          <div className="stat-col">
            <h3 className="stat-number">&lt; 10 days</h3>
            <p className="stat-label">
              Average time<br className="hidden sm:inline" /> to full deployment
            </p>
          </div>

          <div className="stat-col">
            <h3 className="stat-number">93%</h3>
            <p className="stat-label">
              Alert noise reduction<br className="hidden sm:inline" /> with AI triage
            </p>
          </div>

          <div className="stat-col">
            <h3 className="stat-number">$0</h3>
            <p className="stat-label">
              Hidden fees -<br className="hidden sm:inline" /> pricing is pricing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
